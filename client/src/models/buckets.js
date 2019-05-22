const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js')


const Buckets = function (url) {
  this.url = url
}

Buckets.prototype.bindEvents = function () {
  PubSub.subscribe('BucketFormView:bucket-deleted', (evt) => {
    this.deleteBucket(evt.detail)
  })
  // console.log("Bucket Bind Event");
  PubSub.subscribe('BucketFormView:bucket-submitted', (evt) => {
    this.postBucket(evt.detail)
    console.log("Bucket submit sub");
  })
};

Buckets.prototype.getData = function () {
  // console.log('GetData');
  const request = new Request(this.url);
  request.get()
    .then((buckets) => {
      PubSub.publish('Buckets:data-loaded', buckets)
    })
    .catch(console.error);
};

Buckets.prototype.postBucket = function (bucket) {
  const request = new Request(this.url)
  request.post(bucket)
  request.get()
    .then((buckets) => {
      PubSub.publish('Buckets:data-loaded', buckets)
    })
    // .then((buckets) => {
    //   PubSub.publish('Buckets:data-loaded', buckets)
    // })
    .catch(console.error);
};

Buckets.prototype.deleteBucket = function (bucketId) {
  const request = new Request(this.url)
  request.delete(bucketId)
    request.get()
      .then((buckets) => {
      PubSub.publish('Buckets:data-loaded', buckets)
    })
      .catch(console.error)
};




module.exports = Buckets;

const PubSub = require('../helpers/pub_sub.js')
const BucketView = require('./bucket_view.js')

const BucketGridView = function (container) {
  this.container = container
}

BucketGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Buckets:data-loaded', (evt) => {
    this.render(evt.detail)
  });
};

BucketGridView.prototype.render = function (buckets) {
  this.container.innerHTML = '';
  const bucketView = new BucketView(this.container);
  console.log(buckets);
  buckets.forEach((bucket) => bucketView.render(bucket));
};

module.exports = BucketGridView;

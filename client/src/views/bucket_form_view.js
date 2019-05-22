const PubSub = require('../helpers/pub_sub.js')

const BucketFormView = function(form) {
  this.form = form;
};

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucket = this.createBucket(evt.target);
  PubSub.publish('BucketFormView:bucket-submitted', newBucket)
  evt.target.reset()
};

BucketFormView.prototype.createBucket = function (form) {
  const newBucket = {
    bucket: form.bucket.value
  };

  return newBucket
  // console.log('SHOW BUCKET', newBucket);
}



module.exports = BucketFormView;

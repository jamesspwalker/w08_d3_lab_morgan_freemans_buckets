const BucketFormView = require('./views/bucket_form_view.js');
const Buckets = require('./models/buckets.js');
const BucketGridView = require('./views/bucket_grid_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log("Event Listener added")

  const bucketForm = document.querySelector('form#bucket-form');
  const bucketFormView = new BucketFormView(bucketForm);
  console.log("Bucket Form view Bucket");
  bucketFormView.bindEvents();

  const bucketContainer = document.querySelector('div#buckets');
  const bucketGridView = new BucketGridView(bucketContainer)
  bucketGridView.bindEvents();


  const bucketUrl = 'http://localhost:3000/api/buckets';
  const buckets = new Buckets(bucketUrl);
  buckets.bindEvents();
  buckets.getData();

})

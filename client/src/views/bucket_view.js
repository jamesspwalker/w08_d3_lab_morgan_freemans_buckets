const PubSub = require('../helpers/pub_sub.js')

const BucketView = function(container) {
  this.container = container
}

BucketView.prototype.render = function (bucket) {
  const bucketContainer = document.createElement('div')
  bucketContainer.id = 'bucket'

  const bucketItem = this.createHeading(bucket.bucket)
  bucketContainer.appendChild(bucketItem)

  const deleteButton = this.createDeleteButton(bucket._id)
  bucketContainer.appendChild(deleteButton);

  this.container.appendChild(bucketContainer)
  console.log("createbucketElement");


};

BucketView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3')
  heading.textContent = textContent
  return heading
}

BucketView.prototype.createDeleteButton = function (bucketId) {
  const button = document.createElement('button')
  button.classList.add('delete-button')
  button.value = bucketId
  button.addEventListener('click', (evt)=> {
    PubSub.publish('BucketFormView:bucket-deleted', evt.target.value)
  })
  return button
};



module.exports = BucketView

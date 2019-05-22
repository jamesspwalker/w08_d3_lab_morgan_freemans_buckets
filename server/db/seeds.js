use bucket_hub;

db.dropDatabase();

db.buckets.insertMany([
  {
    bucket: "Watch the Bucket List"
  },
  {
    bucket: "Party Favor"
  },
  {
    bucket: "Livestock Bucket"
  }
])

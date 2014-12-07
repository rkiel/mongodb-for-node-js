var MongoClient = require('mongodb').MongoClient;

var address    = '192.168.33.30';
var port       = '27017';
var database   = "question7";

var url = 'mongodb://'+address+':'+port+'/'+database;
MongoClient.connect(url, function(err, db) {
    if(err) throw err;

    var count = 0;

    images = db.collection('images')
    albums = db.collection('albums')
    var cursor = images.find({},{_id:1});
    cursor.each(function(err, image) {
      if(err) throw err;

      if (image) {

        //console.log("looking of image " + image._id);
        albums.findOne({images: image._id}, function(err,album) {
          if(err) throw err;

          if (album) {
          } else {
            count = count + 1
            console.log(count)
            images.remove({_id: image._id},function() {})
          }
        })
      }

    });
});

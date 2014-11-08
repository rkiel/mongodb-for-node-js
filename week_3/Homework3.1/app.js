var MongoClient = require('mongodb').MongoClient;

var address    = '192.168.33.30';
var port       = '27017';
var database   = "school";
var collection = "students";
var whereJson = {'scores.type': 'homework'};

var url = 'mongodb://'+address+':'+port+'/'+database;
MongoClient.connect(url, function(err, db) {
    if(err) throw err;

    collection = db.collection(collection)
    var cursor = collection.find(whereJson);
    cursor.each(function(err, doc) {
      if(err) throw err;

      if (doc) {
        console.log(doc);
        var lowest = { type: 'homework', score: 100.0 };
        doc.scores.forEach(function(x) {
          if (x.type == 'homework' && x.score < lowest.score) {
            lowest = x;
          }
        });
        console.log(lowest);
        collection.update({'_id' : doc._id}, { $pull : {'scores':lowest} }, function(err,result) {
          if(err) throw err;
          console.log(lowest);
        });
      } else {
        return db.close();
      }

    });
});

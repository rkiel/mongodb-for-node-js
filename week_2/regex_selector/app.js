var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.33.30:27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'title' : { '$regex' : 'Energy' } };

    var projection = { 'title' : 1, '_id' : 0 };

    db.collection('reddit').find(query, projection).each(function(err, doc) {
        if(err) throw err;

        if(doc == null) {
            return db.close();
        }

        console.dir(doc.title);
    });
});

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.33.30:27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'grade' : 100 };

    db.collection('grades').findOne(query, function(err, doc) {
        if(err) throw err;

        console.dir(doc);

        db.close();
    });
});

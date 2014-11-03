var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.33.30:27017/course', function(err, db) {
    if(err) throw err;

    var grades = db.collection('grades');

    var cursor = grades.find({});

    if (false) {
      cursor.skip(1);
      cursor.limit(4);
      cursor.sort('grade', 1);
    }

    if (false) {
      cursor.skip(1);
      cursor.limit(4);
      cursor.sort([['grade', 1], ['student', -1]]);
    }

    if (true) {
      var options = { 'skip' : 1,
                      'limit' : 4,
                      'sort' : [['grade', 1], ['student', -1]] };
      var cursor = grades.find({}, {}, options);
    }

    cursor.each(function(err, doc) {
        if(err) throw err;
        if(doc == null) {
            return db.close();
        }
        console.dir(doc);
    });
});

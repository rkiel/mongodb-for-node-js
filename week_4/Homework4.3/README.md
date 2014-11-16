Drop the existing database

    mongo --host 192.168.33.30

    use blog
    db.posts.drop()

Import the data

    mongoimport -h 192.168.33.30 -d blog -c posts < posts.json

The blog home page

    db.posts.find().sort({'date':-1}).limit(10).explain()

    db.posts.ensureIndex({'date':-1})

The page that displays blog posts by tag

    db.posts.find({ tags : 'pasta' }).sort({date:-1}).limit(10).explain()

    db.posts.ensureIndex({'tags':1,'date':-1})

The page that displays a blog entry by permalink


    db.posts.find({'permalink': 'cxzdzjkztkqraoqlgcru'}).explain()

    db.posts.ensureIndex({permalink:1})

Validate
    npm install

    node hw4-3_validate.js -h 192.168.33.30

Import more data

    mongoimport -h 192.168.33.30 -d m101 -c profile < sysprofile.json

    db.profile.find({ns:{$regex:'^school2.students.*'}},{millis:1}).sort({'millis':-1})

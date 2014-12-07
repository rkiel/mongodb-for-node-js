

    db.createCollection("question5")
    db.question5.insert({a:1,b:2,c:3})

    db.question5.ensureIndex({a:1,b:1})
    db.question5.ensureIndex({a:1,c:1})
    db.question5.ensureIndex({c:1})
    db.question5.ensureIndex({a:1,b:1,c:-1})


    db.question5.find({'a':{'$lt':10000}, 'b':{'$gt': 5000}}, {'a':1, 'c':1}).sort({'c':-1}).explain()

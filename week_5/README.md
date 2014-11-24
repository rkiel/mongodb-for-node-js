### Exercise 1

    db.posts.aggregate([{$unwind: "$comments"},{$group:{_id:"$comments.author",count:{$sum:1}}},{$sort:{count:1}},{$limit:1}])

    db.zips.findOne()
    {
        "_id" : "92278",
        "city" : "TWENTYNINE PALMS",
        "state" : "CA",
        "pop" : 11412,
        "loc" : [
            -116.06041,
            34.237969
        ]
    }

### Exercise 2

    db.zips.aggregate([
    {$match:{state:{$in:["CT","NJ"]}}},
    {$group:{_id:{city:"$city",state:"$state"},pop:{$sum:"$pop"}}},
    {$match:{pop:{$gt:25000}}},
    {$group:{_id:null,avg:{$avg:"$pop"}}},
    {$limit:10}])

    db.zips.aggregate([
    {$match:{state:{$in:["CA","NY"]}}},
    {$group:{_id:{city:"$city",state:"$state"},pop:{$sum:"$pop"}}},
    {$match:{pop:{$gt:25000}}},
    {$group:{_id:null,avg:{$avg:"$pop"}}},
    {$limit:10}])

### Exercise 3

    {
        "_id" : ObjectId("50b59cd75bed76f46522c392"),
        "student_id" : 10,
        "class_id" : 5,
        "scores" : [
            {
                "type" : "exam",
                "score" : 69.17634380939022
            },
            {
                "type" : "quiz",
                "score" : 61.20182926719762
            },
            {
                "type" : "homework",
                "score" : 73.3293624199466
            },
            {
                "type" : "homework",
                "score" : 15.206314042622903
            },
            {
                "type" : "homework",
                "score" : 36.75297723087603
            },
            {
                "type" : "homework",
                "score" : 64.42913107330241
            }
        ]
    }

    db.grades.aggregate([
    {$unwind:"$scores"},
    {$match:{"scores.type": {$in: ["exam","homework"]}}},
    {$group: {_id: {student_id: "$student_id", class_id: "$class_id"}, gpa: {$avg: "$scores.score"}}},
    {$group: {_id: "$_id.class_id", gpa: {$avg: "$gpa"}}},
    {$sort: {gpa: -1}},
    {$limit:1}
    ])

### Exercise 4

Import the zips data

    mongoimport -h 192.168.33.30 -d test -c zips --drop zips.json

Verify

    mongo --host 192.168.33.30

    db.zips.count()

Sum population for city's with a digit

    db.zips.aggregate([
      {$project: {first_char: {$substr : ["$city",0,1]}, pop: 1, city: 1}},
      {$match: {first_char: {$in: ['0','1','2','3','4','5','6','7','8','9']}}},
      {$group: {_id: null,sum:{$sum:"$pop"}}}
    ])

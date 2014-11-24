
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

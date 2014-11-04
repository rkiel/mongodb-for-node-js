var whereJson = { "Wind Direction": { $gt: 180, $lt: 360 } }
var sortJson  = { 'Temperature' : 1 }
var projectionJson = { "State" : true, "Temperature" : true, "_id" : false }

db.data.find(whereJson,projectionJson).sort(sortJson).limit(1)

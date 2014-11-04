### login to node

    vagrant ssh node
    cd /vagrant/week_2

### import grades data into MongoDB

    mongoimport -h 192.168.33.30 -d course -c grades grades.json 

### verify data

    mongo --host 192.168.33.30
    use course
    db.grades.find()

### download some JSON from reddit

    curl http://www.reddit.com/r/personalfinance/.json > reddit.json

### Homework 2.1

    mongoimport --host 192.168.33.30 --type csv --headerline weather_data.csv -d weather -c data
    mongo --host 192.168.33.30
    use weather
    db.data.find().count()
    
Figure out the "State" that recorded the lowest "Temperature" when the wind was coming from the west ("Wind Direction" between 180 and 360).

    var whereJson = { "Wind Direction": { $gt: 180, $lt: 360 } }
    var sortJson  = { 'Temperature' : 1 }
    var projectionJson = { "State" : true, "Temperature" : true, "_id" : false }
    
    db.data.find(whereJson,projectionJson).sort(sortJson).limit(1)
    
    

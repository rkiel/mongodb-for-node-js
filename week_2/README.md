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
    

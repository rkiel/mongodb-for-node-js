### login to node

    vagrant ssh node
    cd /vagrant/week_2

### import grades data into MongoDB

    mongoimport -h 192.168.33.30 -d course -c grades grades.json 

### verify data

    mongo
    use course
    db.grades.find()

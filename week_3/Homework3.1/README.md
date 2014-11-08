load the student data

    mongoimport -h 192.168.33.30 -d school -c students < students.json

verify import

     mongo  --host 192.168.33.30
     use school
     db.students.count()

     db.students.find( { _id : 137 } ).pretty( )


Restore a data dump

     mongorestore --host 192.168.33.30 --collection messages --db enron enron/messages.bson

Verify Restore

     mongo --host 192.168.33.30
     use enron
     db.messages.count()

Construct a query to calculate the number of messages sent by Andrew Fastow, CFO, to Jeff Skilling, the president. Andrew Fastow's email addess was andrew.fastow@enron.com. Jeff Skilling's email was jeff.skilling@enron.com.

     db.messages.find({"headers.From":"andrew.fastow@enron.com","headers.To":"jeff.skilling@enron.com"}).count()


Restore a data dump

    mongorestore --host 192.168.33.30 --collection messages --db enron enron/messages.bson

Verify Restore

    mongo --host 192.168.33.30
    use enron
    db.messages.count()

Construct a query to calculate the number of messages sent by Andrew Fastow, CFO, to Jeff Skilling, the president. Andrew Fastow's email addess was andrew.fastow@enron.com. Jeff Skilling's email was jeff.skilling@enron.com.

    db.messages.find({"headers.From":"andrew.fastow@enron.com","headers.To":"jeff.skilling@enron.com"}).count()

Which pair of people have the greatest number of messages in the dataset?

    db.messages.aggregate([
      {$project: {_id:0,from:"$headers.From",to:"$headers.To"}},
      {$unwind:  "$to"},
      {$group:   {_id:{from:"$from",to:"$to"},count:{$sum:1}}},
      {$sort:    {count:-1}}
    ])

Please add the email address "mrpotatohead@mongodb.com" to the list of addresses in the "headers.To" array for the document with "headers.Message-ID" of "<8147308.1075851042335.JavaMail.evans@thyme>"

    db.messages.update(
      {"headers.Message-ID":"<8147308.1075851042335.JavaMail.evans@thyme>"},
      {$push:{"headers.To":"mrpotatohead@mongodb.com"}}
    )

    vagrant ssh node
    cd /vagrant/week_7/Question1_3/validate3
    npm install
    node final3-validate.js  -h 192.168.33.30


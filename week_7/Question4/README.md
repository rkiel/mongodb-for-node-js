

    cd /vagrant/week_7/Question4/blog
    npm install
    npm install --save cookie-parser
    npm install --save body-parser

    cookieParser = require('cookie-parser')
    bodyParser = require('body-parser')

    update/replaced the following lines of code,

    app.use(cookieParser());
    app.use(bodyParser());

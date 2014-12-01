
Connect to mongo box

    vagrant ssh mongo

Create data directories

    sudo mkdir /data
    sudo chmod 777 /data
    mkdir -p /data/rs1 /data/rs2 /data/rs3

Start 3 mongos

    mongod --replSet m101 --logpath "1.log" --dbpath /data/rs1 --port 27017 --smallfiles --oplogSize 64 --fork 
    mongod --replSet m101 --logpath "2.log" --dbpath /data/rs2 --port 27018 --smallfiles --oplogSize 64 --fork
    mongod --replSet m101 --logpath "3.log" --dbpath /data/rs3 --port 27019 --smallfiles --oplogSize 64 --fork

Connect to node box

    vagrant ssh node

Connect to mongo via the shell

    mongo --host 192.168.33.30 --port 27017

Initialize replica set

    config = { _id: "m101", members:[
          { _id : 0, host : "192.168.33.30:27017"},
          { _id : 1, host : "192.168.33.30:27018"},
          { _id : 2, host : "192.168.33.30:27019"} ]
         };

    rs.initiate(config);


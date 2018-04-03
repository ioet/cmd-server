var models = require('express-cassandra');

models.setDirectory( __dirname + '/../models').bind(
    {
        clientOptions: {
            contactPoints: [process.env.DB_PORT],
            protocolOptions: { port: 9042 },
            keyspace: process.env.DB_NAME,
            queryOptions: {consistency: models.consistencies.one}
        },
        ormOptions: {
            defaultReplicationStrategy : {
                class: 'SimpleStrategy',
                replication_factor: 1
            },
            migration: 'safe'
        }
    },
    function(err) {
        if(err) throw err;
    }
);
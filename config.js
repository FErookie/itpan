module.exports = {
    db:{
        name: 'postgres',
        username: 'postgres',
        pwd: 'postgres',
        host: '127.0.0.1',
        database: 'new',
    },
    redis:{
        host : '127.0.0.1',
        port : 6379,　
        prefix : 'sam:',
        ttl : 60 * 60 * 23,
        db: 0
    }
};
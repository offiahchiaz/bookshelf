module.exports = {
    MongoURI: 'mongodb://offiahchiaz:myogi2014@ds145128.mlab.com:45128/bookshelf'
};

// mongodb://<dbuser>:<dbpassword>@ds145128.mlab.com:45128/bookshelf
//const mongoDB = 'mongodb://localhost:27017/bookshelf';

// A diffreent way of connecting to mongDB

// const mongoDB =  'mongodb://offiahchiaz:myogi2014@ds145128.mlab.com:45128/bookshelf';
// mongoose.connect(mongoDB, {useNewUrlParser: true});
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

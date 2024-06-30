module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/green-ayodhya-fund',
    secretKey: process.env.SECRET_KEY || 'DefaultKey'
};
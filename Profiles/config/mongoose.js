const mongoose = require('mongoose');
const { execSync } = require('child_process');

let URL;

try {
    execSync('mongod --version');
    URL = 'mongodb://localhost:27017/ProfileMicroservice';
} catch (error) {
    URL = 'mongodb://mongodb:27017/ProfileMicroservice';
}

mongoose.connect(URL);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log("Database Connected Succesfully");
});
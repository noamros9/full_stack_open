require('dotenv/config')
const mongoose = require('mongoose')

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterAddress = process.env.MONGO_CLUSTER_ADDRESS;
const dbName = process.env.MONGO_DB_NAME;

const url = `mongodb+srv://${username}:${password}@${clusterAddress}/${dbName}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)
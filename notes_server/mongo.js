require('dotenv/config')
const mongoose = require('mongoose')

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterAddress = process.env.MONGO_CLUSTER_ADDRESS;
const dbName = process.env.MONGO_DB_NAME;

const url = `mongodb+srv://${username}:${password}@${clusterAddress}/${dbName}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})
const Note = mongoose.model('Note', noteSchema)


if (process.argv.length === 4) {

    const content = process.argv[2]
    const important = process.argv[3] === 'true'

    const note = new Note({
        content,
        important
    })

    note.save().then(result => {
        console.log(`added ${content} to notes`)
        mongoose.connection.close()
    })
} else {
    Note.find({})
        .then(result => {
            console.log('notes:')
            result.forEach(note => {
                console.log(`${note.content} ${note.important}`)
            })
            mongoose.connection.close()
        })
} 
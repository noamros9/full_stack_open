require('dotenv/config')
const mongoose = require('mongoose')

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterAddress = process.env.MONGO_CLUSTER_ADDRESS;
const dbName = process.env.MONGO_DB_NAME;

const url = `mongodb+srv://${username}:${password}@${clusterAddress}/${dbName}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Person = mongoose.model('Person', personSchema)


if (process.argv.length === 4) {

    const personName = process.argv[2]
    const personNumber = process.argv[3]

    const person = new Person({
        name: personName,
        number: personNumber,
    })

    person.save().then(result => {
        console.log(`added ${personName} number ${personNumber} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({})
        .then(result => {
            console.log('phonebook:')
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
}


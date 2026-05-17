const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => Number(p.id)))
        : 0
    return String(maxId + 1)
}

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    Person.countDocuments({}).then(count => {
        response.json({
            info: `Phonebook has info for ${count} people`,
            total: count
        })
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    Person.findById(id).then(person => {
        if (!person) {
            response.status(404).end()
        } else {
            response.json(person)
        }
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    Person.findByIdAndDelete(id).then(() => {
        response.status(204).end()
    }).catch(error => {
        console.log(error)
        response.status(400).send({ error: 'malformatted id' })
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    const newPerson = new Person(person)
    newPerson.save().then(savedPerson => {
        response.json(savedPerson)
    })
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
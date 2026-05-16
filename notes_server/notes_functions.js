const mongoose = require('mongoose')
const Note = require('./mongo')


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
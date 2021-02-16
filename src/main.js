const express = require('express')
const saveConference = require('./service/record.service')
const app = express()
const bodyParser = require('body-parser')
const Conference = require('./model/conference')
app.use(bodyParser.json())
const port = 8000


app.get('/download/:id', (req, res) => {
    Conference.findOne({where: {id: req.params.id}})
        .then(conference => res.download(`${conference.folder}/${conference.record}`))
});

app.post('/v1/conferences', (req, res) => {
    saveConference(req.body.folder)
    res.sendStatus(201)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
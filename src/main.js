const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
app.use(bodyParser.json())
const saveConference = require('./service/record.service')
const Conference = require('./model/conference')


app.get('/v1/conferences/download/:id', (req, res) => {
    Conference.findOne({where: {id: req.params.id}})
        .then(conference => res.download(`${conference.folder}/${conference.record}`))
        .catch(e => res.sendStatus(404))
});

app.get('/v1/conferences', (req, res) => {
  Conference.findAll()
    .then(conferences => res.json(conferences))
    .catch(e => res.sendStatus(404))
})

app.post('/v1/conferences', (req, res) => {
    saveConference(req.body.folder)
    res.sendStatus(201)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
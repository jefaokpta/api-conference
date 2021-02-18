const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000
const {saveConference, deleteConferenceFile} = require('./service/record.service')
const Conference = require('./model/conference')

const basePath = '/v1/conferences'

app.get(`${basePath}/download/:id`, (req, res) => {
    Conference.findOne({where: {id: req.params.id}})
        .then(conference => res.download(`${conference.folder}/${conference.record}`))
        .catch(e => res.sendStatus(404))
});

app.get(`${basePath}`, (req, res) => {
  Conference.findAll()
    .then(conferences => res.json(conferences))
    .catch(e => res.sendStatus(404))
})

app.post(`${basePath}`, (req, res) => {
    saveConference(req.body.folder)
    res.sendStatus(201)
})

app.delete(`${basePath}/:id`, (req, res) => {
  Conference.findOne({where: {id: req.params.id}})
    .then(conference => {
        Conference.destroy({where: {id: conference.id}})
            .then(() => {
                deleteConferenceFile(conference)
                res.sendStatus(200)
            })
    })
    .catch(e => res.sendStatus(404))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
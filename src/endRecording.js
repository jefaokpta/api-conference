const Conference = require('./model/conference');
const fs = require('fs');


const folder = process.argv[2]
const rawdata = fs.readFileSync(`${folder}/metadata.json`);
const roomData = JSON.parse(rawdata);
console.log(roomData);
const url = roomData.meeting_url
const room = url.substr(url.lastIndexOf('/')+1)
const conference = {
    url: url,
    record: '',
    folder: folder
}

fs.readdir(folder, (err, files) => {
    const record = files.filter(f => f.startsWith(room))[0]
    conference.record = record
    Conference.create(conference)
  });

  //console.log(record);
//Conference.create(conf)

// Conference.findAll().then(c => c.forEach(e => {
//     console.log(e.url);
// }))
const Conference = require('../model/conference');
const fs = require('fs');

function saveConference(folderComplete){
  const folder  = `/records/${folderComplete.substr(folderComplete.lastIndexOf('/')+1)}`
  const rawdata = fs.readFileSync(`${folder}/metadata.json`);
  const roomData = JSON.parse(rawdata);
  const url = roomData.meeting_url
  const room = url.substr(url.lastIndexOf('/')+1)
  const conference = {
      url: url,
      record: '',
      folder: folder,
      recordSize: 0,
      dateTime: new Date()
  }

  fs.readdir(folder, (err, files) => {
      const record = files.filter(f => f.startsWith(room))[0]
      conference.record = record
      conference.recordSize = fs.statSync(`${folder}/${record}`).size
      Conference.create(conference)
    });
}

module.exports = saveConference
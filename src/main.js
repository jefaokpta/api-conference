import express from 'express'
const app = express()
const port = 8000

const path = '/Users/jefaokpta/Downloads/teste/'
const file = `${path}movie.mp4`
app.get('/download', (req, res) => {
    res.download(file);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
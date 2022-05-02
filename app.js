const express = require('express')
const app = express()
const port = 3000

//STATIC
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/image', express.static(__dirname + 'public/image'))
app.use('/js', express.static(__dirname + 'public/js'))

// VIEWS
app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// Listen on port 3000
app.listen(port, () => console.info('Listening on port 3000'))

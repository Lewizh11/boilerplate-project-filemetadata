const express = require('express');
const cors = require('cors');
const multer = require('multer')({
  dest: 'dist/'
})
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (_, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer.single('upfile'), (req, res) => {
  const { size, mimetype, originalname } = req.file

  res.json({ name: originalname, type: mimetype, size})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Your app is listening on port ' + port)
})

const express = require('express')
const app = express();
const path = require('path')
const port = 5000;

app.use(express.static(path.join(__dirname, "myfiles")));

const r = express.Router();
r.get('/', (req, res, next) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`aplikasi berljalan di http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname+'/dist/newproject'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  '/dist/newproject/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
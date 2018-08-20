const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

app.get('/resume.pdf', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/resume.pdf`));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../build/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

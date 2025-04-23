// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const messages = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <h1>Guestbook v1</h1>
    <form method="POST" action="/submit">
      <input name="message" />
      <button type="submit">Submit</button>
    </form>
    <ul>${messages.map(msg => `<li>${msg}</li>`).join('')}</ul>
  `);
});

app.post('/submit', (req, res) => {
  messages.push(req.body.message);
  res.redirect('/');
});

app.listen(8080, () => console.log('Running on port 8080'));

const express = require('express');
const app = express();

const server = app.listen(5000, () => { console.log('Le serveur est lancé sur le port 5000') })

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });


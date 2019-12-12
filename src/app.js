const path = require('path');
const express = require('express');
const serv= require('./config/confServeur.js');

const app = express();
var routes=require('./routes/index');
var group= require('./routes/group');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', routes);
app.use('/group',group);

app.use((req, res, next) => {
  res.status(404).render("erreur");
})
.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})
    // console.error(err.stack);
    //res.status(500).send('Something broke!');
.listen(serv.local.port, () => {
    console.log(`App running at http://localhost:`+serv.local.port);
});
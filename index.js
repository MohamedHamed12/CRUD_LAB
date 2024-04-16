const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const db = require('./db');

const homeRoutes = require('./src/routes/homeRoutes');
const personRoutes = require('./src/routes/personRoutes');
// Import other route files

const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// Use routes
app.use('/home',  homeRoutes);
app.use('/person', personRoutes); 


// Use other routes

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'src/templates')));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(morgan('common'));
  
let topTenMovies = [
    {
        title: 'Spirited Away',
        genre: ['Animation', 'Fantasy', 'Family'],
        director: 'Hayao Miyazaki'
    },
    {
        title: 'The nightmare before Christmas',
        genre: ['Animation', 'Fantasy'],
        director: 'Henry Selick'
    },
    {
        title: 'The Secret World of Arrietty',
        genre: ['Animation', 'Fantasy', 'Family'],
        director: 'Hiromasa Yonebayashi'
    },
    {
        title: 'My Neighbor Totoro',
        genre: ['Animation', 'Fantasy', 'Family'],
        director: 'Hayao Miyazaki'
    },
    {
        title: 'Klaus',
        genre: ['Animation', 'Adventure', 'Comedy'],
        director: 'Sergio Pablos'
    },
    {
        title: 'Sleepy Hollow',
        genre: ['Fantasy', 'Horror'],
        director: 'Tim Burton'
    },
    {
        title: 'The House With a Clock in Its Walls',
        genre: ['Comedy', 'Fantasy', 'Family'],
        director: 'Eli Roth'
    },
    {
        title: 'Beauty and the Beast (1991)',
        genre: ['Animation', 'Fantasy', 'Family', 'Musical'],
        director: 'Gary Trousdale'
    },
    {
        title: 'The Witches',
        genre: ['Family', 'Horror'],
        director: 'Robert Zemeckis'
    },
    {
        title: 'Finding Nemo',
        genre: ['Animation', 'Adventure', 'Comedy'],
        director: 'Andrew Stanton'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to myFlix App!');
});

app.get('/documentation', (req, res) => {
	res.sendFile('public/documentation.html', { root: __dirname });
});

// Get the list of data about ALL movies
app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

// Get data about a movie by title
app.get('/movies/:title', (req, res) => {
    res.send('Successful GET request retuning movie by title');
});

// Get data about movies by genre
app.get('/movies/:genre', (req, res) => {
    res.send('Successful GET request retuning movie by genre');
});

//Get data of a director's information by name
app.get('/directors/:name', (req, res) => {
    res.send('Successful GET request of directors information.');
});

// Allow new users to register
app.post('/register', (req, res) => {
    res.send('Successful POST to the server a new user registeration.');
});

// Allow user to update their user info
app.put('/users/:id/:user_info', (req, res) => {
    res.send('Successful PUT to the server a user information.');
});

// Allow user to add a movie to their favorite movies list
app.post('/users/:id/favorites', (req, res) => {
    res.send('Successful POST to the server a favorite movie on the user list.');
});

// Allow user to remove a movie from their favorite  movies list
app.delete('/users/:id/favorites', (req, res) => {
    res.send('Successful DELETE to the server a favorite movie on the user list.');
});

// Allow existing user to deregister
app.delete('/users/:id/unregister', (req, res) => {
    res.send('Successful DELETE a user!');
});

// Error handling
app.use((err, req, res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
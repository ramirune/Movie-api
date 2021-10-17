const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.static('public'));
app.use(morgan('common'));
  
let topTenMovies = [
    {
        title: 'Spirited Away',
        studio: 'Buena Vista'
    },
    {
        title: 'The nightmare before Christmas',
        studio: 'Buena Vista'
    },
    {
        title: 'The Secret World of Arrietty',
        studio: 'Buena Vista'
    },
    {
        title: 'My Neighbor Totoro',
        studio: '50th Street Films'
    },
    {
        title: 'Klaus',
        studio: 'Netflix'
    },
    {
        title: 'Tim Burton’s Corpse Bride',
        studio: 'Warner Bros. Pictures'
    },
    {
        title: 'The House With a Clock in Its Walls',
        studio: 'Universal Pictures'
    },
    {
        title: 'Beauty and the Beast (1991)',
        studio: 'Disney'
    },
    {
        title: 'The Witches',
        studio: 'Warner Bros. Pictures'
    },
    {
        title: 'Finding Nemo',
        studio: 'Walt Disney Pictures'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to myFlix App!');
});

app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

app.use((err, req, res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const videoController = require('./controllers/videoController');
const userController = require('./controllers/userController');

const app = express();
const port = 3000;

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/video_platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Головна сторінка' });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/videos', videoController.getVideos);
app.post('/videos', videoController.createVideo);

app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});

const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 9000;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//home page
app.get( '^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
    console.log(`Recieved request ${req.url}, ${req.method}`);
});

app.get('/Code(.html)?', (req, res) => {
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.sendFile(path.join(__dirname,'views', 'Code.html'));
})

app.get('/Cooking(.html)?', (req, res) => {
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.sendFile(path.join(__dirname,'views', 'Cooking.html'));
})

app.get('/Drawing(.html)?', (req, res) => {
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.sendFile(path.join(__dirname,'views', 'Drawing.html'));
})

app.get('/Photography(.html)?', (req, res) => {
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.sendFile(path.join(__dirname,'views', 'Photography.html'));
})

app.get('/Resume(.html)?', (req, res) => {
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.sendFile(path.join(__dirname,'views', 'Resume.html'));
})

app.get('/Writing(.html)?', (req, res) => {
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.sendFile(path.join(__dirname,'views', 'Writing.html'));
})

// 404 page
app.get('/*', (req, res) => {
    // chain in status code send (because it would send a 200 instead of a 400,
    // since it did find a page)
    console.log(`Recieved request ${req.url}, ${req.method}`);
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));

});

app.listen(PORT, () => console.log(`Server running on "//http://localhost:${PORT}/"`));
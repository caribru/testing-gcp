import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

app.get('/api/headers', (req, res) => {
    res.json(req.headers);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


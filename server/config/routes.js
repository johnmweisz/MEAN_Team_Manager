var players = require('../controllers/players.js');

module.exports = app => {
    app.get('/player/', (req, res) => {players.index(req, res);});
    app.post('/player/', (req, res) => {players.create(req, res);});
    app.get('/player/:_id', (req, res) => {players.read(req, res);});
    app.put('/player/:_id', (req, res) => {players.update(req, res);});
    app.delete('/player/:_id', (req, res) => {players.destroy(req, res);});
}
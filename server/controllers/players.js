var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    index: (req, res) => {
        Player.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
        let new_Player = new Player(req.body);
        new_Player.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    read: (req, res) => {
        Player.find(req.params)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Player.findOneAndUpdate(
            {_id: req.params},
            {$set:
                req.body
            },
            {new:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    destroy: (req, res) => {
        Player.deleteOne(req.params)
        .then(data => res.json(data))
        .catch( err => res.json(err));
    },
}
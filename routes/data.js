var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');


router.get('/', function(req, res) {
    var results = [];

    pg.connect(connect, function(err, client, done) {
        var query = client.query('SELECT * FROM favorites');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // close connection
        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
    console.log(results);
});

router.post('/', function(req, res) {

    console.log(req.body);
    pg.connect(connect, function(err, client, done){
        client.query('INSERT INTO favorites (name, image_url, description) VALUES($1, $2, $3)',
            [req.body.name, req.body.photo, req.body.description],
            function (err, result) {
                if (err){
                    console.log('error inserting data: ' , err );
                    res.send (false);
                } else {
                    res.send(result);
                }
            });
    });

});

module.exports = router;
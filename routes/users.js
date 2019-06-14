let neDb = require('nedb');

let db = new neDb({

    filename: 'users.db',
    autoload: true
});

module.exports = app => {
    
    app.get('/users', (req, res) => {

        db.find({}).sort({name:1}).exec((err, users) => {

            if(err){

                app.utils.error.send(erre, req, res);
            }else{

                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json({
                    
                    users: users
                });

            }
        });
    
    });

    app.post('/users', (req, res) => {

        db.insert(req.body, (err, user) => {

            if(err){

                app.utils.error.send(erre, req, res);

            }else{

                res.status(200).json(user);
            }
        });
    });

};
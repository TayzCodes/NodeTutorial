module.exports = function(app){
        app.get('/api', function(req, res){
            res.json({
                firstname: 'John',
                lastname:'Doe'
            });
        });
}
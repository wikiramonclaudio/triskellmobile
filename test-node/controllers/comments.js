var  config = require('./../databaseConfig.js');


function getComments(req, res) {
    var connection = config.connection
    connection.query('SELECT * FROM tk_comments WHERE dataobject_id=1064 AND (parent_id is null)', (error, results) => {
        if (results) {
            return res.end(JSON.stringify(results));
        }
        else {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error al obtener los datos de la DDBB' })
        }
    });

    // res.status(200).send({ message: 'HOLA TRISKELL DESDE NODOLO, Triskolo' });
}


module.exports = {
    getComments
}
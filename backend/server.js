const express = require( "express" );
const mysql = require( "mysql" );
const app = express();
app.use( express.json() );
const db = mysql.createConnection( {
    user: "root",
    host: "localhost",
    password: "password",
    database: "usersbase",
} );
app.post( '/create', ( req, res ) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname;
    const DateofBirth = req.body.date;
    const gender = req.body.gender;
    const Mail = req.body.mail;
    const phonenumber = req.body.number;
    const Password = req.body.password;
    db.query( 'INSERT INTO userstable VALUES(?,?,?,?,?,?,?)', [Firstname, Lastname, Gender, DateofBirth, email, PhoneNumber, Password],
        ( err, result ) => {
            if ( err ) {
                console.log( erreur )
            }
            else {
                res.send( "values inserted" );
            };
        } );
} );


app.listen( 3001, () => {
    console.log( "base en cours" );
} );
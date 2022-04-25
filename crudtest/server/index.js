
//imports required to connect to database and get information from react app
const express = require('express')
const app = express()
const port = 3001

const mysql = require('mysql')

const cors = require('cors')

app.use(cors());
app.use(express.json());

//imports required to connect to database and get information from react app


//database object connected via mysql
const db = mysql.createConnection({
    //database user, location, and passwords
    user: "root",
    host: "localhost",
    password: "umeriscute123",
    database: "marketplacedb",
});



app.post('/register', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO usertable (username, password) VALUES (?,?)', [username, password], 
    (err, result) =>{
        if(err){
            console.log(err)
        } else {
            res.send("Values Inserted!")
        }

    });
});

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM usertable WHERE username = ? AND password = ?', [username, password], 
    (err, result) =>{
        if(err){
            res.send({err: err})
        } 

        if(result.length > 0) {
            res.send(result)
        } else{
            res.send({message: "Wrong username/password"})
        }

    });
});

//when https://website/com/create is run, js file posts gathered information from react app to mySQL table
app.post('/create', (req,res) => {
    const name = req.body.name;
    const phone = req.body.phone;

    db.query('INSERT INTO customerinfo (name, phone) VALUES (?,?)', [name, phone], 
    (err, result) =>{
        if(err){
            console.log(err)
        } else {
            res.send("Values Inserted!")
        }

    });
});

//when https://website/com/get is run, js file runs query and gathers required information and sends to react app
app.get('/get', (req, res) => {
    db.query("SELECT * FROM customerinfo", (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
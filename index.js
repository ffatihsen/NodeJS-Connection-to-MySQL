
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
var connection = require("./database");



app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get",(req,res) =>{
    const sqlSelect = "SELECT * FROM student_rev";
    connection.query(sqlSelect,(err,result) =>{
        res.send(result);
    });
})

app.post("/api/insert",(req,res) =>{
    const name = req.body.name
    const lastname = req.body.lastname
    const phone = req.body.phone

    let sql2 = "INSERT INTO student_rev (name, lastname, phone) VALUES (?,?,?);";
    connection.query(sql2,[name,lastname,phone],(err, result) =>{
        console.log(result);
    })
})

app.delete("/api/delete/:name",(req,res) =>{
    const name = req.params.name
    const sqlDelete = "DELETE FROM student_rev WHERE name = ?" 
    connection.query(sqlDelete,name, (err,result) =>{
        if(err) console.log(err)
    })
})


app.listen(3001, () =>{
    console.log("3001 portu çalışıyor..");
    connection.connect(function(err){
        if(err) throw err;
        console.log("Database Connected");
    })
});
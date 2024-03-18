const express = require("express")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser);


app.post('/bajaj', (req, res) => {
    const arr = req.body;

    

    return res.json({
        is_success : "true",
        user_id : "john_doe_17091999",
        email : "john@xyz.com",
        roll_no : "ABC123",
        odd_numbvers : [],
        even_numbers: [],
        alphabets : []
    })
} )


app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
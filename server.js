// Initially importing required modules. 
// express: A web framework for Node.js.
// path: A module for working with file and directory paths.
// express-fileupload: A middleware for handling file uploads.
// initial_path variable is set to the path of the "public" directory using path.join().

const express = require('express');
const path= require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

// Create an Express app:
// app is an instance of the Express application.
// Configure middleware:
// express.static() middleware is used to serve static files from the "public" directory.
// express-fileupload() middleware is used to handle file uploads.
// Define routes:

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());
// The root route ('/') responds with the "home.html" file located in the "public" directory.
// The '/editor' route responds with the "editor.html" file located in the "public
app.get('/', (req, res) =>{
    res.sendFile(path.join(initial_path, "home.html"));
})

//upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    //image name
    let imagename = date.getDate() + date.getTime() + file.name;
    //image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) =>{
        if(err){
            throw err;
        } else{
            res.json(`uploads/${imagename}`)
        }
    })
})

app.get('/editor', (req, res) =>{
    res.sendFile(path.join(initial_path, "editor.html"))
})

app.listen("3000", () => {
    console.log('Server is active')
})


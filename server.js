const express = require('express');

const app = express();


const PORT = 3000;


app.litsten(PORT, ()=>{

    console.log(`Listening on Port ${PORT}`);
})


//So far created an instance of express and using port 3000, comeback when further developed front end
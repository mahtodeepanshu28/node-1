const express = require('express');

const app = express();

app.get('/', (req, res) => {   
    res.write("<h1>Express.js <h1>")
   })

app.get('/api/main', (req, res) => {   
     res.send(` <p>Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily.<p>`)
    })

app.listen(7000);




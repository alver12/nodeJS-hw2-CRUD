const fs = require('fs');

const express = require('express');
const path = require('path');
const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')))
 
const { userRouter } = require('./routes');
const { carRouter } = require('./routes');

app.use('/api/user', userRouter);
app.use('/api/car', carRouter);

app.use('*', (err, req, res, next) => {
    const statusCode = err.code ? err.code : 400;
    res
        .status(statusCode)
        .json({
        message: err.message,
        ok: false
    });
});

app.listen(5000, ()=>{
    console.log('App listen 5000')
});



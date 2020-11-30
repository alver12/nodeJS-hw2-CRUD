const fs = require('fs');

const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')))

app.set('view engine', '.hbs');
app.engine('.hbs', exprsHbs({
    defaultLayout: false
}));

app.set('views', path.join(process.cwd(), 'views')); 

let rawdata = fs.readFileSync('./data/users.json');
let users = JSON.parse(rawdata);
console.log(users);

app.get('/user', (req, res) => {
    res.render ('users', {users});
})

app.get('/registration', (req, res) => {
    res.render ('registration');
    
})

app.get('/login', (req, res) => {
    res.render ('log');
})

app.get('/error', (req, res) => {
    const code = req.query.code;
    console.log (code);
    res.render('error', {
        userExist: (code === 'userExist'), 
        userNotExist: (code === 'userNotExist'), 
    });
});

app.post('/registration', (req, res) => {
    const {email, nick, password} = req.body;
    let searchUser = users.find (user => user.email === email);

    if (searchUser !== undefined){
        return res.redirect('/error?code=userExist');
    }   
    
    users.push({email, nick, password});
    res.redirect('/user')
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    let searchUser = users.find (user => user.email === email && user.password === password );
    console.log (email, password);
    console.log (searchUser);
    if (searchUser === undefined){
        return res.redirect('/error?code=userNotExist');
    }   
    res.redirect('/user')
})

app.listen(5000, ()=>{
    console.log('App listen 5000')
});

process.on('SIGINT', function() {
    let usersData = JSON.stringify(users);
    fs.writeFileSync('./data/users.json', usersData);
    process.exit();
});

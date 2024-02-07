const express = require("express");
const {connectionWithDB} = require("./connection");
const {userRouter} = require("./routes/user.routes.js");

// const fs = require('fs');

const app = express();
app.use(express.json());
app.use('/users', userRouter);

// app.use((req, res, next) => {
//     console.log('from middleware');
//     const startTime = new Date().getTime();
//     next();
//     const endTime = new Date().getTime();
//     console.log('loading time = ', endTime - startTime);
// })
// 

// app.use((req, res, next) => {
//     if(req.url === '/'){
//         fs.appendFileSync('./trafficTrackOfHome.txt', Date.now(), 'utf-8');
//     } 
//     next();
// })

// app.post('/users', async (req, res) => {
//     try{
//         const user = new UserModel(req.body);
//         await user.save();
//         res.status(200).send({"msg": "The new user has been added"});
//     } catch(error){
//         res.status(400).send(error);
//     }
// });

app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.send("<h>This is the Home Page</h>");
});

app.listen(8080, async () => {
    try{
        await connectionWithDB;
        console.log("server running on Port 8080");
    } catch(error){
        console.log(error);
    }   
})
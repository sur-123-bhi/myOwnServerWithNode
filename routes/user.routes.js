const {UserModel} = require('../model/user.model.js');
const express = require('express');
const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    try {
        const users = req.body; // Assuming req.body is an array of user objects
        const createdUsers = await UserModel.insertMany(users);
        res.status(200).send({ "msg": "The new users have been added", "users": createdUsers });
    } catch (error) {
        res.status(400).send(error);
    }
});

userRouter.get('/', async (req, res) => {
    try{
        const data = await UserModel.find(req.query);
        res.status(200).send({"msg": "data is showing here", data});
    } catch(error){
        res.status(400).send(error);
    }
});

userRouter.get('/:id', async (req, res) => {
    UserModel.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch((error) => {
        res.status(500).send(error);
    })
});

userRouter.patch('/:id', async (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send({"msg": `user has been updated`, user });
    }).catch((error) => {
        res.status(500).send(error);
    })
})

userRouter.delete('/:id', async (req, res) => {
    UserModel.findByIdAndDelete(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send({"msg": `user has been deleted`, user });
    }).catch((error) => {
        res.status(500).send(error);
    })
});

module.exports ={
    userRouter
}

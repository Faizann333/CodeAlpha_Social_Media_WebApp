const {authMiddleware} = require('../Middlewares/authMiddleware');
const {getFetchUsersController , postFollowUserController} = require('../Controllers/userController');

const express = require('express');
const userRouter = express.Router();

// userRouter.post('/add-friend', authMiddleware, addFriendController);
userRouter.get('/fetch-users',authMiddleware, getFetchUsersController);
userRouter.post('/follow/:userId', authMiddleware,postFollowUserController);

module.exports = { userRouter };
const {authRouter} = require("./authRoute");
const { postRouter } = require("./postRoute");
const { userRouter } = require("./userRoute");
// const {authMiddleware} = require('../Middlewares/authMiddleware');

const routes = (app) => {
    app.use("/api/auth", authRouter);
    app.use("/api/user",postRouter);
    app.use("/api/user", userRouter);
}

module.exports = {routes};

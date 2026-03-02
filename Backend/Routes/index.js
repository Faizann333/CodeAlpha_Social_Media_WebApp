const {authRouter} = require("./authRoute");
const { postRouter } = require("./postRoute");
// const {authMiddleware} = require('../Middlewares/authMiddleware');

const routes = (app) => {
    app.use("/api/auth", authRouter);
    app.use("/api/user",postRouter);
}

module.exports = {routes};

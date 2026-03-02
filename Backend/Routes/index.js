const {authRouter} = require("./authRoute");

const routes = (app) => {
    app.use("/api/auth", authRouter);
}

module.exports = {routes};

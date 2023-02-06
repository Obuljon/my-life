import express from "express";
import layout from "express-ejs-layouts";
import session from "express-session";
import { connect } from "mongoose";
import flash from "express-flash";
import moment from "moment";

connect("mongodb://localhost/my-life", { useNewUrlParser:true, useUnifiedTopology:true });

let app = express();
app.set('views', './src/views')
app.set("view engine", "ejs");
app.set("port", 8080);

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(layout);

app.use(session({
    secret: "213sf345fgg234fgwsdgt324",
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    saveUninitialized:false,
    resave:false
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.user = req.session.user || "";
    res.locals.message = req.flash();
    res.locals.moment = moment;
    next();
});
import homeRouter from "./src/router/page.router.js"
app.use(homeRouter)

app.listen(app.get('port'), () => {
    console.info(`Server is running on PORT: ${app.get('port')}`);
});











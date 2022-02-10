const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 3000;
//static path
const stat_path = path.join(__dirname, "../public")
const temp_path = path.join(__dirname, "../template/views")
const partial_path = path.join(__dirname, "../template/partials")

app.set('view engine', 'hbs');
app.set('views', temp_path);
hbs.registerPartials(partial_path);
app.use(express.static(stat_path));
//routing...
app.get("", (req, res) => {
    res.render('index')
})
app.get("/about", (req, res) => {
    res.render('about')
})
app.get("/weather", (req, res) => {
    res.render('weather')
})
app.get("*", (req, res) => {
    res.render('404error', {
        msg: "OPPS PAGE NOT FOUND!"
    })
})
app.listen(port, () => {
    console.log(`taking you to the port${port}`)
})
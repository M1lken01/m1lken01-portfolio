const fs = require('fs');

module.exports = {
    getHome: (req, res) => {
        res.render('index.ejs', {});
    },
};
const indexCtrl = {};

const pool = require('../database');

indexCtrl.renderIndex = async (req, res) => {
    const users = await pool.query('SELECT * FROM Users', 0);
    console.log(users)
    res.render('index',{ users });
};

module.exports = indexCtrl;

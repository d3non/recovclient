var exports = module.exports = {}

exports.signup = function (req, res) {

    res.render('signup')
}

exports.signin = function (req, res) {

    res.render('signin');

}

exports.dashboard = function (req, res) {

    res.render('dashboard');

}

exports.credits = function (req, res) {

    res.render('credits');

}

exports.agents = function (req, res) {

    res.render('agents');

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

}


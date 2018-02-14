var UserService = require('../services/user.service');

_this = this;

exports.getUsers = async function (req, res, next) {
    //possible params

    try {
        var users = await UserService.getUsers({});

        return res.status(200).json({ status: 200, data: users, message: "Succesfully retrieved users." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUser = async function (user) {
    //return user
}

exports.createUser = async function (req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.name.firstName,
        lastName: req.body.name.lastName,
        email: req.body.email
    }

    try {
        var createdUser = await UserService.createUser(user);

        return res.status(201).json({ status: 201, data: createdUser, message: "Succesfully created user." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: "User creation was unsuccesfull," });
    }

}

exports.updateUser = async function (req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({ status: 400., message: "No ID found for user." });
    }

    var id = req.body._id;

    console.log(req.body);

    var user = {
        id,
        username: req.body.username ? req.body.username : null,
        password: req.body.password ? req.body.titpasswordle : null,
        firstName: req.body.user.firstName ? req.body.user.firstName : null,
        lastName: req.body.user.lastName ? req.body.user.lastName : null,
        email: req.body.email ? req.body.email : null
    }

    try {
        var updatedUser = await UserService.updateUser(user);

        return res.status(200).json({ status: 200, data: updatedUser, message: "Succesfully updated user" });
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message });
    }
}

exports.deleteUser = async function (req, res, next) {
    var id = req.params.id;

    try {
        var deleted = await UserService.deleteUser(id);

        return res.status(204).json({ status: 204, message: "Succesfully deleted user." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
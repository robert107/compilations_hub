var UserService = require('../services/user.service');

_this = this;

exports.getUsers = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    console.log(page, limit);

    try {
        var users = await UserService.getUsers({}, page, limit);

        return res.status(200).json({ status: 200, data: users, message: "Succesfully retrieved users." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUser = async function (req, res, next) {
    var id = req.params.id;

    try {
        var selectedUser = await UserService.getUser(id);

        return res.status(200).json({ status: 200, data: selectedUser, message: "Succesfully retrieved user." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password,
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        email: req.body.email
    }

    try {
        var createdUser = await UserService.createUser(user);

        return res.status(201).json({ status: 201, data: createdUser, message: "Successfully created user." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: "User creation was unsuccessfull." });
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
        password: req.body.password ? req.body.password : null,
        name: {
            firstName: req.body.firstName ? req.body.firstName : null,
            lastName: req.body.firstName ? req.body.firstName : null
        },
        email: req.body.email ? req.body.email : null
    }

    try {
        var updatedUser = await UserService.updateUser(user);

        return res.status(200).json({ status: 200, data: updatedUser, message: "Succesfully updated user." });
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message });
    }
}

exports.deleteUser = async function (req, res, next) {
    var id = req.params.id;

    try {
        var deletedUser = await UserService.deleteUser(id);

        return res.status(204).json({ status: 204, message: "Succesfully deleted user." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
var User = require('../models/user.model');

_this = this;

exports.getUsers = async function (query, page, limit) {
    try {
        // var users = await user.dosomething();
        var users = await User.paginate();

        return users;
    } catch (error) {
        throw Error("Error while Paginating users.");
    }
}

exports.getUser = async function (id) {
    //implement
}

exports.createUser = async function (user) {
    var newUser = new User({
        username: User.username,
        password: User.password,
        firstName: User.name.firstName,
        lastName: User.name.lastName,
        email: User.email
    });

    try {
        var savedUser = await newUser.save();
        return savedUser;
    } catch (e) {
        throw Error("Error while creating user.");
    }
}

exports.updateUser = async function (user) {
    var id = User.id;

    try {
        var oldUser = await User.findById(id);
    } catch (e) {
        throw Error("Error while finding the user.");
    }

    if (!oldUser) {
        return false;
    }

    console.log(oldUser);

    // If they exist, edit the user
    oldUser.username = user.username;
    oldUser.password = user.password;
    oldUser.name.firstName = user.name.firstName;
    oldUser.name.lastName = user.name.lastName;
    oldUser.email = user.email;

    console.log(oldUser);

    try {
        var savedUser = await oldUser.save();

        return savedUser;
    } catch (e) {
        throw Error("An Error occured while updating the user.");
    }
}


exports.deleteUser = async function (id) {
    try {
        var deletedUser = await User.remove({ _id: id });
        if (deletedUser.result.n === 0) {
            throw Error("User couldn't be deleted.");
        }

        return deletedUser;
    } catch (e) {
        throw Error("Error ocurred while deleting the user.");
    }
}
var Compilation = require('../models/compilation.model');

_this = this;

exports.getCompilations = async function (query, page, limit) {
    var options = {
        page,
        limit
    }
    try {
        var compilations = await Compilation.paginate();

        return compilations;
    } catch (error) {
        throw Error("Error while Paginating compilations.");
    }
}

exports.getCompilation = async function (id) {
    try {
        var selectedCompilation = await Compilation.findOne({ _id: id });

        if (selectedCompilation) {
            return selectedCompilation;
        }
    } catch (e) {
        throw Error("Error occurred while retrieving the user.");
    }
}

exports.createCompilation = async function (compilation) {
    var newCompilation = new Compilation({
        name: compilation.name,
        type: compilation.type,
        user: compilation.user,//HERE PROBABLY WRONG
        items: compilation.items//---- || -----
    });

    try {
        var savedCompilation = await newCompilation.save();

        return savedCompilation;
    } catch (e) {
        throw Error("Error while creating compilation.");
    }
}

exports.updateCompilation = async function (compilation) {
    var id = compilation.id;

    try {
        var oldCompilation = await Compilation.findById(id);
    } catch (e) {
        throw Error("Error while finding the compilation.");
    }

    if (!oldCompilation) {
        return false;
    }

    console.log(oldCompilation);

    oldCompilation.name = compilation.name;
    oldCompilation.type = compilation.type;
    oldCompilation.user = compilation.user;
    oldCompilation.items = compilation.items;

    console.log(oldCompilation);

    try {
        var savedCompilation = await oldCompilation.save();

        return savedCompilation;
    } catch (e) {
        throw Error("An Error occured while updating the compilation.");
    }
}

exports.deleteCompilation = async function (id) {
    try {
        var deletedCompilation = await Compilation.remove({ _id: id });
        if (deletedCompilation.result.n === 0) {
            throw Error("Compilation couldn't be deleted.");
        }

        return deletedCompilation;
    } catch (e) {
        throw Error("Error ocurred while deleting the compilation.");
    }
}
var Compilation = require('../models/compilation.model');

_this = this;

exports.getCompilations = async function (query, page, limit) {
    try {
        // var compilations = await compilation.dosomething();
        var compilations = await Compilation.paginate();

        return compilations;
    } catch (error) {
        throw Error("Error while Paginating compilations.");
    }
}

exports.getCompilation = async function (id) {
    //implement
}

exports.createCompilation = async function (compilation) {
    var newCompilation = new Compilation({
        name: Compilation.name,
        type: Compilation.type,
        user: Compilation.user,//HERE PROBABLY WRONG
        items: Compilation.items//---- || -----
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

    // If they exist, edit the compilation
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
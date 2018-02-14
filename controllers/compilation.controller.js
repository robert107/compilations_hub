var CompilationService = require('../services/compilation.service');

_this = this;

exports.getCompilations = async function (req, res, next) {
    //possible params

    try {
        var compilation = await CompilationService.getCompilation({});

        return res.status(200).json({ status: 200, data: compilation, message: "Succesfully retrieved compilation." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getCompilation = async function (req, res, next) {
    //return Compilation
}

exports.createCompilation = async function (req, res, next) {
    var compilation = {
        name: req.body.name,
        type: req.body.type,
        user: req.body.user,
        items: req.body.items
    }

    try {
        var createdCompilation = await CompilationService.createCompilation(compilation);

        return res.status(201).json({ status: 201, data: createdCompilation, message: "Succesfully created compilation." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: "Compilation creation was unsuccesfull," });
    }

}

exports.updateCompilation = async function (req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({ status: 400., message: "No ID found for compilation." });
    }

    var id = req.body._id;

    console.log(req.body);

    var compilation = {
        id,
        name: req.body.name ? req.body.name : null,
        type: req.body.type ? req.body.type : null,
        user: req.body.user ? req.body.user : null,
        items: req.body.item ? req.body.item : null,
    }

    try {
        var updatedCompilation = await CompilationService.updateCompilation(compilation);

        return res.status(200).json({ status: 200, data: updatedCompilation, message: "Succesfully updated compilation" });
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message });
    }
}

exports.deleteCompilation = async function (req, res, next) {
    var id = req.params.id;

    try {
        var deleted = await CompilationService.deleteCompilation(id);

        return res.status(204).json({ status: 204, message: "Succesfully deleted compilation." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
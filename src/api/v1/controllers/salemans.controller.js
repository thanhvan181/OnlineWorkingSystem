const salemansService = require("../services/salemans.service");
const catchAsync = require("../utils/catchAsync");

module.exports = {
    // salemans: async(req, res, next) => {
    //     try {
    //         res.status(200).send('salemans');
    //     } catch (err) {
    //         next(err)
    //     }
    // },
    getAllSalemans: catchAsync(async(req, res) => {
        const salemans = await salemansService.findAll();
        return res.status(200).json(salemans);
    }),
    getSaleman: catchAsync(async(req, res) => {
        const saleman = await salemansService.findOne(req.params.id);
        return res.status(200).json(saleman);
    }),
    removeSaleman: catchAsync(async(req, res) => {
        const saleman = await salemansService.findOneAndDelete(req.params.id);
        return res.status(200).json(saleman)
    }),
    updateSaleman: catchAsync(async(req, res) => {
        const saleman = await salemansService.findOneAndUpdate(req.params.id, req.body);
        return res.status(200).json(saleman)
    }),
    createSaleman: catchAsync(async(req, res) => {
        const saleman = await salemansService.create(req.body).save();
        return res.status(200).json(saleman)

    })
};
const Joi = require('joi');


const ObjectId = (value, helper) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
        return helper.message('{{#label}} success ! ')
    }
    return value;
}
module.exports = {
    // getAllSalemans: {
    //     query: Joi.object().keys({
    //         name: Joi.string().required(),
    //         gender: Joi.string().required(),
    //         email: Joi.string().required(),
    //         country: Joi.string().required(),
    //         phone: Joi.string().required().max(10),
    //         languages: Joi.string().required(),
    //     })
    // },
    getSaleman: {
        param: Joi.object().keys({
            id: Joi.string().custom(ObjectId),
        })
    },
    createSaleman: {
        body: Joi.object().keys({
            name: Joi.string().required(),
            gender: Joi.string().required(),
            email: Joi.string().required(),
            country: Joi.string().required(),
            phone: Joi.string().required().max(10),
            languages: Joi.string().required(),
        })
    },
    removeSaleman: {
        params: Joi.object().keys({
            id: Joi.string().custom(ObjectId),
        })
    },
    updateSaleman: {
        params: Joi.object().keys({
            id: Joi.string().custom(ObjectId),
        }),
        body: {
            name: Joi.string().required(),
            gender: Joi.string().required(),
            email: Joi.string().required(),
            country: Joi.string().required(),
            phone: Joi.string().required().max(10),
            languages: Joi.string().required(),
        }
    }


}

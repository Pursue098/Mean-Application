
/* !
 * Module dependencies
 */
var mongoose = require('mongoose');

/**
 * Employee schema
 */
var Employee = mongoose.model('Employee', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});

/**
 * Register
 */
module.exports = { Employee };

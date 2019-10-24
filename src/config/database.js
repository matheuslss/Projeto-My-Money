const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', 
{ useMongoClient: true })

mongoose.Error.messages.general.required = "O atribulo '{PATH}' é obrigatório."


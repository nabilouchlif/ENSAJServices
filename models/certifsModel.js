const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certifSchema = new Schema({
        etudiant: {
            type: String,
            required: false
        },
        cin: {
            type: String,
            required: false
        },
        cne: {
            type: String,
            required: false
        },
        telephone: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        datedepot: {
            type: Date,
            required: false
        }
    }
    , {timestamps: false})

const Certificat = mongoose.model('Certificat', certifSchema);
module.exports = Certificat;
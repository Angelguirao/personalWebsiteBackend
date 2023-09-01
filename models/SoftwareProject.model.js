const { Schema, model } = require('mongoose');

const SoftwareProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologiesUsed: {
        type: [String],
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    projectUrl: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const SoftwareProject = model('SoftwareProject', SoftwareProjectSchema);
module.exports = SoftwareProject;

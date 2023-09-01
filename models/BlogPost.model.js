const { Schema, model } = require('mongoose');

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    datePublished: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const BlogPost = model('BlogPost', BlogPostSchema);
module.exports = BlogPost;

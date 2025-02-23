const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/courses')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    creator: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    ispublished: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    category: {
        type: String,
        required: true,
        enum: ['frontend', 'backend', 'fullstack']
    },
    tags: {
        type: Array,
        validate: {
            validator: function (tags) {
                return tags.length > 1;
            },
            message: 'A course should have at least two tags.'
        }
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'React js',
        creator: 'Pankhuri',
        ispublished: true,
        publishedDate: new Date(),
        rating: 3, // Invalid rating (should be between 1-5)
        category: 'frontend', // Invalid category
        tags: ['nodejs', 'react'] // Invalid, should have at least 2 tags
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (error) {
        if (error.name === 'ValidationError') {
            for (field in error.errors) {
                console.error(`Validation Error in "${field}": ${error.errors[field].message}`);
            }
        } else {
            console.error("Error occurred:", error);
        }
    }
}

createCourse();

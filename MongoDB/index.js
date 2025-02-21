//Logic to connect to MongoDB - 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log('Error in connecting to MongoDB',err));

//Schema - structure of your data (class)
const courseSchema = new mongoose.Schema({
    name : String,
    creator: String,
    publishedDate: {type: Date, default: Date.now()},
    ispublished: {type: Boolean, default: false},
    rating: {type: Number, min: 1, max: 5}
});

//Model - collection of documents (object)
const Course = mongoose.model('Course',courseSchema);   

async function createCourse(){

    const course = new Course({
        name: 'GOlang',
        creator: 'Sai',
        ispublished: true,
        publishedDate: new Date(),
        rating:1
    });

    const result = await course.save();
}

createCourse();

//find course with creator name -
async function FindCourse(){
    const course = await Course.find({creator: 'Mohit Panjikar'});
    console.log(course);
}

// FindCourse();

//need all the course having rating greater than 4 

async function RatingCourse(){
    const RatingCourse = await Course.find({rating: {$gte: 4}}).select({name: 1, rating: 1});
    console.log(RatingCourse);
}   

RatingCourse();
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
        name: 'python',
        creator: 'rohan',
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

//logical operators - or,and,not

async function creatorCourse(){
    const RatingCourse = await Course.find({$and: [{rating: {$gte: 4}}, {name: 'Python'}]}).select({name: 1, rating: 1});
    console.log(RatingCourse);
}

creatorCourse();

// Update Course -
async function updateCourse(id) {
    let course = await Course.findById(id);

    if (!course) {
        console.log("Course not found");
        return;
    }

    course.name = "Ruby on Rails";
    await course.save();  // Ensure to wait for the save operation to complete
}

updateCourse('67b8903b265caf58f1b5b48d');

//Deleting course from database -
async function DeleteCourse(id){
    let course = await Course.findById(id);

    if(!course){
        console.log("Course not Found");
        reurn;
    }
    await course.deleteOne();
}

DeleteCourse('67b8919a50dc5f46bf130d93');

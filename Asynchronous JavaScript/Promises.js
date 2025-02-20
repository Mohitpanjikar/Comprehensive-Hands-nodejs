//States in Promises - Pending, Fulfilled, Rejected
//Pending - when the promise is created
//Fulfilled - when the promise is resolved
//Rejected - when the promise is rejected

//whatever at the end Promises will consider settled

let myPromise = new Promise(function(resolve, reject) {
    const a = 4;
    const b = 4;

    setTimeout(() => {
        if(a === b) {
            resolve("The values are equal");
        } else {
            reject("The values are not equal");
        }
    }, 2000);
});

//consuming the promise - 
myPromise.then(function(result) {
    console.log(result); //Fullfilled state
}).catch(function(error) {
    console.log(error); //Rejected state
});

console.log(myPromise);



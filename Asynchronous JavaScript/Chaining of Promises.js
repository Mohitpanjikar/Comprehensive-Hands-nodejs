function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve("Data from Step 1");
    }, 2000);
  });
}

function step2(prevData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed with:", prevData);
      resolve("Data from Step 2");
    }, 2000);
  });
}

function step3(prevData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed with:", prevData);
      resolve("Final Result");
    }, 2000);
  });
}

// Chaining promises one after another
console.log("Start");
step1()
  .then(step2)
  .then(step3)
  .then((finalData) => {
    console.log("All steps done! Final output:", finalData);
  })
  .catch((error) => console.error("Error:", error));


//Async Await - is a syntax sugar for promises
//Async Await - is keyword 

function step1() {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Step 1 completed");
    resolve("Data from Step 1");
  }, 2000);
});
}

function step2(prevData) {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Step 2 completed with:", prevData);
    resolve("Data from Step 2");
  }, 2000);
});
}

function step3(prevData) {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Step 3 completed with:", prevData);
    resolve("Final Result");
  }, 2000);
});
}

async function runSteps() {
try {
  console.log("Start");

  const result1 = await step1(); // Waits for step1 to finish
  const result2 = await step2(result1); // Waits for step2 to finish
  const result3 = await step3(result2); // Waits for step3 to finish

  console.log("All steps done! Final output:", result3);
} catch (error) {
  console.error("Error occurred:", error);
}
}

runSteps();
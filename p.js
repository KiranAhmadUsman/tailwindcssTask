// Step 1: Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Step 2: Asynchronous operation (simulated with setTimeout)
    setTimeout(() => {
      const success = false;
  
      if (success) {
        // Step 3: Resolve the promise if the operation is successful
        resolve("Operation succeeded!");
      } else {
        // Step 4: Reject the promise if the operation fails
        reject("Operation failed!");
      }
    }, 1000); // Simulating an asynchronous operation that takes 1 second
  });
  
  // Step 5: Handling the promise using then() and catch()
  myPromise
    // Step 6: Using then() to handle fulfillment
    .then((result) => {
      console.log("Success:", result); // Step 7: Log the successful result
    })
    // Step 8: Using catch() to handle rejection
    .catch((error) => {
      console.error("Error:", error); // Step 9: Log the error if the promise is rejected
    });
  
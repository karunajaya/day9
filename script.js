// script.js

// Function to display countdown and message
const countdownAndDisplay = (count, callback) => {
    if (count > 0) {
        console.log(count);
        setTimeout(() => {
            countdownAndDisplay(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
};

// Start the countdown
countdownAndDisplay(10, () => {
    console.log("Happy Independence Day");
});

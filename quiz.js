// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4"; // Correct answer for the question "What is 2 + 2?"

    // Use document.querySelector to get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback paragraph element
    const feedbackElement = document.getElementById("feedback");

    if (selectedOption) {
        // Access the value of the selected radio button
        const userAnswer = selectedOption.value;

        // Compare userAnswer with correctAnswer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Set feedback text color to green for correct answers
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Set feedback text color to red for incorrect answers
        }
    } else {
        // If no answer is selected, show a warning message
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange"; // Set feedback text color to orange for warnings
    }
}

// Add event listener to the "Submit Answer" button
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-answer"); // Select the button by its ID
    submitButton.addEventListener("click", checkAnswer); // Add click event listener with checkAnswer as the callback
});

/*
Displaying results from Explicit and Implicit Bias Tests
*/

// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    if (likertScore >= 6 && likertScore <= 12) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;"><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</p>
        `;
    } else if (likertScore >= 13 && likertScore <= 18) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;"><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</p>
        `;
    } else if (likertScore >= 19 && likertScore <= 24) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;"><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</p>
        `;
    } else if (likertScore >= 25 && likertScore <= 30) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;"><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</p>
        `;
    } else {
        return "<b style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px;\">Error:</b> Invalid Likert score.";
    }
}

// Function to get the IAT description based on the participant's feedback
function iatScoreDescription(iatFeedback) {
    if (!iatFeedback) {
        return "<b style=\"font-family: 'Times New Roman', Times, serif; font-size: 16px;\">Error:</b> IAT feedback is missing.";
    }

    // Convert feedback to lowercase and trim spaces for case-insensitive matching
    const feedbackLower = iatFeedback.trim().toLowerCase();

    // Conditions for "European Americans" and "African Americans"
    if (feedbackLower.includes('strong automatic preference for european americans over african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Strong Automatic Preference for European Americans Over African Americans</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('moderate automatic preference for european americans over african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Moderate Automatic Preference for European Americans Over African Americans</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('slight automatic preference for european americans over african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Slight Automatic Preference for European Americans Over African Americans</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('little to no automatic preference between european americans and african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have <strong>Little to No Automatic Preference Between European Americans and African Americans</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</p>
        `;
    }

    // Conditions for "White people" and "Black people"
    else if (feedbackLower.includes("slightly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Slight Automatic Preference for White People Over Black People</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a slight unconscious association favoring White people. You were slightly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Moderate Automatic Preference for White People Over Black People</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a moderate unconscious association favoring White people. You were moderately faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Strong Automatic Preference for White People Over Black People</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a strong unconscious association favoring White people. You were strongly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("slightly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Slight Automatic Preference for Black People Over White People</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a slight unconscious association favoring Black people. You were slightly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Moderate Automatic Preference for Black People Over White People</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a moderate unconscious association favoring Black people. You were moderately faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman', Times, serif; font-size: 24px;">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Your IAT score indicates that you have a <strong>Strong Automatic Preference for Black People Over White People</strong></p>
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">You have a strong unconscious association favoring Black people. You were strongly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else {
        // If no conditions match, display the error with raw feedback
        return `<b style="font-family: 'Times New Roman', Times, serif; font-size: 16px;">Error:</b> Invalid IAT result.<br><strong>Raw IAT Feedback:</strong> ${iatFeedback}`;
    }
}

// Example usage of functions
let likertScore = 15; // Example score
let iatFeedback = "Moderate automatic preference for European Americans over African Americans";

console.log(likertScoreDescription(likertScore));
console.log(iatScoreDescription(iatFeedback));

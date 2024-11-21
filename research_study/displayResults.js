/* 
Displaying results from Explicit and Implicit Bias Tests
*/

// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    if (likertScore >= 6 && likertScore <= 12) {
        return `
            <h3>Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</p>
        `;
    } else if (likertScore >= 13 && likertScore <= 18) {
        return `
            <h3>Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</p>
        `;
    } else if (likertScore >= 19 && likertScore <= 24) {
        return `
            <h3>Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</p>
        `;
    } else if (likertScore >= 25 && likertScore <= 30) {
        return `
            <h3>Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</p>
        `;
    } else {
        return "<b>Error:</b> Invalid Likert score.";
    }
}

// Function to get the IAT description based on the participant's feedback
function iatScoreDescription(iatFeedback) {
    if (!iatFeedback) {
        return "<p><strong>Your IAT score could not be determined.</strong></p>";
    }

    // Normalize quotes: replace curly quotes with straight quotes
    const normalizedFeedback = iatFeedback.trim().toLowerCase()
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'");
    const feedbackLower = normalizedFeedback;

    let iatResult = "";

    if (feedbackLower.includes('strong automatic preference for european americans over african americans')) {
        iatResult = 'Strong Automatic Preference for European Americans Over African Americans';
    } else if (feedbackLower.includes('moderate automatic preference for european americans over african americans')) {
        iatResult = 'Moderate Automatic Preference for European Americans Over African Americans';
    } else if (feedbackLower.includes('slight automatic preference for european americans over african americans')) {
        iatResult = 'Slight Automatic Preference for European Americans Over African Americans';
    } else if (feedbackLower.includes('little to no automatic preference between european americans and african americans')) {
        iatResult = 'Little to No Automatic Preference Between European Americans and African Americans';
    } else if (feedbackLower.includes("slightly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        iatResult = 'Slight Automatic Preference for White People Over Black People';
    } else if (feedbackLower.includes("moderately faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        iatResult = 'Moderate Automatic Preference for White People Over Black People';
    } else if (feedbackLower.includes("strongly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        iatResult = 'Strong Automatic Preference for White People Over Black People';
    } else if (feedbackLower.includes("slightly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        iatResult = 'Slight Automatic Preference for Black People Over White People';
    } else if (feedbackLower.includes("moderately faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        iatResult = 'Moderate Automatic Preference for Black People Over White People';
    } else if (feedbackLower.includes("strongly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        iatResult = 'Strong Automatic Preference for Black People Over White People';
    }

    if (iatResult) {
        return `<p><strong>Your IAT score indicates a ${iatResult}.</strong></p>`;
    } else {
        // Handle unknown feedback by returning a default message
        return "<p><strong>Your IAT score indicates an unknown preference.</strong></p>";
    }
}

define(['questAPI'], function (quest) {
    var API = new quest();
    let global = API.getGlobal();

    // Obtain the participant's Likert score
    let likertScore = parseInt(global.likert.questions.likertQ.response); // Adjust the path if necessary

    // Obtain the participant's IAT feedback
    let iatFeedback = global.raceiat.feedback; // Ensure this path is correct

    // Debugging: Log the retrieved scores (can be removed after verification)
    console.log('Likert Score:', likertScore);
    console.log('IAT Feedback:', iatFeedback);

    API.addSequence([
        {
            header: '', // Removed 'Participant Results'
            text: "",
            submitText: 'Continue',
            name: 'resultsPage', // for logs, does not appear on webpage
            questions: [
                // Likert Scale Results
                {
                    type: 'info',
                    name: 'resultExplicit',
                    stem: likertScoreDescription(likertScore),
                },
                // Understanding Self-Perceived Bias
                {
                    type: 'info',
                    name: 'likertUnderstanding',
                    stem: `
                        <div style="font-weight: bold; font-size: 0.9em;">
                            <h3>Understanding Self-Perceived Bias:</h3>
                            <ul>
                                <li>Recognizing your own biases is important for personal and professional growth.</li>
                                <li>Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.</li>
                                <li>Continuous learning and reflection can help you foster a more inclusive environment.</li>
                            </ul>
                        </div>
                    `,
                },
                // Next Steps
                {
                    type: 'info',
                    name: 'nextSteps',
                    stem: `
                        <div style="font-weight: bold; font-size: 0.9em;">
                            <h3>Next Steps:</h3>
                            <ul>
                                <li>Engage in professional development workshops on diversity and inclusion.</li>
                                <li>Reflect on your teaching practices and identify areas for improvement.</li>
                                <li>Explore resources on implicit bias and equitable education strategies.</li>
                            </ul>
                        </div>
                    `,
                },
                // IAT Results
                {
                    type: 'info',
                    name: 'resultImplicit',
                    stem: `
                        <h3><strong>Participant Results: Implicit Association Test</strong></h3>
                        ${iatScoreDescription(iatFeedback)}
                    `,
                },
                // What Your Score Means
                {
                    type: 'info',
                    name: 'whatYourScoreMeans',
                    stem: `
                        <h3>What your score means:</h3>
                        <h4>‘Strong Automatic Preference for European Americans Over African Americans’</h4>
                        <ul>
                            <li>You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
                        </ul>
                        <h4>‘Moderate Automatic Preference for European Americans Over African Americans’</h4>
                        <ul>
                            <li>You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
                        </ul>
                        <h4>‘Slight Automatic Preference for European Americans Over African Americans’</h4>
                        <ul>
                            <li>You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
                        </ul>
                        <h4>‘Little to No Automatic Preference Between European Americans and African Americans’</h4>
                        <ul>
                            <li>You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</li>
                        </ul>
                        <h4>‘Slight Automatic Preference for African Americans Over European Americans’</h4>
                        <ul>
                            <li>You have a slight unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</li>
                        </ul>
                        <h4>‘Moderate Automatic Preference for African Americans Over European Americans’</h4>
                        <ul>
                            <li>You have a moderate unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</li>
                        </ul>
                        <h4>‘Strong Automatic Preference for African Americans Over European Americans’</h4>
                        <ul>
                            <li>You have a strong unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</li>
                        </ul>
                    `,
                },
                // Disclaimer
                {
                    type: 'info',
                    name: 'disclaimer',
                    stem: `
                        <div style="font-weight: bold; font-size: 0.9em;">
                            <h3>Disclaimer:</h3>
                            <p>These results are not a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.</p>
                        </div>
                    `,
                },
            ]
        },
    ]);

    return API.script;
});

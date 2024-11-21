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
        return "<b>Error:</b> IAT feedback is missing.";
    }

    // Convert feedback to lowercase and trim spaces for case-insensitive matching
    const feedbackLower = iatFeedback.trim().toLowerCase();

    if (feedbackLower.includes('strong automatic preference for european americans over african americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Strong Automatic Preference for European Americans Over African Americans</strong></p>
            <p>You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('moderate automatic preference for european americans over african americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Moderate Automatic Preference for European Americans Over African Americans</strong></p>
            <p>You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('slight automatic preference for european americans over african americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Slight Automatic Preference for European Americans Over African Americans</strong></p>
            <p>You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('little to no automatic preference between european americans and african americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have <strong>Little to No Automatic Preference Between European Americans and African Americans</strong></p>
            <p>You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</p>
        `;
    } else if (feedbackLower.includes('slight automatic preference for african americans over european americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Slight Automatic Preference for African Americans Over European Americans</strong></p>
            <p>You have a slight unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('moderate automatic preference for african americans over european americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Moderate Automatic Preference for African Americans Over European Americans</strong></p>
            <p>You have a moderate unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('strong automatic preference for african americans over european americans')) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Strong Automatic Preference for African Americans Over European Americans</strong></p>
            <p>You have a strong unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</p>
        `;
    } else {
        // Include raw feedback in the error message for debugging
        return `<b>Error:</b> Invalid IAT result. <br><strong>Raw IAT Feedback:</strong> ${iatFeedback}`;
    }
}

define(['questAPI'], function (quest) {
    var API = new quest();
    let global = API.getGlobal();

    // Obtain the participant's Likert score
    let likertScore = parseInt(global.likert.questions.likertQ.response); // Adjust the path if necessary

    // Obtain the participant's IAT feedback
    let iatFeedback = global.raceiat.feedback; // Ensure this path is correct

    // Debugging: Log the retrieved scores
    console.log('Likert Score:', likertScore);
    console.log('IAT Feedback:', iatFeedback);

    API.addSequence([
        {
            header: 'Participant Results',
            text: "",
            submitText: 'Continue',
            name: 'resultsPage', // for logs, does not appear on webpage
            questions: [
                {
                    type: 'info',
                    name: 'resultExplicit',
                    stem: likertScoreDescription(likertScore),
                },
                {
                    type: 'info',
                    name: 'likertUnderstanding',
                    stem: `
                        <h3>Understanding Self-Perceived Bias:</h3>
                        <ul>
                            <li>Recognizing your own biases is important for personal and professional growth.</li>
                            <li>Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.</li>
                            <li>Continuous learning and reflection can help you foster a more inclusive environment.</li>
                        </ul>
                        <h3>Next Steps:</h3>
                        <ul>
                            <li>Engage in professional development workshops on diversity and inclusion.</li>
                            <li>Reflect on your teaching practices and identify areas for improvement.</li>
                            <li>Explore resources on implicit bias and equitable education strategies.</li>
                        </ul>
                    `,
                },
                {
                    type: 'info',
                    name: 'resultImplicit',
                    stem: iatScoreDescription(iatFeedback),
                },
                {
                    type: 'info',
                    name: 'implicitUnderstanding',
                    stem: `
                        <h3>Understanding Implicit Bias:</h3>
                        <ul>
                            <li>Implicit biases are unconscious associations that can influence perceptions and actions without conscious intent.</li>
                            <li>Recognizing these biases is a positive step toward promoting equity and inclusivity.</li>
                            <li>Implicit biases are common and can be addressed through conscious effort and reflection.</li>
                        </ul>
                        <h3>Next Steps:</h3>
                        <ul>
                            <li>Reflect on how these unconscious associations may impact your interactions and decision-making.</li>
                            <li>Participate in training or workshops focused on diversity, equity, and inclusion.</li>
                            <li>Implement strategies to mitigate the influence of implicit biases in your professional practice.</li>
                        </ul>
                    `,
                },
            ]
        },
    ]);

    return API.script;
});

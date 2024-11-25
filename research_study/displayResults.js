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
    let iatExplanation = "";
    // Mapping feedback to IAT results and explanations
    if (feedbackLower.includes('strong automatic preference for european americans over african americans')) {
        iatResult = 'Strong Automatic Preference for European Americans Over African Americans';
        iatExplanation = 'You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.';
    } else if (feedbackLower.includes('moderate automatic preference for european americans over african americans')) {
        iatResult = 'Moderate Automatic Preference for European Americans Over African Americans';
        iatExplanation = 'You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.';
    } else if (feedbackLower.includes('slight automatic preference for european americans over african americans')) {
        iatResult = 'Slight Automatic Preference for European Americans Over African Americans';
        iatExplanation = 'You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.';
    } else if (feedbackLower.includes('little to no automatic preference between european americans and african americans')) {
        iatResult = 'Little to No Automatic Preference Between European Americans and African Americans';
        iatExplanation = 'You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.';
    } else if (feedbackLower.includes("slightly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        iatResult = 'Slight Automatic Preference for White People Over Black People';
        iatExplanation = 'You have a slight unconscious association favoring White people. You were slightly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.';
    } else if (feedbackLower.includes("moderately faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        iatResult = 'Moderate Automatic Preference for White People Over Black People';
        iatExplanation = 'You have a moderate unconscious association favoring White people. You were moderately faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.';
    } else if (feedbackLower.includes("strongly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        iatResult = 'Strong Automatic Preference for White People Over Black People';
        iatExplanation = 'You have a strong unconscious association favoring White people. You were strongly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.';
    } else if (feedbackLower.includes("slightly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        iatResult = 'Slight Automatic Preference for Black People Over White People';
        iatExplanation = 'You have a slight unconscious association favoring Black people. You were slightly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.';
    } else if (feedbackLower.includes("moderately faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        iatResult = 'Moderate Automatic Preference for Black People Over White People';
        iatExplanation = 'You have a moderate unconscious association favoring Black people. You were moderately faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.';
    } else if (feedbackLower.includes("strongly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        iatResult = 'Strong Automatic Preference for Black People Over White People';
        iatExplanation = 'You have a strong unconscious association favoring Black people. You were strongly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.';
    }
    if (iatResult && iatExplanation) {
        return `
            <p><strong>Your IAT score indicates a ${iatResult}.</strong></p>
            <p>${iatExplanation}</p>
        `;
    } else {
        // Handle unknown feedback by returning a default message without raw feedback
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
            header: '', // Removed "Participants Results" title
            text: "",
            submitText: 'Continue',
            name: 'resultsPage', // for logs, does not appear on webpage
            questions: [
                // Participant Results: Likert Scale
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
                // Participant Results: Implicit Association Test
                {
                    type: 'info',
                    name: 'resultImplicit',
                    stem: `
                        <h3><strong>Participant Results: Implicit Association Test</strong></h3>
                        ${iatScoreDescription(iatFeedback)}
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
                // Understanding Your IAT Results
                {
                    type: 'info',
                    name: 'understandingYourIATResults',
                    stem: `
                        <div style="font-weight: bold; font-size: 0.9em;">
                            <h3>Understanding Your IAT Results</h3>
                            <ul>
                                <li><strong>Implicit vs. Explicit Attitudes:</strong> Remember that implicit biases are unconscious and may not align with your conscious beliefs or values.</li>
                                <li><strong>Commonality of Biases:</strong> Implicit biases are common and result from societal influences, cultural exposure, and personal experiences.</li>
                                <li><strong>Opportunity for Growth:</strong> Recognizing implicit biases provides an opportunity to reflect and take steps toward mitigating their impact.</li>
                            </ul>
                        </div>
                    `,
                },
                // Resources for Further Understanding
                {
                    type: 'info',
                    name: 'resourcesForFurtherUnderstanding',
                    stem: `
                        <div style="font-weight: bold; font-size: 0.9em;">
                            <h3>Resources for Further Understanding</h3>
                            <ul>
                                <li><strong>Project Implicit:</strong> <a href="https://implicit.harvard.edu" target="_blank">implicit.harvard.edu</a>
                                    <ul>
                                        <li>Explore more about the IAT and view examples of how results are presented.</li>
                                    </ul>
                                </li>
                                <li><strong>Understanding Implicit Bias: Kirwan Institute</strong>
                                    <ul>
                                        <li>Offers resources on the impact of implicit bias and strategies for addressing it.</li>
                                    </ul>
                                </li>
                                <li><strong>Implicit Bias in Education: Teaching Tolerance</strong>
                                    <ul>
                                        <li>Provides materials for educators to recognize and reduce bias in schools.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    `,
                },
            ]
        },
    ]);

    return API.script;
});

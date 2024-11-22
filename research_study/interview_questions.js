/* 
Displaying results from Explicit and Implicit Bias Tests
*/

// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    if (likertScore >= 6 && likertScore <= 12) {
        return `
            <h3 style="font-size: 1.5em; font-family: Arial, sans-serif;">Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</p>
        `;
    } else if (likertScore >= 13 && likertScore <= 18) {
        return `
            <h3 style="font-size: 1.5em; font-family: Arial, sans-serif;">Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</p>
        `;
    } else if (likertScore >= 19 && likertScore <= 24) {
        return `
            <h3 style="font-size: 1.5em; font-family: Arial, sans-serif;">Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</p>
        `;
    } else if (likertScore >= 25 && likertScore <= 30) {
        return `
            <h3 style="font-size: 1.5em; font-family: Arial, sans-serif;">Participant Results: Likert Scale</h3>
            <p>Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</p>
        `;
    } else {
        return "<p><strong>Error:</strong> Invalid Likert score. Please enter a score between 6 and 30.</p>";
    }
}

// Function to get the IAT description based on the participant's feedback
function iatScoreDescription(iatFeedback) {
    if (!iatFeedback) {
        return "<p><strong>Your IAT score could not be determined.</strong></p>";
    }

    // Normalize quotes and convert to lowercase
    const normalizedFeedback = iatFeedback.trim().toLowerCase()
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'");
    const feedbackLower = normalizedFeedback;

    let iatResult = "";
    let iatExplanation = "";

    // Define mappings using regular expressions for flexibility
    const mappings = [
        {
            pattern: /strong\s+automatic\s+preference\s+for\s+european\s+americans\s+over\s+african\s+americans/,
            result: 'Strong Automatic Preference for European Americans Over African Americans',
            explanation: 'You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        {
            pattern: /moderate\s+automatic\s+preference\s+for\s+european\s+americans\s+over\s+african\s+americans/,
            result: 'Moderate Automatic Preference for European Americans Over African Americans',
            explanation: 'You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        {
            pattern: /slight\s+automatic\s+preference\s+for\s+european\s+americans\s+over\s+african\s+americans/,
            result: 'Slight Automatic Preference for European Americans Over African Americans',
            explanation: 'You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        {
            pattern: /little\s+to\s+no\s+automatic\s+preference\s+between\s+european\s+americans\s+and\s+african\s+americans/,
            result: 'Little to No Automatic Preference Between European Americans and African Americans',
            explanation: 'You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.'
        },
        {
            pattern: /slight\s+automatic\s+preference\s+for\s+african\s+americans\s+over\s+european\s+americans/,
            result: 'Slight Automatic Preference for African Americans Over European Americans',
            explanation: 'You have a slight unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
        {
            pattern: /moderate\s+automatic\s+preference\s+for\s+african\s+americans\s+over\s+european\s+americans/,
            result: 'Moderate Automatic Preference for African Americans Over European Americans',
            explanation: 'You have a moderate unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
        {
            pattern: /strong\s+automatic\s+preference\s+for\s+african\s+americans\s+over\s+european\s+americans/,
            result: 'Strong Automatic Preference for African Americans Over European Americans',
            explanation: 'You have a strong unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
    ];

    // Iterate over mappings to find a match
    for (let mapping of mappings) {
        if (mapping.pattern.test(feedbackLower)) {
            iatResult = mapping.result;
            iatExplanation = mapping.explanation;
            break;
        }
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
                            <h3 style="font-size: 1.2em; font-family: Arial, sans-serif;">Understanding Self-Perceived Bias:</h3>
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
                            <h3 style="font-size: 1.2em; font-family: Arial, sans-serif;">Next Steps:</h3>
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
                        <h3 style="font-size: 1.5em; font-family: Arial, sans-serif;"><strong>Participant Results: Implicit Association Test</strong></h3>
                        ${iatScoreDescription(iatFeedback)}
                    `,
                },
                // What Your Score Means:
                {
                    type: 'info',
                    name: 'whatYourScoreMeans',
                    stem: `
                        <h3 style="font-size: 1.2em; font-family: Arial, sans-serif;">What your score means:</h3>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Strong Automatic Preference for European Americans Over African Americans’</strong></h4>
                        <ul>
                            <li>You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
                        </ul>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Moderate Automatic Preference for European Americans Over African Americans’</strong></h4>
                        <ul>
                            <li>You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
                        </ul>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Slight Automatic Preference for European Americans Over African Americans’</strong></h4>
                        <ul>
                            <li>You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
                        </ul>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Little to No Automatic Preference Between European Americans and African Americans’</strong></h4>
                        <ul>
                            <li>You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</li>
                        </ul>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Slight Automatic Preference for African Americans Over European Americans’</strong></h4>
                        <ul>
                            <li>You have a slight unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</li>
                        </ul>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Moderate Automatic Preference for African Americans Over European Americans’</strong></h4>
                        <ul>
                            <li>You have a moderate unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.</li>
                        </ul>
                        <h4 style="font-size: 1em; font-family: Arial, sans-serif;"><strong>‘Strong Automatic Preference for African Americans Over European Americans’</strong></h4>
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
                            <h3 style="font-size: 1.2em; font-family: Arial, sans-serif;">Disclaimer:</h3>
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
                            <h3 style="font-size: 1.2em; font-family: Arial, sans-serif;">Understanding Your IAT Results</h3>
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
                            <h3 style="font-size: 1.2em; font-family: Arial, sans-serif;">Resources for Further Understanding</h3>
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
        } // End of the object inside addSequence
    ]); // Corrected closing brackets for addSequence

    return API.script;
});

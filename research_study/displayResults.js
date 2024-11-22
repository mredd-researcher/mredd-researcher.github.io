/* 
Displaying results from Explicit and Implicit Bias Tests
*/

// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    let explanation = "";

    if (likertScore >= 6 && likertScore <= 12) {
        explanation = "Scores between 6-12: You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.";
    } else if (likertScore >= 13 && likertScore <= 18) {
        explanation = "Scores between 13-18: You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.";
    } else if (likertScore >= 19 && likertScore <= 24) {
        explanation = "Scores between 19-24: You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.";
    } else if (likertScore >= 25 && likertScore <= 30) {
        explanation = "Scores between 25-30: You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.";
    } else {
        return "<p><strong>Error:</strong> Invalid Likert score. Please enter a score between 6 and 30.</p>";
    }

    return `
        <h3 class="result-header">Likert Scale Results</h3>
        <p class="result-score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
        <ul class="result-explanation">
            <li>${explanation}</li>
        </ul>
    `;
}

// Function to get the IAT description based on the participant's feedback
function iatScoreDescription(iatFeedback) {
    if (!iatFeedback) {
        return "";
    }

    // Normalize quotes and convert to lowercase for matching
    const normalizedFeedback = iatFeedback.trim().toLowerCase()
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'");

    let iatResult = "";
    let iatExplanation = "";

    // Define mappings using exact matches for reliability
    const mappings = {
        'strong automatic preference for european americans over african americans': {
            result: 'Strong Automatic Preference for European Americans Over African Americans',
            explanation: 'You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        'moderate automatic preference for european americans over african americans': {
            result: 'Moderate Automatic Preference for European Americans Over African Americans',
            explanation: 'You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        'slight automatic preference for european americans over african americans': {
            result: 'Slight Automatic Preference for European Americans Over African Americans',
            explanation: 'You have a slight unconscious association favoring European Americans. You slightly quicker associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        'little to no automatic preference between european americans and african americans': {
            result: 'Little to No Automatic Preference Between European Americans and African Americans',
            explanation: 'You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.'
        },
        'slight automatic preference for african americans over european americans': {
            result: 'Slight Automatic Preference for African Americans Over European Americans',
            explanation: 'You have a slight unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
        'moderate automatic preference for african americans over european americans': {
            result: 'Moderate Automatic Preference for African Americans Over European Americans',
            explanation: 'You have a moderate unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
        'strong automatic preference for african americans over european americans': {
            result: 'Strong Automatic Preference for African Americans Over European Americans',
            explanation: 'You have a strong unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        }
    };

    const key = normalizedFeedback;
    if (mappings[key]) {
        iatResult = mappings[key].result;
        iatExplanation = mappings[key].explanation;
    } else {
        // Handle unknown feedback gracefully
        iatResult = 'Unknown IAT Feedback';
        iatExplanation = 'The provided IAT feedback does not match any known categories. Please ensure you select a valid feedback statement.';
        // Optionally, you can return an error message or handle it as needed
        return `
            <h3 class="result-header">Implicit Association Test Results</h3>
            <p class="result-score">Raw IAT Feedback: <strong>${iatFeedback}</strong></p>
            <ul class="result-explanation">
                <li>${iatExplanation}</li>
            </ul>
        `;
    }

    return `
        <h3 class="result-header">Implicit Association Test Results</h3>
        <p class="result-score">Raw IAT Feedback: <strong>${iatResult}</strong></p>
        <ul class="result-explanation">
            <li>${iatExplanation}</li>
        </ul>
    `;
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

    // Validate Inputs
    let validationErrors = [];

    // Validate Likert Scale score
    if (isNaN(likertScore)) {
        validationErrors.push('Likert Scale Score must be a number.');
    } else if (likertScore < 6 || likertScore > 30) {
        validationErrors.push('Likert Scale Score must be between 6 and 30.');
    }

    // Validate IAT Feedback Statement
    const validIATFeedbacks = [
        'Strong Automatic Preference for European Americans Over African Americans',
        'Moderate Automatic Preference for European Americans Over African Americans',
        'Slight Automatic Preference for European Americans Over African Americans',
        'Little to No Automatic Preference Between European Americans and African Americans',
        'Slight Automatic Preference for African Americans Over European Americans',
        'Moderate Automatic Preference for African Americans Over European Americans',
        'Strong Automatic Preference for African Americans Over European Americans'
    ];

    if (!iatFeedback || !validIATFeedbacks.includes(iatFeedback)) {
        validationErrors.push('Invalid or missing IAT Feedback Statement.');
    }

    if (validationErrors.length > 0) {
        // Handle validation errors appropriately
        // For QuestAPI, you might want to display these errors to the participant
        // Here, we'll log them and stop the script
        console.error('Validation Errors:', validationErrors);
        return API.script;
    }

    // Generate feedback
    const likertFeedbackHTML = likertScoreDescription(likertScore);
    const iatFeedbackHTML = iatScoreDescription(iatFeedback);

    // Add sequence with feedback
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
                    stem: likertFeedbackHTML,
                },
                // Understanding Self-Perceived Bias
                {
                    type: 'info',
                    name: 'likertUnderstanding',
                    stem: `
                        <div class="subsection">
                            <h3 class="section-header">Understanding Self-Perceived Bias</h3>
                            <ul class="subsection-list">
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
                        <div class="subsection">
                            <h3 class="section-header">Next Steps</h3>
                            <ul class="subsection-list">
                                <li>Engage in professional development workshops on diversity and inclusion.</li>
                                <li>Reflect on your teaching practices and identify areas for improvement.</li>
                                <li>Explore resources on implicit bias and equitable education strategies.</li>
                            </ul>
                        </div>
                    `,
                },
                // Implicit Association Test Results
                {
                    type: 'info',
                    name: 'resultImplicit',
                    stem: iatFeedbackHTML,
                },
                // Disclaimer
                {
                    type: 'info',
                    name: 'disclaimer',
                    stem: `
                        <div class="subsection disclaimer">
                            <h3 class="section-header">Disclaimer</h3>
                            <p>These results are not a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.</p>
                        </div>
                    `,
                },
                // Understanding Your IAT Results
                {
                    type: 'info',
                    name: 'understandingYourIATResults',
                    stem: `
                        <div class="subsection">
                            <h3 class="section-header">Understanding Your IAT Results</h3>
                            <ul class="subsection-list">
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
                        <div class="subsection">
                            <h3 class="section-header">Resources for Further Understanding</h3>
                            <ul class="subsection-list">
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
        }
    ]); // Corrected closing brackets for addSequence

    return API.script;
});

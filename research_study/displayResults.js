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

    // Normalize quotes: replace curly quotes with straight quotes
    const normalizedFeedback = iatFeedback.trim().toLowerCase()
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'");
    const feedbackLower = normalizedFeedback;

    // Conditions for "European Americans" and "African Americans"
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
    }

    // Conditions for "White people" and "Black people"
    else if (feedbackLower.includes("slightly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Slight Automatic Preference for White People Over Black People</strong></p>
            <p>You have a slight unconscious association favoring White people. You were slightly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Moderate Automatic Preference for White People Over Black People</strong></p>
            <p>You have a moderate unconscious association favoring White people. You were moderately faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Strong Automatic Preference for White People Over Black People</strong></p>
            <p>You have a strong unconscious association favoring White people. You were strongly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("slightly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Slight Automatic Preference for Black People Over White People</strong></p>
            <p>You have a slight unconscious association favoring Black people. You were slightly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Moderate Automatic Preference for Black People Over White People</strong></p>
            <p>You have a moderate unconscious association favoring Black people. You were moderately faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have a <strong>Strong Automatic Preference for Black People Over White People</strong></p>
            <p>You have a strong unconscious association favoring Black people. You were strongly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    }

    // New Condition to Handle "About Equally Fast" Feedback
    else if (feedbackLower.includes("about equally fast")) {
        return `
            <h3>Implicit Association Test (IAT) Results</h3>
            <p>Your IAT score indicates that you have <strong>Little to No Automatic Preference Between White People and Black People</strong></p>
            <p>You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</p>
        `;
    }

    else {
        // If no conditions match, display the error with raw feedback
        return `<b>Error:</b> Invalid IAT result.<br><strong>Raw IAT Feedback:</strong> ${iatFeedback}`;
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
                {
                    type: 'info',
                    name: 'iatDisclaimer',
                    stem: `
                        <h3>Disclaimer:</h3>
                        <p>These results are not a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.</p>
                        <h3>How Does The IAT Work?</h3>
                        <p>The IAT measures the strength of associations between concepts (e.g., African Americans, European Americans) and attributes (e.g., Good, Bad). The main idea is that making a response is easier when closely related items share the same response key. We would say that one has an automatically activated association of African Americans with Good and European Americans with Bad if they are faster to categorize items when African Americans and Good share a response key relative to when European Americans and Good share a response key.</p>
                        <p>Many researchers consider associations of Black and White people with the concepts Good and Bad an estimate of automatic preference between Black and White people. An automatic preference is your very first preference between people, groups, or other objects. An automatic preference might be activated even if people do not endorse that preference.</p>
                        <p>Any single IAT is unlikely to predict behavior well for a specific individual. In the aggregate, the IAT can predict behavior such as discrimination in hiring and promotion, medical treatment, and decisions related to criminal justice.</p>
                        <h3>Does The Order In Which I Took The IAT Matter?</h3>
                        <p>Yes, the order in which you take the IAT can influence your overall results. But, the effect is very small. So if you first pair African Americans + Good / European Americans + Bad and then pair African Americans + Bad / European Americans + Good, your results might be just a tiny bit different than they would be if you had done the reverse pairing first. To minimize the order effect, we give more practice trials before the second pairing than we did before the first pairing. We also randomly assign participants to one of the two possible orderings, so half of the test-takers complete African Americans + Good / European Americans + Bad and then African Americans + Bad / European Americans + Good, and the other half get the opposite order.</p>
                    `,
                },
            ]
        },
    ]);

    return API.script;
});

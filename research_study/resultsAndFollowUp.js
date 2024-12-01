/* 
Displaying results from Explicit and Implicit Bias Tests
*/

// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    let scoreDescriptionText = '';

    if (likertScore >= 0 && likertScore <= 5) {
        scoreDescriptionText = `<p><strong>Missing:</strong> You declined to answer the questions concerning self-awareness and commitment to equity.</p>`;
    } else if (likertScore >= 6 && likertScore <= 12) {
        scoreDescriptionText = `<p><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</p>`;
    } else if (likertScore >= 13 && likertScore <= 18) {
        scoreDescriptionText = `<p><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</p>`;
    } else if (likertScore >= 19 && likertScore <= 24) {
        scoreDescriptionText = `<p><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</p>`;
    } else if (likertScore >= 25 && likertScore <= 30) {
        scoreDescriptionText = `<p><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</p>`;
    } else {
        scoreDescriptionText = `<p><b>Error:</b> Invalid Likert score.</p>`;
    }

    return `
            <h3>Participant Results: Likert Scale</h3>
            <p style="font-size:125%; margin-top:.5em">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            ${scoreDescriptionText}
    `;
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
        iatExplanation = 'You have a strong unconscious association favoring Black people. You were strongly faster at sorting "White people" with "Bad words" and "Black people" with "Good Words" compared to the reverse during the test.';
    }

    if (iatResult && iatExplanation) {
        return `
            <p style="font-size:125%; margin-top:.5em">Your IAT score indicates a <strong>${iatResult}.</strong></p>
            <p>${iatExplanation}</p>
        `;
    } else {
        // Handle unknown feedback by returning a default message without raw feedback
        return `<p style="font-size:150%; margin-top:.5em">Your IAT score indicates an <strong>unknown preference.</strong></p>`;
    }
}

define(['questAPI'], function (quest) {
    var API = new quest();
    let global = API.getGlobal();

    // Obtain the participant's Likert score
    let likertScore = parseInt(global.likert.questions.likertQ.response); // Adjust the path if necessary
    // const likertScore = 20; // Likert Scale Score (Range: 6-30)

    // Obtain the participant's IAT feedback
    let iatFeedback = global.raceiat.feedback; // Ensure this path is correct
    // const iatFeedback = 'Moderate Automatic Preference for European Americans Over African Americans'; // IAT Feedback Category

    const thingsToConsider = `These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.`;

    // Debugging: Log the retrieved scores (can be removed after verification)
    console.log('Likert Score:', likertScore);
    console.log('IAT Feedback:', iatFeedback);

    API.addSequence([
        {
            header: '', // Removed "Participants Results" title
            text: "",
            submitText: 'Continue', // This is the "Continue" button at the bottom of the page
            name: 'resultsPage', // for logs, does not appear on webpage
            questions: [
                // Participant Results: Likert Scale
                {
                    type: 'info',
                    name: 'resultExplicit',
                    stem: likertScoreDescription(likertScore),
                },
                // Participant Results: Implicit Association Test
                {
                    type: 'info',
                    name: 'resultImplicit',
                    stem: `
                        <h3>Participant Results: Implicit Association Test</h3>
                        ${iatScoreDescription(iatFeedback)}
                    `,
                },
                {
                    type: 'info',
                    name: 'toConsider',
                    stem: `
                        <h3>Things to Consider:</h3>
                        <p style="margin-top:.5em">${thingsToConsider}</p>
                    `,
                }
            ]
        },
        {
            header: 'Follow-Up Questions',
            text: '<b>Instructions:</b> Thank you for participating! Your responses provide valuable insights into how biases affect educational practices. Your responses are anonymous to everyone.',
            submitText: 'Finish',
            prev: true,
            prevText: 'Go Back to Results',
            // numbered: true,
            autoFocus: true,
            name: 'interviewPage', // for logs, does not appear on webpage
            // decline: 'double',
            // declineText: 'Decline to answer (click twice)',
            questions: [
                {
                    type: 'textarea',
                    stem: 'Do you agree with your IAT scores? Why or why not?',
                    name: 'interview1', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'How does your self-perception of implicit bias compare with your IAT results? Do you believe any biases you possess are controlled in the classroom?',
                    stem: 'How does your self-perception of implicit bias compare with your IAT results? Do you believe any biases you may possess are controlled in the classroom?',
                    name: 'interview2', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'How does the fear of appearing ineffective or receiving negative evaluations from standardized testing outcomes, administrative feedback, or observations affect your teaching practices and the way you recommend courses for underrepresented students?',
                    name: 'interview3', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'After completing the IAT, has your belief in the existence or influence of implicit racial biases changed? If so, how?',
                    name: 'interview4', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'Based on your IAT results, what strategies might help reduce your potential biases in your teaching practices moving forward?',
                    name: 'interview5', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'Do you believe professional development programs can help teachers recognize and address any implicit biases they may have? Please explain. If not, what alternative strategies would you suggest?',
                    name: 'interview6', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
            ]
        },
    ]);

    return API.script;
});
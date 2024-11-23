/* 
Displaying results from Explicit and Implicit Bias Tests
*/
// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    if (likertScore >= 6 && likertScore <= 12) {
        return `
            <h3 style="font-family: 'Times New Roman';">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman';">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman';"><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</p>
        `;
    } else if (likertScore >= 13 && likertScore <= 18) {
        return `
            <h3 style="font-family: 'Times New Roman';">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman';">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman';"><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</p>
        `;
    } else if (likertScore >= 19 && likertScore <= 24) {
        return `
            <h3 style="font-family: 'Times New Roman';">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman';">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman';"><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</p>
        `;
    } else if (likertScore >= 25 && likertScore <= 30) {
        return `
            <h3 style="font-family: 'Times New Roman';">Participant Results: Likert Scale</h3>
            <p style="font-family: 'Times New Roman';">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <p style="font-family: 'Times New Roman';"><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</p>
        `;
    } else {
        return "<b style=\"font-family: 'Times New Roman';\">Error:</b> Invalid Likert score.";
    }
}
// Function to get the IAT description based on the participant's feedback
function iatScoreDescription(iatFeedback) {
    if (!iatFeedback) {
        return "<b style=\"font-family: 'Times New Roman';\">Error:</b> IAT feedback is missing.";
    }
    // Convert feedback to lowercase and trim spaces for case-insensitive matching
    const feedbackLower = iatFeedback.trim().toLowerCase();

    // Conditions for "European Americans" and "African Americans"
    if (feedbackLower.includes('strong automatic preference for european americans over african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Strong Automatic Preference for European Americans Over African Americans</strong></p>
            <p style="font-family: 'Times New Roman';">You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('moderate automatic preference for european americans over african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Moderate Automatic Preference for European Americans Over African Americans</strong></p>
            <p style="font-family: 'Times New Roman';">You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('slight automatic preference for european americans over african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Slight Automatic Preference for European Americans Over African Americans</strong></p>
            <p style="font-family: 'Times New Roman';">You have a slight unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</p>
        `;
    } else if (feedbackLower.includes('little to no automatic preference between european americans and african americans')) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have <strong>Little to No Automatic Preference Between European Americans and African Americans</strong></p>
            <p style="font-family: 'Times New Roman';">You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</p>
        `;
    }
    // Conditions for "White people" and "Black people"
    else if (feedbackLower.includes("slightly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Slight Automatic Preference for White People Over Black People</strong></p>
            <p style="font-family: 'Times New Roman';">You have a slight unconscious association favoring White people. You were slightly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Moderate Automatic Preference for White People Over Black People</strong></p>
            <p style="font-family: 'Times New Roman';">You have a moderate unconscious association favoring White people. You were moderately faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Strong Automatic Preference for White People Over Black People</strong></p>
            <p style="font-family: 'Times New Roman';">You have a strong unconscious association favoring White people. You were strongly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("slightly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Slight Automatic Preference for Black People Over White People</strong></p>
            <p style="font-family: 'Times New Roman';">You have a slight unconscious association favoring Black people. You were slightly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Moderate Automatic Preference for Black People Over White People</strong></p>
            <p style="font-family: 'Times New Roman';">You have a moderate unconscious association favoring Black people. You were moderately faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 style="font-family: 'Times New Roman';">Implicit Association Test (IAT) Results</h3>
            <p style="font-family: 'Times New Roman';">Your IAT score indicates that you have a <strong>Strong Automatic Preference for Black People Over White People</strong></p>
            <p style="font-family: 'Times New Roman';">You have a strong unconscious association favoring Black people. You were strongly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</p>
        `;
    } else {
        // If no conditions match, display the error with raw feedback
        return `<b style="font-family: 'Times New Roman';">Error:</b> Invalid IAT result.<br><strong style="font-family: 'Times New Roman';">Raw IAT Feedback:</strong> ${iatFeedback}`;
    }
}
// Function to render the comparison chart using Chart.js
function renderBiasChart(likertScore, iatScore) {
    // Check if the canvas element exists
    const canvas = document.getElementById('biasChart');
    if (!canvas) {
        console.error('Canvas element with id "biasChart" not found.');
        return;
    }
    const ctx = canvas.getContext('2d');
    // Create the bar chart
    new Chart(ctx, {
        type: 'bar', // You can change this to 'line', 'pie', etc.
        data: {
            labels: ['Self-Perceived Bias', 'Implicit Bias (IAT D-Score)'],
            datasets: [{
                label: 'Bias Scores',
                data: [likertScore, iatScore],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)', // Blue for Likert Scale
                    'rgba(255, 99, 132, 0.7)'  // Red for IAT D-Score
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30 // Adjust based on your score range
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparison of Self-Perceived Bias and Implicit Bias'
                }
            }
        }
    });
}
define(['questAPI'], function (quest) {
    var API = new quest();
    let global = API.getGlobal();
    // Obtain the participant's Likert score
    let likertScore = parseInt(global.likert.questions.likertQ.response); // Adjust the path if necessary
    // Obtain the participant's IAT feedback
    let iatFeedback = global.raceiat.feedback; // Ensure this path is correct
    // Extract IAT D-Score from feedback (modify based on your data structure)
    let iatScore = parseFloat(global.raceiat.DScore); // Adjust accordingly
    // Debugging: Log the retrieved scores (can be removed after verification)
    console.log('Likert Score:', likertScore);
    console.log('IAT Score:', iatScore);
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
                        <h3 style="font-family: 'Times New Roman';">Understanding Self-Perceived Bias:</h3>
                        <ul style="font-family: 'Times New Roman';">
                            <li>Recognizing your own biases is important for personal and professional growth.</li>
                            <li>Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.</li>
                            <li>Continuous learning and reflection can help you foster a more inclusive environment.</li>
                        </ul>
                        <h3 style="font-family: 'Times New Roman';">Next Steps:</h3>
                        <ul style="font-family: 'Times New Roman';">
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
                        <h3 style="font-family: 'Times New Roman';">Understanding Implicit Bias:</h3>
                        <ul style="font-family: 'Times New Roman';">
                            <li>Implicit biases are unconscious associations that can influence perceptions and actions without conscious intent.</li>
                            <li>Recognizing these biases is a positive step toward promoting equity and inclusivity.</li>
                            <li>Implicit biases are common and can be addressed through conscious effort and reflection.</li>
                        </ul>
                        <h3 style="font-family: 'Times New Roman';">Next Steps:</h3>
                        <ul style="font-family: 'Times New Roman';">
                            <li>Reflect on how these unconscious associations may impact your interactions and decision-making.</li>
                            <li>Participate in training or workshops focused on diversity, equity, and inclusion.</li>
                            <li>Implement strategies to mitigate the influence of implicit biases in your professional practice.</li>
                        </ul>
                    `,
                },
            ]
        },
        // After the sequence, render the chart
        {
            type: 'callback',
            callback: function () {
                renderBiasChart(likertScore, iatScore);
            }
        }
    ]);
    return API.script;
});

/* 
Displaying results from Explicit and Implicit Bias Tests
*/
// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    if (likertScore >= 6 && likertScore <= 12) {
        return `
            <h2 class="section-title">Participant Results: Likert Scale</h2>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</li>
            </ul>
        `;
    } else if (likertScore >= 13 && likertScore <= 18) {
        return `
            <h2 class="section-title">Participant Results: Likert Scale</h2>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</li>
            </ul>
        `;
    } else if (likertScore >= 19 && likertScore <= 24) {
        return `
            <h2 class="section-title">Participant Results: Likert Scale</h2>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</li>
            </ul>
        `;
    } else if (likertScore >= 25 && likertScore <= 30) {
        return `
            <h2 class="section-title">Participant Results: Likert Scale</h2>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</li>
            </ul>
        `;
    } else {
        // Return an empty string or a placeholder if the score is invalid
        return `<p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>---</strong></p>
                <p>Please ensure you have completed the Likert survey correctly.</p>`;
    }
}
// Function to get the IAT description based on the participant's feedback
function iatScoreDescription(iatFeedback) {
    if (!iatFeedback) {
        // Return an empty string or a placeholder if feedback is missing
        return `<p class="score">Your Raw IAT Feedback Results: <strong>---</strong></p>
                <p>Please ensure you have completed the IAT correctly.</p>`;
    }
    // Convert feedback to lowercase and trim spaces for case-insensitive matching
    const feedbackLower = iatFeedback.trim().toLowerCase();

    // Define possible feedback categories and their corresponding descriptions
    const feedbackMap = {
        'strong automatic preference for european americans over african americans': {
            title: 'Strong Automatic Preference for European Americans Over African Americans',
            description: 'You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        'moderate automatic preference for european americans over african americans': {
            title: 'Moderate Automatic Preference for European Americans Over African Americans',
            description: 'You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        'slight automatic preference for european americans over african americans': {
            title: 'Slight Automatic Preference for European Americans Over African Americans',
            description: 'You have a slight unconscious association favoring European Americans. You slightly quicker associated "European Americans" with positive words and "African Americans" with negative words during the test.'
        },
        'little to no automatic preference between european americans and african americans': {
            title: 'Little to No Automatic Preference Between European Americans and African Americans',
            description: 'You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.'
        },
        'slight automatic preference for african americans over european americans': {
            title: 'Slight Automatic Preference for African Americans Over European Americans',
            description: 'You have a slight unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
        'moderate automatic preference for african americans over european americans': {
            title: 'Moderate Automatic Preference for African Americans Over European Americans',
            description: 'You have a moderate unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        },
        'strong automatic preference for african americans over european americans': {
            title: 'Strong Automatic Preference for African Americans Over European Americans',
            description: 'You have a strong unconscious association favoring African Americans. You more quickly associated "African Americans" with positive words and "European Americans" with negative words during the test.'
        }
    };
    // Check if the feedback matches any of the predefined categories
    for (let key in feedbackMap) {
        if (feedbackLower.includes(key)) {
            return `
                <h2 class="section-title">Implicit Association Test (IAT) Results</h2>
                <p class="score">Your Raw IAT Feedback Results: <strong>${feedbackMap[key].title}</strong></p>
                <ul class="description-list">
                    <li>${feedbackMap[key].description}</li>
                </ul>
            `;
        }
    }
    // If no match is found, provide a generic message without error
    return `
        <h2 class="section-title">Implicit Association Test (IAT) Results</h2>
        <p class="score">Your Raw IAT Feedback Results: <strong>${iatFeedback}</strong></p>
        <ul class="description-list">
            <li>Your results indicate a unique pattern of associations.</li>
        </ul>
    `;
}
define(['questAPI'], function (quest) {
    var API = new quest();
    let global = API.getGlobal();
    // ===========================
    // CSS Styles Injection
    // ===========================
    function injectStyles(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        document.head.appendChild(style);
    }
    const styles = `
        body {
            font-family: 'Times New Roman', Times, serif;
            background-image: url('https://images.unsplash.com/photo-1529253355930-25c696b4dc09?auto=format&fit=crop&w=1350&q=80'); /* Replace with your desired landscape background image URL */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden; /* Prevent scrolling */
        }
        .results-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 40px;
            border-radius: 10px;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            overflow-y: auto;
            max-height: 90vh; /* Ensure it fits within viewport height */
        }
        .section-title {
            font-size: 2.5em; /* Larger titles */
            margin-bottom: 20px;
            text-align: center;
            color: #333;
        }
        .score {
            font-size: 1.8em; /* Larger text */
            margin-bottom: 20px;
            text-align: center;
            color: #555;
        }
        .description-list {
            font-size: 1.2em; /* Regular text */
            margin-left: 20px;
            margin-bottom: 20px;
            color: #444;
        }
        .description-list li {
            margin-bottom: 15px;
        }
        .disclaimer {
            font-size: 1em;
            font-weight: bold;
            margin-top: 20px;
            color: #888;
        }
        .encouragement {
            font-size: 1.5em;
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background-color: #e7f3fe;
            border-left: 6px solid #2196F3;
            color: #333;
            border-radius: 5px;
        }
        @media (max-width: 800px) {
            .results-container {
                padding: 20px;
            }
            .section-title {
                font-size: 2em;
            }
            .score {
                font-size: 1.5em;
            }
            .description-list {
                font-size: 1em;
            }
            .encouragement {
                font-size: 1.2em;
            }
        }
    `;
    injectStyles(styles);
    // ===========================
    // Create and Append Elements
    // ===========================
    function createResultsHTML() {
        // Obtain the participant's Likert score and IAT feedback
        // Ensure that the paths to these responses are correct
        // Adjust 'likertQ.response' and 'raceiat.feedback' if necessary based on your survey structure
        // Example Paths:
        // - global.likert.questions.likertQ.response
        // - global.raceiat.feedback
        // Ensure that 'likertQ' and 'raceiat' are the correct identifiers for your questions
        // You can verify this by checking the survey structure or using debugging logs
        // Debugging: Check if responses are correctly retrieved
        if (isNaN(likertScore) || likertScore < 6 || likertScore > 30) {
            console.error('Invalid or missing Likert score:', likertScore);
            likertScore = null; // Reset to null if invalid
        }
        if (!iatFeedback) {
            console.error('Missing IAT feedback:', iatFeedback);
        }
        // Create Results HTML
        let resultsHTML = `
            ${likertScoreDescription(likertScore)}
            ${iatScoreDescription(iatFeedback)}
            <p class="disclaimer">Disclaimer: These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.</p>
            <div class="encouragement">Your willingness to engage with these assessments reflects a commitment to growth and equity. Remember, bias is not a fixed trait—your efforts can lead to meaningful change. Every step you take contributes to a more inclusive and fair educational system!</div>
        `;
        return resultsHTML;
    }
    API.addSequence([
        {
            header: 'Participant Results',
            text: "",
            submitText: 'Continue',
            name: 'resultsPage', // for logs, does not appear on webpage
            questions: [
                {
                    type: 'info',
                    name: 'fullResults',
                    stem: createResultsHTML(),
                }
            ]
        },
    ]);
    return API.script;
});

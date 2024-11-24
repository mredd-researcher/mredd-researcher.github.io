/* 
Displaying results from Explicit and Implicit Bias Tests
*/
// Function to get the Likert Scale description based on the participant's score
function likertScoreDescription(likertScore) {
    if (likertScore >= 6 && likertScore <= 12) {
        return `
            <h3 class="section-title">Participant Results: Likert Scale</h3>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 6-12:</strong> You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment.</li>
            </ul>
        `;
    } else if (likertScore >= 13 && likertScore <= 18) {
        return `
            <h3 class="section-title">Participant Results: Likert Scale</h3>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 13-18:</strong> You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom.</li>
            </ul>
        `;
    } else if (likertScore >= 19 && likertScore <= 24) {
        return `
            <h3 class="section-title">Participant Results: Likert Scale</h3>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 19-24:</strong> You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable.</li>
            </ul>
        `;
    } else if (likertScore >= 25 && likertScore <= 30) {
        return `
            <h3 class="section-title">Participant Results: Likert Scale</h3>
            <p class="score">Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong></p>
            <ul class="description-list">
                <li><strong>Scores between 25-30:</strong> You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary.</li>
            </ul>
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
    // Conditions for "European Americans" and "African Americans"
    if (feedbackLower.includes('strong automatic preference for european americans over african americans')) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Strong Automatic Preference for European Americans Over African Americans</strong></p>
            <ul class="description-list">
                <li>You have a strong unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes('moderate automatic preference for european americans over african americans')) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Moderate Automatic Preference for European Americans Over African Americans</strong></p>
            <ul class="description-list">
                <li>You have a moderate unconscious association favoring European Americans. You more quickly associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes('slight automatic preference for european americans over african americans')) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Slight Automatic Preference for European Americans Over African Americans</strong></p>
            <ul class="description-list">
                <li>You have a slight unconscious association favoring European Americans. You slightly quicker associated "European Americans" with positive words and "African Americans" with negative words during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes('little to no automatic preference between european americans and african americans')) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Little to No Automatic Preference Between European Americans and African Americans</strong></p>
            <ul class="description-list">
                <li>You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.</li>
            </ul>
        `;
    }
    // Conditions for "White people" and "Black people"
    else if (feedbackLower.includes("slightly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Slight Automatic Preference for White People Over Black People</strong></p>
            <ul class="description-list">
                <li>You have a slight unconscious association favoring White people. You were slightly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Moderate Automatic Preference for White People Over Black People</strong></p>
            <ul class="description-list">
                <li>You have a moderate unconscious association favoring White people. You were moderately faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'black people' with 'bad words' and 'white people' with 'good words'")) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Strong Automatic Preference for White People Over Black People</strong></p>
            <ul class="description-list">
                <li>You have a strong unconscious association favoring White people. You were strongly faster at sorting "Black people" with "Bad words" and "White people" with "Good words" compared to the reverse during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes("slightly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Slight Automatic Preference for Black People Over White People</strong></p>
            <ul class="description-list">
                <li>You have a slight unconscious association favoring Black people. You were slightly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes("moderately faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Moderate Automatic Preference for Black People Over White People</strong></p>
            <ul class="description-list">
                <li>You have a moderate unconscious association favoring Black people. You were moderately faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</li>
            </ul>
        `;
    } else if (feedbackLower.includes("strongly faster at sorting 'white people' with 'bad words' and 'black people' with 'good words'")) {
        return `
            <h3 class="section-title">Implicit Association Test (IAT) Results</h3>
            <p class="score">Your Raw IAT Feedback Results: <strong>Strong Automatic Preference for Black People Over White People</strong></p>
            <ul class="description-list">
                <li>You have a strong unconscious association favoring Black people. You were strongly faster at sorting "White people" with "Bad words" and "Black people" with "Good words" compared to the reverse during the test.</li>
            </ul>
        `;
    } else {
        // If no conditions match, display the error with raw feedback
        return `<b>Error:</b> Invalid IAT result.<br><strong>Raw IAT Feedback:</strong> ${iatFeedback}`;
    }
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
            background-image: url('https://your-landscape-background-image-url.jpg'); /* Replace with your desired landscape background image URL */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
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
    // Obtain the participant's Likert score and IAT feedback
    // ===========================
    // Obtain the participant's Likert score
    let likertScore = parseInt(global.likert.questions.likertQ.response); // Adjust the path if necessary
    // Obtain the participant's IAT feedback
    let iatFeedback = global.raceiat.feedback; // Ensure this path is correct
    // Debugging: Log the retrieved scores (can be removed after verification)
    console.log('Likert Score:', likertScore);
    console.log('IAT Feedback:', iatFeedback);
    // ===========================
    // Create and Append Elements
    // ===========================
    // Create Results Container
    const container = document.createElement('div');
    container.className = 'results-container';
    document.body.appendChild(container);
    // ---------------------------
    // Participant Results Title
    // ---------------------------
    const title = document.createElement('h1');
    title.className = 'section-title';
    title.textContent = 'Participant Results';
    container.appendChild(title);
    // ---------------------------
    // Thank You Paragraph
    // ---------------------------
    const thankYou = document.createElement('p');
    thankYou.style.fontSize = '1.5em';
    thankYou.style.textAlign = 'center';
    thankYou.textContent = 'Thank you for participating in this study. Below are your results from the Likert scale and the Implicit Association Test (IAT).';
    container.appendChild(thankYou);
    // ---------------------------
    // Likert Scale Results
    // ---------------------------
    const likertSection = document.createElement('div');
    // Likert Score
    const likertScoreHeader = document.createElement('h2');
    likertScoreHeader.className = 'section-title';
    likertScoreHeader.textContent = 'Your Likert scale self-perceived bias score is:';
    likertSection.appendChild(likertScoreHeader);
    const likertScoreDisplay = document.createElement('p');
    likertScoreDisplay.className = 'score';
    likertScoreDisplay.innerHTML = `<strong>${likertScore !== null ? likertScore : '---'}</strong>`;
    likertSection.appendChild(likertScoreDisplay);
    // Likert Description
    const likertDescription = document.createElement('ul');
    likertDescription.className = 'description-list';
    likertDescription.innerHTML = likertScore !== null ? likertScoreDescription(likertScore) : "<li>Please provide your Likert score.</li>";
    likertSection.appendChild(likertDescription);
    // Understanding Self-Perceived Bias
    if (likertScore !== null) {
        const understandingHeader = document.createElement('h3');
        understandingHeader.className = 'section-title';
        understandingHeader.textContent = 'Understanding Self-Perceived Bias';
        likertSection.appendChild(understandingHeader);
        const understandingList = document.createElement('ul');
        understandingList.className = 'description-list';
        understandingList.innerHTML = `
            <li>Recognizing your own biases is important for personal and professional growth.</li>
            <li>Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.</li>
            <li>Continuous learning and reflection can help you foster a more inclusive environment.</li>
        `;
        likertSection.appendChild(understandingList);
    }
    container.appendChild(likertSection);
    // ---------------------------
    // IAT Results
    // ---------------------------
    const iatSection = document.createElement('div');
    // IAT Feedback
    const iatFeedbackHeader = document.createElement('h2');
    iatFeedbackHeader.className = 'section-title';
    iatFeedbackHeader.textContent = 'Your Raw IAT Feedback Results:';
    iatSection.appendChild(iatFeedbackHeader);
    const iatFeedbackDisplay = document.createElement('p');
    iatFeedbackDisplay.className = 'score';
    iatFeedbackDisplay.innerHTML = `<strong>${iatFeedback !== null ? iatFeedback : '---'}</strong>`;
    iatSection.appendChild(iatFeedbackDisplay);
    // IAT Description
    const iatDescription = document.createElement('ul');
    iatDescription.className = 'description-list';
    iatDescription.innerHTML = iatFeedback !== null ? iatScoreDescription(iatFeedback) : "<li>Please provide your IAT feedback category.</li>";
    iatSection.appendChild(iatDescription);
    // Disclaimer
    if (iatFeedback !== null) {
        const disclaimer = document.createElement('p');
        disclaimer.className = 'disclaimer';
        disclaimer.textContent = 'Disclaimer: These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.';
        iatSection.appendChild(disclaimer);
    }
    // Understanding Your IAT Results
    if (iatFeedback !== null) {
        const understandingIATHeader = document.createElement('h3');
        understandingIATHeader.className = 'section-title';
        understandingIATHeader.textContent = 'Understanding Your IAT Results';
        iatSection.appendChild(understandingIATHeader);
        const understandingIATList = document.createElement('ul');
        understandingIATList.className = 'description-list';
        understandingIATList.innerHTML = `
            <li>Implicit vs. Explicit Attitudes: Remember that implicit biases are unconscious and may not align with your conscious beliefs or values.</li>
            <li>Commonality of Biases: Implicit biases are common and result from societal influences, cultural exposure, and personal experiences.</li>
            <li>Opportunity for Growth: Recognizing implicit biases provides an opportunity to reflect and take steps toward mitigating their impact.</li>
        `;
        iatSection.appendChild(understandingIATList);
    }
    container.appendChild(iatSection);
    // ---------------------------
    // Resources for Further Understanding
    // ---------------------------
    if (iatFeedback !== null) {
        const resourcesHeader = document.createElement('h3');
        resourcesHeader.className = 'section-title';
        resourcesHeader.textContent = 'Resources for Further Understanding';
        container.appendChild(resourcesHeader);
        const resourcesList = document.createElement('ul');
        resourcesList.className = 'description-list';
        resourcesList.innerHTML = `
            <li><strong>Project Implicit: implicit.harvard.edu</strong>
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
        `;
        container.appendChild(resourcesList);
    }
    // ---------------------------
    // Disclaimer (If not already added)
    // ---------------------------
    if (iatFeedback === null) {
        const disclaimer = document.createElement('p');
        disclaimer.className = 'disclaimer';
        disclaimer.textContent = 'Disclaimer: These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.';
        container.appendChild(disclaimer);
    }
    // ---------------------------
    // Encouragement for Continued Growth
    // ---------------------------
    const encouragement = document.createElement('div');
    encouragement.className = 'encouragement';
    encouragement.textContent = 'Your willingness to engage with these assessments reflects a commitment to growth and equity. Remember, bias is not a fixed trait—your efforts can lead to meaningful change. Every step you take contributes to a more inclusive and fair educational system!';
    container.appendChild(encouragement);
    // ===========================
    // Dynamic Content Handling
    // ===========================
    /**
     * Updates the Likert Scale score and corresponding feedback.
     * @param {number} score - The Likert score to update.
     */
    function updateLikertScore(score) {
        likertScoreDisplay.innerHTML = `<strong>${score}</strong>`;
        likertDescription.innerHTML = likertScoreDescription(score);
        // Update Understanding Self-Perceived Bias
        if (!likertSection.querySelector('.section-title') || likertSection.querySelector('.section-title').textContent !== 'Understanding Self-Perceived Bias') {
            const understandingHeader = document.createElement('h3');
            understandingHeader.className = 'section-title';
            understandingHeader.textContent = 'Understanding Self-Perceived Bias';
            likertSection.appendChild(understandingHeader);
            const understandingList = document.createElement('ul');
            understandingList.className = 'description-list';
            understandingList.innerHTML = `
                <li>Recognizing your own biases is important for personal and professional growth.</li>
                <li>Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.</li>
                <li>Continuous learning and reflection can help you foster a more inclusive environment.</li>
            `;
            likertSection.appendChild(understandingList);
        }
    }
    /**
     * Updates the IAT Feedback explanation based on the selected feedback category.
     * @param {string} feedbackCategory - The IAT feedback category to update.
     */
    function updateIATFeedback(feedbackCategory) {
        iatFeedbackDisplay.innerHTML = `<strong>${feedbackCategory}</strong>`;
        iatDescription.innerHTML = iatScoreDescription(feedbackCategory);
        // Update Disclaimer
        if (!iatSection.querySelector('.disclaimer')) {
            const disclaimer = document.createElement('p');
            disclaimer.className = 'disclaimer';
            disclaimer.textContent = 'Disclaimer: These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.';
            iatSection.appendChild(disclaimer);
        }
        // Update Understanding Your IAT Results
        if (!iatSection.querySelectorAll('.section-title')[1] || iatSection.querySelectorAll('.section-title')[1].textContent !== 'Understanding Your IAT Results') {
            const understandingIATHeader = document.createElement('h3');
            understandingIATHeader.className = 'section-title';
            understandingIATHeader.textContent = 'Understanding Your IAT Results';
            iatSection.appendChild(understandingIATHeader);
            const understandingIATList = document.createElement('ul');
            understandingIATList.className = 'description-list';
            understandingIATList.innerHTML = `
                <li>Implicit vs. Explicit Attitudes: Remember that implicit biases are unconscious and may not align with your conscious beliefs or values.</li>
                <li>Commonality of Biases: Implicit biases are common and result from societal influences, cultural exposure, and personal experiences.</li>
                <li>Opportunity for Growth: Recognizing implicit biases provides an opportunity to reflect and take steps toward mitigating their impact.</li>
            `;
            iatSection.appendChild(understandingIATList);
        }
        // Update Resources for Further Understanding
        if (!container.querySelector('.section-title') || container.querySelector('.section-title').textContent !== 'Resources for Further Understanding') {
            const resourcesHeader = document.createElement('h3');
            resourcesHeader.className = 'section-title';
            resourcesHeader.textContent = 'Resources for Further Understanding';
            container.appendChild(resourcesHeader);
            const resourcesList = document.createElement('ul');
            resourcesList.className = 'description-list';
            resourcesList.innerHTML = `
                <li><strong>Project Implicit: implicit.harvard.edu</strong>
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
            `;
            container.appendChild(resourcesList);
        }
    }
    // ===========================
    // Initialize Page with Dynamic Data
    // ===========================
    // Retrieve the participant's Likert score and IAT feedback
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
    // Update Likert Score and IAT Feedback
    if (likertScore !== null) {
        updateLikertScore(likertScore);
    }
    if (iatFeedback !== null) {
        updateIATFeedback(iatFeedback);
    }
    // ===========================
    // Optional: User Input Form (If Data is Missing)
    // ===========================
    // If likertScore or iatFeedback is missing, provide a form for manual input
    if (likertScore === null || iatFeedback === null) {
        const formHeader = document.createElement('h2');
        formHeader.textContent = 'Please Enter Your Results';
        formHeader.style.fontSize = '2em';
        formHeader.style.textAlign = 'center';
        container.appendChild(formHeader);
        const form = document.createElement('form');
        form.className = 'input-form';
        // Likert Score Input
        const likertLabel = document.createElement('label');
        likertLabel.setAttribute('for', 'likert');
        likertLabel.textContent = 'Likert Score (6-30):';
        form.appendChild(likertLabel);
        const likertInput = document.createElement('input');
        likertInput.setAttribute('type', 'number');
        likertInput.setAttribute('id', 'likert');
        likertInput.setAttribute('name', 'likert');
        likertInput.setAttribute('min', '6');
        likertInput.setAttribute('max', '30');
        likertInput.setAttribute('required', true);
        form.appendChild(likertInput);
        // IAT Feedback Select
        const iatLabel = document.createElement('label');
        iatLabel.setAttribute('for', 'iat');
        iatLabel.textContent = 'IAT Feedback Category:';
        form.appendChild(iatLabel);
        const iatSelect = document.createElement('select');
        iatSelect.setAttribute('id', 'iat');
        iatSelect.setAttribute('name', 'iat');
        iatSelect.setAttribute('required', true);
        const defaultOption = document.createElement('option');
        defaultOption.setAttribute('value', '');
        defaultOption.textContent = '--Select--';
        iatSelect.appendChild(defaultOption);
        const options = [
            'Strong Automatic Preference for European Americans Over African Americans',
            'Moderate Automatic Preference for European Americans Over African Americans',
            'Slight Automatic Preference for European Americans Over African Americans',
            'Little to No Automatic Preference Between European Americans and African Americans',
            'Slight Automatic Preference for African Americans Over European Americans',
            'Moderate Automatic Preference for African Americans Over European Americans',
            'Strong Automatic Preference for African Americans Over European Americans'
        ];
        options.forEach(optionText => {
            const option = document.createElement('option');
            option.setAttribute('value', optionText);
            option.textContent = optionText;
            iatSelect.appendChild(option);
        });
        form.appendChild(iatSelect);
        // Submit Button
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Submit';
        form.appendChild(submitButton);
        container.appendChild(form);
        // Handle Form Submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload
            const enteredLikert = parseInt(document.getElementById('likert').value);
            const enteredIAT = document.getElementById('iat').value;
            // Validate Inputs
            if (isNaN(enteredLikert) || enteredLikert < 6 || enteredLikert > 30) {
                alert('Please enter a valid Likert score between 6 and 30.');
                return;
            }
            if (!enteredIAT) {
                alert('Please select an IAT feedback category.');
                return;
            }
            // Update Results
            updateLikertScore(enteredLikert);
            updateIATFeedback(enteredIAT);
            // Hide the Form
            form.style.display = 'none';
        });
    }
    // ===========================
    // End of Script
    // ===========================
});

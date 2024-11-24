/* 
 * Display Results from Likert Scale and Implicit Association Test (IAT)
 */
// Immediately Invoked Function Expression (IIFE) to encapsulate the code
(function() {
    // ===========================
    // Configuration and Data
    // ===========================
    // Default Scores (if not provided via URL or form)
    let likertScore = null;
    let iatFeedback = null;
    // Feedback Definitions for Likert Scale
    const likertFeedbackDefinitions = [
        {
            range: [6, 12],
            description: "Scores between 6-12: You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment."
        },
        {
            range: [13, 18],
            description: "Scores between 13-18: You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom."
        },
        {
            range: [19, 24],
            description: "Scores between 19-24: You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable."
        },
        {
            range: [25, 30],
            description: "Scores between 25-30: You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary."
        }
    ];
    // Feedback Definitions for IAT
    const iatFeedbackDefinitions = {
        'Strong Automatic Preference for European Americans Over African Americans': "You have a strong unconscious association favoring European Americans. You more quickly associated \"European Americans\" with positive words and \"African Americans\" with negative words during the test.",
        'Moderate Automatic Preference for European Americans Over African Americans': "You have a moderate unconscious association favoring European Americans. You more quickly associated \"European Americans\" with positive words and \"African Americans\" with negative words during the test.",
        'Slight Automatic Preference for European Americans Over African Americans': "You have a slight unconscious association favoring European Americans. You slightly quicker associated \"European Americans\" with positive words and \"African Americans\" with negative words during the test.",
        'Little to No Automatic Preference Between European Americans and African Americans': "You do not exhibit a significant implicit preference for either racial group. Your associations between both groups and positive or negative words were similar during the test.",
        'Slight Automatic Preference for African Americans Over European Americans': "You have a slight unconscious association favoring African Americans. You more quickly associated \"African Americans\" with positive words and \"European Americans\" with negative words during the test.",
        'Moderate Automatic Preference for African Americans Over European Americans': "You have a moderate unconscious association favoring African Americans. You more quickly associated \"African Americans\" with positive words and \"European Americans\" with negative words during the test.",
        'Strong Automatic Preference for African Americans Over European Americans': "You have a strong unconscious association favoring African Americans. You more quickly associated \"African Americans\" with positive words and \"European Americans\" with negative words during the test."
    };
    // Encouragement Text
    const encouragementText = "Your willingness to engage with these assessments reflects a commitment to growth and equity. Remember, bias is not a fixed trait—your efforts can lead to meaningful change. Every step you take contributes to a more inclusive and fair educational system!";
    // ===========================
    // Helper Functions
    // ===========================
    /**
     * Creates and returns an HTML element with specified tag, class, and innerHTML.
     * @param {string} tag - The HTML tag to create.
     * @param {string} className - The class name(s) to assign.
     * @param {string} html - The innerHTML content.
     * @returns {HTMLElement} The created HTML element.
     */
    function createElement(tag, className, html) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (html) element.innerHTML = html;
        return element;
    }
    /**
     * Injects CSS styles into the document head.
     * @param {string} css - The CSS string to inject.
     */
    function injectStyles(css) {
        const style = createElement('style', null, css);
        document.head.appendChild(style);
    }
    /**
     * Retrieves the Likert Scale description based on the participant's score.
     * @param {number} score - The Likert score.
     * @returns {string} The corresponding feedback description.
     */
    function likertScoreDescription(score) {
        for (let feedback of likertFeedbackDefinitions) {
            if (score >= feedback.range[0] && score <= feedback.range[1]) {
                return feedback.description;
            }
        }
        return "Score out of range.";
    }
    /**
     * Retrieves the IAT feedback explanation based on the feedback category.
     * @param {string} feedbackCategory - The IAT feedback category.
     * @returns {string} The corresponding feedback explanation.
     */
    function iatFeedbackDescription(feedbackCategory) {
        return iatFeedbackDefinitions[feedbackCategory] || "Feedback category not recognized.";
    }
    /**
     * Parses URL query parameters and returns an object.
     * @returns {Object} Key-value pairs of query parameters.
     */
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (let pair of pairs) {
            if (pair === "") continue;
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value || "");
        }
        return params;
    }
    // ===========================
    // CSS Styles
    // ===========================
    const styles = `
        /* General Styles */
        body {
            font-family: 'Times New Roman', Times, serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        /* Container for all content */
        .container {
            max-width: 1200px; /* Adjusted for landscape */
            margin: auto;
            background: #fff;
            padding: 40px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            height: 100vh; /* Full viewport height */
            overflow-y: auto; /* Enable scrolling if content overflows */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        /* Title */
        .main-title {
            text-align: center;
            font-size: 3em;
            margin-bottom: 20px;
        }
        /* Thank You Paragraph */
        .thank-you {
            text-align: center;
            font-size: 1.5em;
            margin-bottom: 40px;
        }
        /* Sections Container */
        .sections {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        /* Individual Section */
        .section {
            /* Removed flex properties for single column */
        }
        /* Section Titles */
        .section-title {
            font-size: 2em;
            margin-bottom: 20px;
            color: #333;
            text-align: center;
        }
        /* Score Paragraph */
        .score {
            font-size: 1.5em;
            margin-bottom: 20px;
            text-align: center;
        }
        /* Feedback Description */
        .feedback-description {
            font-size: 1.2em;
            margin-bottom: 20px;
            text-align: justify;
        }
        /* Subsection Titles */
        .subsection-title {
            font-size: 1.6em;
            margin-top: 30px;
            margin-bottom: 10px;
            color: #444;
            font-weight: bold;
        }
        /* Subtext Paragraphs */
        .subtext {
            font-size: 1.2em;
            margin-bottom: 20px;
            text-align: justify;
            padding-left: 20px;
        }
        /* Disclaimer */
        .disclaimer {
            font-size: 1em;
            font-weight: bold;
            margin-top: 20px;
            text-align: justify;
            padding-left: 20px;
        }
        /* Resources */
        .resources-title {
            font-size: 1.4em;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .resources-list {
            list-style-type: disc;
            padding-left: 40px;
            margin-bottom: 20px;
        }
        .resources-list li {
            margin-bottom: 10px;
        }
        .resources-list li ul {
            list-style-type: circle;
            padding-left: 20px;
            margin-top: 5px;
        }
        /* Encouragement Section */
        .encouragement {
            font-size: 1.5em;
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background-color: #e7f3fe;
            border-left: 6px solid #2196F3;
        }
        /* Responsive Design */
        @media (max-width: 1200px) {
            .container {
                padding: 20px;
            }
            .main-title {
                font-size: 2.5em;
            }
            .thank-you {
                font-size: 1.2em;
            }
            .section-title {
                font-size: 1.8em;
            }
            .score {
                font-size: 1.3em;
            }
            .subsection-title {
                font-size: 1.4em;
            }
            .feedback-description, .subtext, .disclaimer {
                font-size: 1em;
            }
            .encouragement {
                font-size: 1.2em;
            }
        }
        @media (max-width: 600px) {
            .main-title {
                font-size: 2em;
            }
            .thank-you {
                font-size: 1em;
            }
            .section-title {
                font-size: 1.5em;
            }
            .score {
                font-size: 1em;
            }
            .subsection-title {
                font-size: 1.2em;
            }
            .feedback-description, .subtext, .disclaimer {
                font-size: 0.9em;
            }
            .encouragement {
                font-size: 1em;
            }
        }
    `;
    // Inject the CSS styles into the document
    injectStyles(styles);
    // ===========================
    // Create and Append Elements
    // ===========================
    // Create Main Container
    const containerDiv = createElement('div', 'container', null);
    document.body.appendChild(containerDiv);
    // ---------------------------
    // Participant Results Title
    // ---------------------------
    const title = createElement('h1', 'main-title', 'Participant Results');
    containerDiv.appendChild(title);
    // ---------------------------
    // Thank You Paragraph
    // ---------------------------
    const thankYou = createElement('p', 'thank-you', 'Thank you for participating in this study. Below are your results from the Likert scale and the Implicit Association Test (IAT).');
    containerDiv.appendChild(thankYou);
    // ---------------------------
    // Sections Container (Likert and IAT)
    // ---------------------------
    const sectionsDiv = createElement('div', 'sections', null);
    containerDiv.appendChild(sectionsDiv);
    // ---------------------------
    // Likert Scale Results Section
    // ---------------------------
    const likertSection = createElement('div', 'section', null);
    // Section Title
    const likertTitle = createElement('h2', 'section-title', 'Your Likert scale self-perceived bias score is:');
    likertSection.appendChild(likertTitle);
    // Score Display
    const likertScoreDisplay = createElement('p', 'score', `<strong>${likertScore !== null ? likertScore : '---'}</strong>`);
    likertSection.appendChild(likertScoreDisplay);
    // Corresponding Explanation
    const likertExplanation = createElement('p', 'feedback-description', likertScore !== null ? likertScoreDescription(likertScore) : "Please provide your Likert score.");
    likertSection.appendChild(likertExplanation);
    // Understanding Self-Perceived Bias Subsection
    if (likertScore !== null) {
        const understandingLikertTitle = createElement('h3', 'subsection-title', 'Understanding Self-Perceived Bias');
        likertSection.appendChild(understandingLikertTitle);
        const understandingLikertList = createElement('ul', 'subtext', null);
        const likertBullets = [
            "Recognizing your own biases is important for personal and professional growth.",
            "Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.",
            "Continuous learning and reflection can help you foster a more inclusive environment."
        ];
        likertBullets.forEach(bullet => {
            const li = createElement('li', null, bullet);
            understandingLikertList.appendChild(li);
        });
        likertSection.appendChild(understandingLikertList);
    }
    // Append Likert Section to Sections Container
    sectionsDiv.appendChild(likertSection);
    // ---------------------------
    // Implicit Association Test Results Section
    // ---------------------------
    const iatSection = createElement('div', 'section', null);
    // Section Title
    const iatTitle = createElement('h2', 'section-title', 'Raw IAT Feedback:');
    iatSection.appendChild(iatTitle);
    // Feedback Display
    const iatFeedbackDisplay = createElement('p', 'score', `<strong>${iatFeedback !== null ? iatFeedback : '---'}</strong>`);
    iatSection.appendChild(iatFeedbackDisplay);
    // Corresponding Explanation
    const iatExplanation = createElement('p', 'feedback-description', iatFeedback !== null ? iatFeedbackDescription(iatFeedback) : "Please provide your IAT feedback category.");
    iatSection.appendChild(iatExplanation);
    // Disclaimer
    if (iatFeedback !== null) {
        const disclaimer = createElement('p', 'disclaimer', 'These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.');
        iatSection.appendChild(disclaimer);
    }
    // Understanding Your IAT Results Subsection
    if (iatFeedback !== null) {
        const understandingIATTitle = createElement('h3', 'subsection-title', 'Understanding Your IAT Results');
        iatSection.appendChild(understandingIATTitle);
        const understandingIATList = createElement('ul', 'subtext', null);
        const understandingIATBullets = [
            "Implicit vs. Explicit Attitudes: Remember that implicit biases are unconscious and may not align with your conscious beliefs or values.",
            "Commonality of Biases: Implicit biases are common and result from societal influences, cultural exposure, and personal experiences.",
            "Opportunity for Growth: Recognizing implicit biases provides an opportunity to reflect and take steps toward mitigating their impact."
        ];
        understandingIATBullets.forEach(bullet => {
            const li = createElement('li', null, bullet);
            understandingIATList.appendChild(li);
        });
        iatSection.appendChild(understandingIATList);
        // Resources for Further Understanding Subsection
        const resourcesTitle = createElement('h3', 'subsection-title', 'Resources for Further Understanding');
        iatSection.appendChild(resourcesTitle);
        const resourcesList = createElement('ul', 'resources-list', null);
        const resourcesItems = [
            {
                title: "Project Implicit: implicit.harvard.edu",
                text: "Explore more about the IAT and view examples of how results are presented."
            },
            {
                title: "Understanding Implicit Bias: Kirwan Institute",
                text: "Offers resources on the impact of implicit bias and strategies for addressing it."
            },
            {
                title: "Implicit Bias in Education: Teaching Tolerance",
                text: "Provides materials for educators to recognize and reduce bias in schools."
            }
        ];
        resourcesItems.forEach(resource => {
            const li = createElement('li', null, `<strong>${resource.title}</strong>
                <ul>
                    <li>${resource.text}</li>
                </ul>`);
            resourcesList.appendChild(li);
        });
        iatSection.appendChild(resourcesList);
    }
    // Append IAT Section to Sections Container
    sectionsDiv.appendChild(iatSection);
    // ---------------------------
    // Encouragement for Continued Growth
    // ---------------------------
    const encouragementDiv = createElement('div', 'encouragement', encouragementText);
    containerDiv.appendChild(encouragementDiv);
    // ===========================
    // Dynamic Content Handling
    // ===========================
    /**
     * Updates the Likert Scale score and corresponding feedback.
     * @param {number} score - The Likert score to update.
     */
    function updateLikertScore(score) {
        likertScoreDisplay.innerHTML = `<strong>${score}</strong>`;
        likertExplanation.textContent = likertScoreDescription(score);
        // Append Understanding Self-Perceived Bias Subsection if not already present
        if (!likertSection.querySelector('.subsection-title')) {
            const understandingLikertTitle = createElement('h3', 'subsection-title', 'Understanding Self-Perceived Bias');
            likertSection.appendChild(understandingLikertTitle);
            const understandingLikertList = createElement('ul', 'subtext', null);
            const likertBullets = [
                "Recognizing your own biases is important for personal and professional growth.",
                "Increased self-awareness allows you to reflect on how your beliefs and actions may impact others.",
                "Continuous learning and reflection can help you foster a more inclusive environment."
            ];
            likertBullets.forEach(bullet => {
                const li = createElement('li', null, bullet);
                understandingLikertList.appendChild(li);
            });
            likertSection.appendChild(understandingLikertList);
        }
    }
    /**
     * Updates the IAT Feedback explanation based on the selected feedback category.
     * @param {string} feedbackCategory - The IAT feedback category to update.
     */
    function updateIATFeedback(feedbackCategory) {
        iatFeedbackDisplay.innerHTML = `<strong>${feedbackCategory}</strong>`;
        iatExplanation.textContent = iatFeedbackDescription(feedbackCategory);
        // Append Disclaimer and Understanding Your IAT Results Subsections if not already present
        if (!iatSection.querySelector('.disclaimer')) {
            const disclaimer = createElement('p', 'disclaimer', 'These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.');
            iatSection.appendChild(disclaimer);
        }
        if (!iatSection.querySelector('.subsection-title')) {
            const understandingIATTitle = createElement('h3', 'subsection-title', 'Understanding Your IAT Results');
            iatSection.appendChild(understandingIATTitle);
            const understandingIATList = createElement('ul', 'subtext', null);
            const understandingIATBullets = [
                "Implicit vs. Explicit Attitudes: Remember that implicit biases are unconscious and may not align with your conscious beliefs or values.",
                "Commonality of Biases: Implicit biases are common and result from societal influences, cultural exposure, and personal experiences.",
                "Opportunity for Growth: Recognizing implicit biases provides an opportunity to reflect and take steps toward mitigating their impact."
            ];
            understandingIATBullets.forEach(bullet => {
                const li = createElement('li', null, bullet);
                understandingIATList.appendChild(li);
            });
            iatSection.appendChild(understandingIATList);
            // Append Resources for Further Understanding Subsection
            const resourcesTitle = createElement('h3', 'subsection-title', 'Resources for Further Understanding');
            iatSection.appendChild(resourcesTitle);

            const resourcesList = createElement('ul', 'resources-list', null);
            const resourcesItems = [
                {
                    title: "Project Implicit: implicit.harvard.edu",
                    text: "Explore more about the IAT and view examples of how results are presented."
                },
                {
                    title: "Understanding Implicit Bias: Kirwan Institute",
                    text: "Offers resources on the impact of implicit bias and strategies for addressing it."
                },
                {
                    title: "Implicit Bias in Education: Teaching Tolerance",
                    text: "Provides materials for educators to recognize and reduce bias in schools."
                }
            ];
            resourcesItems.forEach(resource => {
                const li = createElement('li', null, `<strong>${resource.title}</strong>
                    <ul>
                        <li>${resource.text}</li>
                    </ul>`);
                resourcesList.appendChild(li);
            });
            iatSection.appendChild(resourcesList);
        }
    }
    // ===========================
    // Initialize Page with Dynamic Data
    // ===========================
    // Retrieve Query Parameters
    const queryParams = getQueryParams();
    likertScore = queryParams['likert'] ? parseInt(queryParams['likert']) : null;
    iatFeedback = queryParams['iat'] ? queryParams['iat'] : null;
    // Validate Likert Score
    if (likertScore !== null && (isNaN(likertScore) || likertScore < 6 || likertScore > 30)) {
        alert('Invalid Likert score provided. Please ensure it is a number between 6 and 30.');
        likertScore = null;
    }
    // Update Likert Score and IAT Feedback if available
    if (likertScore !== null) {
        updateLikertScore(likertScore);
    }
    if (iatFeedback !== null) {
        updateIATFeedback(iatFeedback);
    }
    // ===========================
    // Optional: User Input Form (If Query Params Are Absent)
    // ===========================
    if (likertScore === null || iatFeedback === null) {
        // Create Form
        const form = createElement('form', 'input-form', `
            <h2>Please Enter Your Results</h2>
            <label for="likert">Likert Score (6-30):</label><br>
            <input type="number" id="likert" name="likert" min="6" max="30" required><br><br>
            <label for="iat">IAT Feedback Category:</label><br>
            <select id="iat" name="iat" required>
                <option value="">--Select--</option>
                <option value="Strong Automatic Preference for European Americans Over African Americans">Strong Automatic Preference for European Americans Over African Americans</option>
                <option value="Moderate Automatic Preference for European Americans Over African Americans">Moderate Automatic Preference for European Americans Over African Americans</option>
                <option value="Slight Automatic Preference for European Americans Over African Americans">Slight Automatic Preference for European Americans Over African Americans</option>
                <option value="Little to No Automatic Preference Between European Americans and African Americans">Little to No Automatic Preference Between European Americans and African Americans</option>
                <option value="Slight Automatic Preference for African Americans Over European Americans">Slight Automatic Preference for African Americans Over European Americans</option>
                <option value="Moderate Automatic Preference for African Americans Over European Americans">Moderate Automatic Preference for African Americans Over European Americans</option>
                <option value="Strong Automatic Preference for African Americans Over European Americans">Strong Automatic Preference for African Americans Over European Americans</option>
            </select><br><br>
            <button type="submit">Submit</button>
        `);
        containerDiv.appendChild(form);
        // Handle Form Submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload
            const scoreInput = document.getElementById('likert').value;
            const feedbackInput = document.getElementById('iat').value;
            const score = parseInt(scoreInput);
            const feedback = feedbackInput;
            // Validate Inputs
            if (isNaN(score) || score < 6 || score > 30) {
                alert('Please enter a valid Likert score between 6 and 30.');
                return;
            }
            if (!feedback) {
                alert('Please select an IAT feedback category.');
                return;
            }
            // Update Scores
            likertScore = score;
            iatFeedback = feedback;
            updateLikertScore(likertScore);
            updateIATFeedback(iatFeedback);
            // Hide the form after submission
            form.style.display = 'none';
        });
    }
})();

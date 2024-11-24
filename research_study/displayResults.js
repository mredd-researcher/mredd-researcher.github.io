/* 
Displaying Results from Explicit and Implicit Bias Tests
*/
// Immediately Invoked Function Expression (IIFE) to encapsulate the code
(function() {
    // ===========================
    // Configuration and Data
    // ===========================
    // Example Scores (Replace these with actual dynamic values as needed)
    const likertScore = 20; // Likert Scale Score (Range: 6-30)
    const iatFeedback = 'Moderate Automatic Preference for European Americans Over African Americans'; // IAT Feedback Category

    // Feedback Definitions for Likert Scale
    const likertFeedbackDefinitions = [
        {
            range: [6, 12],
            description: "You have a low level of self-awareness and commitment to equity. You may benefit from increasing your awareness of potential biases and exploring ways to promote equity in your teaching practices. Recognizing and acknowledging biases is a crucial step toward fostering an inclusive learning environment."
        },
        {
            range: [13, 18],
            description: "You have a moderate level of self-awareness and commitment to equity. You are somewhat aware of potential biases and are beginning to incorporate equity into your teaching practices. There are opportunities to deepen your understanding and further reduce biases in the classroom."
        },
        {
            range: [19, 24],
            description: "You have a high level of self-awareness and commitment to equity. You are actively aware of potential biases and are working to promote equity in your teaching practices. Your commitment to fostering an inclusive learning environment is commendable."
        },
        {
            range: [25, 30],
            description: "You have a very high level of self-awareness and commitment to equity. You are deeply committed to promoting equity in your teaching practices and creating an inclusive and fair learning environment. Your dedication is exemplary."
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
    // Understanding IAT Results Content
    const understandingIATContent = [
        {
            title: "Implicit vs. Explicit Attitudes:",
            text: "Implicit biases are unconscious and may not align with your conscious beliefs or values."
        },
        {
            title: "Commonality of Biases:",
            text: "Implicit biases are common and result from societal influences, cultural exposure, and personal experiences."
        },
        {
            title: "Opportunity for Growth:",
            text: "Recognizing implicit biases provides an opportunity to reflect and take steps toward mitigating their impact."
        }
    ];
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
     * Retrieves the understanding IAT content.
     * @returns {Array} Array of objects containing title and text.
     */
    function getUnderstandingIATContent() {
        return understandingIATContent;
    }
    // ===========================
    // CSS Styles
    // ===========================
    const styles = `
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
            overflow-x: hidden;
        }
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            max-width: 1600px; /* Increased width for landscape */
            margin: auto;
            background: #fff;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            gap: 40px; /* Space between Likert and IAT sections */
        }
        /* Section Styles */
        .section {
            flex: 1;
            min-width: 400px; /* Ensures readability on smaller screens */
        }
        /* Section Titles */
        .section-title {
            font-size: 2em; /* Bigger font */
            margin-bottom: 20px;
            color: #333;
            text-align: center;
        }
        /* Subsection Titles */
        .subsection-title {
            font-size: 1.5em; /* Slightly smaller than section titles */
            margin-top: 30px;
            margin-bottom: 10px;
            color: #444;
            font-weight: bold;
        }
        /* Score Paragraph */
        .score {
            font-size: 1.2em;
            margin-bottom: 20px;
        }
        /* Feedback Description */
        .feedback-description {
            font-size: 1em;
            margin-bottom: 20px;
            text-align: justify;
        }
        /* Understanding and Encouragement Sections */
        .subtext {
            font-size: 1em;
            margin-bottom: 20px;
            text-align: justify;
        }
        /* Bold Text */
        strong {
            font-weight: bold;
        }
        /* Responsive Design */
        @media (max-width: 1200px) {
            .container {
                flex-direction: column;
                align-items: center;
            }
            .section {
                width: 100%;
                max-width: 800px;
            }
        }
        @media (max-width: 600px) {
            .section-title {
                font-size: 1.5em;
            }
            .subsection-title {
                font-size: 1.2em;
            }
            .score {
                font-size: 1em;
            }
            .feedback-description, .subtext {
                font-size: 0.9em;
            }
        }
    `;
    // Inject the CSS styles into the document
    injectStyles(styles);
    // ===========================
    // Create and Append Elements
    // ===========================
    // Create Main Container
    const container = createElement('div', 'container', null);
    document.body.appendChild(container);
    // ---------------------------
    // Likert Scale Results Section
    // ---------------------------
    const likertSection = createElement('div', 'section', null);
    // Section Title
    const likertTitle = createElement('h1', 'section-title', 'Likert Scale Results');
    likertSection.appendChild(likertTitle);
    // Likert Score Paragraph
    const likertScoreParagraph = createElement('p', 'score', `Your Likert Scale Self-Perceived Bias Score is <strong>${likertScore}</strong>`);
    likertSection.appendChild(likertScoreParagraph);
    // Likert Feedback Description
    const likertDescription = createElement('p', 'feedback-description', likertScoreDescription(likertScore));
    likertSection.appendChild(likertDescription);
    // Understanding Your Results Subsection
    const understandingResultsTitle = createElement('h2', 'subsection-title', 'Understanding Your Results');
    likertSection.appendChild(understandingResultsTitle);
    const understandingResultsParagraph = createElement('p', 'subtext', 
        "The Likert Scale assesses your self-perceived awareness of bias and your commitment to equity, while the Implicit Association Test (IAT) evaluates unconscious associations that may influence your behaviors. Together, these tools provide a holistic view of your equity practices and areas for growth. Use these results as an opportunity to reflect on your practices and take steps toward fostering a more inclusive environment."
    );
    likertSection.appendChild(understandingResultsParagraph);
    container.appendChild(likertSection);
    // ---------------------------------
    // Implicit Association Test Results
    // ---------------------------------
    const iatSection = createElement('div', 'section', null);
    // Section Title
    const iatTitle = createElement('h1', 'section-title', 'Implicit Association Test Results');
    iatSection.appendChild(iatTitle);
    // IAT Feedback Paragraph
    const iatFeedbackParagraph = createElement('p', 'score', `Raw IAT Feedback: <strong>${iatFeedback}</strong>`);
    iatSection.appendChild(iatFeedbackParagraph);
    // IAT Feedback Description
    const iatDescription = createElement('p', 'feedback-description', iatFeedbackDescription(iatFeedback));
    iatSection.appendChild(iatDescription);
    // Understanding Your IAT Results Subsection
    const understandingIATTitle = createElement('h2', 'subsection-title', 'Understanding Your IAT Results');
    iatSection.appendChild(understandingIATTitle);
    const understandingIATList = createElement('ul', 'subtext', null);
    getUnderstandingIATContent().forEach(item => {
        const li = createElement('li', null, `<strong>${item.title}</strong> ${item.text}`);
        understandingIATList.appendChild(li);
    });
    iatSection.appendChild(understandingIATList);
    // Encouragement for Continued Growth Subsection
    const encouragementTitle = createElement('h2', 'subsection-title', 'Encouragement for Continued Growth');
    iatSection.appendChild(encouragementTitle);
    const encouragementParagraph = createElement('p', 'subtext', encouragementText);
    iatSection.appendChild(encouragementParagraph);
    container.appendChild(iatSection);
    // ===========================
    // Dynamic Content Handling
    // ===========================
    /**
     * Updates the Likert Scale score and corresponding feedback.
     * @param {number} score - The Likert score to update.
     */
    function updateLikertScore(score) {
        const scoreElement = likertScoreParagraph.querySelector('strong');
        scoreElement.textContent = score;
        // Update the description
        likertDescription.textContent = likertScoreDescription(score);
    }
    /**
     * Updates the IAT Feedback explanation based on the selected feedback category.
     * @param {string} feedbackCategory - The IAT feedback category to update.
     */
    function updateIATFeedback(feedbackCategory) {
        const feedbackElement = iatFeedbackParagraph.querySelector('strong');
        feedbackElement.textContent = feedbackCategory;
        // Update the description
        iatDescription.textContent = iatFeedbackDescription(feedbackCategory);
    }
    // ===========================
    // Example Dynamic Updates
    // ===========================
    // Uncomment the following lines to see dynamic updates in action
    // updateLikertScore(25);
    // updateIATFeedback('Slight Automatic Preference for African Americans Over European Americans');
})();

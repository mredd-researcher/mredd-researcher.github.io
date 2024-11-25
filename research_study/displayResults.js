/* 
Display Results from Likert Scale and Implicit Association Test (IAT)
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
            text: "Remember that implicit biases are unconscious and may not align with your conscious beliefs or values."
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
    // Resources for Further Understanding Content
    const resourcesContent = [
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
    /**
     * Retrieves the resources content.
     * @returns {Array} Array of objects containing title and text.
     */
    function getResourcesContent() {
        return resourcesContent;
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
            padding: 0;
            background-color: #f9f9f9;
        }
        /* Container for all content */
        .container {
            width: 100%;
            padding: 1in 1in 0; /* 1-inch left and right margins, 1-inch top margin */
            box-sizing: border-box; /* Ensures padding doesn't affect width */
            background: #fff;
            margin: 0 auto;
            padding-top: 40px;
            padding-bottom: 40px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        /* Title */
        .main-title {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        /* Thank You Paragraph */
        .thank-you {
            text-align: center;
            font-size: 1.5em;
            margin-bottom: 40px;
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
        }
        /* Disclaimer */
        .disclaimer {
            font-size: 1.0em;
            font-weight: bold;
            margin-top: 20px;
            text-align: justify;
        }
        /* Resources */
        .resources-title {
            font-size: 1.5em;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .resources-list {
            list-style-type: disc;
            padding-left: 20px;
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
        @media (max-width: 600px) {
            .main-title {
                font-size: 2em;
            }
            .thank-you {
                font-size: 1.2em;
            }
            .section-title {
                font-size: 1.8em;
            }
            .score {
                font-size: 1.2em;
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
    // Likert Scale Results Section
    // ---------------------------
    const likertSection = createElement('div', 'section', null);
    // Section Title
    const likertTitle = createElement('h2', 'section-title', 'Your self-perceived bias score is:');
    likertSection.appendChild(likertTitle);
    // Score Display
    const likertScoreDisplay = createElement('p', 'score', `<strong>${likertScore}</strong>`);
    likertSection.appendChild(likertScoreDisplay);
    // Corresponding Explanation
    const likertExplanation = createElement('p', 'feedback-description', likertScoreDescription(likertScore));
    likertSection.appendChild(likertExplanation);
    // Append Likert Section to Main Container
    containerDiv.appendChild(likertSection);
    // ---------------------------
    // Implicit Association Test Results Section
    // ---------------------------
    const iatSection = createElement('div', 'section', null);
    // Section Title
    const iatTitle = createElement('h2', 'section-title', 'Raw IAT Feedback:');
    iatSection.appendChild(iatTitle);
    // Feedback Display
    const iatFeedbackDisplay = createElement('p', 'score', `<strong>${iatFeedback}</strong>`);
    iatSection.appendChild(iatFeedbackDisplay);
    // Corresponding Explanation
    const iatExplanation = createElement('p', 'feedback-description', iatFeedbackDescription(iatFeedback));
    iatSection.appendChild(iatExplanation);
    // Disclaimer
    const disclaimer = createElement('p', 'disclaimer', 'These results are NOT a definitive assessment of your automatically-activated associations. The results may be influenced by variables related to the test (e.g., the category labels or particular items used to represent the categories on the IAT) or the person (e.g., how tired you are). The results are provided for educational purposes only.');
    iatSection.appendChild(disclaimer);
    // Append IAT Section to Main Container
    containerDiv.appendChild(iatSection);
    // ---------------------------
    // Encouragement for Continued Growth
    // ---------------------------
    const encouragementDiv = createElement('div', 'encouragement', encouragementText);
    containerDiv.appendChild(encouragementDiv);
})();

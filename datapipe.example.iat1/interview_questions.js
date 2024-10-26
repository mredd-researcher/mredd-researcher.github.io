/* 
Free-text "interview" questions
*/

define(['questAPI'], function (quest) {
    var API = new quest();

    API.addSequence([
        {
            header: 'Semi-Structured Interview Guide',
            text: '<b>Instructions:</b> Thank you for participating in this interview. Your responses provide valuable insights into how biases affect educational practices. Your responses are anonymous to everyone but the researcher.',
            submitText: 'Finish',
            // numbered: true,
            autoFocus: true,
            name: 'interviewPage', // for logs, does not appear on webpage
            decline: 'double',
            declineText: 'Decline to answer (click twice)',
            questions: [
                {
                    type: 'textarea',
                    stem: 'Were you surprised by your IAT results? Do you feel these results accurately reflect your levels of implicit bias? Why or why not?',
                    name: 'interview1', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'How do you think your self-perception of bias (as indicated by your responses on the Likert scale) compares with your IAT results? Can you describe any discrepancies?',
                    name: 'interview2', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'Can you provide an example of how you think implicit biases might have influenced your recommendations or interactions with students in the past?',
                    name: 'interview3', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'Now that you have completed the IAT, has your belief in the existence or influence of implicit biases in your teaching practices changed? If so, how?',
                    name: 'interview4', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'Given your IAT results, what specific strategies do you think you can implement to reduce the impact of biases in your decision-making moving forward?',
                    name: 'interview5', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'How do you see the role of professional development in helping teachers like yourself recognize and address implicit biases? What improvements or changes would you suggest?',
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
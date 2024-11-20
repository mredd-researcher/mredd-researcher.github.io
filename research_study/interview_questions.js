/* 
Free-text "interview" questions
*/

define(['questAPI'], function (quest) {
    var API = new quest();

    API.addSequence([
        {
            header: 'Semi-Structured Interview Guide',
            text: '<b>Instructions:</b> Thank you for participating in this interview. Your responses provide valuable insights into how biases affect educational practices. Your responses are anonymous to everyone.',
            submitText: 'Finish',
            // numbered: true,
            autoFocus: true,
            name: 'interviewPage', // for logs, does not appear on webpage
            decline: 'double',
            declineText: 'Decline to answer (click twice)',
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
                    stem: 'How do you think your self-perception of bias (as indicated by your responses on the Likert scale) compares with your IAT results? Can you describe any discrepancies?',
                    name: 'interview2', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'How do external factors, such as testing policies or administrative support, affect the way you recommend students for STEM courses?',
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
                    stem: 'Based on your IAT results, what specific strategies do you think might help reduce any potential biases in your decision-making moving forward?',
                    name: 'interview5', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'Do you think professional development can help teachers recognize and address implicit biases? If not, what alternative suggestions do you have?',
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

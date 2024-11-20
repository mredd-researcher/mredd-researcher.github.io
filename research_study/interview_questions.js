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
                    stem: 'How do you think your self-perception of implicit bias (as indicated by your responses on the Likert scale) compares with your IAT results? Do you believe any biases you posess are controlled in the classroom?',
                    name: 'interview2', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'How much do external factors like standardized test results and administrative influence (e.g., policy directives, feedback on your teaching, and administrative support with parents) shape your teaching practices and recommendations of your students?',
                    name: 'interview3', // for labeling in response data
                    rows: 4,
                    // minlength: 2, // ensures a minimum of 2 characters
                    // required: true,
                },
                {
                    type: 'textarea',
                    stem: 'After completing the IAT, has your belief in the existence or influence of implicit racial biases changed at all? If so, how?',
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
                    stem: 'Do you believe professional development initiatives can help teachers identifying and mitigate potential implicit biases? Why or why not? If not, are there other methods that might be more effective?',
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

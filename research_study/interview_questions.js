/* 
Free-text "interview" questions
*/

define(['questAPI'], function (quest) {
    var API = new quest();

    API.addSequence([
        {
            header: 'Semi-Structured Interview Guide',
            text: '<b>Instructions:</b> Thank you for participating! Your responses provide valuable insights into how biases affect educational practices. Your responses are anonymous to everyone.',
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
                    stem: 'How does your self-perception of implicit bias compare with your IAT results? Do you believe any biases you possess are controlled in the classroom?',
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

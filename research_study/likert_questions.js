/* 
Likert Scale questions measuring self-perceived bias
*/

define(['questAPI'], function (quest) {
    var API = new quest();

    API.addSequence([
        {
            header: 'Likert Scale for Self-Perceived Bias',
            text: '<b>Instructions:</b> Please indicate your level of agreement with the following statements.',
            submitText: 'Submit and Continue',
            name: 'likertPage', // for logs, does not appear on webpage
            decline: 'double',
            declineText: 'Decline to answer (click twice)',
            questions: [
                {
                    type: 'grid',
                    name: 'likertQ', // for labeling in response data
                    required: true,
                    rowStemCss: { textAlign: 'left' },
                    columns: [
                        { type: 'text', textProperty: 'left', css: { width: '50%', textAlign: 'left' } },
                        { stem: 'Strongly Disagree', css: { width: '10%' } },
                        { stem: 'Disagree', css: { width: '10%' } },
                        { stem: 'Neutral', css: { width: '10%' } },
                        { stem: 'Agree', css: { width: '10%' } },
                        { stem: 'Strongly Agree', css: { width: '10%' } },
                    ],
                    rows: [
                        { left: 'I am fully aware of any racial biases I may have when recommending students for STEM courses.' },
                        { left: 'I believe that my recommendations for students are entirely free from racial bias.' },
                        { left: 'I think it is possible to hold racial biases without being consciously aware of them.' },
                        { left: 'I actively work to identify and mitigate any racial biases I might have.' },
                        { left: 'I regularly reflect on my teaching practices to identify and address any potential biases.' },
                        { left: 'When making decisions, I consider whether my choices might be influenced by stereotypes or biases.' },
                    ],
                },
            ]
        },
    ]);

    return API.script;
});

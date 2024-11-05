/* 
Likert Scale questions measuring self-perceived bias
*/

define(['questAPI'], function (quest) {
    var API = new quest();

    API.addSequence([
        {
            header: 'Research Participant Consent Form',
            text: `
<b>Study Title:</b> Invisible Barriers: Investigating the Impact of Teacher Bias on Black Students’ Opportunities in Science<br><br>
<b>Faculty Investigator:</b> Dr. Jan Hammond, EdD<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educational Leadership, Educational Technology, and Interdisciplinary EdD.<br><br>
<b>Student Investigator:</b> Mary Redden<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educational Leadership, Educational Technology, and Interdisciplinary EdD.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: Mary.Redden@my.liu.edu<br>
<br>

You are being asked to join a research study. Participation in this study is voluntary. Even if you decide to join now, you can change your mind later.
            `,
            submitText: 'Accept and Continue',
            name: 'consentPage', // for logs, does not appear on webpage
            prev: true,
            numbered: true,
            questions: [
                {
                    type: 'info',
                    name: 'infoPar1',
                    stem: `<b>Why is this research being done?</b>`,
                    description: `
<ul>
<li>This research is being done to help bring awareness to STEM teachers about their implicit racial biases, with a specific focus on Black students in STEM courses. By bringing awareness to these biases, this study seeks to promote equity in educational opportunities.</li>
<li>Participants in this study will be current STEM teachers in grades 6–12 with at least three years of teaching experience. I anticipate roughly 60 participants will take part in this study.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar2',
                    stem: `<b>What will happen if you join this study?</b>`,
                    description: `
If you agree to participate, you will be asked to do the following:                    
<ul>
<li>Complete a 6-question Likert scale survey assessing your self-perceived bias.</li>
<li>Take the Harvard Implicit Association Test (IAT), which measures implicit associations and biases based on reaction times when categorizing words and images.</li>
<li>Answer follow-up questions related to your test results and strategies you might adopt to mitigate bias in your recommendations for students.</li>
<li>The study will take place online, and the entire session will take approximately 15-20 minutes. You will only need to complete this one session, and your participation will be completely confidential.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar3',
                    stem: `<b>What are the risks or discomforts of the study?</b>`,
                    description: `
<ul>
<li>The risks are minimal and no greater than those encountered in daily life. There may be a potential risk of discomfort when reflecting on personal biases, but you are free to stop participation at any time if you feel uncomfortable.</li>
<li>Although your responses will remain confidential, there is a small possibility of data tampering when using the internet to collect information. All data collected will be stored securely, and every effort will be made to protect your privacy.</li>
<li>You may get tired or bored when we are asking you questions or you are completing questionnaires. You do not have to answer any question you do not want to answer.</li>
<li>Although your IP address will not be stored in the survey results, there is always the possibility of tampering from an outside source when using the Internet for collecting information. While the confidentiality of your responses will be protected, there is always the possibility of hacking or other security breaches that could threaten the confidentiality of your responses.</li>
<li>If you wish to stop at any time, please click out of the form and your answers will not be submitted.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar4',
                    stem: `<b>Are there benefits to being in the study?</b>`,
                    description: `
<ul>
<li>Your participation will contribute to the understanding of teacher biases and help develop strategies to address these biases, which could lead to more equitable student recommendations in the future.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar5',
                    stem: `<b>What are your options if you do not want to be in the study?</b>`,
                    description: `
<ul>
<li>Your participation in this study is entirely voluntary. If you choose not to participate, or wish to stop at any time, you may do so and your answers up until that point will be destroyed.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar6',
                    stem: `<b>Will it cost you anything to be in this study?</b>`,
                    description: `No`,
                },
                {
                    type: 'info',
                    name: 'infoPar7',
                    stem: `<b>Will you be paid if you join this study?</b>`,
                    description: `No`,
                },
                {
                    type: 'info',
                    name: 'infoPar8',
                    stem: `<b>How will the confidentiality and/or data be protected?</b>`,
                    description: `
<ul>
<li>All study records that identify you will be kept confidential to the extent possible by law. Your participation will be completely anonymous, and the data will be stored securely with access limited to the research team. The results of this study may be published or presented, but your identity will not be disclosed.</li>
<li>Participants will submit all responses through a secure, self-coded online platform. Data will be anonymized using unique code numbers, with no identifying information linked to your responses. All data will be stored on an encrypted, password-protected server, accessible only to the research team.</li>
<li>Data will be retained for three years, then securely deleted. Only the research team will have access to the information.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar9',
                    stem: `<b>What is the Institutional Review Board (IRB) and how does it protect you?</b>`,
                    description: `
<ul>
<li>This study has been reviewed by an Institutional Review Board (IRB), a group of people that reviews human research studies. The IRB can help you if you have questions about your rights as a research participant or if you have other questions, concerns or complaints about this research study. You may contact the IRB at <a href="mailto:osp@liu.edu">osp@liu.edu</a>.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar10',
                    stem: `<b>What should you do if you have questions about the study?</b>`,
                    description: `
If you have any questions, please contact:<br>
<b>Mary Redden</b><br>
Email: Mary.Redden@my.liu.edu<br>
<br>
If you have questions about your rights as a research participant, please contact the Long Island University Institutional Review Board at <a href="mailto:osp@liu.edu">osp@liu.edu</a>.
`,
                },
                {
                    type: 'selectOne',
                    name: 'infoPar11',
                    stem: `<b>What does your agreement on this consent form mean?</b>`,
                    description: `
By marking the “Agree to Participate” box below, you are indicating that you have fully read the above text and have had the opportunity to print the consent form (or ask for a printed copy) and ask questions about the purposes and procedures of this study. If you choose not to participate, please choose the “Decline to Participate” box below.
`,
                    answers: [
                        'I agree to participate',
                        'I decline to participate',
                    ],
                    correct: true,
                    correctValue: 'I agree to participate',
                    errorMsg: {correct: `If you do not agree to participate, you may simply close this webpage.`},
                },
            ]
        },
    ]);

    return API.script;
});
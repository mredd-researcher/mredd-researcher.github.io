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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educational Leadership, Educational Technology, and Interdisciplinary EdD.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: jan.hammond@liu.edu<br><br>
<b>Student Investigator:</b> Mary Redden<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educational Leadership, Educational Technology, and Interdisciplinary EdD.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: Mary.Redden@my.liu.edu<br>
<br>

You are being asked to join a research study. Participation in this study is voluntary. Even if you decide to join now, you can stop at any time.
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
<li>This research examines STEM teachers' awareness of their potential implicit racial biases. It explores whether educators in science, technology, engineering, and math (STEM) fields recognize unconscious attitudes or stereotypes they may have about different racial groups. It also investigates how these biases may influence their interactions with students.</li>
<li>Participants in this study will be current STEM teachers of grades 6–12 in public schools on Long Island, NY. Participation will be confidential, with all responses anonymized and used exclusively for research purposes. No personally identifiable information will be collected or disclosed.</li>
</ul>
`,
                },
                {
                    type: 'info',
                    name: 'infoPar2',
                    stem: `<b>What will happen if you join this study?</b>`,
                    description: `
You are being asked to complete the following three sections of this test in one, 15-minute session:                    
<ul>
<li>Self-Perception Survey: First, you will complete a brief 6-question survey designed to assess your self-perceived racial bias levels.</li>
<li>Implicit Association Test (IAT): Next, you will take the Implicit Association Test to measure potential implicit racial biases you may have. After completing the test, you will immediately receive your IAT results along with your Likert survey responses.</li>
<li>Reflective Questions: Lastly, you will answer six follow-up questions designed to prompt reflection on your IAT and survey results. These questions aim to assess your reactions to the assessments and develop potential strategies to address any identified racial biases from the IAT, as well as explore ways to integrate these strategies into your teaching practices.</li>
<li>The study will take place online, at a time and place of your convienience. Your participation will be completely confidential.</li>
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
<li>While your responses will remain confidential, there is always a small possibility of data tampering when using the internet for data collection. All data will be securely stored, and every effort will be made to protect your privacy.</li>
<li>You may get tired or bored when taking this study. You are not required to answer any questions you prefer to skip</li>
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
<li>Your participation in this study is entirely voluntary. If you choose not to participate, or wish to stop at any time, you may do so and your answers up until that point will not be submitted.</li>
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
<li>There are no study records that will identify you. All data collected will be confidential. Your participation will be completely anonymous, and the data will be stored securely with access limited to the Student Investigator. The results of this study may be published or presented, but your identity will not be disclosed.</li>
<li>Participants will submit all responses through a secure, self-coded online platform. Data will be anonymized using unique code numbers, with no identifying information linked to your responses. All data will be stored on an encrypted, password-protected server, accessible only to the Student Investigator.</li>
<li>Data will be retained for three years, then securely deleted. Only the Student Investigator will have access to the information.</li>
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
                {
                    type: 'selectOne',
                    name: 'infoPar12',
                    stem: `<b>Do you teach a STEM subject for grades 6-12 and have more than 3 years of teaching experience?</b>`,
                    description: `If No, you may still complete the study, but your results will not be included the analysis.`,
                    required: true,
                    answers: [
                        'Yes',
                        'No',
                    ],
                },
            ]
        },
    ]);

    return API.script;
});

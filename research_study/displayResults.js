/* 
Displaying results from Explicit and Implicit Bias Tests
*/
function likertScoreDescription(likertScore){
    const rangeMap = new Map([
        [[0, 5], "<b>N/A:</b> Participant declined to answer Self-Perceived Bias questions."],
        [[6, 12], "<b>Low self-perceived bias awareness-</b> (Participants in this range perceive themselves as having little to no bias and may believe their decisions are entirely impartial)."],
        [[13, 18], "<b>Moderate self-perceived bias awareness-</b> (Participants acknowledge some level of bias but may not fully recognize its impact or may only occasionally reflect on it)."],
        [[19, 24], "<b>High self-perceived bias awareness-</b> (Participants are more aware and reflective of their biases and are more likely to take active steps to address them)."],
        [[24, 30], "<b>Very high self-perceived bias awareness-</b> (Participants demonstrate a strong awareness of potential biases and are highly engaged in efforts to mitigate them)."],
    ]);

    for (let [range, output] of rangeMap) {
        if (likertScore >= range[0] && likertScore <= range[1]) {
            return output;
        }
    }
    return "N/A: Error occurred";
}


define(['questAPI'], function (quest) {
    var API = new quest();
    let global = API.getGlobal();

	const category1 = global.blackLabels;
    const category2 = global.whiteLabels;
    const att1 = 'Good';
    const att2 = 'Bad'

    const explanationText = `
    In this study, we measured your automatically-activated associations between the concepts "${category1}" and "${category2}" with the concepts "${att1}" and "${att2}". 
    Your automatically-activated association might be different than the association that you explicitly endorse. 	
    For instance, you might consciously associate "${category1}" with the concept "${att2}", 
    but show an automatic association of "${category1}" with "${att1}".<br/>
    To measure your automatically-activated association, we used the Implicit Association Test (the IAT). 
    <br><br>
    
    <b>Disclaimer:</b><br/>
    These results are not a definitive assessment of your automatically-activated associations. 
    The results may be influenced by variables related to the test 
    (e.g., the category labels or particular items used to represent the categories on the IAT) 
    or the person (e.g., how tired you are). 
    The results are provided for educational purposes only.
    <br><br>

    <b>How Does The IAT Work?</b>
    The IAT measures the strength of associations between concepts 
    (e.g., ${category1}, ${category2}) and attributes (e.g., ${att1}, ${att2}). 
    The main idea is that making a response is easier when 
    closely related items share the same response key. 
    We would say that one has an automatically activated association of 
    ${category1} with ${att1} and ${category2} with ${att2} 
    if they are faster to categorize items 
    when ${category1} and ${att1} share a response key 
    relative to when ${category2} and ${att1} share a response key. <br/><br/>
    Many researchers consider associations of Black and White people with 
    the concepts Good and Bad an estimate of 
    automatic preference between Black and White people. 
    An automatic preference is your very first preference betweens people, groups, or other objects. 
    An automatic preference might be activated even if people do not endorse that preference. 
    <br/><br/>
    Any single IAT is unlikely to predict behavior well for a specific individual. 
    In the aggregate, the IAT can predict behavior 
    such as discrimination in hiring and promotion, medical treatment, 
    and decisions related to criminal justice.
    <br/><br/>

    <b>Does The Order In Which I Took The IAT Matter?</b>
    Yes, the order in which you take the IAT can influence your overall results. 
    But, the effect is very small. 
    So if you first pair ${category1} + ${att1} / ${category2} + ${att2} 
    and then pair ${category1} + ${att2} / ${category2}  + ${att1}, 
    your results might be a just a tiny bit different 
    than they would be if you had done the reverse pairing first. 
    To minimize the order effect, we give more practice trials 
    before the second pairing than we did before the first pairing. 
    We also randomly assign participants to one of the two possible orderings, 
    so half of the test-takers complete 
    ${category1} + ${att1} / ${category2} + ${att2} 
    and then ${category1} + ${att2} / ${category2}  + ${att1}, 
    and the other half get the opposite order.
    `

    const likertRangeDescriptions = `
    Overall interpretation of Likert scale score:<br>
    <ul>
    <li> 6-12: Low self-awareness and commitment to equity
    <li> 13-18: Moderate self-awareness and commitment to equity
    <li> 19-24: High self-awareness and commitment to equity
    <li> 25-30: Very high self-awareness and commitment to equity
    </ul>
    `
    API.addSequence([
        {
            header: 'Participant Results',
            text: "Description of results",
            submitText: 'Continue',
            name: 'resultsPage', // for logs, does not appear on webpage
            // prev: true,
            // prevText: "Go Back",
            // numbered: true,
            questions: [
                {
                    type: 'info',
                    name: 'resultExplicit',
                    stem: `Your Likert scale self-perceived bias score is: <b>${global.likert.questions.likertQ.response}</b>`,
                    description: likertRangeDescriptions,
                },
                {
                    type: 'info',
                    name: 'resultImplicit',
                    stem: `<b>Results from Implicit Bias: ${global.raceiat.feedback}</b>`,
                    description: explanationText,
                },
            ]
        },
    ]);

    return API.script;
});
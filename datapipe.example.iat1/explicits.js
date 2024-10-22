let config;
// const config = require("./config.json");
fetch("./config.json")
    .then(response => response.json())
    .then(data => {
        config = data;
    })
    .catch(error => console.error('Error loading config:', error));

define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	    
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 6'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'false',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('likert',{
        inherit: 'basicSelect',
        answers: [
            {text:'Strongly Disagree (1)', value:1},
            {text:'Disagree (2)', value:2},
            {text:'Neutral (3)', value:3},
            {text:'Agree (4)', value:4},
            {text:'Strongly Agree (5)', value:5}
        ]
    });

	
    /**
	*Specific questions
	*/	
    // API.addQuestionsSet('attributes7',{
    //     inherit : 'basicSelect',
    //     name: 'attributes7',
    //     stem: 'Which statement best describes you?',
    //     answers: [
    //         {text:'I strongly prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:7},
    //         {text:'I moderately prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:6},
    //         {text:'I slightly prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:5},
    //         {text:'I like <%= global.whiteLabels %> and <%= global.blackLabels %> equally.',value:4},
    //         {text:'I slightly prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:3},
    //         {text:'I moderately prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:2},
    //         {text:'I strongly prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:1}
    //     ]
    // });
	
    API.addQuestionsSet('q1',{
        inherit : 'likert',
        name: 'q1',
        stem: 'I am fully aware of any racial biases I may have when recommending students for STEM courses.'
        // stem: config.name
    });

    API.addQuestionsSet('q2',{
        inherit : 'likert',
        name: 'q2',
        stem: '<%= config.name %>'
    });
        // stem: 'I believe that my recommendations for students are entirely free from racial bias.'

    API.addQuestionsSet('q3',{
        inherit : 'likert',
        name: 'q3',
        stem: 'I think it is possible to hold racial biases without being consciously aware of them.'
    });

    API.addQuestionsSet('q4',{
        inherit : 'likert',
        name: 'q4',
        stem: 'I actively work to identify and mitigate any racial biases I might have.'
    });

    API.addQuestionsSet('q5',{
        inherit : 'likert',
        name: 'q5',
        stem: 'I believe that my implicit biases could influence my recommendations for student placements.'
    });

    API.addQuestionsSet('q6',{
        inherit : 'likert',
        name: 'q6',
        stem: 'When making decisions, I consider whether my choices might be influenced by stereotypes or biases.'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'likert',
        name: 'Twhite_0to10',
        stem: 'How warm or cold do you feel towards <b><%= global.whiteLabels %></b>?'
    });

    API.addSequence([
        {
            mixer : 'repeat', 
            times: 1,
            data : [
                // {
                //     mixer : 'random', 
                //     wrapper:true, 
                //     data : [
                //         {
                //             inherit:'basicPage', 
                //             questions: {inherit:'thermBlack'}
                //         },
                //         {
                //             inherit:'basicPage', 
                //             questions: {inherit:'thermWhite'}							
                //         }
                //     ]
                // },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'q1'}
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'q2'}
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'q3'}
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'q4'}
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'q5'}
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'q6'}
                },
            ]
        }
    ]);

    return API.script;
});

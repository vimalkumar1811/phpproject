
var jsonData = {
      state: 'question',
      currentQuestion: 0,
      selectedAnswer: 0,
      questions: [{
        question: `capital of tamilnadu`,
        answers: [{
          answer: 'chennai',
          correct: true,
        }, {
          answer: 'bangalore'
          
        }, {
          answer: 'mumbai'
        }]
      },
  {
        question: `capital of karnataka`,
        answers: [{
          answer: 'chennai',
          
        }, {
          answer: 'bangalore',
          correct: true,
        }, {
          answer: 'mumbai'
        }]
      },
  
    
  
   {
        question: `+ symbol implies`,
        answers: [{
          answer: 'addition',
          correct: true,
        }, {
          answer: 'subtraction'
        }, {
          answer: 'multiplication'
        }]
      },    
  
  ],
  
  
  
      score: 0,
    }

var app = new Vue({

  el: '#app',
    data: jsonData,
 
    computed: {
      question() {
        return this.questions[this.currentQuestion];
      },
      scorePercentage() {
        return this.score*100/this.questions.length;
      },
    },
    methods: {
      handleResponse(event) {
        const selected = this.question.answers.find(a => a.id == event.target.dataset.id);
        this.selectedAnswer = selected;
        if(selected.correct) {
          this.score++;
        }
        this.state = 'answer';
      },
      handleNext(event) {
        this.currentQuestion++;
        if(this.currentQuestion >= this.questions.length) {
          this.state = 'results';
        } else {
          this.state = 'question';
        }
      },
      randomizeOrder() {
        this.questions.map(question => {
          question.answers.sort((a, b) => Math.random()-0.5)
          question.answers.map((answer, index) => answer.id = index);
        });
        this.questions.sort((a,b) => Math.random()-0.5);
      },
      handleRestart(event) {
        this.currentQuestion = 0;
        this.score = 0;
        this.state = 'question';
        this.randomizeOrder();
      },
    },
    created() {
      this.randomizeOrder();
    }
  })

var app = new Vue({
    el: '#app',
    data:{
        question: "I Know You Don't Know What I Mean? ",
        answer1: 'No, I know',
        answer2: 'Yes, I dont know',
        gameEnded: false,
        message1: false,
        message2: true,
        horror: false,
    },

    methods: {
        changeQuestionAnswer: function(answer){
            if (answer == this.answerhorror) {
                this.horror = true
            }
            if ( answer == this.answer1) {
                this.question = 'Are You Sure ?';
                this.answer1 = "Yes I'm Sure";
                this.answer2 = "No I'm not sure about it";
                this.message1 = false
                this.message2 = false
            }

            if ( answer == this.answer1) {
                this.question = 'But Im not sure'
                this.answer1 = 'Why ?'
                this.answer3 = this.answer1
                this.answer2 = "I'm really sure about it"
                this.message2 = false
            }

            if ( answer == this.answer3) {
                this.question = 'Because you lie'
                this.answer1 = "i'm not lying"
                this.answer2 = "Ok I'm lying";
                this.message1 = true;
                this.message2 = false;
            }

            if ( answer == this.answer2) {
                this.question = 'You Lie :(';
                this.answer1 = "i'm not lying";
                this.answer2 = 'Trust me !'
                this.message1 = false
                this.message2 = false
            }

            if (answer == this.answer2) {
                this.question = 'I do not know who you are'
                this.answer1 = 'but, I know you'
                this.answer2 = "I'm too"
                this.message2 = false
            }
        },

        reset: function(){
            this.message1 = false
            this.message2 = false
            this.question = 'You Safed'
            this.answer1 = 'Dont Click'
            this.answer2 = 'Dont Click';
            this.answerhorror = this.answer1
            this.answerhorror = this.answer2
        }


    },

})

$(document).ready(function () {


    $(document).on("click", "#start", function (e) {
        game.start();
    });

    $(document).on("click", "#done", function (e) {
        game.done();
    });

    var questions = [{
        question: "Who wrote the epic poem the Aeneid about the origins of Rome?",
        answers: ["Juvenal", "Ovid", "Horace", "Virgil"],
        correctAnswer: "Virgil"
    }, {
        question: "What week-long festival in December saw slaves and masters trade places?",
        answers: ["Saturnalia", "Divalia", "Bona Dea", "Consualia"],
        correctAnswer: "Saturnalia"
    }, {
        question: "Whom of the following was NOT in the First Triumvirate?",
        answers: ["Caesar", "Crassus", "Pompey", "Brutus"],
        correctAnswer: "Brutus"
    }, {
        question: "Which Carthaginian led his army across the Alps to invade Italy?",
        answers: ["Hannibal", "Hasdrubal", "Pyrrhus", "Hamilcar"],
        correctAnswer: "Hannibal"
    }, {
        question: "Who killed Cladius?",
        answers: ["Sejanus", "Nerva", "Hannibal", "Agrippina"],
        correctAnswer: "Agrippina"
    }, {
        question: "How was London known in Roman times?",
        answers: ["Londius", "Londites", "Londinium", "Londieties"],
        correctAnswer: "Londinium"
    }, {
        question: "What was the name of the special javelins used in battle by Roman legionaries?",
        answers: ["Scutum", "Pilum", "Lorica", "Gladius"],
        correctAnswer: "Pilum"
    }]
    var quizArea = $("<ul>");
    var form = $("#quiz-area")
    form.append(quizArea);
    var game = {
        correct: 0,
        incorrect: 0,
        counter: 120,

        countdown: function () {
            game.counter--;
            $("#time-left").html(game.counter);

            if (game.counter === 0) {
                console.log('Tempus Fugit');game.done();
            }
        },

        start: function () {
            timer = setInterval(game.countdown, 1000);
            $("#game").prepend("<h2>Time Remaining: <span id='time-left'>120</span> Seconds</h2>");
            $("#start").remove();

            for (var i = 0; i < questions.length; i++) {
                quizArea.append("<h3>" + questions[i].question + "</h3>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    quizArea.append('<li><input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j] + "</li>");
                }
            }
            form.append('<button id="done">Mitte</button>');
        },
        done: function () {

            $.each($("input[name='question-0']:checked"), function () {
                if ($(this).val() == questions[0].correctAnswer) {
                    console.log(this);
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-1']:checked"), function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-2']:checked"), function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-3']:checked"), function () {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-4']:checked"), function () {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-5']:checked"), function () {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-6']:checked"), function () {
                if ($(this).val() == questions[6].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-7']:checked"), function () {
                if ($(this).val() == questions[7].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });

            this.results();
        },


        results: function () {
            clearInterval(timer);

            $("#game h2").css("display", "none");
            form.html("<h4>Et Factum Est</h4>");
            form.append("<h5>responsum verum: " + this.correct + "</h5>");
            form.append("<h5>falsum responsum: " + this.incorrect + "</h5>");
            form.append("<h5>nullum responsum: " + (questions.length - (this.incorrect + this.correct)) + "</h5>");

        }
    }

})
(function() {
    var currentUser = "";
    var currentSubject = [];
    var currentIndex = 0;
    var score = 0;

    window.startQuiz = function() {
        var nameInput = document.getElementById("username").value.trim();
        var subjectSelect = document.getElementById("subject").value;

        if (!nameInput) {
            alert("Entre ton nom s'il te plaît !");
            return;
        }

        currentUser = nameInput;
        currentSubject = questionBank[subjectSelect];
        currentIndex = 0;
        score = 0;

        document.getElementById("home-screen").classList.add("d-none");
        document.getElementById("quiz-screen").classList.remove("d-none");

        loadQuestion();
    };

    function loadQuestion() {
        if (currentIndex >= currentSubject.length) {
            showResults();
            return;
        }

        var currentQ = currentSubject[currentIndex];
        document.getElementById("question-text").innerText = "Q" + (currentIndex + 1) + ". " + currentQ.q;
        document.getElementById("badge-level").innerText = "Niveau : " + currentQ.level;
        document.getElementById("score-display").innerText = "Score : " + score;

        var optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";
        document.getElementById("next-btn").classList.add("d-none");

        currentQ.options.forEach(function(option, index) {
            var btn = document.createElement("button");
            btn.className = "btn btn-outline-primary text-start p-2 mb-2";
            btn.innerText = option;
            btn.onclick = function() { selectAnswer(index, currentQ.answer, btn); };
            optionsContainer.appendChild(btn);
        });
    }

    function selectAnswer(selectedIndex, correctIndex, buttonElement) {
        var buttons = document.getElementById("options-container").children;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        if (selectedIndex === correctIndex) {
            buttonElement.classList.remove("btn-outline-primary");
            buttonElement.classList.add("btn-success");
            score += 10;
        } else {
            buttonElement.classList.remove("btn-outline-primary");
            buttonElement.classList.add("btn-danger");
            buttons[correctIndex].classList.remove("btn-outline-primary");
            buttons[correctIndex].classList.add("btn-success");
        }

        document.getElementById("next-btn").classList.remove("d-none");
    }

    window.nextQuestion = function() {
        currentIndex++;
        loadQuestion();
    };

    function showResults() {
        document.getElementById("quiz-screen").classList.add("d-none");
        document.getElementById("result-screen").classList.remove("d-none");

        document.getElementById("final-message").innerText = "Bravo " + currentUser + " !";
        document.getElementById("final-stats").innerText = "Ton score final est de " + score + " points sur " + (currentSubject.length * 10) + ".";

        saveSession(currentUser, score, currentSubject.length * 10);
    }

    function saveSession(user, score, maxScore) {
        var history = JSON.parse(localStorage.getItem("edusmart_history") || "[]");
        var subjectSelect = document.getElementById("subject").value;
        history.unshift({
            user: user,
            subject: subjectSelect.toUpperCase(),
            score: score,
            maxScore: maxScore,
            date: new Date().toLocaleDateString()
        });
        localStorage.setItem("edusmart_history", JSON.stringify(history));
    }

    window.restartQuiz = function() {
        document.getElementById("result-screen").classList.add("d-none");
        document.getElementById("home-screen").classList.remove("d-none");
    };
})();
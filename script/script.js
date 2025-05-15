const Dom = (function() {
    const Board = document.querySelector(".question-text > p")
    const Options = document.querySelectorAll(".answers-options>button")
    const Actions = document.querySelector(".action")
    const AllOptions = document.querySelector(".answers-options")
    const Title = document.querySelector('.question > h2')
    
    const A = document.querySelector("#option-a")
    const B = document.querySelector("#option-b")
    const C = document.querySelector("#option-c")
    const D = document.querySelector("#option-d")

    const Previous = document.createElement('button')
    Previous.setAttribute('class', "Backward")
    Previous.textContent = "Previous"
    Actions.appendChild(Previous)

    const Next = document.createElement('button')
    Next.setAttribute('class', "Next")
    Next.textContent = "Next"
    Actions.appendChild(Next)

    const Submit = document.createElement('button')
    Submit.setAttribute("class", "Submit")
    Submit.textContent = "Submit"

    const Back = document.createElement('button')
    Back.setAttribute("class", "Back")
    Back.textContent = "Back"

    const Front = document.createElement('button')
    Front.setAttribute("class", "Front")
    Front.textContent = "Front"

    return { Board, Options, Previous, Next, A, B, C, D, AllOptions, Submit, Front, Back, Title}
})()

const Question = ( function() {
QuestionArray = [
{
    QuestionText: "Which team has won the most FIFA World Cups?",
    QuestionOptionA: "Brazil",
    QuestionOptionB: "Germany",
    QuestionOptionC: "Italy",
    QuestionOptionD: "Argentina",
    QuestionCorrectAnswer: "Brazil"
},
{
    QuestionText: "What is the maximum number of players a team can have on the field during a football match?",
    QuestionOptionA: "9",
    QuestionOptionB: "10",
    QuestionOptionC: "11",
    QuestionOptionD: "12",
    QuestionCorrectAnswer: "11"
},
{
    QuestionText: "Who is the all-time top scorer in FIFA World Cup history?",
    QuestionOptionA: "Pelé",
    QuestionOptionB: "Miroslav Klose",
    QuestionOptionC: "Cristiano Ronaldo",
    QuestionOptionD: "Lionel Messi",
    QuestionCorrectAnswer: "Miroslav Klose"
},
{
    QuestionText: "Which country hosted the 2022 FIFA World Cup?",
    QuestionOptionA: "Brazil",
    QuestionOptionB: "Russia",
    QuestionOptionC: "Qatar",
    QuestionOptionD: "Germany",
    QuestionCorrectAnswer: "Qatar"
},
{
    QuestionText: "What is the name of the prestigious European club football competition?",
    QuestionOptionA: "La Liga",
    QuestionOptionB: "UEFA Champions League",
    QuestionOptionC: "Serie A",
    QuestionOptionD: "Europa League",
    QuestionCorrectAnswer: "UEFA Champions League"
},
{
    QuestionText: "Which footballer is known as 'El Pibe de Oro' (The Golden Boy)?",
    QuestionOptionA: "Diego Maradona",
    QuestionOptionB: "Lionel Messi",
    QuestionOptionC: "Neymar Jr.",
    QuestionOptionD: "Ronaldinho",
    QuestionCorrectAnswer: "Diego Maradona"
},
{
    QuestionText: "What is the official ball used in the English Premier League called?",
    QuestionOptionA: "Telstar",
    QuestionOptionB: "Finale",
    QuestionOptionC: "Nike Flight",
    QuestionOptionD: "Adidas Tango",
    QuestionCorrectAnswer: "Nike Flight"
},
{
    QuestionText: "Which club won the first-ever UEFA Champions League?",
    QuestionOptionA: "Real Madrid",
    QuestionOptionB: "AC Milan",
    QuestionOptionC: "Manchester United",
    QuestionOptionD: "Barcelona",
    QuestionCorrectAnswer: "Real Madrid"
},
{
    QuestionText: "What color card is shown to a player when they are sent off?",
    QuestionOptionA: "Yellow",
    QuestionOptionB: "Blue",
    QuestionOptionC: "Red",
    QuestionOptionD: "Green",
    QuestionCorrectAnswer: "Red"
},
{
    QuestionText: "Who won the Ballon d'Or in 2023?",
    QuestionOptionA: "Karim Benzema",
    QuestionOptionB: "Lionel Messi",
    QuestionOptionC: "Kylian Mbappé",
    QuestionOptionD: "Erling Haaland",
    QuestionCorrectAnswer: "Lionel Messi"
},
{
    QuestionText: "Which player holds the record for most goals scored in a single World Cup tournament?",
    QuestionOptionA: "Just Fontaine",
    QuestionOptionB: "Ronaldo Nazário",
    QuestionOptionC: "Gerd Müller",
    QuestionOptionD: "Lionel Messi",
    QuestionCorrectAnswer: "Just Fontaine"
},
{
    QuestionText: "Which country won the first UEFA European Championship in 1960?",
    QuestionOptionA: "Spain",
    QuestionOptionB: "Soviet Union",
    QuestionOptionC: "Germany",
    QuestionOptionD: "France",
    QuestionCorrectAnswer: "Soviet Union"
},
{
    QuestionText: "Which club has won the most English Premier League titles?",
    QuestionOptionA: "Liverpool",
    QuestionOptionB: "Chelsea",
    QuestionOptionC: "Manchester United",
    QuestionOptionD: "Arsenal",
    QuestionCorrectAnswer: "Manchester United"
},
{
    QuestionText: "What is the term for when a player scores two goals in a single match?",
    QuestionOptionA: "Double",
    QuestionOptionB: "Hat-trick",
    QuestionOptionC: "Brace",
    QuestionOptionD: "Quadruple",
    QuestionCorrectAnswer: "Brace"
},
{
    QuestionText: "Which country has hosted the FIFA World Cup the most times?",
    QuestionOptionA: "Germany",
    QuestionOptionB: "Brazil",
    QuestionOptionC: "Mexico",
    QuestionOptionD: "Italy",
    QuestionCorrectAnswer: "Mexico"
},
{
    QuestionText: "Which African country was the first to qualify for a FIFA World Cup?",
    QuestionOptionA: "Cameroon",
    QuestionOptionB: "Egypt",
    QuestionOptionC: "Nigeria",
    QuestionOptionD: "South Africa",
    QuestionCorrectAnswer: "Egypt"
},
{
    QuestionText: "What is the name of the trophy awarded to the FIFA World Cup winners?",
    QuestionOptionA: "The Jules Rimet Trophy",
    QuestionOptionB: "The Ballon d'Or",
    QuestionOptionC: "The Golden Boot",
    QuestionOptionD: "The FIFA Champions Cup",
    QuestionCorrectAnswer: "The Jules Rimet Trophy"
},
{
    QuestionText: "Which football club is known as 'Los Blancos'?",
    QuestionOptionA: "Barcelona",
    QuestionOptionB: "Real Madrid",
    QuestionOptionC: "Manchester City",
    QuestionOptionD: "Juventus",
    QuestionCorrectAnswer: "Real Madrid"
},
{
    QuestionText: "Which football manager has won the most UEFA Champions League titles?",
    QuestionOptionA: "Pep Guardiola",
    QuestionOptionB: "Carlo Ancelotti",
    QuestionOptionC: "José Mourinho",
    QuestionOptionD: "Alex Ferguson",
    QuestionCorrectAnswer: "Carlo Ancelotti"
},
{
    QuestionText: "What does VAR stand for in football?",
    QuestionOptionA: "Virtual Assistant Referee",
    QuestionOptionB: "Video Automated Replay",
    QuestionOptionC: "Video Assistant Referee",
    QuestionOptionD: "Verified Action Review",
    QuestionCorrectAnswer: "Video Assistant Referee"
}
];
    return { QuestionArray }
})()

const logic = (function() {
    let process = function(num) {
        Dom.Board.textContent = Question.QuestionArray[num].QuestionText,
        Dom.A.textContent = Question.QuestionArray[num].QuestionOptionA
        Dom.B.textContent = Question.QuestionArray[num].QuestionOptionB
        Dom.C.textContent = Question.QuestionArray[num].QuestionOptionC
        Dom.D.textContent = Question.QuestionArray[num].QuestionOptionD
    }
    process(0)

    const solution = function() {
        Dom.Options.forEach((element) => {
        element.style.border = "none"})
        process(num)
        if (Question.QuestionArray[num].QuestionUserAnswer !== Question.QuestionArray[num].QuestionCorrectAnswer && Dom.A.textContent === Question.QuestionArray[num].QuestionUserAnswer ) {
            Dom.Options[0].style.border = "1px solid red"
        }
        if (Question.QuestionArray[num].QuestionUserAnswer !== Question.QuestionArray[num].QuestionCorrectAnswer && Dom.B.textContent === Question.QuestionArray[num].QuestionUserAnswer ) {
            Dom.Options[1].style.border = "1px solid red"
        }
        if (Question.QuestionArray[num].QuestionUserAnswer !== Question.QuestionArray[num].QuestionCorrectAnswer && Dom.C.textContent === Question.QuestionArray[num].QuestionUserAnswer ) {
            Dom.Options[2].style.border = "1px solid red"
        }
        if (Question.QuestionArray[num].QuestionUserAnswer !== Question.QuestionArray[num].QuestionCorrectAnswer && Dom.D.textContent === Question.QuestionArray[num].QuestionUserAnswer ) {
            Dom.Options[3].style.border = "1px solid red"
        }

        if (Dom.A.textContent === Question.QuestionArray[num].QuestionCorrectAnswer) {
            Dom.Options[0].style.border = "1px solid green"
        }
        if (Dom.B.textContent === Question.QuestionArray[num].QuestionCorrectAnswer) {
            Dom.Options[1].style.border = "1px solid green"
        }
        if (Dom.C.textContent === Question.QuestionArray[num].QuestionCorrectAnswer) {
            Dom.Options[2].style.border = "1px solid green"
        }
        if (Dom.D.textContent === Question.QuestionArray[num].QuestionCorrectAnswer) {
            Dom.Options[3].style.border = "1px solid green"
        }
    }

    let Score = 0
    let num = 0

    Dom.Options.forEach((element) => {
        element.addEventListener("click", () => {
        console.log(num)
        Question.QuestionArray[num].QuestionUserAnswer = element.lastChild.textContent
        if (!('QuestionAnswerStatus' in Question.QuestionArray[num])) {
            Question.QuestionArray[num].QuestionAnswerStatus = "Answered"
        }
        if (Question.QuestionArray[num].QuestionUserAnswer === Question.QuestionArray[num].QuestionCorrectAnswer) {
            Score++
        }
        
        if (num === (QuestionArray.length - 1)) {
            Dom.Next.remove()
            document.querySelector('.action').appendChild(Dom.Submit)

            Dom.Submit.addEventListener("click", () => {
                Dom.Options.forEach((element) => {
                    element.disabled = true
                })
            Dom.Submit.remove()
            Dom.Previous.remove()
            Dom.Title.textContent = 'Solution'
            document.querySelector('.action').appendChild(Dom.Back)
            document.querySelector('.action').appendChild(Dom.Front)
            num = 0
            solution()
            num++
            })
        }

        num++
        if(num > 19) num = 19
        process(num)
        })
    })

    Dom.Previous.addEventListener('click', () => {
        num--
        if (num <= 0) num = 0
        if(Question.QuestionArray[num].QuestionUserAnswer === Question.QuestionArray[num].QuestionCorrectAnswer) Score--
        process(num)
        if (num === Question.QuestionArray.length - 2) {
            Dom.Submit.remove()
            document.querySelector('.action').appendChild(Dom.Next)
        }
    })

    Dom.Next.addEventListener('click', () => {
        if (num === (QuestionArray.length - 2)) {
            Dom.Next.remove()
            document.querySelector('.action').appendChild(Dom.Submit)

            Dom.Submit.addEventListener("click", () => {
                Dom.Options.forEach((element) => {
                    element.disabled = true
                })
            Dom.Submit.remove()
            Dom.Previous.remove()
            Dom.Title.textContent = 'Solution'
            document.querySelector('.action').appendChild(Dom.Back)
            document.querySelector('.action').appendChild(Dom.Front)
            num = 0
            solution()
            num++
            })
        }

        num++
        if (num >= 19) num = 19
        process(num)
    })

    Dom.Back.addEventListener("click", () => {
        num--
        if(num < 0) num = 19
        solution()
    })

    Dom.Front.addEventListener('click', () => {
        num++
        if(num > 19) num = 0
        solution()
    })

    return {Score,}
})()
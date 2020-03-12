const grammarPoint = document.getElementById("grammar-point");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const addGrammarPointBtn = document.getElementById("submit-btn");
const classLevel = document.getElementById("grammar-point-level");
const classGrammarPoint = document.getElementById("class-grammar-point");
const list = document.getElementById("queslist");
const addPhrasalVerbBtn = document.getElementById("add-phrasal-verb-btn");
const pvLevel = document.getElementById("pv-level");
const phrasalVerb = document.getElementById("phrasal-verb");
const pvExample = document.getElementById("pv-example");
const pvTense = document.getElementById("pv-tense");
const pvQuestion = document.getElementById("pv-question");
const lessonLevel = document.getElementById("lesson-level");
const generateLessonBtn = document.getElementById("generate-lesson-btn");
const lessonGP = document.getElementById("gp-lesson");
const lessonPV = document.getElementById("pv-lesson");



// Databases
let gpDB = [];
let phrasalVerbDB = [];
let vocabDB = [];
let verbDB = [];
let miniPresDB = [];
let transDB = [];
let picDB = [];
let pronDB = [];
let articleDB = [];
let expressionDB = [];

// add Grammar Point function
function addGrammarPoint(e) {
    e.preventDefault();

    // const point = grammarPoint.value;
    // const grade = level.value;
    // const ques = question.value;
    // const ans = answer.value;

    const newGrammarPoint = {
        grammarPoint: grammarPoint.value,
        level: classLevel.value,
        ques: question.value,
        ans: answer.value
    };
    gpDB.push(newGrammarPoint);
    console.log(gpDB);
}

// add Phrasal Verb Fundtion
function addPhrasalVerb(e) {
    e.preventDefault();

    const newPhrasalVerb = {
        phrasalVerb: phrasalVerb.value,
        level: pvLevel.value,
        example: pvExample.value,
        question: pvQuestion.value,
        tense: pvTense.value
    };
    phrasalVerbDB.push(newPhrasalVerb);
    console.log(phrasalVerbDB);
}

// call database(array) and populate question list
function lesson() {
    console.log("here");
    const cgp = classGrammarPoint.value;
    const cl = classLevel.value;

    gpDB.forEach(point => {
        // console.log(point.grammarPoint, point.level, point.ques, point.ans);
        if (point.grammarPoint == cgp && point.level == cl) {
            const el = document.createElement("li");
            el.innerHTML = `${point.ques}`;
            list.appendChild(el);
            console.log(point);
        }
    });
}
//Generate Lesson
function generateLesson(e) {
    e.preventDefault();

    const level = lessonLevel.value;

    phrasalVerbDB.forEach(item => {
        if (item.level == level) {
            console.log("pv function");

            const pvEl = document.createElement("p");

            pvEl.innerHTML = item.question;

            console.log(lessonPV);
            lessonPV.appendChild(pvEl);
        }
    });

    gpDB.forEach(item => {
        if (item.level == level) {
            const gpEl = document.createElement("p");

            gpEl.innerHTML = item.ques;

            lessonGP.appendChild(gpEl);
            console.log(lessonGP);
        }
    });
}

//Event Listeners
addPhrasalVerbBtn.addEventListener("click", addPhrasalVerb);
addGrammarPointBtn.addEventListener("click", addGrammarPoint);
classLevel.addEventListener("change", lesson);
generateLessonBtn.addEventListener("click", generateLesson);
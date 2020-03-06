const grammarPoint = document.getElementById("grammar-point");
const level = document.getElementById("level");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submitBtn = document.getElementById("submit-btn");
const classLevel = document.getElementById("class-level");
const classGrammarPoint = document.getElementById("class-grammar-point");
const list = document.getElementById("queslist");

console.log(classLevel);

let gpDB = [];
// add data function
function addData(e) {
    e.preventDefault();

    // const point = grammarPoint.value;
    // const grade = level.value;
    // const ques = question.value;
    // const ans = answer.value;

    const newGrammarPoint = {
        grammarPoint: grammarPoint.value,
        level: level.value,
        ques: question.value,
        ans: answer.value
    };
    gpDB.push(newGrammarPoint);
    console.log(gpDB);
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

//Event Listeners
submitBtn.addEventListener("click", addData);
classLevel.addEventListener("change", lesson);
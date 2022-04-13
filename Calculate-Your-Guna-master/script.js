window.onload = function() {
    /**
     * Just Make sure to return false so that your request will not go the server script
     */
    document.getElementById("simple_form").onsubmit = function() {
        // After doing your logic that you want to do
        return false;
    };
};

var raj = 0;
var tam = 0;
var sat = 0;
var btn = document.getElementById("btn");
var midContainer = document.getElementsByClassName("midContainer");
var FName = document.getElementById("FName");
var LName = document.getElementById("LName");
var details = document.getElementsByClassName("details");
var output = document.getElementsByClassName("output")[0];
var sattvaResult = document.getElementById("sattvaResult");
var rajasResult = document.getElementById("rajasResult");
var tamasResult = document.getElementById("tamasResult");
var user = document.getElementById("user");
btn.addEventListener("click", checkAns);

function checkAns() {
    midContainer[0].style.display = "none";
    var name = FName;
    name += " ";
    name += LName;
    console.log(name);
    user.innerHTML = name;
    details[0].style.display = "none";
    output.style.display = "block";
    var selectedAns = document.querySelectorAll(".questions");
    for (var i = 0; i < 15; i++) {
        var ele = document.getElementsByName("q" + (i + 1));
        for (var j = 0; j < ele.length; j++) {
            if (ele[j].checked) {
                calculateResult(i + 1, parseInt(ele[j].value));
            }
        }
    }
    sat = (sat / 35) * 100;
    raj = (raj / 35) * 100;
    tam = (tam / 35) * 100;
    console.log(tam);
    console.log(raj);
    console.log(sat);
    var total = (sat + raj + tam) * 1.0;
    sat = sat / total * 100;
    raj = raj / total * 100;
    tam = tam / total * 100;
    sat = sat.toFixed(2);
    raj = raj.toFixed(2);
    tam = tam.toFixed(2);
    console.log(tam);
    console.log(raj);
    console.log(sat);
    sattvaResult.innerHTML = sat;
    rajasResult.innerHTML = raj;
    tamasResult.innerHTML = tam;
}

function calculateResult(quesNum, ans) {
    // console.log(quesNum);
    // console.log(ans);
    if (quesNum % 3 == 1) {
        sat += ans;
    } else if (quesNum % 3 == 2) {
        raj += ans;
    } else if (quesNum % 3 == 0) {
        tam += ans;
    }
}

document.getElementById("FName").onchange = function() {
    FName = FName.value;
};
document.getElementById("LName").onchange = function() {
    LName = LName.value;
};

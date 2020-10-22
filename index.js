var dragged;
var testList = ["Capitol building", "Supreme Court", "Enforces the laws", "Directs military", "Approves new laws", "Congress", "9 Justices", "Reviews laws to decide if they are constitutional", "Makes the laws", "President", "The White House", "The supreme court building", "Made up of courts", "Senate", "House of representitives"]
var testAnswer = [0, 2, 1, 1, 1, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0]
var curAnswer = 0;
/* events fired on the draggable target */
document.getElementsByClassName("draggable")[0].innerText = testList[curAnswer]
document.addEventListener("drag", function(event) {}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.dataTransfer.setData("text/plain", event.target.innerText);
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "one" || event.target.className == "two" || event.target.className == "three") {
        event.target.style.background = "white";
        event.target.style.color = "black";
    }

}, false);

document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "one" || event.target.className == "two" || event.target.className == "three") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    var newElement = document.createElement("div")
    newElement.textContent = testList[curAnswer + 1]
    newElement.className = "draggable"
    newElement.setAttribute("draggable", true)
        // move dragged elem to the selected drop target
    if (event.target.className == "one" && testAnswer[curAnswer] == 0) {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        //event.target.appendChild( dragged );
        document.getElementsByClassName("answercheck")[0].style.background = "green"
        var data = event.dataTransfer.getData("text");
        //document.getElementById("draggable").innerText=testList[curAnswer]
        //event.target.innerText=data
        document.getElementsByClassName("spawnzone")[0].appendChild(newElement)
        document.getElementsByClassName("answercheck")[0].innerText = "Right answer! Keep going :)"
        if (curAnswer == 14) {
            document.getElementsByClassName("answercheck")[0].innerText = "ALL DONE! Secret message: Tell your teacher your favorite candy."
            document.getElementsByClassName("answercheck")[0].style.background = "yellow"
        }
        curAnswer += 1
    } else if (event.target.className == "two" && testAnswer[curAnswer] == 1) {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        //event.target.appendChild( dragged );
        //dragged.parentNode.appendChild( textnode );
        document.getElementsByClassName("answercheck")[0].style.background = "green"
        var data = event.dataTransfer.getData("text");
        //document.getElementById("draggable").innerText=testList[curAnswer]
        //event.target.innerText=data
        document.getElementsByClassName("spawnzone")[0].appendChild(newElement)
        document.getElementsByClassName("answercheck")[0].innerText = "Right answer! Keep going :)"
        curAnswer += 1
    } else if (event.target.className == "three" && testAnswer[curAnswer] == 2) {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        //event.target.appendChild( dragged );
        var textnode = document.createTextNode("Water");
        //dragged.parentNode.appendChild( textnode );
        document.getElementsByClassName("answercheck")[0].style.background = "green"
        var data = event.dataTransfer.getData("text");
        document.getElementsByClassName("spawnzone")[0].appendChild(newElement)
        curAnswer += 1
        document.getElementsByClassName("answercheck")[0].innerText = "Right answer! Keep going :)"
    } else {
        document.getElementsByClassName("answercheck")[0].style.background = "red"
        event.target.style.background = "";
        document.getElementsByClassName("answercheck")[0].innerText = "Wrong answer :("
    }
}, false);
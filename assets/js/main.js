var i=0;
var j=0;
var firstClass="";
var secondClass="";

function styling(className){
    i++;
    j = i % 2;
    if (i == 1) {
        document.getElementById("greetingBox").classList.add(className);
        firstClass = className;
    }
    else {
        secondClass = className;
        document.getElementById("greetingBox").classList.remove(firstClass);
        document.getElementById("greetingBox").classList.add(secondClass);
        firstClass = secondClass;
    }
}


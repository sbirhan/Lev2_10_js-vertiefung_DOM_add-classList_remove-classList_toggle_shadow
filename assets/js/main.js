var i=0;
var firstClass="";
var secondClass="";

function styling(className){
    i++;
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
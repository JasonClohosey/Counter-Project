var number = 0

function counter() {
document.getElementById("plusBtn").addEventListener("click", function() {
        number++;
        document.getElementById("number").innerHTML = number;
        if (number == 0) {
            document.getElementById("number").style.color = "white";
        }else if (number > 0) {
        document.getElementById("number").style.color = "green";
        }else {
            document.getElementById("number").style.color = "red";
        };
        console.log("clicked button ", number);
    });

    document.getElementById("minusBtn").addEventListener("click", function() {
        number--;
        document.getElementById("number").innerHTML = number;
        if (number == 0) {
            document.getElementById("number").style.color = "white";
        }else if (number > 0) {
        document.getElementById("number").style.color = "green";
        }else {
            document.getElementById("number").style.color = "red";
        };
        console.log("clicked button ", number);
    });
    
};

counter()
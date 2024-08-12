window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");
    var memory = 0;

    container.addEventListener("click", function(e) {
        if (e.target.tagName === "INPUT" && e.target.type === "button") {
            buttonClick(e.target.id);
        } else if (e.target.parentElement.tagName === "INPUT" && e.target.parentElement.type === "button") {
            buttonClick(e.target.parentElement.id);
        }
    });

    function buttonClick(buttonId) {
        if (buttonId === "ButtonC") {
            erase();
        } else if (buttonId === "Button=") {
            calculate();
        } else if (buttonId === "Button√") {
            input.value = Math.sqrt(parseFloat(input.value) || 0);
        } else if (buttonId === "Button^") {
            input.value += "**";
        } else if (buttonId === "Buttonπ") {
            input.value += Math.PI;
        } else if (buttonId === "Button!") {
            input.value = factorial(parseInt(input.value) || 0);
        } else if (buttonId === "ButtonSin") {
            input.value = Math.sin(parseFloat(input.value) || 0);
        } else if (buttonId === "ButtonCos") {
            input.value = Math.cos(parseFloat(input.value) || 0);
        } else if (buttonId === "ButtonTan") {
            input.value = Math.tan(parseFloat(input.value) || 0);
        } else if (buttonId === "ButtonLog") {
            input.value = Math.log10(parseFloat(input.value) || 0);
        } else if (buttonId === "ButtonLn") {
            input.value = Math.log(parseFloat(input.value) || 0);
        } else if (buttonId === "ButtonInv") {
            input.value = 1 / (parseFloat(input.value) || 1);
        } else if (buttonId === "ButtonM+") {
            memory += parseFloat(input.value) || 0;
        } else if (buttonId === "ButtonM-") {
            memory -= parseFloat(input.value) || 0;
        } else {
            var s = buttonId.replace("Button", "");
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        try {
            input.value = eval(input.value);
        } catch (e) {
            alert("Invalid Mathematical Expression");
        }
    }

    function erase() {
        input.value = "";
    }

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
};

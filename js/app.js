/* Put some script here */
(function () {
    var op1Input = document.getElementById("op1");
    var op2Input = document.getElementById("op2");
    var resHeader = document.getElementById("res");
    var contentDiv = document.getElementById("content");

    function clearContent() {
        contentDiv.innerHTML = "";
    }

    function displayResult(value) {
        resHeader.textContent = "Result: " + value;
    }

    function showHelp(jsonFile) {
        $ajaxUtils.sendGetRequest(jsonFile, function (data) {
            var html = "<h2>" + data.name + "</h2>";
            html += "<img src='" + data.image_name + "' alt='" + data.name + "'>";
            html += "<p>" + data.description + "</p>";
            contentDiv.innerHTML = html;
        }, true);
    }

    document.getElementById("add-button").onclick = function () {
        clearContent();
        var val = parseFloat(op1Input.value) + parseFloat(op2Input.value);
        displayResult(val);
    };

    document.getElementById("sub-button").onclick = function () {
        clearContent();
        var val = parseFloat(op1Input.value) - parseFloat(op2Input.value);
        displayResult(val);
    };

    document.getElementById("mul-button").onclick = function () {
        clearContent();
        var val = parseFloat(op1Input.value) * parseFloat(op2Input.value);
        displayResult(val);
    };

    document.getElementById("div-button").onclick = function () {
        clearContent();
        var o1 = parseFloat(op1Input.value);
        var o2 = parseFloat(op2Input.value);
        if (o2 === 0) {
            displayResult("operand 2 is equal to 0"); 
        } else {
            displayResult(o1 / o2);
        }
    };

    
    document.getElementById("log-button").onclick = function () {
        var o1 = parseFloat(op1Input.value);
        if (o1 <= 0) {
            displayResult("operand 1 is less or equal to 0"); 
            clearContent();
        } else {
            displayResult(Math.log(o1));
            showHelp("log.json"); 
        }
    };

    document.getElementById("sin-button").onclick = function () {
        var o1 = parseFloat(op1Input.value);
        var rad = o1 * Math.PI / 180;
        displayResult(Math.sin(rad));
        showHelp("sin.json"); 
    };

    document.getElementById("tan-button").onclick = function () {
        var o1 = parseFloat(op1Input.value);
        var rad = o1 * Math.PI / 180;
        displayResult(Math.tan(rad));
        showHelp("tan.json"); 
    };

})();

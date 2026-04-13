 function theFunction() {
        var hourly = document.getElementById("hourlyRate").value;
        var hours = document.getElementById("hoursPerWeek").value;
        var salary = hourly * hours * 52;
        var message;


        if (salary < 20000) {
            message = "The salary is too little.";
        } else if (salary >= 20000 && salary <= 25000) {
            message = "The salary is almost enough. Let’s negotiate.";
        } else {
            message = "This is a great salary for me.";
        }

        document.getElementById("change").innerHTML = "$" + salary + message;
    }
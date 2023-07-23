
// this is a constant use id of element to refers the actual element 
// like in android development
const buttonElement = document.getElementById("calculateButton");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function calculateAge() {
    //like println()
   // console.log("Clicked");     

   const birthdayValue = birthdayElement.value;

   // alert is like a popup warning if the value = 0
    if(birthdayValue === ""){
        alert("Please select your birthday");
    }
    else{
        const userAge = getAge(birthdayValue);
        // ( ` ) is used to make text dynamic
        // string operation just like kotlin
        resultElement.innerText = `Your age is ${userAge} ${userAge > 1 ? "years" : "year"} old`;
        
    }
}

// for calculation of the age
function getAge(birthdayValue){
    // Date() is constructor used to get current date from browser
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    // getFullYear() is used to get the year & getMonth() is used to get the month
    let userAge = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        userAge--
    }

    return userAge;
}

// event for button listener just like in android development
buttonElement.addEventListener("click", calculateAge); 
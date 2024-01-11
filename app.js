function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse("");
    let joinArray = reverseArray.join("");
    return joinArray;
}

function plaindromeCheck() {
    let msg = document.getElementById("msg").value;
    let ans =  document.getElementById("answer");
    let a = document.querySelector('body')
    if (msg == '') {
alert("Please Enter any string")        
    }

    else{

    msg = msg.toLowerCase();
    if (msg == reverseString(msg)) {
        ans.innerHTML = "Yes! It's PlainDrome";
        a.style.backgroundColor = "#b3e2b379"
    } else {
        ans.innerHTML = "It's not Plaindrome";
        a.style.backgroundColor = "#e69191"
    }
    
}
}
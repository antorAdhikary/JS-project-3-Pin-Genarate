function fourNumCreate (id){
    const generateNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    document.getElementById(id).value = generateNumber;
}

function btnInputHandler(id){
        document.getElementById("btn-input").value += document.getElementById(id).innerText;
}

function popDigit(id){
    const presentValue = document.getElementById(id).value;
    const digits = presentValue.split('');
    digits.pop();
    const remainingDigits = digits.join('');            
    document.getElementById(id).value = remainingDigits ;
}

function displayNone(){
    document.getElementById("btn-input").value = '';
}

function submitBtnHandler(){
    const genInput = document.getElementById("generate-input").value ;
    const genInputNum = parseInt(genInput);
    const btnInput = document.getElementById("btn-input").value;
    const btnInputNum = parseInt(btnInput);
    if(genInputNum == btnInputNum){
        document.getElementById("wrong").style.display = "none";
        document.getElementById("right").style.display = "block";
        document.getElementById("generate-input").value = '';
    }
    else {
        document.getElementById("wrong").style.display = "block";
        document.getElementById("right").style.display = "none";
    } 
    displayNone()
}
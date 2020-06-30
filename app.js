
function getNumber(num){
    result = document.getElementById("result")
    result.value += num;
}

function clearResult(){
    result = document.getElementById("result")
    result.value = "";
}

function getResult(){
    result = document.getElementById("result");
    result.value = eval(result.value);

}

function getSquare(){
    result = document.getElementById("result");
    result.value = result.value * result.value
}
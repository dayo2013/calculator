function calculate(){
var a=document.getElementById("number1").value
var b=document.getElementById("number2").value
let justsign=document.getElementById("just").value
if(justsign=="+"){
    let answer=Number(a)+Number(b)
    alert(answer)
}
if(justsign=="*"){
    let answer=Number(a)* Number(b)
    alert(answer)

}
if(justsign=="/"){
    let answer=Number(a)/Number(b)
    alert(answer)
}
}
function reset(){
    var a=document.getElementById("number1")
    var b=document.getElementById("number")
    a.value=""
    b.value=""
}

let roll = document.querySelector(".Roll");
let totalresult = document.querySelector("#total");
let showtherolls = document.querySelector(".showallrolls");
let lists = document.querySelector("#lists");
let numofdice = document.querySelector("#number-of-dice");
let numberofresets = document.querySelector("#reset-button");
let dierolls = [];
roll.addEventListener("click", function(){
let dicenum = numofdice.value 
let total = 0;
let counter = 0;
while (counter<dicenum) {
    let x = Math.floor(Math.random()*6 +1)
    dierolls.push(x)
    total +=x
    counter ++
}
totalresult.innerHTML=total
})

showtherolls.addEventListener("click", function(){
    str = "<ol>";
    dierolls.forEach(function (dicenum){
        str += "<li>" + dicenum + "</li>";
    });
    str +="</ol>";
    lists.innerHTML=str
});
numberofresets.addEventListener("click", function() {
    
    totalresult.innerHTML = 0;
    numofdice.value =0;
    lists.innerHTML = '';
    
})
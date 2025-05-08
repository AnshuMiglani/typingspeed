const btn= document.getElementById("yoboys");
console.log(btn);
const textwords= document.getElementById("inputwords");
const displaywords= document.getElementById("displaywords");
let starttime,endtime;

const setofwords= ["Function parameter names must be unique.","Forbids the with keyword and also octal syntax.","Forbids binding assignment of names eval and arguments in amy form.","Strict mode does not alias properties of arguments object with formal parameters."];
const startevent = ()=>{
    let rndmnumber= Math.round(Math.random()*setofwords.length);
    displaywords.innerText= setofwords[rndmnumber];
    let date= new Date();
    starttime= date.getTime();
    btn.innerText="Done";
}

const endevent= ()=>{
    let date= new Date();
    endtime= date.getTime();
    let totaltime= (endtime- starttime)/1000;
    let inputsentence= textwords.value;
    let nofowords= inputsentence.split(" ").length;
    let speed= Math.round((nofowords/totaltime)*60);
    let finalstatement= "You typed total at "+ speed +" words per minute. ";
    let words1= displaywords.innerText.split(" ");
    let words2= inputsentence.split(" ");
    let count=0;
    words1.forEach(function (item,index) {
        if(item== words2[index]){
            count++;
        }})
        let error= (words1.length- count);
        let abc= " Out of which "+ count +" are correct and "+ error +" have error.";
        finalstatement= finalstatement+ abc;
        displaywords.innerText= finalstatement;
        textwords.value= "";
}
btn.addEventListener("click",function (){
    if(btn.innerText== "Start"){
        textwords.ariaDisabled= false;
        startevent();
    }
    else if(btn.innerText== "Done"){
        textwords.ariaDisabled= true;
        btn.innerText="Start";
        endevent();
    }
})
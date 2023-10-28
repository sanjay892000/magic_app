let myName = document.getElementById('myName');
let myButton = document.getElementById('myButton');
let finalResult= document.getElementById('finalResult');

let array=['Pagal hai','Chamar hai','Gadha hai','Kutta hai','Bhukkhad hai','Kamchor hai','Aalasi hai','Shwarthi hai','Matalbi hai','Darpok hai']
myButton.addEventListener('click', ()=>{

    if(myName.value!=""){
     const res= array[Math.floor(Math.random()*array.length)];
     finalResult.innerText=myName.value+" "+res;
     myName.value="";

 }
 else{
    finalResult.innerText="Please enter your name"
 }

})

/* const text="";
    text=myName.innerText;
    console.log(text)
    finalResult.innerHTML=text; */

let elH1 = document.getElementById("newH1");
let elList = document.getElementById("list");

let checkArr = ['ASkj2','5EwuN', 'DrEVo' , 'KjIPP']
let randomText = Math.floor(Math.random() * checkArr.length);
let checkText = checkArr[randomText];
let checkHuman = prompt('Please type ' + checkText );

function checkUser(){
    if(checkHuman !== checkText){
      alert("SORRY YOU FAILED");
      changeHtml();
      return
    }
   
    alert('Hi welcome to this website let\'s go!');
    catchInformation(); 
  
}

function changeHtml(){
    elH1.innerHTML=("Good Bye!");
    elList.innerHTML=(""); 
};

function catchInformation(){
    let myName = prompt('what\'s your name?');
    console.log(myName);
    
    let myAge = confirm('Are you older than 18 years old?');
    console.log(myAge);

    if(myAge !== true){
    alert('Hello '+ myName + ' you are so young we cannot accept you');
    changeHtml();
    return
    }
    alert('Hello '+ myName + ' you are eligible for uploading your documents');
        
    let myOrigin = prompt('Where are you from ' + myName +'?');
    console.log(myOrigin);
    
    let myId = confirm('Do you have a valid driver licence?');
    console.log(myId);
    
    let myJob = prompt('What was your previos job ' + myName + ' in ' + myOrigin + '?');
    console.log(myJob);
    
    let myArray= [' White', 'Hispanic or Latino', 'African-American' ,'East Asia']
    let captcha = prompt('Please write your race ' + myArray+'.')
    
    alert('let\'s go ' + myName + '!');
    
    if(myName !== null){
        let elName = document.getElementById('newName');
        elName.innerHTML = myName;
    } 
}

checkUser();

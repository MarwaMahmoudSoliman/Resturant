/*******menu btn on header**** */
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.onclick = () =>{
    btnMenu.classList.toggle('fa-times');
    menu.classList.toggle('active')
}

/*******end menu btn on header**** */



function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form2.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form2.email.focus();
return false;
}



}
function validateform()
{
   

    var name=document.myform.name.value;  
   var phone = document.myform.phone.value;
    
     
if (name==null || name==""){  
    alert(" Please Enter Your Full Name ");  
    return false;

}else if(phone == null  || phone ==""){
    alert(" Please Enter Your phone ");  
    return false;
}
else if(phone.length<11)
{
    alert("phone  must be at most 11 number long.");  
    return false;  
}

}

function myFunction()  {
    document.getElementById("myDrop").classList.toggle("show");
}
function myButton()  {
    document. getElementById("myForm").style.display= "block"
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function verifyForm() {  
    var pw = document.getElementById("pass").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message2").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message2").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message2").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
        alert ("Password is strong");  
    }    
    var pw1 = document.getElementById("pass");  
    var pw2 = document.getElementById("confirm_pass");  
    if(pw1 != pw2)  {   
     document.getElementById("message3").innerHTML = "**Password does NOT match";  
      return false;  
    } else {  
        alert ("Your password matches!");  
    }    

   var mail= document.getElementById("email2");
   if (mail == "") {
    document.getElementById("message").innerHTML = "**Fill type email please!";  
    return false;  
}else {  
    alert ("Your Email is good");  
 }      
      var mail1 = document.getElementById("email2");
      var mail2 = document.getElementById("confirm_user");
      if(mail1 != mail2)  {   
        document.getElementById("message1").innerHTML = "**Email does NOT match";  
         return false;  
       } else {  
        alert ("Your Email matches");  
    }
}
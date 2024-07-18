function validation(){
    let name=document.getElementById("name").value;
    let pass=document.getElementById("pass").value;
    let cpass=document.getElementById("cpass").value;
    let phn=document.getElementById("phn").value;
    let emi=document.getElementById("emi").value;


   if (name==""){
       document.getElementById("namee").innerHTML="*Please fill the user name";   
       return false;
   }
   if (name.length<=5 || name.length>20){
       document.getElementById("namee").innerHTML="*User length must be between 5 to 20";   
       return false;
   }
   if (pass==""){
       document.getElementById("passs").innerHTML="*Please fill the password";   
       return false;
   }
   if (pass.length<=5 || pass.length>20){
       document.getElementById("passs").innerHTML="*Password length must be between 5 to 20";   
       return false;
   }
   if(cpass!=pass)
  {
   document.getElementById("cpasss").innerHTML="*Password do not match";   
   return false;
  }
  if (phn==""){
   document.getElementById("phnn").innerHTML="Phone field is empty";
   return false;  
  }
  if (phn.length<1 || phn.length>=10){
   document.getElementById("phnn").innerHTML="Entered no is invalid";  
   return false;
  }
  if(emi=="")
  {
   document.getElementById("emii").innerHTML="Enter the email";
   return false;  
    
  }
}


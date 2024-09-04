async function signUp() {
    
    const user_dto = {
        first_name:document.getElementById("first_name").value,
        last_name:document.getElementById("last_name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    };
    
   const response = await fetch(
           "SignUp",
   {
       method: "POST",
       body: JSON.stringify(user_dto),
       headers:{
           "Content-Type":"application/json"
       }
   }
           
   );
   
    if (response.ok){
        
        const 
        
    }else{
        
    }
    
}


const inputs =document.querySelectorAll('input');
const loginbtn =document.querySelector('.loginbtn');
let isvalid=false

document.forms[0].addEventListener('submit',function(e){
e.preventDefault()
if(isvalid===true){
    getForm()
   
   
}
}

)
document.forms[0].addEventListener('input',function(){
    if(
       
         validationEmail()
        && validationpass()
   ){

            isvalid=true

    }else{
        isvalid=false
    }

})
loginbtn.addEventListener('click',function(){
      
    getForm()
})
function getForm(){
    const user = {
 
	
        email:inputs[0].value,
        password:inputs[1].value


}

loginform(user)
}

 async function loginform(userdata){
  const api =await  fetch(`https://movies-api.routemisr.com/signin`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userdata)
        })
const response=await api.json()  ;
console.log(response);
if(response.message==='success'){
    localStorage.setItem('utoken',response.token)
    location.href='./home.html'

}else{
    document.querySelector('.msg').innerHTML=response.message
}

}
// /-----------validation-----------------------/ //


//=========lastname validation=====//



// emailvalidation//

function validationEmail(){
    const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
if(regex.test(inputs[0].value)){
    document.querySelector('.email-warn ').classList.add('d-none')
    inputs[0].classList.add('is-valid')
    inputs[0].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.email-warn').classList.remove('d-none');
   inputs[0].classList.add('is-invalid');
   inputs[0].classList.remove('is-valid');

}return false


} 
inputs[0].addEventListener('input',function(){
    validationEmail()
})


// validation passwor//
function validationpass(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

if(regex.test(inputs[1].value)){
    document.querySelector('.pass-warn ').classList.add('d-none')
 inputs[1].classList.add('is-valid')
   inputs[1].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.pass-warn').classList.remove('d-none');
   inputs[1].classList.add('is-invalid');
   inputs[1].classList.remove('is-valid');

}return false


} 
inputs[1].addEventListener('input',function(){
    validationpass()
})



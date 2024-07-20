const inputs =document.querySelectorAll('input');
const registerbtn =document.getElementById('registerbtn');
let isvalid=false

document.forms[0].addEventListener('submit',function(e){
e.preventDefault()
if(isvalid===true){
    getForm()
   
   
}
}

)
document.forms[0].addEventListener('input',function(){
    if(validationfName()
        && validationLName()
        &&  validationEmail()
        && validationpass()
        && validationAge()){

            isvalid=true

    }else{
        isvalid=false
    }

})
registerbtn.addEventListener('click',function(){
    getForm()
})
function getForm(){
    const user = {
    first_name:inputs[0].value ,
	last_name:inputs[1].value,
        email:inputs[2].value,
        password:inputs[3].value,
	age:inputs[4].value,
   

}

regiserform(user)
}

 async function regiserform(userdata){
  const api =await  fetch(`https://movies-api.routemisr.com/signup`,
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
    location.href='./login.html'

}else{
    document.querySelector('.msg').innerHTML=response.errors?.email.message
}

}
// /-----------validation-----------------------/ //

function validationfName(){
    const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
if(regex.test(inputs[0].value)){
    document.querySelector('.fname-warn').classList.add('d-none')
    inputs[0].classList.add("is-valid")
  inputs[0].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.fname-warn').classList.remove('d-none');
   inputs[0].classList.add('is-invalid');
    inputs[0].classList.remove('is-valid');

}return false


}
inputs[0].addEventListener('input',function(){
    validationfName()
})

//=========lastname validation=====//

function validationLName(){
    const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
if(regex.test(inputs[1].value)){
    document.querySelector('.Lname-warn').classList.add('d-none')
    inputs[1].classList.add('is-valid')
   inputs[1].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.Lname-warn').classList.remove('d-none');
               inputs[1].classList.add('is-invalid');
    inputs[1].classList.remove('is-valid');

}return false


} 
inputs[1].addEventListener('input',function(){
    validationLName()
})


// emailvalidation//

function validationEmail(){
    const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
if(regex.test(inputs[2].value)){
    document.querySelector('.email-warn ').classList.add('d-none')
    inputs[2].classList.add('is-valid')
    inputs[2].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.email-warn').classList.remove('d-none');
   inputs[2].classList.add('is-invalid');
   inputs[2].classList.remove('is-valid');

}return false


} 
inputs[2].addEventListener('input',function(){
    validationEmail()
})


// validation passwor//
function validationpass(){
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

if(regex.test(inputs[3].value)){
    document.querySelector('.pass-warn ').classList.add('d-none')
 inputs[3].classList.add('is-valid')
   inputs[3].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.pass-warn').classList.remove('d-none');
   inputs[3].classList.add('is-invalid');
   inputs[3].classList.remove('is-valid');

}return false


} 
inputs[3].addEventListener('input',function(){
    validationpass()
})


function validationAge(){
    const regex=/^([1-7][0-9]|80)$/

if(regex.test(inputs[4].value)){
    document.querySelector('.age-warn').classList.add('d-none')
   inputs[4].classList.add('is-valid')
    inputs[4].classList.remove('is-invalid')
return true
}else{
    document.querySelector('.age-warn').classList.remove('d-none');
   inputs[4].classList.add('is-invalid');
    inputs[4].classList.remove('is-valid');

}return false


} 
inputs[4].addEventListener('input',function(){
    validationAge()
})
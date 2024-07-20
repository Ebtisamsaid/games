
const loading=document.querySelector('.loading')
getgames('MMORPG')
document.querySelectorAll('.navbar-nav a').forEach(function(e){
  
    e.addEventListener('click',function(){
        document.querySelector('.nav-item .active').classList.remove('active')
        e.classList.add('active')
        const gategory=  e.getAttribute('data-gategory')
        getgames(gategory)
    })
   
})

     
 document.querySelector('.logoutbtn').addEventListener('click',function(){
    location.href="./login.html"
    localStorage.removeItem('utoken')
 })


async function getgames(MMORPG){
 loading.classList.remove('d-none')
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ea0ec23cdemshd6ca5bef84956aap1cef24jsn64b301c90764',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api=await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${MMORPG}`,options)
    const response=await api.json()
    console.log(response);
    displaygames(response)
    loading.classList.add('d-none')
}
// https://www.freetogame.com/g/582/videoplayback.webm//

function displaygames(data){
     let cartona=''
     for(let i=0; i<data.length;i++){
        let videopath=data[i].thumbnail.replace('thumbnail.jpg','videoplayback.webm')
        
cartona +=`
<div class="div col-md-3 mt-3 "  >
                <div class="card h-100  " onclick="showdetails(${data[i].id})" onmouseenter="playvedio(event)" onmouseleave="pausevideo(event)">
                    <div class="d-flex justify-content-center align-items-center position-relative" >
                        <img src="${data[i].thumbnail}" alt="" class="" style="width: 90%;">
                        <video muted="true" preload="none" loop="" class="w-100 h-100 position-absolute top-0 start-0 z-3 d-none">
                          <source src="https://www.freetogame.com/g/${data[i].id}/videoplayback.webm">
                          </video>
                    </div>
                    <div class="card-header d-flex justify-content-between ">

                       <h5>${data[i].title}</h5>
                       <span>free</span> 
                       </div>
                       <div class="div card-body ">
                       ${data[i].short_description}
                       </div>
                       <div class="div card-footer d-flex justify-content-between">
                        <span>${data[i].genre}</span>
                        <span>${data[i].platform}</span>
                       </div>
                    </div>
                </div>

`


     }
     document.getElementById('gamecard').innerHTML=cartona
    
}




function playvedio(event){
    const videl=event.target.querySelector('video')
videl.classList.remove('d-none');
videl.play()
}
function pausevideo(event){
    const videl=event.target.querySelector('video');
    videl.classList.add('d-none');
    videl.pause()
}




 function showdetails(id){
    location.href=`./details.html?id=${id}`
 }
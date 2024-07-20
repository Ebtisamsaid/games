$('.fa-sharp').click(function(){
    location.href="./home.html"
})




 const searchparam=location.search
 const param=new URLSearchParams(searchparam)
 const id=param.get('id');
 

(async function (){

    const options = {
        method: "GET",
        headers: {
           "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
           "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
     };

    const api =await fetch(` https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
    const response=await api.json()
    console.log(response);

    displaydetails(response)
})();
function displaydetails(data){
   
    
     const cartona =`
        <div class="col-md-4 d-md-block d-sm-none">
   <figure>
      <img src="${data.thumbnail}" class="" alt="details image" />
   </figure>
</div>
<div class="col-md-8">

   <div>
      <nav aria-label="breadcrumb">
         <ol class="breadcrumb" class="text-light">
            <li class="breadcrumb-item text-reset "><a href="./home.html">Home</a></li>
            <li class="breadcrumb-item text-info" aria-current="page">${data.title}</li>
         </ol>
      </nav>

      <h1>${data.title}</h1>

      <h3 class="text-info">About ${data.title}</h3>
      <p class="text-white">${data.description}</p>

      <button type="button" class="btn btn-danger"><a class="text-white text-decoration-none" href='${data.game_url}'>show games</a></button>
   </div>
</div>
        
        `
        document.getElementById("detailsData").innerHTML = cartona;
        
        const background=`https://www.freetogame.com/g/${data.id}/background.jpg`
        document.body.style.cssText=`background-image:url('${background}');
      
        background-size:cover;
      
        background-position:center;`
    

  
}


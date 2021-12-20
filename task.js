fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
.then((res)=>{
    let r=res.json();
    return r;
})
.then((resp)=>{
    console.log(resp.data[0]);
    let h3=document.getElementById("animeName");
    h3.innerText=resp.data[0].anime_name;
    let h4=document.getElementById("animeId");
    h4.innerText=resp.data[0].anime_id;
    let img=document.getElementById("animeImage");
    img.setAttribute("src",resp.data[0].anime_img);
})
.catch(()=>{
    console.log("error")
})

fetch("https://api.artic.edu/api/v1/artworks/129884")
.then((res)=>{
    let r=res.json();
    return r;
})
.then((resp)=>{
    console.log(resp.data);
    let h3=document.getElementById("artworkName");
    h3.innerText="Artist name: "+resp.data.artist_title;
    let h4=document.getElementById("artworkId");
    h4.innerText="Artist id: "+resp.data.id;
    let img=document.getElementById("artworkImage");
    img.setAttribute("src",resp.data.thumbnail.lqip);
})
.catch(()=>{
    console.log("error");
})

fetch("https://rickandmortyapi.com/api/character/")
.then((res)=>{
    return res.json();
})
.then((r)=>{
    console.log(r.results[0]);
    console.log(r.results[0]);
    
    let h3=document.getElementById("disneyName");
    h3.innerText="Character name: "+r.results[0].name;
    let h4=document.getElementById("disneyId");
    h4.innerText="Character id: "+r.results[0].id;
    let img=document.getElementById("disneyImage");
    img.setAttribute("src",r.results[0].image);
})
.catch(()=>{
    "error";
})

// fetch("https://api.disneyapi.dev/characters")
// .then((res)=>{
//     return res.json();
// })
// .then((r)=>{
//     console.log(r.data[1].tvShows[0]);
//     // console.log(r.data[1].imageUrl);
//     let h3=document.getElementById("disneyName");
//     h3.innerText="Artist name: "+r.data[1].tvShows[0];
    
//     let img=document.getElementById("disneyImage");
//     img.setAttribute("src",r.data[0].imageUrl);
// })
// .catch(()=>{
//     "error";
// })

// duck Image
// https://random-d.uk/api or https://random-d.uk/api/v2
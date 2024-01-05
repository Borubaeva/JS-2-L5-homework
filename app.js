const ulTag=document.querySelector('ul')
const btns=document.querySelectorAll('button')
const url='https://api.sampleapis.com/movies/'
const endpoints={
    animation:'animation',
    classic:'classic',
    comedy:'comedy',
    drama:'drama',
    horror:'horror',
    family:'family',
    mystery:'mystery',
    scifiFantasy:'scifi-fantasy',
    western:'western'
}

console.log(endpoints);

function getAdventure(){
    fetch(url+endpoints.actionAdventure)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getAnimation(){
    fetch(url+endpoints.animation)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getClassic(){
    fetch(url+endpoints.classic)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getComedy(){
    fetch(url+endpoints.comedy)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getDrama(){
    fetch(url+endpoints.drama)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getHorror(){
    fetch(url+endpoints.horror)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getFamily(){
    fetch(url+endpoints.family)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getMystery(){
    fetch(url+endpoints.mystery)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getFantasy(){
    fetch(url+endpoints.scifiFantasy)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}
function getWestern(){
    fetch(url+endpoints.western)
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             showMovie(data)
    })
}


function showMovie(arr){
    ulTag.innerHTML=''
    for (const obj of arr) {
        ulTag.innerHTML+=`
        <li>${obj.title}
        <br>
        <img width='20%' src=${obj.posterURL}/>
        </li>
        
        `
    }
}

btns[0].onclick=()=>{
    ulTag.innerHTML=''
    getAnimation()
}
btns[1].onclick=()=>{
    ulTag.innerHTML=''
    getClassic()
}
btns[2].onclick=()=>{
    ulTag.innerHTML=''
    getComedy()
}
btns[3].onclick=()=>{
    ulTag.innerHTML=''
    getDrama()
}
btns[4].onclick=()=>{
    ulTag.innerHTML=''
    getHorror()
}
btns[5].onclick=()=>{
    ulTag.innerHTML=''
    getFamily()
}
btns[6].onclick=()=>{
    ulTag.innerHTML=''
    getMystery()
}
btns[7].onclick=()=>{
    ulTag.innerHTML=''
    getFantasy()
}
btns[8].onclick=()=>{
    ulTag.innerHTML=''
    getWestern()
}
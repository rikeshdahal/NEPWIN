// Taskbar icons Transition
// 1st Icon
let starticon = document.getElementsByClassName("starticon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let sutdowns = document.getElementsByClassName("sutdown")[0]

starticon.addEventListener("click", ()=>{
    console.log("clicked");
    if (sutdowns.style.display === "block") {
        sutdowns.style.display = "none";
        
      } else {
        sutdowns.style.display = "block";
      }
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
        
    }
    else{
        startmenu.style.bottom = "50px"
    }
    
})

// 2nd Icon

let searchicon = document.getElementsByClassName("searchicon")[0]
let searchin = document.getElementsByClassName("searchin")[0]

searchicon.addEventListener("click", ()=>{
    console.log("clicked");
    if(searchin.style.bottom == "50px"){
        searchin.style.bottom = "-655px"
    }
    else{
        searchin.style.bottom = "50px"
    }
})

// 3rd Icon
let thirdicon = document.getElementsByClassName("thirdicon")[0]
let threein = document.getElementsByClassName("threein")[0]

thirdicon.addEventListener("click", ()=>{
    console.log("clicked");
    if(threein.style.bottom == "50px"){
        threein.style.bottom = "-800px"
    }
    else{
        threein.style.bottom = "50px"
    }
})

// 4th Icon

let fourthicon = document.getElementsByClassName("fourthicon")[0]
let fourin = document.getElementsByClassName("fourin")[0]

fourthicon.addEventListener("click", ()=>{
    console.log("clicked");
    if(fourin.style.bottom == "50px"){
        fourin.style.bottom = "-800px"
    }
    else{
        fourin.style.bottom = "50px"
    }
})

// 5th Icon


let mcicon = document.getElementsByClassName("mcicon")[0]
let mcin = document.getElementsByClassName("mcin")[0]

mcicon.addEventListener("click", ()=>{
    console.log("clicked");
    if(mcin.style.bottom == "50px"){
        mcin.style.bottom = "-800px"
    }
    else{
        mcin.style.bottom = "50px"
    }
})

// 6th Icon

let vscodeicon = document.getElementsByClassName("vscodeicon")[0]
let vscodein = document.getElementsByClassName("vscodein")[0]

vscodeicon.addEventListener("click", ()=>{
    console.log("clicked");
    if(vscodein.style.bottom == "50px"){
        vscodein.style.bottom = "-800px"
    }
    else{
        vscodein.style.bottom = "50px"
    }
})

// 7th Icon

let chromeicon = document.getElementsByClassName("chromeicon")[0]
let closes = document.getElementsByClassName("backbtn")[0]
let chromein = document.getElementsByClassName("chromein")[0]

chromeicon.addEventListener("click", ()=>{
    console.log("clicked");
    if (closes.style.display === "block") {
        closes.style.display = "none";
        
      } else {
        closes.style.display = "block";
      }
    if(chromein.style.bottom == "50px"){
        chromein.style.bottom = "-800px"
    }
    else{
        chromein.style.bottom = "50px"
    }
})

// 8th Icon

let foldericon = document.getElementsByClassName("foldericon")[0]
let folderin = document.getElementsByClassName("folderin")[0]

foldericon.addEventListener("click", ()=>{
    console.log("clicked");
    if(folderin.style.bottom == "50px"){
        folderin.style.bottom = "-800px"
    }
    else{
        folderin.style.bottom = "50px"
    }
})
// 9th Icon
let goti = document.getElementsByClassName("noti")[0]
let gotiin = document.getElementsByClassName("notiin")[0]

goti.addEventListener("click", ()=>{
    console.log("clicked");
    if(gotiin.style.left == "420px"){
        gotiin.style.left = "990px"
    }
    else{
        gotiin.style.left = "420px"
    }
})


// 10th Icon
let sutdown = document.getElementsByClassName("sutdown")[0]
let sutdownin = document.getElementsByClassName("sutdownin")[0]
// let restarts = document.getElementsByClassName("restart")[0]


sutdown.addEventListener("click", ()=>{
    console.log("clicked");
    // if (restarts.style.display === "block") {
    //     restarts.style.display = "none";
        
    //   } else {
    //     restarts.style.display = "block";
    //   }
    // if(sutdownin.style.bottom == "50px"){
    //     sutdownin.style.bottom = "-800px"
    // }
    // else{
    //     sutdownin.style.bottom = "50px"
    // }
    location.replace("index.html")
})
//11th Icon
// let restart = document.getElementsByClassName("restart")[0]
// restarts.addEventListener("click", ()=>{
//     console.log("clicked");
    
//     location.replace("index.html")
// })
//12th Icon
let closed = document.getElementsByClassName("backbtn")[0]
let tabs = document.getElementsByClassName("chromein")[0]

closed.addEventListener("click", ()=>{
    console.log("clicked");
    if (closed.style.display === "block") {
        closed.style.display = "none";
        
      } else {
        closed.style.display = "block";
      }
    console.log("clicked");
    tabs.style.bottom = "-800px"
})








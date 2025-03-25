let double= document.getElementById('box')

let cacher= document.getElementById('pass') 


double.addEventListener('mouseover',()=>{
    cacher.style.display="block"
})
double.addEventListener("mouseout",()=>{
cacher.style.display="none"
})
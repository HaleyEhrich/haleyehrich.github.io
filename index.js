let nav_close=false
let nav_last_width
function nav_change(){
    let nav = document.querySelector(".nav")
    console.log("nav change"+nav_last_width)

    // if(!nav_close){
    //     nav_last_width = nav.style.width
    //     nav.style.width = 0+'px'
    //     nav.style.dispaly = 'none'
    //     nav_close=true
    // }else{
    //     nav.style.width = nav_last_width
    //     nav_close=false
    // }
}



// let nav_container = document.querySelector(".nav_container")
// let nav = document.querySelector(".nav")
// document.addEventListener("scroll", (e) => {
//     const distance = nav_container.getBoundingClientRect().top
//     console.log(distance);
//     if (distance <= 0) {
//         nav_container.classList.add('box-active')
//     } else {
//         nav_container.classList.remove('box-active')
//     }
// })

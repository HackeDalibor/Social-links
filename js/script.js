let carres = document.querySelectorAll(".carre")
let facebook = document.querySelector(".facebook")
//let instagram = document.querySelector(".instagram")
//let twitter = document.querySelector(".twitter")

carres.forEach(carre => {
    carre.addEventListener("click", function() {
        carre.classList.toggle('active')
    })
})

facebook.for(facebook => {
    facebook.addEventListener("click", function() {
        facebook.classList.toggle('colorfb')
    })
})

gsap.to(".nav-logo svg", {
    transform: `translateY(-100%)`,
    // scrollTrigger: {
    //     trigger: ".banner-section",
    //     scroller: ".main",
    //     markers: true,
    //     start: "top 0",
    //     end: "top -10%",
    //     scrub: true,
    // }
})
// gsap.to(".links", {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".banner-section",
//         scroller: ".main",
//         markers: true,
//         start: "top 0",
//         end: "top -5%",
//         scrub: true,
//     }
// })

gsap.from(".banner-section h1", {
    y: 50,
    opacity: 0,
    delay: 0.4,
    duration: 0.5,
    stagger: 0.2,

})

gsap.from(".video-container video", {

    opacity: 0,
    scale: 0.8,
    delay: 0.3,
    duration: 0.5,


})




function videoContainerAnimation() {
    let videoContainer = document.querySelector(".video-container");
    let playBtn = document.querySelector(".play");
    videoContainer.addEventListener("mouseenter", function () {

        gsap.to(playBtn, {
            scale: 1,
            opacity: 1,

        })

    })

    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0,

        })

    })

    videoContainer.addEventListener("mousemove", function (elem) {
        gsap.to(playBtn, {
            left: elem.x,
            top: elem.y,
        })

    })

}

videoContainerAnimation();

document.addEventListener("mousemove", function (elem) {
    gsap.to(".cursor", {
        left: elem.x,
        top: elem.y,
    })
})

let cursor = document.querySelectorAll(".bags-elem-box");
cursor.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
            transform: ` translate(-50%,-50%)scale(1)`,
        })
    })

})

cursor.forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            transform: ` translate(-50%,-50%)scale(0)`,
        })
    })

})

let shopBox = document.querySelector(".shop-box");
let shopElem = document.querySelector(".shop-elems-box");


// // Add event listener for mousemove
// shopBox.addEventListener("mousemove", function (event) {
//     // Increase the height and add a class
//     shopBox.style.height = "150px";
//     shopElem.style.display = "block";
//     shopElem.style.transition="0.5s all"

//     // Adjust the height as needed
//     shopBox.classList.add("hovered-class"); // Add your custom class
// });

// // Add event listener for mouseleave
// shopBox.addEventListener("mouseleave", function () {
//     // Decrease the height and remove the class
//     shopBox.style.height = "50px";
//     shopElem.style.display = "none"

//     // Set it back to the original height
//     shopBox.classList.remove("hovered-class"); // Remove the added class
// });
let shopBoxes = document.querySelectorAll(".shop-box");
let shopElems = document.querySelectorAll(".shop-elems-box");
console.log(shopBox)
console.log(shopElems);



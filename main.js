//vanilla
// let picture = document.querySelector("#picture")
// // let picture = document.getElementById("picture")

// let allButtons = document.querySelectorAll(".btn")
// // let allButtons = document.getElementsByClass("btn")

// allButtons.forEach(btn => {
//     btn.addEventListener("click",() => {
//         if(picture.style.display === "block")
//         picture.style.display = "none";
//         else {
//             picture.style.display = "block";
//         }
//     })
// })

//jquery

let div = jQuery(".container")

$(".btn").on("click", () => {
    $("#picture").fadeIn(3000);
    div.toggleClass("blue");
})

$(".btn").on("click", () => {
    $("#picture").toggle(3000);
    div.toggleClass("blue");
})

let smallest = $('.grandGrandChild').closest(".hide");
console.log(smallest);
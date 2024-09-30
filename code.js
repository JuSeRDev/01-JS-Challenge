const title = document.querySelectorAll(".subtitle")
const paragraph = document.querySelectorAll(".paragraph")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")

/* title.forEach((subtitle, i)=>{
    title[i].addEventListener("click", ()=>{
        if (paragraph[i].style.display === "none") {
            paragraph[i].style.display = "flex"
            plus[i].style.display = "none"
            minus[i].style.display = "flex"
            
        }else{
            paragraph[i].style.display = "none"
            plus[i].style.display = "flex"
            minus[i].style.display = "none"
        }
    })
}) */

title.forEach((subtitle, i)=>{
    subtitle.addEventListener("click", ()=>{
        paragraph[i].classList.toggle("open")
            if (paragraph[i].classList.contains("open")) {
                plus[i].style.display = "none"
                minus[i].style.display = "block"
                paragraph[i].style.padding = "30px 0 20px 0"
            } else {
                plus[i].style.display = "block"
                minus[i].style.display = "none"
                paragraph[i].style.padding = ""
            }
    })
})
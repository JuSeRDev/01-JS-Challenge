const title = document.querySelectorAll(".subtitle")
const paragraph = document.querySelectorAll(".paragraph")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")

title.forEach((subtitle, i)=>{
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
})

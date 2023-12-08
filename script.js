const form = document.getElementsByTagName("form")
const getEarly = document.querySelector(".get-early-block")

//select input
const input = document.querySelector("#inputEmail")

//select submit button
let submitBtn = document.querySelector(".get-early__btn")

//create new paragraph 
let newParagraph = document.createElement("p")

//set value to the paragraph
newParagraph.textContent = "Please enter a valid email address" 


//check if email address is valid
submitBtn.addEventListener("click", function (event){
    console.log(newParagraph)

    if(input.value.includes('@') === false || input.value.includes(".") === false) {
        event.preventDefault()
        getEarly.appendChild(newParagraph)
        newParagraph.style.color = "#ff4242"
        newParagraph.style.fontSize = "0.8rem"
        newParagraph.style.display = "flex"
        newParagraph.style.justifyContent = "flex-start"
        newParagraph.style.marginLeft = "2rem"
        newParagraph.style.marginTop = "0.3rem"

        input.style.border = "1px solid #ff4242"
        input.style.cursor = "pointer"
    } 

    // set margint-top of error message according to screen width    
    if (window.innerWidth < 1201 || window.innerWidth > 851) {
        newParagraph.style.marginTop = "0rem"
        newParagraph.style.marginRight = "0rem"

        /* newParagraph.style.marginLeft = "-9rem" */
        newParagraph.style.justifyContent = "start"
             

    }
    
    if (window.innerWidth < 851) {
        newParagraph.style.marginTop = "-10rem"
        newParagraph.style.marginLeft = "5rem"
        newParagraph.style.fontSize = "1.5rem"
        getEarly.style.paddingBottom = "9rem"   
    } 
    
    if (window.innerWidth < 651) {
        newParagraph.style.marginTop = "-5rem"
        newParagraph.style.marginLeft = "4rem"
        newParagraph.style.fontSize = "0.8rem"
          input.style.marginBottom = "2rem" 
        getEarly.style.paddingBottom = "5.5rem" 
    } 

    
    
    if (window.innerWidth >= 1201) {
        newParagraph.style.marginTop = "0.3rem"
    }
   
    form.reset()
    
    })
   
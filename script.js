const Calc = document.querySelector("button")
const resultconvert = document.querySelector(".result")
const form = document.querySelector("form")

function convert(x){
    return x * 0.0254
}
function display(finalResult){
    resultconvert.textContent = finalResult
}
function handleSubmit(){
    display(convert(inches.value))
}

form.addEventListener( "submit", function(e){
    e.preventDefault()
    handleSubmit() 
    

} )


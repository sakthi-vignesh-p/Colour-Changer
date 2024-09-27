
const box=document.getElementById("box")
const input=document.getElementById("input")
const text=document.getElementById("text")


function color()
{
   box.style.backgroundColor=input.value
   text.style.color=input.value
   text.textContent=input.value
}
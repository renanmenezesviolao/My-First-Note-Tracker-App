const tinput = document.getElementById("tinput")

const ninput = document.getElementById("ninput")

const addbtn = document.getElementById("addbtn")

const container = document.getElementById("container")

const dellallbtn = document.getElementById("dellallbtn")

const divs = document.getElementById("dive")


const deleted = document.getElementsByClassName("delallbtn")

const text = document.getElementsByTagName("textarea").readOnly = true;
const butondel = deleted[0]

addbtn.addEventListener("click", addnote)

container.addEventListener("click", removenote)




function addnote () {
    if(ninput.value.length && tinput.value.length > 0) {

	const div = document.createElement("div")
	div.classList.add("notes")
    
	container.appendChild(div)

    

	const h4 = document.createElement("h4")
	h4.innerText = tinput.value
    h4.classList.add("title")
    div.appendChild(h4)

    const button = document.createElement("button")
    button.classList.add("delbtn")
    button.innerHTML = "X"
    h4.appendChild(button)

    const textarea = document.createElement("textarea",)
    textarea.readOnly = true;
     textarea.classList.add("text")
     textarea.innerHTML = ninput.value
     div.appendChild(textarea);
      
     

     tinput.value = ""
     ninput.value = ""
    }
    else alert ("Write Something in Both Boxes")
    

    
}

function removenote(element) {
    const item = element.target;
  
    if (item.classList[0] === "delbtn") {
      const remov = item.parentElement;
      const addler = remov.parentElement;
      addler.remove()


  
      remov.remove();
    }
  }


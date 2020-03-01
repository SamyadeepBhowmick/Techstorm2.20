// let event1 = document.getElementById("event1")
// event1.addEventListener("click", (e)=>{
//         e.preventDefault()
//         localStorage.setItem("subEvent", event1.classList[0])
//         window.location.href="/register.html"
//         modal will be called from here.
// })

function register(name){
        localStorage.setItem("subEvent", name)
        openModal()
        // window.open("register.html",'_blank')
        //modal will be called from here.
}
modal = document.getElementById("modal")
// btn.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)

function openModal(){
    if(modal.classList[1] === "out"){
        modal.classList.remove("out")
    }
    modal.classList.add("active")
}

function closeModal(e){
    if (e.target == modal) {
        modal.classList.remove("active")
        modal.classList.add("out")
    }
}

// let event1 = document.getElementById("event1")
// event1.addEventListener("click", (e)=>{
//         e.preventDefault()
//         localStorage.setItem("subEvent", event1.classList[0])
//         window.location.href="/register.html"
//         modal will be called from here.
// })

data = [
    {
        "FIFA": {
            "description": "loremewjfejfj",
            "rules" : "ipsum",
            "result" : "qweryy"
        },
        "COC": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        }
    }
]

function register(name){
        localStorage.setItem("subEvent", name)
        openModal()
        // window.open("register.html",'_blank')
}
modal = document.getElementById("modal")
closeBtn = document.querySelector(".close-button")
// btn.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)
closeBtn.addEventListener("click", closeModal)

//for opening the modal
function openModal(){
    let subEvent = localStorage.getItem("subEvent")
    document.querySelector(".modal_name h2").innerHTML = subEvent
    document.querySelector(".modal-body .description p").innerHTML = data[0][subEvent].description
    document.querySelector(".modal-body .rules p").innerHTML = data[0][subEvent].rules
    document.querySelector(".modal-body .result p").innerHTML = data[0][subEvent].result
    if(modal.classList[1] === "out"){
        modal.classList.remove("out")
    }
    modal.classList.add("active")
    
}

//for closing modal
function closeModal(e){
    if (e.target == modal || e.target == closeBtn) {
        modal.classList.remove("active")
        modal.classList.add("out")
    }
}

//for onclick functioning of main icon in subevents section
document.querySelector(".avatar").addEventListener("click",function(){
    window.location.href="index.html"
})

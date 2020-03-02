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
        },
        "NFS": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "KHET": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "35MMLIVE": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "PASSIONWITHREELS": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "FANTAC": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "TECHNOMANIA": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "APPMANIA": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "OMEGATRIX": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "ROPICKER": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "ROCARROM": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "ROWINGS": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "ROCOMBAT": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "RONAVIGATOR": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "ROTERRANCE": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "ROSOCCER": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },
        "EXPOSCIENCE": {
            "description": "lorem",
            "rules" : "ipsum",
            "result": "qweryy"
        },

    }
]

function register(name){
        localStorage.setItem("subEvent", name)
        openModal()
}
modal = document.getElementById("modal")
closeBtn = document.querySelector(".close-button")
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
        console.log(e.target)
        modal.classList.remove("active")
        modal.classList.add("out")
    }
}

//for onclick functioning of main icon in subevents section
document.querySelector(".avatar").addEventListener("click",function(){
    window.location.href="index.html"
})

// let event1 = document.getElementById("event1")
// event1.addEventListener("click", (e)=>{
//         e.preventDefault()
//         localStorage.setItem("subEvent", event1.classList[0])
//         window.location.href="/register.html"
//         modal will be called from here.
// })

function register(name){
        localStorage.setItem("subEvent", name)
        window.open("register.html",'_blank')
        //modal will be called from here.
}

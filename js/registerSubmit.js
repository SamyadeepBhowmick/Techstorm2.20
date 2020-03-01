
let qrcode
if(localStorage.getItem("event") && localStorage.getItem("subEvent")){
    let database = firebase.database();
    let btn = document.getElementById("btn")
    let members =[]
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        let name = document.getElementById("name").value
        let dept = document.getElementById("dept").value
        let email = document.getElementById("email").value
        let phone = document.getElementById("phone").value
        let college = document.getElementById("college").value
        let teamName = ""
        let event = localStorage.getItem("event")
        let subEvent = localStorage.getItem("subEvent")
        switch(subEvent){
            case "APPMANIA":
            case "FANTAC":
                members.push({"name": document.getElementById("name2").value, 
                              "department": document.getElementById("dept2").value})
                teamName = document.getElementById("teamName").value
                break
            case "TECHNOMANIA":
            case "ROCOMBAT":
            case "RONAVIGATOR":
            case "ROPICKER":
            case "ROTERRANCE":
            case "ROSOCCER":
            case "ROWINGS":
            case "ROCARROM": 
                for(i=2;i<=5;i++){
                    members.push({
                        "name": document.getElementById(`name${i}`).value, 
                        "department": document.getElementById(`dept${i}`).value})
                }
                teamName = document.getElementById("teamName").value
                break;
            case "PASSIONWITHREELS":
                for(i=2;i<=8;i++){
                    members.push({
                        "name": document.getElementById(`name${i}`).value, 
                        "department": document.getElementById(`dept${i}`).value})
                }
                teamName = document.getElementById("teamName").value
                break;
        }
        // console.log(name, email, dept, phone, event, subEvent, teamName, members)
        let date = new Date()
        database.ref(`${event}/${subEvent}/${phone}`).set({
            a_teamName: teamName,
            b_leaderName: name, 
            c_college: college, 
            d_department: dept,
            e_email: email, 
            f_phoneNo: phone, 
            g_members: members,
            time: date.toString(),
            payment: "none"
        }, (error)=>{
            if(error){
                console.log(error)
                document.getElementById("snackbar").innerHTML="Some error occurred"
                myFunction()
            }else{
                console.log("You Were Registered for the Event")
                    document.getElementById("snackbar").innerHTML="You are registered for "+subEvent
                    myFunction()
                    qrcode = new QRCode(document.querySelector(".qr"), {
                    text: event+" "+subEvent+" "+phone,
                    width: 200,
                    height: 200,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
            });
                closeBtn = document.querySelector(".close-button")
                modal = document.getElementById("modal")
                openModal()
                modal.addEventListener("click", closeModal)
                closeBtn.addEventListener("click", closeModal)
        
            }
        });
    })
}else{
    alert("No Event Category Was Selected")
    window.location.href = "/index.html"
}

function openModal(){
    let subEvent = localStorage.getItem("subEvent")
    document.querySelector(".modal_name h2").innerHTML = "You have registered for "+subEvent
    if(modal.classList[1] === "out"){
        modal.classList.remove("out")
    }
    modal.classList.add("active")
}

function closeModal(e){
    if (e.target == modal || e.target == closeBtn) {
        modal.classList.remove("active")
        modal.classList.add("out")
    }
    document.querySelector(".qr canvas").remove()
    document.querySelector(".qr img").remove()

}
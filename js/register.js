// localStorage.setItem("event", "BrainTeasers")
// localStorage.setItem("subEvent", "OMEGATRIX")

function htmlDeptCheck(id){
    return`
    <div class="form-row m-b-55">
        <div class="name">Member ${id} Department</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check" type="text" name="dept${id}" id="dept${id}">
                <label class="error dept${id} label--desc">Field is Required</label>
            </div>
        </div>
    </div>`
}
function htmlNameCheck(id){
    return `
    <div class="form-row m-b-55">
        <div class="name">Member ${id} <br>Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check" type="text" name="name${id}" id="name${id}">
                <label class="error name${id} label--desc">Field is Required</label>
            </div>
        </div>
    </div>`
}
function htmlDept(id){
    return`
    <div class="form-row m-b-55">
        <div class="name">Member ${id} Department</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 dept-uncheck dept-uncheck${id}" type="text" name="dept${id}" id="${id}">
                <label class="error dept-uncheck${id} label--desc">Field is Required</label>
            </div>
        </div>
    </div>`
}
function htmlName(id){
    return`
    <div class="form-row m-b-55">
        <div class="name">Member ${id} <br>Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 name-uncheck name-uncheck${id}" type="text" name="name${id}" id="${id}">
            </div>
        </div>
    </div>`
}
const htmlTeamName= `
    <div class="form-row m-b-55">
        <div class="name">Team Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check" type="text" name="teamName" id="teamName">
                <label class="error teamName label--desc">Field is Required</label>
            </div>
        </div>
    </div>`

const extra = document.querySelector(".add-extra")
const teamName = document.querySelector(".add-extra-team-name")

// Get event an subevent name from local storage
let event = localStorage.getItem("event")
let subEvent = localStorage.getItem("subEvent")

// Dynamic Form generation
switch(subEvent){
    case "APPMANIA":
    case "FANTAC":
        extra.innerHTML += htmlName(2)
        extra.innerHTML += htmlDept(2)
        teamName.innerHTML += htmlTeamName
        break
    case "TECHNOMANIA":
    case "ROCOMBAT":
    case "RONAVIGATOR":
    case "ROPICKER":
    case "ROTERRANCE":
    case "ROSOCCER":
    case "ROWINGS":
    case "ROCARROM": 
        for(i=2;i<=3;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
        }//required part
        for(i=4;i<=5;i++){
            extra.innerHTML += htmlName(i)
            extra.innerHTML += htmlDept(i)
        }//not required part
        teamName.innerHTML += htmlTeamName
        break;
    case "PASSIONWITHREELS":
        for(i=2;i<=8;i++){
            extra.innerHTML += htmlName(i)
            extra.innerHTML += htmlDept(i)
        }
        teamName.innerHTML += htmlTeamName
        break;
}

let eventname=localStorage.getItem("subEvent")
let h2=document.querySelector(".title")
h2.innerHTML+=eventname+" Registration Form"

// Function for displaying toast
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
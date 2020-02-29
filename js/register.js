// (function ($) {
//     'use strict';
//     /*==================================================================
//         [ Daterangepicker ]*/
//     try {
//         $('.js-datepicker').daterangepicker({
//             "singleDatePicker": true,
//             "showDropdowns": true,
//             "autoUpdateInput": false,
//             locale: {
//                 format: 'DD/MM/YYYY'
//             },
//         });
    
//         var myCalendar = $('.js-datepicker');
//         var isClick = 0;
    
//         $(window).on('click',function(){
//             isClick = 0;
//         });
    
//         $(myCalendar).on('apply.daterangepicker',function(ev, picker){
//             isClick = 0;
//             $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
//         });
    
//         $('.js-btn-calendar').on('click',function(e){
//             e.stopPropagation();
    
//             if(isClick === 1) isClick = 0;
//             else if(isClick === 0) isClick = 1;
    
//             if (isClick === 1) {
//                 myCalendar.focus();
//             }
//         });
    
//         $(myCalendar).on('click',function(e){
//             e.stopPropagation();
//             isClick = 1;
//         });
    
//         $('.daterangepicker').on('click',function(e){
//             e.stopPropagation();
//         });
    
    
//     } catch(er) {console.log(er);}
//     /*[ Select 2 Config ]
//         ===========================================================*/
    
//     try {
//         var selectSimple = $('.js-select-simple');
    
//         selectSimple.each(function () {
//             var that = $(this);
//             var selectBox = that.find('select');
//             var selectDropdown = that.find('.select-dropdown');
//             selectBox.select2({
//                 dropdownParent: selectDropdown
//             });
//         });
    
//     } catch (err) {
//         console.log(err);
//     }

// })(jQuery);

// const event1 = ['event11', 'event12', 'event13']
// const event2 = ['event21', 'event22', 'event23']
// const event3 = ['event31', 'event32', 'event33']

// function dropdown(event){
//     eventValue = event.options[event.selectedIndex].value
//     console.log(eventValue)
//     let subevent = document.getElementById("subevent")
//     if(eventValue == "Event 1"){
//         for(i=0; i<event1.length; i++){
//             let option = document.createElement("option");
//             let text = document.createTextNode(`${event1[i]}`);
//             option.appendChild(text)
//             subevent.appendChild(option);
//         }
//     }
// }

// localStorage.setItem("event", "BrainTeasers")
// localStorage.setItem("subEvent", "OMEGATRIX")

function htmlDept(id){
    return`
    <div class="form-row m-b-55">
        <div class="name">Member ${id} Department</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5" type="text" name="dept${id}" id="dept${id}">
            </div>
        </div>
    </div>`
}
function htmlName(id){
    return `
    <div class="form-row m-b-55">
        <div class="name">Member ${id} <br>Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5" type="text" name="name${id}" id="name${id}">
            </div>
        </div>
    </div>`
}
const htmlTeamName= `
    <div class="form-row m-b-55">
        <div class="name">Team Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5" type="text" name="teamName" id="teamName">
            </div>
        </div>
    </div>`

const extra = document.querySelector(".add-extra")
const teamName = document.querySelector(".add-extra-team-name")

let event = localStorage.getItem("event")
let subEvent = localStorage.getItem("subEvent")


// if(subEvent === "FANTAC")

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
        for(i=2;i<=5;i++){
            extra.innerHTML += htmlName(i)
            extra.innerHTML += htmlDept(i)
        }
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

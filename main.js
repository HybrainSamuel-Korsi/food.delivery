

// const drop_btn = document.querySelector(".drop_btn")

// drop_btn.addEventListener("click", ()=>{
//     alert
// })

function dropBtn(){
    const action = document.querySelector(".action");
    if( action.style.display == "block"){
        action.style.display = " none";
    }else{
        action.style.display ="block";
    }
    
}


const active = document.querySelectorAll(".app_items ul .list_items .active");






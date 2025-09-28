// for(i=0;i<8;i++){
//     list=["button.w","button.a","button.s","button.d","button.j","button.k","button.l"]
//     document.querySelector(list[i]).addEventListener("click", function () { alert("I got clicked!") })
// }


// for(i=0;i<7;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () { var audio=new Audio("./sounds/tom-1.mp3") 
// audio.play() })
// }


for(i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
        var letterofclick = this.textContent.toLowerCase();
        console.log(letterofclick)
        playSound(letterofclick)
        addanimation(letterofclick)
    })
}

document.addEventListener("keypress",function(event){
                var keypressed=event.key.toLowerCase()
            playSound(keypressed)
            addanimation(keypressed)
})

function playSound(event){
    switch (event) {
            case "h":
                var audio=new Audio("./sounds/crash.mp3") 
                audio.play() 
                break;
            case "e":
                var audio=new Audio("./sounds/kick-bass.mp3") 
                audio.play() 
                break;
            case "r":
                var audio=new Audio("./sounds/snare.mp3") 
                audio.play() 
                break;
            case "i":
                var audio=new Audio("./sounds/tom-1.mp3") 
                audio.play() 
                break;
            case "b":
                var audio=new Audio("./sounds/tom-2.mp3") 
                audio.play() 
                break;
            case "a":
                var audio=new Audio("./sounds/tom-3.mp3") 
                audio.play() 
                break;
            case "y":
                var audio=new Audio("./sounds/tom-4.mp3") 
                audio.play() 
                break;
            case "y":
                var audio=new Audio("./sounds/tom-4.mp3") 
                audio.play() 
                break;
        
            default:
                break;
        }
}



function addanimation(input){
    var activebutton=document.querySelector("."+input)
    activebutton.classList.add("pressed")
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100)
}


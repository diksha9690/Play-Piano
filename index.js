document.querySelector(".circle").addEventListener("click",()=>{
    document.querySelector(".circle").classList.toggle("on")
    
});
var arr = document.querySelectorAll(".keys");
arr.forEach(element => {
    element.addEventListener("click",()=>{
    var a = element.innerHTML
    makesounds(a)
     
    })
});

function makesounds(key){
    switch (key) {
        case "A":
            var audio1 = new Audio("24-piano-keys/key01.mp3")
            audio1.play();
            break;
            case "W":
                var audio2 = new Audio("24-piano-keys/key02.mp3")
                audio2.play();
                break;
                case "S":
                    var audio3 = new Audio("24-piano-keys/key03.mp3")
                    audio3.play();
                    break;
                    case "E":
                        var audio4 = new Audio("24-piano-keys/key04.mp3")
                        audio4.play();
                        break;
                        case "D":
                        var audio5 = new Audio("24-piano-keys/key05.mp3")
                        audio5.play();
                        break;
                        case "F":
                        var audio6 = new Audio("24-piano-keys/key06.mp3")
                        audio6.play();
                        break;
                        case "T":
                        var audio7 = new Audio("24-piano-keys/key07.mp3")
                        audio7.play();
                        break;
                        case "G":
                        var audio8 = new Audio("24-piano-keys/key08.mp3")
                        audio8.play();
                        break;
                        case "Y":
                        var audio9 = new Audio("24-piano-keys/key09.mp3")
                        audio9.play();
                        break;
                        case "H":
                        var audio10 = new Audio("24-piano-keys/key010.mp3")
                        audio10.play();
                        break;
                        case "U":
                        var audio11= new Audio("24-piano-keys/key011.mp3")
                        audio11.play();
                        break;
                        case "J":
                        var audio12 = new Audio("24-piano-keys/key012.mp3")
                        audio12.play();
                        break;
                        case "K":
                            var audio13 = new Audio("24-piano-keys/key013.mp3")
                            audio13.play();
                            break;
                            case "E":
                        var audio14 = new Audio("24-piano-keys/key014.mp3")
                        audio14.play();
                        break;
                        case "O":
                        var audio15 = new Audio("24-piano-keys/key015.mp3")
                        audio15.play();
                        break;
                        case "L":
                        var audio16 = new Audio("24-piano-keys/key016.mp3")
                        audio16.play();
                        break;
                        case "P":
                        var audio17 = new Audio("24-piano-keys/key017.mp3")
                        audio17.play();
                        break;
                        case ";":
                        var audio18 = new Audio("24-piano-keys/key018.mp3")
                        audio18.play();
                        break;
        default:
            break;
    }
}
const audio = new Audio("mixkit-game-show-suspense-waiting-667.wav");
document.querySelector(".automatic").addEventListener("click",()=>{
    
    audio.play();
    
})
document.addEventListener("keypress",(e)=>{
    if(e.key){
        audio.pause();
    }
})
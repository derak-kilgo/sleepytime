
window.noise = new dNoise();

document.addEventListener("DOMContentLoaded", function() {
    let pinkSwitch = document.getElementById('pinkNoise');
    pinkSwitch.onclick = function(){
        if(this.checked){
            window.noise.stop();
            window.noise.pink();
        }else{
            window.noise.stop();
        }
    };

    let whiteSwitch = document.getElementById("whiteNoise");
    whiteSwitch.onclick = function(){
        if(this.checked){
            window.noise.stop();
            window.noise.white();
        }else{
            window.noise.stop();
        }
    };

    let blueSwitch = document.getElementById("blueNoise");
    blueSwitch.onclick = function(){
        if(this.checked){
            window.noise.stop();
            window.noise.blue();
        }else{
            window.noise.stop();
        }
    };

    let redSwitch = document.getElementById("redNoise");
    redSwitch.onclick = function(){
        if(this.checked){
            window.noise.stop();
            window.noise.red();
        }else{
            window.noise.stop();
        }
    };

    let violetSwitch = document.getElementById("violetNoise");
    violetSwitch.onclick = function(){
        if(this.checked){
            window.noise.stop();
            window.noise.violet();
        }else{
            window.noise.stop();
        }
    };

  });
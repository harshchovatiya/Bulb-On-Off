var bulb = document.querySelector(".bulb");
var on = document.querySelector(".On-button");
var off = document.querySelector(".Off-button");
var body = document.querySelector("body");

var harsh = 0;

on.addEventListener("click", function(){
    if(harsh == 1){
    alert("Bulb is alredy On");
    }else{
        bulb.innerHTML = '<img src="https://image.ibb.co/cBBaeR/light_bulb_on.png">'
        on.style.backgroundColor = "darkgrey"
        off.style.backgroundColor = "rgb(235, 234, 234)"
    }
    harsh = 1;

})

off.addEventListener("click", function(){
    if(harsh == 0){
        alert("Bulb is already Off ");
    }else{
    bulb.innerHTML = '<img src="https://image.ibb.co/hoBxtm/light_bulb_off.png">'
    off.style.backgroundColor = "darkgrey"
    on.style.backgroundColor = "rgb(235, 234, 234)"
}
harsh = 0;
})
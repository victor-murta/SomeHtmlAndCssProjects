const colors = ["green", "red", "rgba(133, 122, 200" ,"#f15025"];
const btn = document.getElementById("btn");
const colot = document.querySelector(".color");

btn.addEventListener('click', function(){
    console.log(document.body);
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.background = colors[randomNumber];
    colors.textContent = colors[randomNumber];
    
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

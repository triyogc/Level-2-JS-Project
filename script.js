let score = 0;
let images = [];
images.push("lemon.png", "mango.png", "oranges.png", "cherry.png", "grapes.png", "banana.png", "strawberry.png", "greenapple.png");
const colors=["#A3333D", "#2D82B7", "#FF9000","#241E4E", "#568259","#FFD166","#5D3A00","#CB48B7"];
const imagesPicklist=[...images, ...images];
const Container = document.querySelector(".container");
const colorsPicklist=[...colors, ...colors];
const tileCount=colorsPicklist.length;
let revealedCount=0;
let activeTile=null;
let awaitingEndOfMove=false;
const restart=document.querySelector(".restart");
restart.addEventListener("click",() =>{
  location.replace(location.href);
})
function buildTile(color) {
  const element=document.createElement("div");
  element.classList.add("tile");
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed", "false");
  element.addEventListener("click", () =>{
    score+=2;
    document.querySelector(".bottom").textContent="Score:"+score;
    const revealed=-element.getAttribute("data-revealed");
    if(awaitingEndOfMove||revealed==="true"||element===activeTile) return;
    
    element.style.backgroundColor=color;
    if(!activeTile) {
      activeTile=element;
      return;
    }
    const colortoMatch=activeTile.getAttribute("data-color");
    if(colortoMatch===color){
      activeTile.setAttribute("data-revealed", "true");
      element.setAttribute("data-revealed", "true");
      awaitingEndOfMove=false;
      activeTile=null;
      revealedCount+=2;
      if(revealedCount===tileCount){
        alert("You win!  press restart to play again");
        score=0;
        document.querySelector(".bottom").textContent="Score:"+score;
      }
      return;
    }
    awaitingEndofMove=true;
    setTimeout(() => {
      element.style.backgroundColor=null;
      activeTile.style.backgroundColor=null;
      awaitingEndOfMove=false;
      activeTile = null;
    }, 1000);

  });
  return element;
}
for(let i=0; i<tileCount; i++){
  const randomIndex=Math.floor(Math.random()*colorsPicklist.length);
  const colors=colorsPicklist[randomIndex];
  const tile= buildTile(colors);
  colorsPicklist.splice(randomIndex, 1);
 Container.appendChild(tile);


}

/*const grid = document.getElementById("grid");
const resetButton = document.getElementById("reset-button");
const scoreValue = document.getElementById("score-value");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
 assignimages=(array)=> {
  for(let i=0;i<array.length*2;i++){
    let x=i;
    if(x>array.length){
      x=x/2;
    }
    let z="un"+i;
    let img =document.getElementById(z);
     //img.src = array[x];
  }
}
assignimages(shownImages);

button1=document.getElementById("uno");
img1=document.getElementById("un1");
button1.addEventListener("click", () => {
   img1.src = "lemon.png";
  setTimeout(() => {
    img1.src="";
  }, 1000);
 console.log("lemon");
})

button2=document.getElementById("dos");
img2=document.getElementById("un2");
button2.addEventListener("click", () => {
  img2.src = "mango.png";
  setTimeout(() => {
    img2.src = "";
  }, 1000);
  console.log("mango");
  })

button3 = document.getElementById("tres");
img3 = document.getElementById("un3");
button3.addEventListener("click", () => {
  img3.src = "grapes.png";
  setTimeout(() => {
    img3.src = "";
  }, 1000);
  console.log("grapes");
  })

button4 = document.getElementById("cuatro");
img4 = document.getElementById("un4");
button4.addEventListener("click", () => {
  img4.src = "cherry.png";
  setTimeout(() => {
    img4.src = "";
  }, 1000);
  console.log("cherry");
})

button5 = document.getElementById("cinco");
img5 = document.getElementById("un5");
button5.addEventListener("click", () => {
  img5.src = "oranges.png";
  setTimeout(() => {
    img5.src = "";
  }, 1000);
  console.log("oranges");
  })

button6 = document.getElementById("seis");
img6 = document.getElementById("un6");
button6.addEventListener("click", () => {
  img6.src = "strawberry.png";
  setTimeout(() => {
    img6.src = "";
  }, 1000);
  console.log("strawberry");
  })


button7 = document.getElementById("siete");
img7 = document.getElementById("un7");
button7.addEventListener("click", () => {
  img7.src = "banana.png";
  setTimeout(() => {
    img7.src = "";
  }, 1000);
  console.log("banana");
  })

 button8 = document.getElementById("ocho");
img8 = document.getElementById("un8");
button8 = addEventListener("click", () => {
  img8.src = "greenapple.png";
  setTimeout(() => {
    img8.src = "";
  }, 1000);
  console.log("green apple");
  })
  

 function handleImageClick(event) { 
  const clickedImage = event.target; 
  if (revealedImages.length < 2 && clickedImage.src.endsWith("hidden.jpg"))
  { 
    const index = clickedImage.dataset.index; clickedImage.src = images[index]; revealedImages.push(clickedImage);      
    if (revealedImages.length === 2) 
    { 
      setTimeout(checkMatch, 1000);
    }
    score++;
    scoreValue.textContent = score; }
} */
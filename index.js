const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  //fonction felchée
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = `${Math.random() * 100 + 50}px`; //math.random est compris entre 0 et 1. size et donc compris entre 100 et 300
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  let plusminus = Math.random() > 0.5 ? 1 : -1; // test condition ? valeur si vrai : valeur si faux;
  /*if(Math.random()>0.5){
    1
}else{
    -1
}*/
  bubble.style.setProperty("--left", Math.random() * 100 * plusminus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);

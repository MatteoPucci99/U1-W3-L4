const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

arrayNumbers = [];
trackNumbers = [];
const createTable = () => {
  const container = document.getElementsByClassName("container")[0];
  for (let i = 0; i < 76; i++) {
    const table = document.createElement("div");
    table.classList.add("table");
    container.appendChild(table);
    const number = document.createElement("p");
    table.appendChild(number);
    number.innerText = `${i + 1}`;
    arrayNumbers.push(table);
  }
};
createTable();
console.log(arrayNumbers);

const callRandom = () => {
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  for (i = 0; i < arrayNumbers.length; i++) {
    if (randomNumber === i + 1) {
      //   arrayNumbers[i].style.backgroundColor = "blue";
      arrayNumbers[i].classList.add("selected");
      trackNumbers.push(randomNumber);
    }
  }
  console.log(trackNumbers);
};

const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", callRandom);

const deleteEqualNumbers = () => {
  trackNumbers.forEach((el) => {
    if (el === el) {
      alert("Questo numero è già uscito");
    }
  });
};

deleteEqualNumbers();

// non viene, cosa sto sbagliando?

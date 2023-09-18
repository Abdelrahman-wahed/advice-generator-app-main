// let box = document.querySelector(".box");
// let dice = document.querySelector(".box .dicebtn");
// let getData = function (apiLink) {
//   return new Promise((res, rej) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         res(JSON.parse(this.responseText));
//       } else rej(Error("Not Found Data"));
//     };
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };
// dice.addEventListener("click", function () {
//   let b= document.querySelectorAll(".box div");
//   if(b.length>1){
//     for(let i=0 ;i<b.length;i++){
//       if(i=== b.length-1){
//         break;
//       }
//       b[i].remove();
//     }
//   }

//   getData("https://api.adviceslip.com/advice")
//     .then((res) => {

//       let divAdvice = document.createElement("div");
//       divAdvice.className="divadvice";
//       let advice = document.createElement("q");
//       let textAdvice = document.createTextNode(res.slip.advice);
//       advice.append(textAdvice);
//       divAdvice.append(advice);
//       let numAdvice = document.createElement("span");
//       let textNumAdvice = document.createTextNode(`ADVICE #${res.slip.id}`);
//       numAdvice.appendChild(textNumAdvice);
//       advice.before(numAdvice);
//       box.prepend(divAdvice);
//     })
//     .catch((res) => {
//       console.log(res);
//     });

// });

// anthor soliotion

let box = document.querySelector(".box");

let dice = document.querySelector(".box .dicebtn");

dice.addEventListener("click", function () {
  let b = document.querySelectorAll(".box div");
  if (b.length > 1) {
    for (let i = 0; i < b.length; i++) {
      if (i === b.length - 1) {
        break;
      }
      b[i].remove();
    }
  }
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let divAdvice = document.createElement("div");
      divAdvice.className = "divadvice";
      let advice = document.createElement("q");
      let textAdvice = document.createTextNode(res.slip.advice);
      advice.append(textAdvice);
      divAdvice.append(advice);
      let numAdvice = document.createElement("span");
      let textNumAdvice = document.createTextNode(`ADVICE #${res.slip.id}`);
      numAdvice.appendChild(textNumAdvice);
      advice.before(numAdvice);
      box.prepend(divAdvice);
    })
    .catch((res) => {
      console.log(res);
    });
});

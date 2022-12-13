import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  var count = 0;

  document.body.addEventListener('click', (event) => {

    const length = 5;

    for(let i =0; i < length; i++){
      
      let element = document.createElement('article');

      count += length;
      element.setAttribute('id', 'article' + count);
      document.body.appendChild(element);
       
      let text = "Testing" + count;

      document.getElementById('article' + count).innerHTML = text;
      document.getElementById('article' + count).classList.add('message');
    
    }

  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


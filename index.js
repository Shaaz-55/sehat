// function changeIcon(){
// const change_icon = document.getElementsByClassName('icon');
// change_icon.innerHTML = "dq wiudvd";
// };

// const button = document.querySelector('.new_button');
// const js_test = document.querySelector('.js_test');

// button.addEventListener ('click'.function(){
//       const newDiv = document.createElement('div');
      
//       newDiv.textContent = 'This is a new div!';
//       newDiv.classList.add('new-div');
//       container.appendChild(newDiv)
// });


const chat_button = document.getElementById('chat_button');
const chat_box = document.getElementById('chat_box');

chat_button.addEventListener('click',function(){
      chat_box.classList.toggle('hidden');
      chat_box.classList.toggle('visible');
})
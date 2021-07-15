// function myFunction() {
//   document.getElementById("button").innerHTML = "https://www.digitaltechnologylabs.com/wp-content/uploads/2019/06/01-240x300.jpg";
// }

const button = document.querySelector('#button');

button.addEventListener('click', function() {
  event.target.innerHTML = 'Meme Time!'

  const surpriseImage = document.createElement('img');
  surpriseImage.src = 'https://thecodinglove.com/content/039/rskneik2r4h41.jpg';
  document.body.appendChild(surpriseImage);
});

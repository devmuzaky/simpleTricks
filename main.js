var curserChange = document.querySelector('#demo-image');

document.addEventListener('mousemove', function (e) {
  curserChange.style.left = e.clientX+ 'px' ;
  curserChange.style.top = e.clientY+ 'px' ;
  console.log(e.clientX,e.clientY);
});
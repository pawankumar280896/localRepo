// Toggle
let textChange=document.querySelector(".textChange");
let btn = document.querySelector('.toggleColor');

btn.addEventListener('click', function onClick(event) {
  let backgroundColor = btn.style.backgroundColor;
  let backtextChange=textChange.textContent;
    console.log(backtextChange);
  if (backgroundColor === 'grey' && backtextChange==='Dark') {
    btn.style.backgroundColor = 'white';
    backtextChange='Light';
    console.log(backtextChange);
    document.body.style.backgroundColor = 'white';
    
  } else {
    btn.style.backgroundColor = 'grey';
    document.body.style.backgroundColor = 'grey';
    backtextChange='Dark';
    console.log(backtextChange);
  }
});

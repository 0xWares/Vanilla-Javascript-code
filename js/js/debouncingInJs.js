const input = document.getElementById('inp')

function debounce(fnc, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fnc(...args)
    }, delay)
  }
}

input.addEventListener('input', debounce(function(){
  console.log('hello world');
  
}, 1000))
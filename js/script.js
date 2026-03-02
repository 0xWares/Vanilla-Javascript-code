// const inp = document.querySelector('.input');

// inp.addEventListener('input', function(data){
//     if(data.data !== null){
//     console.log(data.data);

//     }    
// })



// const dev = document.querySelector('.dev');
// const sel = document.querySelector('#sel')
// sel.addEventListener('change', function(data){
//     const d = data.target.value;
//     dev.textContent = `Device selected as: ${d}`

//     console.log(data.target.value);
    
    
// })

const text = document.querySelector('.text');
window.addEventListener('keydown', function(dets){
    if(' ' === dets.key){
        text.textContent = 'Space'
    }else{
        text.textContent = dets.key
    }
    
});
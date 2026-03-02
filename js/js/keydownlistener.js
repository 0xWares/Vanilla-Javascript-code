const text = document.querySelector('.text');
window.addEventListener('keydown', function(dets){
    if(' ' === dets.key){
        text.textContent = 'Space'
    }else{
        text.textContent = dets.key
    }
    
});
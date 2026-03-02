const dev = document.querySelector('.dev');
const sel = document.querySelector('#sel')
sel.addEventListener('change', function(data){
    const d = data.target.value;
    dev.textContent = `Device selected as: ${d}`

    console.log(data.target.value);
    
    
})
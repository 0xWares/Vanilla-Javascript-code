const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    console.log('hello world');
    
})

container1.addEventListener('click',function(){
    console.log('hello world 1');
    
})
container2.addEventListener('click',function(){
    console.log('hello world 2');
    
})
container3.addEventListener('click',function(){
    console.log('hello world 3');
    
}, true)
localStorage.setItem('name', 'Wares');

// the sequence should now change to 1 -  hello world 2 2 -  hello world 3 - hello world 1, 4 - hello world 2 
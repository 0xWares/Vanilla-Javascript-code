// here is the iife practice code

let bankOfBangladesh = (function(){
    let balance = 12000;
    const pass = 7890;
    function checkBalance(password){
         if (pass == password) {
            return balance;
         }else{
            return console.log('Password is incorrect');
            
         }
        
    }
    function withdraw(amount, password){
        if(balance > amount && pass == password){
            
            balance -= amount;
            return balance;
            
            
            
        }else{
            return console.log('balance is not sufficient or password is incorrect');
            
        }
    }

    function setBalance(amount, password){
        if (pass == password) {
            balance = amount;
        return balance;
        }else{
            return console.log('password is incorrect');
            
        }
        
    }

    return {
        chkblc: checkBalance,
        withdraw: withdraw,
        setblc: setBalance
    }
})()





const checkBal = document.querySelector('.chkbal')
const withDraw = document.querySelector('.with')
const dep = document.querySelector('.dep')
const details = document.querySelector('.details')
const takeDetails1 = document.querySelector('#takeDetails1')
const takeDetails2 = document.querySelector('#takeDetails2')
const takeDetails3 = document.querySelector('#takeDetails3')

checkBal.addEventListener('click', function(){
    let inp = document.createElement('input');
    let btn = document.createElement('button');
    inp.setAttribute('type', 'password');
    inp.setAttribute('placeholder', 'Enter your Password here');
    btn.innerHTML = 'Check balance'
    btn.setAttribute('id', 'submitPass');
    takeDetails1.append('Enter your password: ',inp, btn)

    const submitPass = document.querySelector('#submitPass')
    
submitPass.addEventListener('click', function(){
    let passw = inp.value;
    details.textContent = `You have ${bankOfBangladesh.chkblc(passw)} bucks in your account...`
})


})

withDraw.addEventListener('click', function(){
    let inp1 = document.createElement('input');
    let inp2 = document.createElement('input');
    let btnwithdraw = document.createElement('button');
    inp1.setAttribute('type', 'text');
    inp2.setAttribute('type', 'password');
    inp1.setAttribute('placeholder', 'Enter withdrawal amount:');
    inp2.setAttribute('placeholder', 'Enter your Password here');
    btnwithdraw.innerHTML = 'Check balance'
    btnwithdraw.setAttribute('id', 'submitPass');
    takeDetails2.append('Enter your password: ',inp1, '<br></br>', inp2, btnwithdraw)

    const submitPass = document.querySelector('#submitPass')

    submitPass.addEventListener('click', function(){
    let inpVal = inp1.value;
    let passw = inp2.value;
    details.textContent = `Success, You have ${bankOfBangladesh.withdraw(inpVal, passw)} remaining in your acount`
})
})


dep.addEventListener('click', function(){
    let inpa1 = document.createElement('input');
    let inpa2 = document.createElement('input');
    let btnwithdrawA = document.createElement('button');
    inpa1.setAttribute('type', 'text');
    inpa2.setAttribute('type', 'password');
    inpa1.setAttribute('placeholder', 'Enter deposit amount:');
    inpa2.setAttribute('placeholder', 'Enter your Password here');
    btnwithdrawA.innerHTML = 'Deposit balance'
    btnwithdrawA.setAttribute('id', 'submitPass');
    takeDetails3.append('Enter your password: ',inpa1, '<br></br>', inpa2, btnwithdrawA)

    const submitPass = document.querySelector('#submitPass')

    submitPass.addEventListener('click', function(){
    let inpValA = inpa1.value;
    let passwA = inpa2.value;
    details.textContent = `${bankOfBangladesh.setblc(inpValA, passwA)} bucks deposit successful...`
})
})
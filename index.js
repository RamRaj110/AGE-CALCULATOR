const btn = document.querySelector('button'),
    input = document.querySelector('input'),
    output = document.querySelector('.output')

btn.addEventListener('click',function(){
    let userValue = input.value
    const userBirthDate = new Date(userValue)
    const currentDate = new Date()
    let age = currentDate.getFullYear()-userBirthDate.getFullYear()

    if(userValue === ''){
        alert('Enter your valid Birthdate.')
    }else{
        let month = currentDate.getMonth()-userBirthDate.getMonth()
        if(month < 0 || (month === 0 && currentDate.getDate() < userBirthDate.getDate())){
            age--
        }
        output.innerHTML = `Your are ${age} ${age > 1 ? "years" : "year"} old`
    }
})
function getPromt(){
    const userNum = parseInt(document.getElementById('user-number').value)
    console.log(userNum)
    const wordsList = [];

    for (let index = 0; index < userNum; index++) {
        const words = prompt(`Escriba la ${index+1}º palabra`)
        wordsList.push(words)
    }
    
    document.getElementById('result').innerHTML = wordsList.join(' ')
}
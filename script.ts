import readline from 'readline'

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const guessGame: () => void = () => {

    console.log(`__________Welcome to Guess the Number__________`);
    console.log(`1. Easy Mode`);
    console.log(`2. Medium Mode`);
    console.log(`3. Hard Mode`);
    console.log(`4. Boss Mode`);

    rl.question('Please select your difficulty: ', (answer) => {
        const userMode: number = parseInt(answer)

        switch (userMode) {
            case 1:
                easyMode()
                break
            case 2:
                mediumMode()
                break
            case 3:
                hardMode()
                break
            case 4:
                bossMode()
                break
            default:
                console.log('Invalid number!!!')
                guessGame()
        }
    })

}

guessGame()

const permission: () => void = () => {
    rl.question('Do you wish to continue [Y/N]: ', (answer) => {
        const userPermit: string = answer

        if (userPermit == 'y' || userPermit == 'Y') {
            console.log('Okay!!')
            guessGame()
        } else if (userPermit == 'n' || userPermit == 'N') {
            console.log('Have a nice day!!')
            rl.close()
        } else {
            console.log('Invalid input!!')
        }
    })
}

const easyMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 10)

    let userAttempt: number = 5

    console.log(`Guess a number from the range 0 to 10 and you have ${userAttempt} attempts!`);

    for (let i: number = 0; i < 5; i++) {
        rl.question(`Input a number: `, (answer) => {
            let userNum: number = parseInt(answer)

            userAttempt = userAttempt - 1

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum = randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`)
                permission()
                // break
            } else {
                console.log('ERROR 404 :(')
            }
        })
    }

    if (userAttempt == 0) {
        console.log(`You lost!`)
        console.log(`The value is ${randomNum}`)
        permission()
    }
}

const mediumMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 100)

    let userAttempt: number = 10

    for (let i: number = 0; i < 10; i++) {
        console.log(`Guess a number from the range 0 - 100 and you have ${userAttempt} attempts!`)
        rl.question('Input a number: ', (answer) => {
            let userNum: number = parseInt(answer)

            userAttempt = userAttempt - 1

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum = randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`)
                permission()
                // break
            } else {
                console.log('ERROR 404 :(')
            }
        })
    }

    if (userAttempt == 0) {
        console.log(`You lost!`)
        console.log(`The value is ${randomNum}`)
        permission()
    }
}

const hardMode: () => void = () => {
    const randomNum = Math.round(Math.random() * 1000)

    let userAttempt = 10

    for (let i: number = 0; i < 10; i++) {
        console.log(`Guess a number from the range 0 - 1000 and you have ${userAttempt} attempts!`)
        rl.question('Input a number: ', (answer) => {
            let userNum: number = parseInt(answer)

            userAttempt = userAttempt - 1

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum = randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`)
                permission()
                // break
            } else {
                console.log('ERROR 404 :(')
            }
        })
    }

    if (userAttempt == 0) {
        console.log(`You lost!`)
        console.log(`The value is ${randomNum}`)
        permission()
    }
}

const bossMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 10000)

    let userAttempt = 20

    for (let i: number = 0; i < 20; i++) {
        console.log(`Guess a number from the range 0 - 10000 and you have ${userAttempt} attempts!`)
        rl.question('Input a number: ', (answer) => {
            let userNum: number = parseInt(answer)

            userAttempt = userAttempt - 1

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum = randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`)
                permission()
                // break
            } else {
                console.log('ERROR 404 :(')
            }
        })
    }

    if (userAttempt == 0) {
        console.log(`You lost!`)
        console.log(`The value is ${randomNum}`)
        permission()
    }
}

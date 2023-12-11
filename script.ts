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
        const userPermit: string = answer.toUpperCase()

        if (userPermit == 'Y') {
            console.log('Okay!!')
            guessGame()
        } else if (userPermit == 'N') {
            console.log('Have a nice day!!')
            rl.close()
        } else {
            console.log('Invalid input!!')
        }
    })
}

// ... (Previous code remains unchanged)

const easyMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 10);
    let userAttempt: number = 5;

    const getUserInput = () => {
        rl.question(`Input a number: `, (answer) => {
            let userNum: number = parseInt(answer);
            userAttempt = userAttempt - 1;

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum === randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`);
                if (userAttempt > 0) {
                    console.log(`Congratulations! You won!`);
                } else {
                    console.log(`You lost!`);
                    console.log(`The value is ${randomNum}`);
                }
                permission(); // Call permission() only once after winning or losing
                return; // Exit the function to prevent further execution
            } else {
                console.log('ERROR 404 :(');
            }

            if (userAttempt > 0) {
                console.log(`You have ${userAttempt} attempts left.`);
                getUserInput(); // Call the function recursively for the next iteration
            } else {
                console.log(`You lost!`);
                console.log(`The value is ${randomNum}`);
                permission();
            }
        });
    };

    console.log(`Guess a number from the range 0 to 10 and you have ${userAttempt} attempts!`);
    getUserInput(); // Initial call to start the sequence
};

const mediumMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 100);
    let userAttempt: number = 10;

    const getUserInput = () => {
        console.log(`Guess a number from the range 0 - 100 and you have ${userAttempt} attempts!`);
        rl.question('Input a number: ', (answer) => {
            let userNum: number = parseInt(answer);
            userAttempt = userAttempt - 1;

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum === randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`);
                if (userAttempt > 0) {
                    console.log(`Congratulations! You won!`);
                } else {
                    console.log(`You lost!`);
                    console.log(`The value is ${randomNum}`);
                }
                permission(); // Call permission() only once after winning or losing
                return; // Exit the function to prevent further execution
            } else {
                console.log('ERROR 404 :(');
            }

            if (userAttempt > 0) {
                console.log(`You have ${userAttempt} attempts left.`);
                getUserInput(); // Call the function recursively for the next iteration
            } else {
                console.log(`You lost!`);
                console.log(`The value is ${randomNum}`);
                permission();
            }
        });
    };

    getUserInput(); // Initial call to start the sequence
};

const hardMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 1000);
    let userAttempt: number = 10;

    const getUserInput = () => {
        console.log(`Guess a number from the range 0 - 1000 and you have ${userAttempt} attempts!`);
        rl.question('Input a number: ', (answer) => {
            let userNum: number = parseInt(answer);
            userAttempt = userAttempt - 1;

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum === randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`);
                if (userAttempt > 0) {
                    console.log(`Congratulations! You won!`);
                } else {
                    console.log(`You lost!`);
                    console.log(`The value is ${randomNum}`);
                }
                permission(); // Call permission() only once after winning or losing
                return; // Exit the function to prevent further execution
            } else {
                console.log('ERROR 404 :(');
            }

            if (userAttempt > 0) {
                console.log(`You have ${userAttempt} attempts left.`);
                getUserInput(); // Call the function recursively for the next iteration
            } else {
                console.log(`You lost!`);
                console.log(`The value is ${randomNum}`);
                permission();
            }
        });
    };

    getUserInput(); // Initial call to start the sequence
};

const bossMode: () => void = () => {
    const randomNum: number = Math.round(Math.random() * 10000);
    let userAttempt: number = 20;

    const getUserInput = () => {
        console.log(`Guess a number from the range 0 - 10000 and you have ${userAttempt} attempts!`);
        rl.question('Input a number: ', (answer) => {
            let userNum: number = parseInt(answer);
            userAttempt = userAttempt - 1;

            if (userNum < randomNum) {
                console.log(`The number is less than the random number.`);
            } else if (userNum > randomNum) {
                console.log(`The number is greater than the random number`);
            } else if (userNum === randomNum) {
                console.log(`You have guessed right and the number is ${randomNum}`);
                if (userAttempt > 0) {
                    console.log(`Congratulations! You won!`);
                } else {
                    console.log(`You lost!`);
                    console.log(`The value is ${randomNum}`);
                }
                permission(); // Call permission() only once after winning or losing
                return; // Exit the function to prevent further execution
            } else {
                console.log('ERROR 404 :(');
            }

            if (userAttempt > 0) {
                console.log(`You have ${userAttempt} attempts left.`);
                getUserInput(); // Call the function recursively for the next iteration
            } else {
                console.log(`You lost!`);
                console.log(`The value is ${randomNum}`);
                permission();
            }
        });
    }

    getUserInput(); // Initial call to start the sequence
}
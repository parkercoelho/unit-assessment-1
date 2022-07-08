let password = "Passwordisthepassword9"

// below are the regex constraints I will later add, including my own constraint of uppercase
const numbers = /[0-9]/
const letters = /[a-z]/
const uppercase = /[A-Z]/

// below are the assigned constraints
if (password.length >= 10 && numbers.test(password) && letters.test(password)

// and now I will constrain for an uppercase letter and that it isn't longer than 25 characters
    && password.length <= 25 && uppercase.test(password)) {
    console.log(`
    .▄▄ · ▄• ▄▌ ▄▄·  ▄▄· ▄▄▄ ..▄▄ · .▄▄ · ▄▄ 
    ▐█ ▀. █▪██▌▐█ ▌▪▐█ ▌▪▀▄.▀·▐█ ▀. ▐█ ▀. ██▌
    ▄▀▀▀█▄█▌▐█▌██ ▄▄██ ▄▄▐▀▀▪▄▄▀▀▀█▄▄▀▀▀█▄▐█·
    ▐█▄▪▐█▐█▄█▌▐███▌▐███▌▐█▄▄▌▐█▄▪▐█▐█▄▪▐█.▀ 
     ▀▀▀▀  ▀▀▀ ·▀▀▀ ·▀▀▀  ▀▀▀  ▀▀▀▀  ▀▀▀▀  ▀ 
    `)
} else {
    console.log(`
    ·▄▄▄ ▄▄▄· ▪  ▄▄▌  ▄• ▄▌▄▄▄  ▄▄▄ .
    ▐▄▄·▐█ ▀█ ██ ██•  █▪██▌▀▄ █·▀▄.▀·
    ██▪ ▄█▀▀█ ▐█·██▪  █▌▐█▌▐▀▀▄ ▐▀▀▪▄
    ██▌.▐█ ▪▐▌▐█▌▐█▌▐▌▐█▄█▌▐█•█▌▐█▄▄▌
    ▀▀▀  ▀  ▀ ▀▀▀.▀▀▀  ▀▀▀ .▀  ▀ ▀▀▀ 
    `)
}
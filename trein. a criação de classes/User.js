class user {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login (email, password) {
        if (this.email === email && this.password === password) {
            console.log('login sucess!')
        } else {
            console.log('login failed!')
        }
    }
}

const user = new User('João', 'joao@email.com', 'joao123')
user.login('joao@email.com', 'joao123')
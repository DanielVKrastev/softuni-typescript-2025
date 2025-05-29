class User {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        if(newUsername.length > 3) {
            this._username = newUsername;
        }else{
            throw new Error('Error: Username must be at least 3 characters long');
        }
    }
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);

/*
const user2 = new User("Martin"); 
user2.username = "Do"; // -> error
*/

//const user3 = new User("jo"); // -> error
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length > 3) {
            this._username = newUsername;
        }
        else {
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
//# sourceMappingURL=10.js.map
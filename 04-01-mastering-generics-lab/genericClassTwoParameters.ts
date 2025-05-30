// ! Generic class with 2 type parameters

class ApiResponse<T, U> {
    isSuccessful: boolean;
    data: T | null;
    error: U | null;

    constructor(isSuccessful: boolean, data: T | null, error: U | null) {
        this.isSuccessful = isSuccessful;
        this.data = data;
        this.error = error;
    }

    getResult(): T {
        if(!this.isSuccessful || this.data === null) {
            throw new Error(String(this.error));
        }

        return this.data;
    }
}

const userResponse1 = new ApiResponse<string, string>(true, 'daniel', null);
const userResponse2 = new ApiResponse<string[], string>(true, ['daniel', 'anna', 'gosho'], null);
const userResponse3 = new ApiResponse(false, null, 'Unknow error');

console.log(userResponse2.getResult());
console.log(userResponse3.getResult());

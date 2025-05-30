"use strict";
// ! Generic class with 2 type parameters
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    isSuccessful;
    data;
    error;
    constructor(isSuccessful, data, error) {
        this.isSuccessful = isSuccessful;
        this.data = data;
        this.error = error;
    }
    getResult() {
        if (!this.isSuccessful || this.data === null) {
            throw new Error(String(this.error));
        }
        return this.data;
    }
}
const userResponse1 = new ApiResponse(true, 'daniel', null);
const userResponse2 = new ApiResponse(true, ['daniel', 'anna', 'gosho'], null);
const userResponse3 = new ApiResponse(false, null, 'Unknow error');
console.log(userResponse2.getResult());
console.log(userResponse3.getResult());
//# sourceMappingURL=genericClassTwoParameters.js.map
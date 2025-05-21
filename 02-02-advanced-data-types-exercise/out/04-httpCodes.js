"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function httpCodes(httpCode) {
    switch (httpCode.code) {
        case 200:
        case 201:
        case 301:
            console.log(httpCode.text);
            return;
        case 400:
        case 404:
        case 500: console.log(httpCode.text.slice(0, httpCode.printChars));
    }
    if ('printChars' in httpCode) {
        console.log(httpCode.text.slice(0, httpCode.printChars));
    }
    else {
        console.log(httpCode.text);
    }
}
httpCodes({ code: 200, text: 'OK' });
httpCodes({ code: 201, text: 'Created' });
httpCodes({ code: 301, text: 'Moved Permanently' });
httpCodes({ code: 400, text: 'Bad Request', printChars: 4 });
httpCodes({ code: 404, text: 'Not Found', printChars: 3 });
httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1 });
//httpCodes({ code: 200, text: 'Internal Server Error', printChars: 1});
//# sourceMappingURL=04-httpCodes.js.map
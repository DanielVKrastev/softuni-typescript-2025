"use strict";
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["Octomber"] = 9] = "Octomber";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
function FridayThe13th(dates) {
    Array.isArray(dates);
    if (dates.length > 0) {
        dates.forEach(date => {
            if (typeof date === 'object' && date !== null && date !== undefined && date instanceof Date) {
                const newDate = new Date(date);
                const numberDate = newDate.getDate();
                const day = newDate.getDay();
                if (numberDate === 13 && day === 5) {
                    console.log(`${numberDate}-${Month[newDate.getMonth()]}-${newDate.getFullYear()}`);
                }
            }
        });
    }
}
FridayThe13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
]);
console.log('*************************');
FridayThe13th([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
]);
//# sourceMappingURL=09.js.map
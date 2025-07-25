"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    _start;
    _end;
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    set start(startDate) {
        if (startDate > this._end) {
            throw new Error('Start date cannot be after end date!');
        }
        this._start = startDate;
    }
    set end(endDate) {
        if (endDate < this._start) {
            throw new Error('End date cannot be before start date!');
        }
        this._end = endDate;
    }
    getInfo() {
        return `Holiday: ${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()} - ${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;
    }
}
class HolidayManager {
    holidays = new Map();
    reserveVacation(holiday, vacationType) {
        this.holidays.set(holiday, vacationType);
    }
    listReservations() {
        let result = [];
        Array.from(this.holidays.entries()).forEach(entry => result.push(`${entry[0].getInfo()} => ${entry[1]}`));
        return result.join('\n');
    }
}
let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
console.log(holidayManager.listReservations());
//let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));
//# sourceMappingURL=07.js.map
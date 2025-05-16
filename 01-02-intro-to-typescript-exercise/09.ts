enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    Octomber,
    November,
    December
}

function FridayThe13th(dates: unknown[]): void {
    Array.isArray(dates);
    if(dates.length > 0){
        dates.forEach(date => {
            if(typeof date === 'object' && date !== null && date !== undefined){
                const newDate = new Date(date as any);
                const numberDate = newDate.getDate();
                const day = newDate.getDay();

                if(numberDate === 13 && day === 5) {
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
]
)
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
]
)


/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

function isWeekend(value: string): boolean {
  if (value === "SUNDAY" || value === "SATURDAY") {
    console.log(value);
    return true;
  }
  return false;
}
// isWeekend(Day[Day.MONDAY]);
console.log(isWeekend(Day[Day.SATURDAY]));

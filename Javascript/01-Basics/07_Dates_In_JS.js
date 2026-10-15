// Date :JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let date=new Date();
console.log(date);// output depends on the current date, time, and timezone.

//  functions 
console.log(date.toString());// runtime-dependent local date and time
console.log(date.toDateString());// runtime-dependent local date
console.log(date.toISOString());// runtime-dependent UTC timestamp
console.log(date.toJSON());// runtime-dependent UTC timestamp

console.log(date.toLocaleString());//9/22/2026, 8:16:07 PM

console.log(date.toLocaleDateString());//9/22/2026


// **** We can also add value *****
// year , month , day ( we add 0 instead of 1 bcz it is single digit and count array so  index starts from zero , but for double digits in string it starts from 1)
let myDate1=new Date(2026,0,23);
console.log(myDate1.toDateString());//Fri Jan 23 2026 ( it additionally add day name and month name)

let myDate2=new Date(2026 , 0, 20,5,3);
console.log(myDate2.toLocaleString());//1/20/2026, 5:03:00 AM

// 2026 = yy , 01 = mm, and 12= dd
let myDate3=new Date("2026-01-12");
console.log(myDate3.toDateString());//Mon Jan 12 2026 

// but in Asia we mostly follow ( mm dd yy)
let myDate4=new Date("12-15-2026");
console.log(myDate4.toLocaleDateString());//12/15/2026 

// okay so if you dont want to convert whole date into string of anyother format and want to get particular thing like month day year millisecond etc so you can get this via following methods
let myDate5=new Date();
console.log(myDate5.getDay()); // 0 = Sunday through 6 = Saturday

console.log(myDate5.getMonth()); // 0 = January through 11 = December

// so one last and interesting thing about localestring is that as when we pass and object it gives us it cutomized form but to customize it more we can do on our own that we want like:
console.log(myDate5.toLocaleString('default',{
    weekday:"long",
    month:"2-digit"
}));
// like this and you can change default aswell



// ********** Time Stamp *********
// A Timestamp is the total number of milliseconds that have elapsed since the Unix Epoch (January 1, 1970, 00:00:00 UTC). It represents a single point in time as a raw numeric value.
// so it very useful specially when you make quizzes and poles and want to check the fastest and you also use this when you want exact time stamp.


let timeStamp= Date.now();
console.log(timeStamp);// 1790091722814 so it gives time in millisecond from i think 1970 till now as what date do.
console.log(Date.now()/1000);//1790091926.718  so instead this as if we divide by 1000 so it add decimal value instead we have more optimized way to do it.
console.log(Math.floor(Date.now()/1000));//1790091926



// ************ Temporal Api ***************
 // ==========================================
// MODERN JAVASCRIPT: TEMPORAL API
// Run with: node --harmony-temporal 07_Dates_In_JS.js
// ==========================================

// --- DEFINITION ---
// The Temporal API is the modern JavaScript standard for handling dates, times, 
// and timestamps. It is immutable, uses 1-indexed months (1-12), and separates 
// dates from times to prevent time-zone bugs.


if (typeof Temporal === "undefined") {
    console.warn("Temporal is unavailable. Run this file with a Temporal-enabled runtime.");
} else {
// 1. PlainDate
// Definition: A date representation with YEAR, MONTH, and DAY only (no time, no time zone).
const today = Temporal.Now.plainDateISO();
console.log("Today:", today.toString()); // e.g., 2026-09-22

const customDate = Temporal.PlainDate.from({ year: 2026, month: 9, day: 22 });
console.log("Custom Date:", customDate.toString());


// 2. PlainTime
// Definition: A time representation with HOURS, MINUTES, SECONDS, and SUB-SECONDS only (no date, no time zone).
const currentTime = Temporal.Now.plainTimeISO();
console.log("Current Time:", currentTime.toString()); // e.g., 20:48:47


// 3. Date Math & Difference
// Definition: Built-in immutable methods (.add, .subtract, .until) to perform exact calculations without mutating variables.
const nextWeek = today.add({ days: 7 });
const pastMonth = today.subtract({ months: 1 });
console.log("Next Week:", nextWeek.toString());

const newYear = Temporal.PlainDate.from('2027-01-01');
const daysUntilNewYear = today.until(newYear);
console.log("Days until 2027:", daysUntilNewYear.days);


// 4. Instant (Modern Timestamp)
// Definition: An exact, high-precision point in UTC time measured in nanoseconds since the Unix Epoch.
const instant = Temporal.Now.instant();
console.log("Epoch Milliseconds:", instant.epochMilliseconds); // Number
console.log("Epoch Nanoseconds:", instant.epochNanoseconds);   // BigInt


// ******** DIFFERENCES *******
/*
# JavaScript: Date vs Temporal Reference

## 1. Key Differences

| Feature | Legacy `Date` | Modern `Temporal` |
| :--- | :--- | :--- |
| **Month Indexing** | 0-indexed (Jan = 0, Dec = 11) | 1-indexed (Jan = 1, Dec = 12) |
| **Mutability** | **Mutable** (modifies original object) | **Immutable** (returns a brand new object) |
| **Data Separation** | Forces Date + Time + Timezone together | Separates into `PlainDate`, `PlainTime`, `ZonedDateTime` |
| **Date Calculations** | Complex, error-prone, requires hacks | Built-in `.add()`, `.subtract()`, `.until()`, `.since()` |
| **Timestamps** | Milliseconds (`Number`) | Nanoseconds (`BigInt`) via `Instant` |

---

## 2. Core Concepts & Takeaways

* **Fixes Month Trap:** Months run naturally from 1 to 12. No `month - 1` offsets needed.
* **No Accidental State Bugs:** Operations like adding or subtracting days leave the original variable completely untouched.
* **Separation of Concerns:** Use `PlainDate` if you only need the date, `PlainTime` if you only need the time, and `Instant` for precise time logging.
* **Execution:** Run natively in Node.js (v20+) with `node --harmony-temporal index.js` or use `@js-temporal/polyfill` in older setups.
*/
}


  

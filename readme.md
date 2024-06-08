# DateWizard 🧙‍♂️

DateWizard is a simple yet powerful TypeScript library designed to make date manipulation in your JavaScript projects a breeze. With a straightforward API, you can easily add or subtract days, and format dates to your liking.

## Features

- **Intuitive API:** Work with dates in a way that feels natural and easy to understand.
- **Customizable Formatting:** Format dates using "dd-mm-yyyy", "yyyy-mm-dd", or any other format you desire.
- **Easy Date Manipulation:** Add or subtract days with simple methods.
- **Lightweight:** Add DateWizard to your projects without bloating their size.
- **TypeScript Support:** Enjoy the benefits of type safety and improved code maintainability.

## Installation

```bash
npm install date-wizard-pro
```

## Usage

### Instance Methods:

```javascript
import DateWizard from "date-wizard-pro";

// Create a DateWizard instance for a specific date
const myDate = new DateWizard("12-25-2024"); // Christmas 2024

// Get the formatted date in different ways
myDate.getString(); // "2024-12-25"
myDate.getString("dd-mm-yyyy"); // 25-12-2024
myDate.getString("mm-dd-yyyy"); // 12-25-2024
myDate.getString("dd/mm/yyyy"); // 25/12/2024
myDate.getString("mm/dd/yyyy"); // 12/25/2024

// Modify the date: subtract Days
const result1 = myDate.subtractDays(10);
console.log(result1); // "2024-12-15"
myDate.getString(); // "2024-12-15"

// Modify the date: add Days
const result2 = myDate.addDays(2);
console.log(result2); // "2024-12-17"
myDate.getString(); // "2024-12-17"

// toDate()
const jsDate = myDate.toDate();
console.log(jsDate); // JavaScript Date object (2024-12-17T00:00:00.000Z)
```

### Static Methods:

```javascript
import DateWizard from "date-wizard-pro";

// DateWizard.addDays()
DateWizard.getTodayDate(); // "28-05-2024"
DateWizard.getTodayDate("mm/dd/yyyy"); // "05/28/2024"
DateWizard.getTodayDate("mm-dd-yyyy"); // "05-28-2024"

// DateWizard.addDays()
DateWizard.addDays("12-25-2023", 7); // "01-01-2024"

// DateWizard.subtractDays()
const pastDate = DateWizard.subtractDays("12-25-2023", 10); // "12-15-2023"

// DateWizard.getString()
const formattedDate = DateWizard.getString("12-25-2023", "yyyy-mm-dd"); //"2023-12-25"
```

## API

### Instance Methods:

#### `new DateWizard(dateString: string)`

Creates a new `DateWizard` instance. `dateString` should be in the format "dd-mm-yyyy".

#### `addDays(days: number): string`

Adds the specified number of `days` to the date and returns the result as a formatted string in the default format ("dd-mm-yyyy").

#### `subtractDays(days: number): string`

Subtracts the specified number of `days` from the date and returns the result as a formatted string in the default format ("dd-mm-yyyy").

#### `toDate(): Date`

Converts the `DateWizard` instance to a native JavaScript `Date` object.

#### `getString(formatString = "dd-mm-yyyy"): string`

Returns the date as a formatted string. The `formatString` argument can be customized (e.g., "yyyy-mm-dd", "mm/dd/yyyy").

### Static Methods

#### `DateWizard.getTodayDate(formatString = "dd-mm-yyyy"): string`

This static function allows you to easily retrieve the current date formatted according to your preferences.

- Returns today's date in the format specified by `formatString`.
- If no `formatString` is provided, the default format "dd-mm-yyyy" (day-month-year) is used.

**Example:**

```javascript
const today = DateWizard.getTodayDate();
const usDate = DateWizard.getTodayDate("mm/dd/yyyy");
```

#### `DateWizard.addDays(dateString: string, days: number): string`

Adds the specified number of `days` to the given `dateString` and returns the result as a formatted string in the default format ("dd-mm-yyyy").

#### `DateWizard.subtractDays(dateString: string, days: number): string`

Subtracts the specified number of `days` from the given `dateString` and returns the result as a formatted string in the default format ("dd-mm-yyyy").

#### `DateWizard.getString(dateString: string, formatString = "dd-mm-yyyy"): string`

Returns the given `dateString` formatted according to the specified `formatString`. If no `formatString` is provided, the default format ("dd-mm-yyyy") is used.

## Contributing

Contributions are welcome! If you have suggestions or find any issues, please feel free to open an issue or submit a pull request.

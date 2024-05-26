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

// Create a DateWizard instance
const myDate = new DateWizard("12-25-2023"); // Christmas 2023

// addDays()
myDate.addDays(7);
console.log(myDate.getString("yyyy-mm-dd")); // Output: "2024-01-01" (New Year's Day 2024)

// subtractDays()
myDate.subtractDays(10);
console.log(myDate.getString()); // Output: "2023-12-15"

// toDate()
const jsDate = myDate.toDate();
console.log(jsDate); // Output: JavaScript Date object (2023-12-15T00:00:00.000Z)

// getString()
console.log(myDate.getString("mm/dd/yyyy")); // Output: "12/15/2023"
```

### Static Methods:

```javascript
import DateWizard from "date-wizard-pro";

// DateWizard.addDays()
const newYear = DateWizard.addDays("12-25-2023", 7);
console.log(newYear); // Output: "01-01-2024"

// DateWizard.subtractDays()
const pastDate = DateWizard.subtractDays("12-25-2023", 10);
console.log(pastDate); // Output: "12-15-2023"

// DateWizard.getString()
const formattedDate = DateWizard.getString("12-25-2023", "yyyy-mm-dd");
console.log(formattedDate); // Output: "2023-12-25"
```

## API

### Instance Methods:

#### `new DateWizard(dateString: string)`

Creates a new `DateWizard` instance. `dateString` should be in the format "dd-mm-yyyy".

#### `addDays(days: number): this`

Adds the specified number of `days` to the date. Returns the `DateWizard` instance for method chaining.

#### `subtractDays(days: number): this`

Subtracts the specified number of `days` from the date. Returns the `DateWizard` instance for method chaining.

#### `toDate(): Date`

Converts the `DateWizard` instance to a native JavaScript `Date` object.

#### `getString(formatString = "dd-mm-yyyy"): string`

Returns the date as a formatted string. The `formatString` argument can be customized (e.g., "yyyy-mm-dd", "mm/dd/yyyy").

### Static Methods

#### `DateWizard.addDays(dateString: string, days: number): string`

Adds the specified number of `days` to the given `dateString` and returns the result as a formatted string in the default format ("dd-mm-yyyy").

#### `DateWizard.subtractDays(dateString: string, days: number): string`

Subtracts the specified number of `days` from the given `dateString` and returns the result as a formatted string in the default format ("dd-mm-yyyy").

#### `DateWizard.getString(dateString: string, formatString = "dd-mm-yyyy"): string`

Returns the given `dateString` formatted according to the specified `formatString`. If no `formatString` is provided, the default format ("dd-mm-yyyy") is used.

## Contributing

Contributions are welcome! If you have suggestions or find any issues, please feel free to open an issue or submit a pull request.

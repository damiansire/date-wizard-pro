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

```javascript
import DateWizard from "date-wizard-pro";

const myDate = new DateWizard("25-12-2023"); // Christmas 2023
console.log(myDate.getString()); // Output: "25-12-2023"

myDate.addDays(7);
console.log(myDate.getString("yyyy-mm-dd")); // Output: "2024-01-01" (New Year's Day 2024)

myDate.subtractDays(10);
console.log(myDate.getString()); // Output: "2023-12-21"
```

## API

### `new DateWizard(dateString: string)`

Creates a new `DateWizard` instance. `dateString` should be in the format "dd-mm-yyyy".

### `addDays(days: number): this`

Adds the specified number of `days` to the date. Returns the `DateWizard` instance for method chaining.

### `subtractDays(days: number): this`

Subtracts the specified number of `days` from the date. Returns the `DateWizard` instance for method chaining.

### `toDate(): Date`

Converts the `DateWizard` instance to a native JavaScript `Date` object.

### `getString(formatString = "dd-mm-yyyy"): string`

Returns the date as a formatted string. The `formatString` argument can be customized (e.g., "yyyy-mm-dd", "mm/dd/yyyy").

## Contributing

Contributions are welcome! If you have suggestions or find any issues, please feel free to open an issue or submit a pull request.

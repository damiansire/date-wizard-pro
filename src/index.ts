class DateWizard {
  private timestamp: number;

  constructor(dateString: string) {
    const [day, month, year] = dateString.split("-").map(Number);
    this.timestamp = Date.UTC(year, month - 1, day);
  }

  addDays(days: number): this {
    this.timestamp += days * 24 * 60 * 60 * 1000;
    return this;
  }

  subtractDays(days: number): this {
    return this.addDays(-days);
  }

  toDate(): Date {
    return new Date(this.timestamp);
  }

  getString(formatString = "dd-mm-yyyy"): string {
    const date = this.toDate();
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear().toString();

    return formatString
      .replace("dd", day)
      .replace("mm", month)
      .replace("yyyy", year);
  }

  //Static Methods
  static addDays(dateString: string, days: number): string {
    const dateWizard = new DateWizard(dateString);
    dateWizard.addDays(days);
    return dateWizard.getString();
  }

  static subtractDays(dateString: string, days: number): string {
    const dateWizard = new DateWizard(dateString);
    dateWizard.subtractDays(days);
    return dateWizard.getString();
  }

  static getString(dateString: string, formatString = "dd-mm-yyyy"): string {
    const dateWizard = new DateWizard(dateString);
    return dateWizard.getString(formatString);
  }

  static getTodayDate = (formatString = "dd-mm-yyyy") => {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, "0");
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const anio = hoy.getFullYear();
    const formatedDate = `${dia}-${mes}-${anio}`;
    const dateWizard = new DateWizard(formatedDate);
    return dateWizard.getString(formatString);
  };
}

export default DateWizard;

// For CommonJS default export support
module.exports = DateWizard;
module.exports.default = DateWizard;
module.exports.__esModule = true;

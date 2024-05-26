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
}

export default DateWizard;

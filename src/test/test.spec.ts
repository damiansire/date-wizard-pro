import DateWizard from "../index";

describe("DateWizard", () => {
  let wizard: any;

  beforeAll(() => {
    expect(DateWizard).toBeDefined();
  });

  beforeEach(() => {
    wizard = new DateWizard("20-05-2024");
  });

  it("should create a DateWizard instance with the correct timestamp", () => {
    expect(wizard).toBeInstanceOf(DateWizard);
    expect(wizard.toDate()).toEqual(new Date(Date.UTC(2024, 4, 20)));
  });

  it("should adds days that exceed the end of the month", () => {
    wizard.addDays(12);
    expect(wizard.format()).toBe("01-06-2024");
  });

  it("should adds days that exceed the end of the year", () => {
    wizard.addDays(365);
    expect(wizard.format()).toBe("20-05-2025");
  });

  it("should add days correctly", () => {
    wizard.addDays(5);
    expect(wizard.format()).toBe("25-05-2024");
  });

  it("should subtract days correctly", () => {
    wizard.subtractDays(10);
    expect(wizard.format()).toBe("10-05-2024");
  });

  it("should subtract days exceed the start of the month", () => {
    wizard.subtractDays(30);
    expect(wizard.format()).toBe("20-04-2024");
  });

  it("should subtract days exceed the start of the year", () => {
    wizard.subtractDays(366);
    expect(wizard.format()).toBe("20-05-2023");
  });

  /*
  it("should format the date correctly", () => {
    expect(wizard.format()).toBe("20-05-2024");
    expect(wizard.format("yyyy/MM/dd")).toBe("2024/05/20");
  });

  */

  it("should handle leap years correctly", () => {
    wizard = new DateWizard("29-02-2024"); //Leap-year
    wizard.addDays(1);
    expect(wizard.format()).toBe("01-03-2024");
  });

  it("should handle negative days in addDays", () => {
    wizard.addDays(-7);
    expect(wizard.format()).toBe("13-05-2024");
  });
});

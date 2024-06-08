export const testDateWizard = (DateWizard: any) => {
  describe("DateWizard", () => {
    let wizard: any;

    beforeAll(() => {
      expect(DateWizard).toBeDefined();
    });

    describe("class methods", () => {
      beforeEach(() => {
        wizard = new DateWizard("20-05-2024");
      });

      it("should create a DateWizard instance with the correct timestamp", () => {
        expect(wizard).toBeInstanceOf(DateWizard);
        expect(wizard.toDate()).toEqual(new Date(Date.UTC(2024, 4, 20)));
        expect(wizard.getString()).toBe("20-05-2024");
      });

      describe("operation with dates", () => {
        describe("addDays", () => {
          it("should adds days that exceed the end of the month", () => {
            wizard.addDays(12);
            expect(wizard.getString()).toBe("01-06-2024");
          });

          it("should adds days that exceed the end of the year", () => {
            wizard.addDays(365);
            expect(wizard.getString()).toBe("20-05-2025");
          });

          it("should add days correctly", () => {
            wizard.addDays(5);
            expect(wizard.getString()).toBe("25-05-2024");
          });
          it("should handle negative days", () => {
            wizard.addDays(-7);
            expect(wizard.getString()).toBe("13-05-2024");
          });
          it("the method returns the date", () => {
            const result = wizard.addDays(-7);
            expect(result).toBe("13-05-2024");
          });
          it("should handle leap years correctly", () => {
            wizard = new DateWizard("29-02-2024"); //Leap-year
            wizard.addDays(1);
            expect(wizard.getString()).toBe("01-03-2024");
          });
        });

        describe("subtractDays", () => {
          it("should subtract days correctly", () => {
            wizard.subtractDays(10);
            expect(wizard.getString()).toBe("10-05-2024");
          });

          it("should subtract days exceed the start of the month", () => {
            wizard.subtractDays(30);
            expect(wizard.getString()).toBe("20-04-2024");
          });

          it("should subtract days exceed the start of the year", () => {
            wizard.subtractDays(366);
            expect(wizard.getString()).toBe("20-05-2023");
          });
          it("the method returns the date", () => {
            const result = wizard.subtractDays(366);
            expect(result).toBe("20-05-2023");
          });
          it("should handle leap years correctly", () => {
            wizard = new DateWizard("01-03-2024"); //Leap-year
            wizard.subtractDays(1);
            expect(wizard.getString()).toBe("29-02-2024");
          });
        });
      });

      describe("date formating", () => {
        it("correctly formats dates in the 'mm-dd-yyyy' format", () => {
          expect(wizard.getString("mm-dd-yyyy")).toBe("05-20-2024");
        });

        it("correctly formats dates in the 'dd-mm-yyyy' format", () => {
          expect(wizard.getString("dd-mm-yyyy")).toBe("20-05-2024");
        });

        it("correctly formats dates in the 'yyyy-mm-dd' format", () => {
          expect(wizard.getString("yyyy-mm-dd")).toBe("2024-05-20");
        });

        it("correctly formats dates in the 'mm/dd/yyyy' format", () => {
          expect(wizard.getString("mm/dd/yyyy")).toBe("05/20/2024");
        });

        it("correctly formats dates in the 'dd/mm/yyyy' format", () => {
          expect(wizard.getString("dd/mm/yyyy")).toBe("20/05/2024");
        });

        it("correctly formats dates in the 'yyyy/mm/dd' format", () => {
          expect(wizard.getString("yyyy/mm/dd")).toBe("2024/05/20");
        });
      });
    });

    describe("static methods", () => {
      describe("addDays", () => {
        it("should adds days that exceed the end of the month", () => {
          const dateResult = DateWizard.addDays("20-05-2024", 12);
          expect(dateResult).toBe("01-06-2024");
        });

        it("should adds days that exceed the end of the year", () => {
          const dateResult = DateWizard.addDays("20-05-2024", 365);
          expect(dateResult).toBe("20-05-2025");
        });

        it("should add days correctly", () => {
          const dateResult = DateWizard.addDays("20-05-2024", 5);
          expect(dateResult).toBe("25-05-2024");
        });
        it("should handle leap years correctly", () => {
          const dateResult = DateWizard.addDays("29-02-2024", 1);
          expect(dateResult).toBe("01-03-2024");
        });

        it("should handle negative days in addDays", () => {
          const dateResult = DateWizard.addDays("20-05-2024", -7);
          expect(dateResult).toBe("13-05-2024");
        });
      });
      describe("subtractDays", () => {
        it("should subtract days correctly", () => {
          const dateResult = DateWizard.subtractDays("20-05-2024", 10);
          expect(dateResult).toBe("10-05-2024");
        });

        it("should subtract days exceed the start of the month", () => {
          const dateResult = DateWizard.subtractDays("20-05-2024", 30);
          expect(dateResult).toBe("20-04-2024");
        });

        it("should subtract days exceed the start of the year", () => {
          const dateResult = DateWizard.subtractDays("20-05-2024", 366);
          expect(dateResult).toBe("20-05-2023");
        });
        it("should handle leap years correctly", () => {
          const dateResult = DateWizard.subtractDays("01-03-2024", 1);
          expect(dateResult).toBe("29-02-2024");
        });
      });
      describe("date formating", () => {
        it("correctly formats dates in the 'mm-dd-yyyy' format", () => {
          expect(DateWizard.getString("20-05-2024", "mm-dd-yyyy")).toBe(
            "05-20-2024"
          );
        });

        it("correctly formats dates in the 'dd-mm-yyyy' format", () => {
          expect(DateWizard.getString("20-05-2024", "dd-mm-yyyy")).toBe(
            "20-05-2024"
          );
        });

        it("correctly formats dates in the 'yyyy-mm-dd' format", () => {
          expect(DateWizard.getString("20-05-2024", "yyyy-mm-dd")).toBe(
            "2024-05-20"
          );
        });

        it("correctly formats dates in the 'mm/dd/yyyy' format", () => {
          expect(DateWizard.getString("20-05-2024", "mm/dd/yyyy")).toBe(
            "05/20/2024"
          );
        });

        it("correctly formats dates in the 'dd/mm/yyyy' format", () => {
          expect(DateWizard.getString("20-05-2024", "dd/mm/yyyy")).toBe(
            "20/05/2024"
          );
        });

        it("correctly formats dates in the 'yyyy/mm/dd' format", () => {
          expect(DateWizard.getString("20-05-2024", "yyyy/mm/dd")).toBe(
            "2024/05/20"
          );
        });
      });
      describe("DateWizard.getTodayDate()", () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = today.getFullYear();

        const formatMap = {
          "dd-mm-yyyy": `${day}-${month}-${year}`,
          "mm-dd-yyyy": `${month}-${day}-${year}`,
          "mm/dd/yyyy": `${month}/${day}/${year}`,
          "yyyy/mm/dd": `${year}/${month}/${day}`,
        };

        // Función auxiliar para obtener la fecha actual en un formato específico
        function getFormattedDate(format: keyof typeof formatMap) {
          return formatMap[format] || formatMap["dd-mm-yyyy"];
        }

        const testCases = [
          { format: "dd-mm-yyyy", expected: getFormattedDate("dd-mm-yyyy") },
          { format: "mm-dd-yyyy", expected: getFormattedDate("mm-dd-yyyy") },
          { format: "mm/dd/yyyy", expected: getFormattedDate("mm/dd/yyyy") },
          { format: "yyyy/mm/dd", expected: getFormattedDate("yyyy/mm/dd") },
          { format: undefined, expected: getFormattedDate("dd-mm-yyyy") },
        ];

        testCases.forEach((testCase) => {
          it(`should return today's date in format '${testCase.format}' (or default)`, () => {
            expect(DateWizard.getTodayDate(testCase.format)).toBe(
              testCase.expected
            );
          });
        });
      });
    });
  });
};

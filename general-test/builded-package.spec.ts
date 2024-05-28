import DateWizard from "../dist/index";

import { testDateWizard } from "../test-helpers/test-date-wizard";
describe("TEST BUILDED PACKAGE", () => {
  describe("require method", () => {
    const RequireDateWizard = require("../dist/index");
    testDateWizard(RequireDateWizard);
  });
  testDateWizard(DateWizard);
});

import DateWizard from "../dist/index";
require("../dist/index").default;

import { testDateWizard } from "../test-helpers/test-date-wizard";
describe("TEST BUILDED PACKAGE", () => {
  describe("require method", () => {
    const RequireDateWizard = require("../dist/index").default;
    testDateWizard(RequireDateWizard);
  });
  testDateWizard(DateWizard);
});

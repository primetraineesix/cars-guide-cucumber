$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6590358199,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 153529399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BackgroundSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 185336600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@sanity"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see the dealer names displayed on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 26
    },
    {
      "cells": [
        "3 Point Motors Epping1"
      ],
      "line": 27
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "SearchCarsSteps.iClickLink(String)"
});
formatter.result({
  "duration": 358137001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealersSteps.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 142884300,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesDisplayedOnPage(DataTable)"
});
formatter.result({
  "duration": 346711479100,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\t\u00273 Point Motors Epping1\u0027 dealer not found expected [true] but found [false]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat au.com.carsguide.cucumber.steps.FindDealersSteps.iShouldSeeTheDealerNamesDisplayedOnPage(FindDealersSteps.java:24)\r\n\tat ✽.And I should see the dealer names displayed on page(finddealers.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1666666199,
  "status": "passed"
});
});
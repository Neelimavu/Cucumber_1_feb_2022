$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLoginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios Login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with correct credential",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OtherScenario1"
    },
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And User enters \"\u003cinternetBankingURL\u003e\" in accounts page"
    }
  ],
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone"
      ],
      "line": 23,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credential;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "aace",
        "123459",
        "$1000",
        "112233",
        "xyz",
        "123456789"
      ],
      "line": 24,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1676635000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with correct credential",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    },
    {
      "line": 3,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle \"aace\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description \"123459\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance \"$1000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber \"112233\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson \"xyz\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone \"123456789\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And User enters \"\u003cinternetBankingURL\u003e\" in accounts page"
    }
  ],
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 619638700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.User_enters_username_as(String)"
});
formatter.result({
  "duration": 3071549400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3069437600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 5141318600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 13693400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankcash()"
});
formatter.result({
  "duration": 3079024900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newaccount()"
});
formatter.result({
  "duration": 3505720400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aace",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_accounttitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 3096197000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123459",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 3081158400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1000",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialbalance(String)"
});
formatter.result({
  "duration": 3088146800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112233",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountnumber(String)"
});
formatter.result({
  "duration": 3094666500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactperson(String)"
});
formatter.result({
  "duration": 3098473400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 19
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone(String)"
});
formatter.result({
  "duration": 3102647200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_submit()"
});
formatter.result({
  "duration": 3847964400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created()"
});
formatter.result({
  "duration": 10370200,
  "status": "passed"
});
});
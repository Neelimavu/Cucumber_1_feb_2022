Feature: Techfios Login functionality validation

@OtherScenario1 @Smoke1
Scenario Outline: User should be able to login with correct credential
 Given User is on the Techfios login page
 When User enters username as "<username>"
 When User enters password as "<password>"
 When User clicks on the submit button
 Then User should land on dashboard page
 And User clicks on bankCash
 And User clicks on newAccount
 And User enters accountTitle "<accountTitle>" in accounts page
 And User enters description "<description>" in accounts page
 And User enters initialBalance "<initialBalance>" in accounts page
 And User enters accountNumber "<accountNumber>" in accounts page
 And User enters contactPerson "<contactPerson>" in accounts page
 And User enters Phone "<Phone>" in accounts page
 #And User enters "<internetBankingURL>" in accounts page
 And User clicks on submit
 Then User should be able to validate account created successfully
 
 Examples:
 |username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|
 |demo@techfios.com|abc123|aacef|123459|$1000|112233|xyz|123456789|
 
 
 
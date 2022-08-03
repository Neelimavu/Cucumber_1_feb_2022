Feature: Techfios Login functionality validation

@OtherScenario1 @Smoke
Scenario Outline: User should be able to login with correct credential
 Given User is on the Techfios login page
 When User enters username as "<username>"
 When User enters password as "<password>"
 When User clicks on the submit button
 Then User should land on dashboard page
 Examples:
 |username|password|
 |demo@techfios.com|abc123|
package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase{
	LoginPage loginPage;
	
	@Before
	public void methodName() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	
	@Given ("^User is on the Techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	@When ("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as (String username) {
		
		loginPage.enterUserName(username);
	}
	
	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password)  {
		loginPage.enterPassword(password);
	   
	}
	 	
	@When ("^User clicks on the submit button$")
	public void User_clicks_on_the_submit_button() {
		loginPage.clickSignInButton();
		
	}
	
	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page()  {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}
	
	@And ("^User clicks on bankCash$")
	public void user_clicks_on_bankcash() {
		loginPage.clickBankCash();
	}
	
	@And ("^User clicks on newAccount$")
	public void user_clicks_on_newaccount() {
		loginPage.clickNewAccount();
	}
	
	@And ("^User enters accountTitle \"([^\"]*)\" in accounts page$")
	public void user_enters_accounttitle_in_accounts_page(String accounttitle) {
		loginPage.enterAccountTitle(accounttitle);
	}
	
	@And("^User enters description \"([^\"]*)\" in accounts page$")
	public void user_enters_description_in_accounts_page(String description) {
		loginPage.enterDescription(description);
	}
	
	@And ("^User enters initialBalance \"([^\"]*)\" in accounts page$")
	public void user_enters_initialbalance(String initialbalance) {
		loginPage.enterInitialBalance(initialbalance);
	}
	
	@And ("^User enters accountNumber \"([^\"]*)\" in accounts page$")
	public void user_enters_accountnumber(String accountnumber) {
		loginPage.enterAccountNumber(accountnumber);
	}
	
	 @And ("^User enters contactPerson \"([^\"]*)\" in accounts page$")
	 public void user_enters_contactperson(String contactperson) {
		 loginPage.enterContactPerson(contactperson);
	 }
			
	 @And ("^User enters Phone \"([^\"]*)\" in accounts page$")
	 public void user_enters_phone(String phone) {
		 loginPage.enterPhone(phone);
	 }
	 
	 @And ("^User clicks on submit$")
	 public void user_enters_submit() {
	 loginPage.clickSubmitButton();
	 }
	 
	 @Then ("^User should be able to validate account created successfully$")
	 public void user_should_be_able_to_validate_account_created() {
		Assert.assertEquals("Accounts- iBilling",loginPage.getPageTitle());
	 }
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	

}

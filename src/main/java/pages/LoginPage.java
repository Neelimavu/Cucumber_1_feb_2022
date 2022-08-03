package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//input[@id='username']") WebElement USER_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='password']") WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button") WebElement SIGNIN_BUTTON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]") WebElement BANK_CASH_ELEMENT;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'New Account')]") WebElement NEW_ACCOUNT_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='account']") WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='description']") WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']") WebElement PHONE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button") WebElement SUBMIT_BUTTON_ELEMENT;
	
	
	
	
	
	// Methods to interact with the elements
	public void enterUserName(String username) {
		USER_NAME_ELEMENT.sendKeys(username);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickSignInButton() {
		SIGNIN_BUTTON_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
			
	public void clickBankCash() {
		BANK_CASH_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickNewAccount() {
		NEW_ACCOUNT_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
		
	}
	
	public void enterAccountTitle(String accounttitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accounttitle);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterInitialBalance(String initialbalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialbalance);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}	
	}
	
	public void enterAccountNumber(String accountnumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountnumber);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterContactPerson(String contactperson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactperson);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterPhone(String phone) {
		PHONE_ELEMENT.sendKeys(phone);
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickSubmitButton() {
		SUBMIT_BUTTON_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {
			e.printStackTrace();
		}
	}	
	
	public String getPageTitle() {
		return driver.getTitle();
		
	}
	
//	public boolean getElement() {
//		return driver.toString().contains("Account Created Successfully");
//		
//	}
}




package au.com.carsguide.drivermanager;

import au.com.carsguide.propertyreader.PropertyReader;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import java.time.Duration;

public class ManageDriver {

    private static final Logger log = LogManager.getLogger(ManageDriver.class.getName());

    public static WebDriver driver;
    public String baseUrl = PropertyReader.getInstance().getProperty("baseUrl");
    public String secondsInString = PropertyReader.getInstance().getProperty("implicitlyWait");
    public long seconds = Long.parseLong(secondsInString);

    public ManageDriver(){
        PageFactory.initElements(driver,this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/test/java/resources/propertiesfile/log4j2.properties");
    }

    public void selectBrowser(String browser){
        if(browser.equalsIgnoreCase("chrome")){
            WebDriverManager.chromedriver().setup();
            log.info("launching chrome browser");
            driver = new ChromeDriver();
        } else if(browser.equalsIgnoreCase("firefox")){
            WebDriverManager.firefoxdriver().setup();
            log.info("launching firefox browser");
            driver = new FirefoxDriver();
        }else {
            System.out.println("Wrong browser name");
        }
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(seconds));
        driver.get(baseUrl);
    }

    public void closeBrowser(){
        if(driver != null){
            driver.quit();
        }
    }
}

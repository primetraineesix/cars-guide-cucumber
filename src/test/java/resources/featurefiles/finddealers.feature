Feature: Find the dealers and verify

  Background:
    Given I am on homepage
    And I mouse hover on "buy + sell" tab

  @sanity @regression
  Scenario: Find the dealers and verify the dealers are in list
    When I click "Find a Dealer" link
    Then I navigate to "https://www.carsguide.com.au/car-dealers" url page
    And I should see the dealer names displayed on page
      | dealersName             |
      | 3 Point Motors Epping   |
      | 4WD Specialist Group    |
      | 5 Star Auto             |
      | A & M Car Sales Pty Ltd |
      | A1 MOTORS COMPANY       |
      | ANDREA MOTORI SERVICE   |
      | Martin Motors           |





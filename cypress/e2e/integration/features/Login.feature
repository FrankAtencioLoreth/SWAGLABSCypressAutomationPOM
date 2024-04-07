Feature: Login
    As a SAUCE LABS user 
    I want to log in to the application


Scenario: Validate login successfully
    Given I go to the login web page
    When I enter my credentials
    And I click on the login button
    Then I should see that the URL contains the path "/inventory.html"

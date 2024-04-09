Feature: Login
    As a SAUCE LABS user 
    I want to log in to the application

@smoke @LoginSuccessfuly
Scenario: Validate login successfully
    Given I go to the login web page
    When I enter my credentials
        |username     |password            |
        |standard_user|secret_sauce        |
    And I click on the login button
    Then I should see that the URL contains the path "/inventory.html"

@smoke @LoginUnsuccessfuly 
Scenario: Validate login unsuccessfully
    Given I go to the login web page
    When I enter my credentials
        |username     |password            |
        |standard_    |secret_sauce        |
    And I click on the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

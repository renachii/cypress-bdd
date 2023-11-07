@Login
Feature: Login
    In order to access the portal
    As an administrator
    I want to be able to login 

@fast @invalid
Scenario Outline: Invalid Login
    Given the portal login page is accessed
    And username "<Username>" is entered
    And password "<Password>" is entered
    When the credentials are submitted
    Then error message "Epic sadface: Username and password do not match any user in this service" is displayed 

Examples:
    |Username|Password|
    |1qeqe   |adminq  |

@fast @invalid
Scenario: Invalid Login (another way)
    Given the portal login page is accessed
    And username is entered
    And password is entered
    When the credentials are submitted
    Then error message "Epic sadface: Username and password do not match any user in this service" is displayed 

@fast
Scenario: Login to the portal
    Given the portal login page is accessed
    And the admin credentials are entered
    When the credentials are submitted
    Then the homepage is accessed
        |Title    |
        |Products |
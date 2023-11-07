@Logout
Feature: Logout
    In order to access the portal
    As an administrator
    I want to be able to logout 

@fast
Scenario: Logout to the portal
    Given the portal home page is accessed 
    When the user logout
    Then the login page is accessed
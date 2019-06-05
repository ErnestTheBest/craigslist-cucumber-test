Feature: Craigslist housing page sorting options.

  Background: As user i need to open home page
    Given I open housing page

  Scenario: Sorting should have correct options before search is used.
    Then I see correct sorting options before search is used

  Scenario: Sorting should have correct options after search is used.
    When I search for "a" on housing page
    Then I see correct sorting options after search is used

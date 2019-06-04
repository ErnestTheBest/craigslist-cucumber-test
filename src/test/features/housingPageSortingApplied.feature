Feature: Craigslist housing page.

  Background: As user i need to open home page
    Given I open housing page

  Scenario: Sorting should have correct sorting options before search is used.
    When I sort items ascending
    Then I see items are sorted ascending
    When I sort items descending
    Then I see items are sorted descending
Feature: Craigslist housing page sorting applied.

  Background: As user i need to open home page
    Given I open housing page

  Scenario: Items should be correctly sorted after sorting is applied.
    When I sort items ascending
    Then I see items are sorted ascending
    When I sort items descending
    Then I see items are sorted descending

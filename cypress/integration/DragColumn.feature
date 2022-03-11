Feature: Drags a column

  Background:
    Given the user visits the page

  Scenario: User drags a column of the table
    Given the table is in edit mode
    And the age column is in position 2
    And the phone column is in position 4
    When the user drags the age column to the phone column
    Then the age column should be in position 4
    And the phone column should be in position 3



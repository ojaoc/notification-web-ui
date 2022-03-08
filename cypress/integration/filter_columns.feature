Feature: User filters columns on table
    Background: User navigates to base route
        Given User visits base route of app
        Given User waits for page load
        Given User enables edit mode
        Given User opens filter edit modal
        Then Modal opens
        Then Modal shows correct number of columns
        Then All checkboxes are selected

    @first_scenario
    Scenario: User enables edit mode, removes "Age" column and saves changes
        When User deselects option labeled "Age"
        When User confirms changes
        Then Modal closes
        Then Columns in edit mode already show changes
        When User saves changes
        Then Table columns configuration is persisted
        Then Edit mode is disabled

    @second_scenario
    Scenario: User enables edit mode, removes "Address" and "Phone" columns and discards changes
        When User deselects options labeled "Address" and "Phone"
        When User confirms changes
        Then Modal closes
        Then Columns in edit mode already show changes
        When User discards changes
        Then Table columns configuration is reverted
        Then Edit mode is disabled

    


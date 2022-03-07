Feature: User filters columns on table and saves changes
    Background: User navigates to base route
        Given User visits base route of app
        Then Wait for page load

    Scenario: User enables edit mode, removes "Age" column and saves changes
        When User enables edit mode
        When User opens filter edit modal
        Then Modal opens
        Then Modal shows correct number of columns
        Then All checkboxes are selected
        When User deselects option labeled "Age"
        When User confirms changes
        Then Modal closes
        Then Columns in edit mode already show changes
        When User saves changes
        Then Table columns configuration is persisted
        Then Edit mode is disabled


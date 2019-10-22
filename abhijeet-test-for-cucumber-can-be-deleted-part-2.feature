Feature: 1.1 Quick search criteria
  Scenario: abhijeet test for cucumber can be deleted part 2
    Given Custom scenario for performance test
    And The scenario duration is set to 30 seconds
    And Every second 1 agents start their job
    And Every agent searches for "heart disease" in "Pubmed" channel once
    When Performance test is run
    Then The following response statistics are expected
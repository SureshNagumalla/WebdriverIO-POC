Feature: The user able to add product to card

  Scenario Outline: As a User able to add product to card

    Given I am on the login page
    When I search for a <product>

    Examples:
    |product               |
    |Printed Chiffon Dress |
      
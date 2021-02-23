Feature: Admin Base User Management

  As an admin, I want to create/delete users manually,
  so that an admin has control over the registrated users

  Background: Base Users
    Given Admin creates a user base with the users
      | id   |
      | adam |
      | bop  |

  Rule: List Users
    Example: List all users
      When Admin lists all users
      Then the userlist only contains
        | id   |
        | adam |
        | bop  |

  Rule: User Creation
    Example: Create a User
      Given Admin creates a new User with the Username "temp"
      When Admin lists all users
      Then the userlist only contains
        | id   |
        | adam |
        | bop  |
        | temp |

  Rule: User Deletion
    Example: Delete a User
      Given Admin deletes the user "bop"
      When Admin lists all users
      Then the userlist only contains
        | id   |
        | adam |

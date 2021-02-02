Feature: Admin Base User Management

  As an admin, I want to create/delete users manually,
  so that an admin has control over the registrated users

  Background: Base Users
    Given a user base with the users
      | userId |
      | adam   |
      | bop    |

  Rule: List Users
    Example: List all users
      When Admin lists all users
      Then the userlist only contains
        | Name  |
        | Admin |
        | Bop   |

  Rule: User Creation
    Example: Create a User
      Given Admin creates a new User with the Username "temp"
      When Admin lists all users
      Then the userlist only contains
        | Name  |
        | Admin |
        | Bop   |
        | temp  |

  Rule: User Deletion
    Example: Delete a User
      Given Admin deletes the user "Bop"
      When Admin lists all users
      Then the userlist only contains
        | Name  |
        | Admin |

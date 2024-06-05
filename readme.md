## Description
This project contains Cypress tests to evaluate the following elements on the https://www.tendable.com website:
1. Confirm accessibility of the top-level menus: Our Story, Our Solution, and Why Tendable.
2. Verify that the "Request a Demo" button is present.
3. Navigate to the "Contact Us" section, choose "Marketing", and complete the form—excluding the Message field. On submission, an error should arise. The test confirms the error message's appearance.

## How to Run the Tests
1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository from GitHub:
    ```bash
    git clone https://github.com/yourusername/tendable-tests.git
    ```
3. Navigate to the project directory:
    ```bash
    cd tendable-tests
    ```
4. Install the dependencies:
    ```bash
    npm install
    ```
5. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```

## Strategy
- The test suite is structured to run in Cypress, leveraging its powerful integration testing capabilities.
- Cypress commands and assertions are used to interact with and verify the elements on the page.
- Tests are organized into separate `describe` blocks with `beforeEach` hooks for clarity and better test management.



# GDSC AISSMS IOIT Website

This repository contains the source code for the GDSC AISSMS IOIT official website. Below are instructions to get the project set up on your local machine, make changes, and deploy updates.

## Prerequisites

Ensure you have the following installed before proceeding:

- **Git**
- **Node.js** (with npm)
- **GitHub Personal Access Token (PAT)**: Required to push changes to the repository.

Use this token in the setup steps below to authenticate your Git operations.

## First-Time Setup

Follow these steps to clone the repository and configure your remote:

1. Clone the repository:
    ```bash
    git clone https://github.com/gdsc-aissmsioit/gdsc-aissmsioit.github.io.git
    ```
2. Navigate into the project directory:
    ```bash
    cd gdsc-aissmsioit.github.io
    ```
3. Set the remote URL to push changes using your GitHub username and personal access token:
    ```bash
    git remote set-url origin https://<github_username>:<github_personal_access_token>@github.com/gdsc-aissmsioit/gdsc-aissmsioit.github.io.git
    ```

   Replace `<github_username>` with your GitHub username and `<github_personal_access_token>` with the token you generated.

## Making Changes

Once you've made the required changes to the code, follow these steps to commit and push your updates:

1. Add your changes:
    ```bash
    git add .
    ```
2. (Optional) Check the status of your changes:
    ```bash
    git status
    ```
3. Commit your changes with a message:
    ```bash
    git commit -m "put commit message here"
    ```
4. Push the changes to the repository:
    ```bash
    git push
    ```

## Building and Deploying

To build the project and deploy it to production, use the following commands:

1. Install the necessary dependencies:
    ```bash
    npm install
    ```
2. Build the project:
    ```bash
    npm run build
    ```
3. (Optional) For local debugging, start a development server on localhost:
    ```bash
    npm start
    ```
4. Deploy the project:
    ```bash
    npm run deploy
    ```

## Notes

- Ensure your GitHub username and personal access token are correctly configured for pushing changes.
- Use `npm start` to test your changes locally before deploying.
- Make sure  you have write-access to this repository

---

Feel free to contribute and improve the project!
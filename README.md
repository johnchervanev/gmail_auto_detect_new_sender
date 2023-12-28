# Gmail Script: Move New Senders to Label

## Overview
This Google Apps Script automates the process of organizing your Gmail inbox by moving threads from new senders to a specified label. The script helps you categorize and manage your emails more effectively by identifying and handling threads from previously unseen senders.

## Features
- **Labeling:** Easily customize the label to which emails from new senders will be moved.
- **Configuration:** Adjust the script behavior by modifying variables at the beginning of the script.
  - `labelName`: The name of the label to target (e.g., "new sender").
- **Tracking:** The script keeps track of processed email addresses to avoid moving threads from the same sender multiple times.

## Problem
Keeping track of new senders in your Gmail inbox can be challenging, especially if you receive a large volume of emails. Manually organizing these emails can be time-consuming and prone to oversight.

## Solution
This script addresses the issue by automatically moving threads from new senders to a designated label. This way, you can review and manage emails from unfamiliar senders more efficiently.

## Instructions
1. Open the script in the Google Apps Script Editor.
2. Copy and paste the script.
3. Customize the configuration object with your desired settings:
    ```javascript
    const config = {
      labelName: "new sender", // The label to target for new senders
    };
    ```
4. Save the script.

## Important Notes
- Ensure you have set up the script as a trigger to run periodically for automatic processing.
- The script assumes that the first message in each thread represents the latest communication from the sender.

## Setup Gmail API and Triggers
1. Open the Google Apps Script Editor.
2. Navigate to the menu, select **Services** and click **+ Add a service**.
3. Scroll down to **Gmail API** and click **Add** to turn it on.

### Setup Triggers
1. Go back to your script screen and click on the menu **Triggers**.
2. Navigate to **Current project's triggers** and click on **+ Add Trigger**.
3. Set a trigger to run the script at a desired time interval (e.g., every minute/hour) for automated processing.

**Important Notes:**
- If you run the script as-is without enabling the Gmail API and setting up triggers, it will result in errors.
- The Gmail API and triggers are essential for the script to interact with your Gmail account and automate the process of moving new sender threads to the specified label.

## Contribution
Contributions, issues, and feature requests are welcome. Feel free to open a pull request or raise an issue to enhance the functionality of the script.

## License
This project is licensed under the MIT License.

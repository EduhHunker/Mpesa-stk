## MPESA STK PUSH API

<div align="center">

</div>

**This project demonstrates how to integrate Safaricom's M-Pesa STK Push API using Node.js and Express. It allows you to initiate payment requests to a mobile number via M-Pesa and handle callback responses for transaction status.**

**Default Testing Credentials:**

* **ShortCode:** 174379
* **Passkey:** bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919
* **Phone Number:** any Safaricom mpesa registered number 
* **Amount:** Any amount can be used for testing.

**Obtain Your Credentials:**

1. **Sign up for a free account on the Safaricom Developer Portal (https://developer.safaricom.co.ke/) to access the M-Pesa API.** 🚀
2. **Log in to the portal and navigate to **My Apps**. ➕**
3. **Create a new app and select the **MPesa Sandbox APIs** to activate the necessary APIs.**
4. **Copy your **Consumer Key** and **Consumer Secret** for use in the project configuration.** 🔑

**Features:**

* Initiate M-Pesa STK Push payments 💸
* Handle callback responses for transaction status ✅

**Prerequisites:**

1. **Git:** You'll need Git installed to clone the project repository. You can download and install Git from [https://git-scm.com/](https://git-scm.com/).
2. **Node.js and npm:** You'll need Node.js and npm to run the project. You can download and install Node.js from [https://nodejs.org/en](https://nodejs.org/en).
3. **Heroku Account:** Create a free account on Heroku at [https://www.heroku.com/](https://www.heroku.com/).

## ⬆️ Deploying to Heroku

**1. Fork the Repository:** Fork the repository on GitHub to your own account.

**2. Deploy to Heroku:**

   * Click the button below to deploy your app to Heroku:

     [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=github://Fortunatusmokaya/MPESA-STK)

   * This will automatically create a Heroku app and deploy the project.

**3. Configure the App:**

   * After deployment, navigate to your Heroku app's dashboard.
   * In the **Settings** tab, find the **Config Vars** section.
   * Add the following config vars:

      * `CONSUMER_KEY`: Your Safaricom Consumer Key
      * `CONSUMER_SECRET`: Your Safaricom Consumer Secret
      * `SHORT_CODE`: Your Safaricom ShortCode
      * `PASSKEY`: Your Safaricom Passkey
      * `NUMBER`: The phone number to send the payment request to (for testing)
      * `AMOUNT`: The amount to be paid (for testing)

   * **Crucially, update the `CALLBACK_URL` config var to use the Heroku app URL.** 
     - The Heroku app URL will be provided by Heroku after you create the app. 
     - It will typically be in the format `https://<app-name>.herokuapp.com/mpesa/callback`.

## Running the Project Locally

1. **Clone the repository:**

   Open your terminal and navigate to the directory where you want to clone the repository. Then, run the following command to clone the `MPESA-STK` repository from GitHub:

   ```bash
   git clone [https://github.com/Fortunatusmokaya/MPESA-STK.git](https://github.com/Fortunatusmokaya/MPESA-STK.git)

This will clone the repository into a new directory named MPESA.
 * Navigate to the project directory:
   After the cloning is complete, navigate to the project directory by running the following command:
   
   ```bash
   cd MPESA

 * Install dependencies:
   Once you are inside the project directory, install the required dependencies by running the following command:
      ```bash
   npm install

  - This will install all the necessary Node.js packages required to run the project.
 * (Optional) Configure the project:
   There are two ways to configure the project:
   * Edit the config.js file: The config.js file contains placeholder values for the M-Pesa API credentials. You can replace these placeholders with your own credentials obtained from the Safaricom Developer Portal (https://developer.safaricom.co.ke/).
   * Use environment variables: You can set the environment variables for the M-Pesa API credentials instead of modifying the config.js file. Refer to the project documentation for more information on how to set environment variables.
  
   * 
 * Run the server:
   After you have configured the project (or if you are using the default testing credentials), you can start the server by running the following command:

      ```bash
   node server.js

  - This will start the Node.js server and the project will be running locally.
 * Test the project:
   You can now test the project by sending an STK Push request using a tool like Postman or cURL.

## Moving to Production
When transitioning to production, you'll need to:

 * Obtain Production Credentials: Contact Safaricom to acquire credentials for your Paybill or Till Number. This requires submitting business-related documents. 📝

 * Unique ShortCode and Passkey: Safaricom will provide a custom ShortCode and Passkey linked to your account. 🔑

 * Secure Deployment: Ensure your application is deployed on a reliable, secure server with HTTPS. The Callback URL must also use HTTPS. 🔒


## Disclaimer:
This project is for testing and educational purposes only.
# Mpesa-stk
# Mpesa-stk

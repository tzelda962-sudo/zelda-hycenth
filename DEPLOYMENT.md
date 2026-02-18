# Deploying to Hostinger (Static Site)

Since your Nuxt app is configured as a Single Page Application (`ssr: false`), deploying to Hostinger is very simple.

## Prerequisites

- You have a Hostinger account and a domain set up.
- You have access to the Hostinger File Manager or FTP.

## Step 1: Generate the Static Site

Run the following command in your terminal to generate the static files:

```bash
npm run generate
```

This will create a `.output/public` directory containing your entire website.

## Step 2: Prepare Files for Upload

1.  Navigate to the `.output/public` folder in your file explorer (Finder).
    > **Note:** Do NOT zip the `.output` folder itself. You need to zip the **contents** of the `public` folder found inside `.output`.
2.  Select all files and folders inside `.output/public` (including `.htaccess` if visible, though it might be hidden).
3.  Right-click and compress (Zip) them into a file, e.g., `wedding-site.zip`.

## Step 3: Upload to Hostinger

1.  Log in to your Hostinger Control Panel (hPanel).
2.  Go to **Files** > **File Manager**.
3.  Navigate to the `public_html` directory.
    - If there is a `default.php` file, delete it.
4.  Click the **Upload** icon (usually top right) and select your `wedding-site.zip` file.

## Step 4: Extract and Verify

1.  Right-click on the uploaded `wedding-site.zip` in File Manager.
2.  Choose **Extract**.
    - Ensure the destination is `public_html` (or the root of your domain folder).
3.  Once extracted, you can delete the `.zip` file.
4.  Visit your domain in a browser.

## Troubleshooting

- **404 on Refresh**: If you navigate to a page and refresh, and get a 404 error, ensure the `.htaccess` file was uploaded. This file tells the server to redirect all requests to `index.html` so Vue Router can handle them.
- **Changes not showing**: Hostinger has a cache. You may need to clear the cache in hPanel or wait a few minutes.

# Automate Deployment (CI/CD)

Instead of manually uploading files, you can use GitHub Actions to automatically deploy whenever you push to the `main` branch.

## 1. Get FTP Credentials

1.  Log in to Hostinger hPanel.
2.  Go to **Hosting** > **Dashboard** > **Files** > **FTP Accounts**.
3.  Note down:
    - **FTP IP (Hostname)**
    - **FTP Username**
    - **FTP Password** (if you forgot it, you can change it here)

## 2. Set Up GitHub Secrets

1.  Go to your GitHub repository.
2.  Click on **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret** and add the following three secrets:

    | Name           | Value                                                                         |
    | :------------- | :---------------------------------------------------------------------------- |
    | `FTP_SERVER`   | Your Hostinger FTP IP (e.g., `185.185.185.185`). **Do not include `ftp://`**. |
    | `FTP_USERNAME` | Your FTP Username (e.g., `u123456789`)                                        |
    | `FTP_PASSWORD` | Your FTP Password                                                             |

## 3. Trigger Deployment

1.  Push a change to the `main` branch.
2.  Go to the **Actions** tab in your GitHub repository to see the deployment progress.
3.  Once the "Deploy to Hostinger" workflow turns green, your site is live!

## Troubleshooting CI/CD

- **Error: `getaddrinfo ENOTFOUND`**: This means GitHub Actions cannot find your FTP server.
  - **Solution**: In your GitHub Repository Settings > Secrets, update `FTP_SERVER` to use the **FTP IP Address** (e.g., `185.185.185.185`) instead of the domain name. The domain might not be propagating yet.
- **Error: `Timeout` or `Connection refused`**:
  - **Solution**: Ensure you are using the correct Port (usually 21) and checking if Hostinger is blocking the connection. Using the IP address usually fixes this too.

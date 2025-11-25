# Zoho Cliq Extension Setup

1.  **Zip the Extension**: Create a zip file containing `plugin-manifest.json` and the `resources` folder.
2.  **Upload to Cliq**:
    *   Go to [Zoho Cliq Developer Console](https://cliq.zoho.com/developer).
    *   Click "Create Extension".
    *   Upload the zip file.
3.  **Configure URLs**:
    *   Update the `execution_url` in `plugin-manifest.json` to point to your deployed backend URL.
    *   Update the `url` in the widget definition to point to your deployed frontend URL.
4.  **Install**: Install the extension to your organization.

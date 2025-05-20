# WebDevelopment-Reznicek

This project is a simple, modifiable personal website template for showcasing projects and personal information. It is designed for beginners and students to easily create a portfolio site using only HTML, CSS, and JavaScript, with optional Firebase integration for dynamic project storage.

---

## Project Structure

```
/workspaces/WebDevelopment-Reznicek/
│
├── index.html         # Home page
├── about.html         # About me page
├── projects.html      # Project showcase (with add/view functionality)
├── contact.html       # Contact information
├── style.css          # Main stylesheet (themes, layout, etc.)
├── script.js          # JavaScript for theme, dark mode, collapsibles, and project logic
├── README.md          # This documentation
```

- **HTML files**: Each page is a standalone HTML file, using shared CSS and JS.
- **style.css**: Contains all theming, layout, and responsive styles.
- **script.js**: Handles dark mode, theme switching, collapsible sections, and (optionally) project CRUD logic.
- **projects.html**: Can use Firebase for real-time project storage, or fallback to localStorage if Firebase is not configured.

---

## How It Works

- **Theme & Dark Mode**: Users can toggle between light/dark mode and select color themes. Preferences are saved in `localStorage`.
- **Projects**: On the Projects page, users can add new projects via a form. Projects are displayed as cards. If Firebase is configured, projects are stored in the cloud; otherwise, they are saved in the browser.
- **Responsive Design**: The site is mobile-friendly and adapts to different screen sizes.
- **No Build Step Required**: The site is pure HTML/CSS/JS and does not require a build process for local development.

---

## Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR_USERNAME/WebDevelopment-Reznicek.git
   cd WebDevelopment-Reznicek
   ```

2. **Open `index.html` in your browser.**
   - No server is required for basic functionality.
   - For Firebase features, you may need to serve via `http-server` or similar to avoid CORS issues.

---

## Deployment with GitHub Actions

This site is designed to be deployed automatically to GitHub Pages using GitHub Actions.

### Steps:

1. **Push your changes to the `main` branch.**

2. **GitHub Actions Workflow:**
   - A workflow file (e.g., `.github/workflows/deploy.yml`) should be created with the following content:

     ```yaml
     name: Deploy to GitHub Pages

     on:
       push:
         branches:
           - main

     jobs:
       deploy:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v3
           - name: Deploy static site to GitHub Pages
             uses: peaceiris/actions-gh-pages@v3
             with:
               github_token: ${{ secrets.GITHUB_TOKEN }}
               publish_dir: ./
     ```

   - This workflow checks out your code and publishes the root directory to GitHub Pages.

3. **Enable GitHub Pages:**
   - Go to your repository's Settings > Pages.
   - Set the source to `gh-pages` branch (created by the workflow).

4. **Access your site:**
   - After the workflow runs, your site will be live at `https://YOUR_USERNAME.github.io/WebDevelopment-Reznicek/`.

---

## Customization

- **Edit HTML/CSS/JS** to personalize your site.
- **Firebase Integration**: To enable real-time project storage, set up your own Firebase project and update the config in `projects.html`.
- **Add/Remove Pages** as needed.

---

## License

MIT License. See [LICENSE](LICENSE) for details.


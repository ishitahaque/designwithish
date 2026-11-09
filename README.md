# designwithish.com

Static site: plain HTML, CSS, and a few lines of JavaScript. No build step.

```
index.html      home: headline, menu, loft photo and portrait
work.html       the three projects
services.html   the three packages
process.html    how a project runs
about.html      bio
contact.html    email and Instagram
styles.css      all styling
script.js       mobile menu + footer year
brand/          brand spec, color/font tokens, logo files
assets/         photos
CNAME           tells GitHub Pages which domain to serve
.nojekyll       stops GitHub from running Jekyll on the files
```

## Preview locally

Open `index.html` in a browser, or run a tiny server so fonts and paths behave the same as on the live site:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploy to GitHub Pages

1. Create a new public repository on GitHub, e.g. `designwithish`. Leave it empty (no README).
2. From this folder:

   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/designwithish.git
   git push -u origin main
   ```

3. In the repo go to **Settings → Pages**. Under "Build and deployment" set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Still on the Pages settings page, enter `designwithish.com` in the **Custom domain** box and save. GitHub will check DNS; it passes once the records below have propagated.
5. Once the DNS check passes, tick **Enforce HTTPS**. The certificate is issued automatically.

## DNS records at your registrar

In your registrar's DNS manager (the **Manage** button next to the domain, then DNS), remove any existing `A` records and parked-page `CNAME` for `@`/`www`, then add:

| Type  | Name | Value                     | TTL     |
|-------|------|---------------------------|---------|
| A     | @    | 185.199.108.153           | default |
| A     | @    | 185.199.109.153           | default |
| A     | @    | 185.199.110.153           | default |
| A     | @    | 185.199.111.153           | default |
| CNAME | www  | YOUR_USERNAME.github.io   | default |

Propagation usually takes a few minutes to an hour. Check with:

```
dig designwithish.com +noall +answer
dig www.designwithish.com +noall +answer
```

The four A records are GitHub's published Pages addresses. If GitHub changes them, the current list is in their docs under "Managing a custom domain for your GitHub Pages site".

## Brand

Colors, fonts, logo files, and voice rules live in `brand/` (start with `brand/BRAND.md`). `styles.css` reads its colors and fonts from `brand/tokens.css`.

## Still to do

- **Project photos**: each project in `work.html` has a colored `project-image` block that says "Photos coming soon". Replace the `<span>` with `<img src="assets/your-photo.jpg" alt="...">` and remove the `tone-*` class.
- **Prices**: the three package prices in the Services section are starting suggestions. Edit them in `services.html`.

## Editing

Each page is its own HTML file with the same header and footer. If you add or rename a page, update the menu in every file's header and the menu list on `index.html`.

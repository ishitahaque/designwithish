# designwithish.com

Static site: plain HTML, CSS, and a few lines of JavaScript. No build step.

```
index.html      the whole site (one page, anchored sections)
styles.css      all styling; palette and fonts are defined at the top
script.js       mobile menu + footer year
assets/         images (replace portrait.jpg with your photo)
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

## Before going live

- **Contact form**: `index.html` posts to `https://formspree.io/f/YOUR_FORM_ID`. Create a free form at formspree.io and paste its ID, or swap the form for a plain `mailto:` link.
- **Email**: `hello@designwithish.com` appears in two places. Change it or set up that mailbox at your registrar.
- **Portrait**: replace `assets/portrait.jpg` (480×600 or any 4:5 image) and delete the caption under it.
- **Work list**: each `<a class="work-row">` has a `--swatch` color and a placeholder `href="#"`. Point them at case-study pages or PDFs when ready.
- **Prices and dates**: the service prices and "Booking projects for January 2027" line are placeholders.
- **Social links** in the footer point at the LinkedIn and Dribbble home pages.

## Editing

Fonts and the color palette are CSS variables at the top of `styles.css`. Sections are plain `<section>` blocks in `index.html`; delete or reorder them freely, and update the nav links to match.

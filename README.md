# Kingdom of God Centre — Website

Bilingual (English / French) church website. Plain HTML, CSS and JavaScript — no build step. Hosted on GitHub Pages.

## Files
- `index.html` — page layout
- `css/style.css` — colours, fonts, layout (colours are at the top under `:root`)
- `js/main.js` — all English and French text, plus the language switch
- `images/` — photos and logo

## Editing text
All wording lives in `js/main.js`, in two blocks: `en` and `fr`. Change the same key in both.

## Photos to add (in `images/`)
| File name | Where it shows | Suggested size |
|---|---|---|
| hero.jpg | Top banner | 2400 × 1600, landscape |
| welcome.jpg | Welcome section | 1200 × 1500, portrait |
| ministry-worship.jpg, ministry-youth.jpg, ministry-kids.jpg, ministry-women.jpg, ministry-men.jpg, ministry-media.jpg | Ministry cards | 1200 × 900 |
| event-1.jpg, event-2.jpg, event-3.jpg | Event cards | 1200 × 750 |
| give.jpg | Giving section background | 2400 × 1200 |
| logo.png | Header (optional — replaces the crown icon) | transparent PNG |

Keep each photo under ~500 KB (export at 80% JPEG quality) so the site loads fast on phones.

## Still to fill in (search the files for these)
- `YOUR_CHANNEL` — YouTube handle
- `YOUR_PAGE` — Facebook
- `613-000-0000`, `info@yourchurch.ca` — phone and email
- `giving@yourchurch.ca` — e-Transfer email
- Event titles and dates in `js/main.js`

## Publishing on GitHub Pages
1. Upload all files to the repository (keep the folder structure).
2. Repository **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
3. Under **Custom domain**, enter the church domain and save. Tick **Enforce HTTPS** once available.
4. At the domain registrar, add DNS records:
   - `A` records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www` → `<github-username>.github.io`

Tip: add `?lang=fr` to the link to open the site directly in French.

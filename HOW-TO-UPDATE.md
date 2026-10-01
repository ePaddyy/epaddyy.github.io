# How to run and update your website

A step-by-step guide. You don't need to know web development: almost everything you'll ever change is a **text file** in the `src/content/` folder.

---

## Contents

1. [Running the website on your computer](#1-running-the-website-on-your-computer)
2. [Which file controls what](#2-which-file-controls-what)
3. [How the content files work (read this once)](#3-how-the-content-files-work-read-this-once)
4. [Recipes: common changes](#4-recipes-common-changes)
5. [Publishing your changes to the internet](#5-publishing-your-changes-to-the-internet)
6. [Putting a project (like Blinkit) on GitHub](#6-putting-a-project-like-blinkit-on-github)
7. [When something goes wrong](#7-when-something-goes-wrong)
8. [Files you should not need to touch](#8-files-you-should-not-need-to-touch)

---

## 1. Running the website on your computer

### First time only

1. Open **VS Code**.
2. **File → Open Folder…** and choose `Documents\PADDY.cv\website\epaddyy.github.io`.
3. Open a terminal inside VS Code: **Terminal → New Terminal** (or press <kbd>Ctrl</kbd> + <kbd>`</kbd>).
4. Type this and press Enter:

   ```
   npm install
   ```

   This downloads the tools the site needs. It takes a minute and creates a `node_modules` folder (never edit that folder).

> If you get `npm is not recognized`, close VS Code completely and open it again (Node.js was installed recently and VS Code needs a restart to see it).

### Every time you want to work on the site

1. Open the folder in VS Code (as above) and open a terminal.
2. Type:

   ```
   npm run dev
   ```

3. Wait for a line like `Local: http://localhost:4321/`. Hold <kbd>Ctrl</kbd> and click it (or type that address into Chrome).
4. Leave the terminal running. **Every time you save a file, the browser updates by itself.**
5. When you're finished, click in the terminal and press <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop it.

> **Don't use the "Go Live" button** for this site. It doesn't work with this setup. Always use `npm run dev`.

> Draft articles are visible in `npm run dev` but hidden on the real website.

### Checking the final version before publishing (optional)

```
npm run verify
```

This runs the same checks GitHub runs (formatting, errors, full build). If it ends with `Complete!` and no red errors, you're safe to publish.

To look at the exact production version: `npm run build` then `npm run preview`, and open the address it shows.

---

## 2. Which file controls what

All paths are inside the `epaddyy.github.io` folder.

| What you see on the site                                                       | File to edit                                                       |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Your name, job title, location, email, "Open to…" badge, social links, CV link | `src/config/site.ts`                                               |
| Paragraph under your name (top of home page)                                   | `src/content/home/hero.md`                                         |
| About section                                                                  | `src/content/home/about.md`                                        |
| Skills section ("What I do" + Toolkit)                                         | `src/content/home/skills.md`                                       |
| Contact section text                                                           | `src/content/home/contact.md`                                      |
| Projects (cards on the home page and Work page)                                | `src/content/projects/` (one file per project)                     |
| Case study pages (e.g. the maize one)                                          | the same project file, below the `---` lines                       |
| Work experience                                                                | `src/content/experience/` (one file per job)                       |
| Education                                                                      | `src/content/education/`                                           |
| Training & certifications                                                      | `src/content/certifications/`                                      |
| Articles / Writing page                                                        | `src/content/writing/`                                             |
| Your photo                                                                     | `src/assets/profile.jpg`                                           |
| Your CV (PDF)                                                                  | `public/cv/emmanuel-paddy-adams-cv.pdf`                            |
| The four numbers under your name (0.95, 0.87, 7, 3)                            | Calculated automatically from your project and certification files |

---

## 3. How the content files work (read this once)

Each content file has two parts:

```markdown
---
title: My Project            ← "frontmatter": settings, one per line
category: ml
tags: [Python, Pandas]
---

Normal writing goes here. ← "body": paragraphs, lists, headings
```

### Rules for the settings part (between the `---` lines)

1. **Format is `name: value`.** There must be a space after the colon.
2. **Indentation uses spaces, never Tab**, and it matters. Lines that belong to a group are indented by 2 spaces:
   ```yaml
   metric:
     name: R²
     value: '0.95'
   ```
3. **Put text in single quotes `'...'` if it contains a colon `:`, starts with a number, or contains `#`.**
   - ✅ `value: '0.95'` ✅ `outside: 'Outside of work: football'`
   - ❌ `outside: Outside of work: football` (the second colon confuses it)
4. **Apostrophes inside single quotes are written twice:** `'I''m open to roles'`. Or use double quotes instead: `"I'm open to roles"`.
5. **Lists** can be written either way:
   ```yaml
   tags: [Python, SQL, Power BI]
   ```
   ```yaml
   focus:
     - First item
     - Second item
   ```
6. **Dates** are written `YYYY-MM-DD`, e.g. `2026-03-01`.

### Writing in the body (Markdown)

| You type                           | You get           |
| ---------------------------------- | ----------------- |
| `**bold**`                         | **bold**          |
| `*italic*`                         | _italic_          |
| `[link text](https://example.com)` | a link            |
| `- item` at the start of a line    | a bullet point    |
| `## Heading`                       | a section heading |
| A blank line between paragraphs    | a new paragraph   |
| `` `code` ``                       | `code`            |

### The safety net

If you make a mistake in the settings (a missing field, a typo like `catgory`, a wrong value), the site **won't build** and the terminal shows an error naming the file and the field. Nothing broken ever reaches the internet. See [section 7](#7-when-something-goes-wrong).

---

## 4. Recipes: common changes

### Add a new project

1. In VS Code, right-click `src/content/projects` → **New File…**
2. Name it with lowercase words and hyphens, ending in `.md`, e.g. `sales-forecasting.md`. (The file name becomes part of the web address if you add a case study.)
3. Paste this template and fill it in:

```markdown
---
title: Retail Sales Forecasting
summary: One or two sentences describing what you built and on what data. This is the text on the card.
category: ml
icon: line-chart
order: 8
metric:
  name: MAE
  value: '1,240 units'
  note: time-based test split
tags: [Python, Pandas, scikit-learn]
repo: https://github.com/ePaddyy/Retail_Sales_Forecasting
approach: What you did, step by step, in two or three sentences.
impact: Why this matters / who would use it.
---
```

4. Save. The new card appears on the Work page.

**What each setting means:**

| Setting       | Required? | What to put                                                                                                                      |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | yes       | Project name                                                                                                                     |
| `summary`     | yes       | Card description (max ~320 characters)                                                                                           |
| `category`    | yes       | Exactly one of: `ml`, `analytics`, `bi` (these drive the filter buttons)                                                         |
| `icon`        | yes       | One of: `line-chart`, `bar-chart`, `gauge`, `users`, `globe`, `monitor`, `car`, `map-pin`, `clock`, `mail`, `check`              |
| `order`       | yes       | Position on the Work page: `1` = first. Use the next free number.                                                                |
| `tags`        | yes       | Tools/skills, in square brackets                                                                                                 |
| `approach`    | yes       | Shown when someone clicks "Approach & impact"                                                                                    |
| `impact`      | yes       | Shown in the same panel                                                                                                          |
| `metric`      | no        | Your main result. `name` = metric (R², RMSE, Recall…), `value` = the number **in quotes**, `note` = optional context             |
| `repo`        | no        | GitHub link. Leave the line out and the card says "Code coming soon".                                                            |
| `demo`        | no        | Link to a live app (e.g. Streamlit). Adds a "Live demo" button.                                                                  |
| `status`      | no        | `in-progress` adds an orange badge and the "Currently building" line at the top of the home page. Remove the line when finished. |
| `featured`    | no        | `true` = card spans the full width                                                                                               |
| `showOnHome`  | no        | `true` = card also appears in "Featured projects" on the home page (keep it to 3)                                                |
| `publishedAt` | no        | Date, e.g. `2026-10-01`                                                                                                          |

> **Use real numbers from your notebooks.** For regression, use R², MAE or RMSE, not "accuracy".

### Change which projects appear on the home page

Open each project file and set `showOnHome: true` on the three you want and `showOnHome: false` (or delete the line) on the rest. The first one, by `order`, is shown wide.

### Reorder projects

Change the `order:` numbers. Lower numbers come first.

### Remove a project

Delete its file from `src/content/projects/`. (If you've published to GitHub, it stays in your history, so you can always get it back.)

### Turn a project into a full case study page

Add a `caseStudy:` block to the project's settings, and write the case study below the closing `---`. Use `src/content/projects/maize-yield.md` as the example to copy.

```markdown
caseStudy:
headline: The big title at the top of the case study page
facts: - { label: Role, value: 'Solo: data, modelling, evaluation' } - { label: Data, value: '8,523 rows from …' }
results: - { value: '0.87', label: R² on 5-fold cross-validation }
---

## The problem

Write normally here…

## Approach

- Bullet points work too
```

The page appears at `/projects/<file-name>/`, and the card gets a "Read case study →" link automatically.

### Add a job or internship

Create a new file in `src/content/experience/`, e.g. `paystack.md`:

```markdown
---
role: Data Scientist
org: Company Name
location: Accra, Ghana
start: 2026-11-01
end: 2027-04-30
---

- What you did, with a number if possible.
- Another achievement.
```

- **Still working there?** Delete the `end:` line. It will show "Present".
- **Optional:** `link: https://…` adds a "View project" link.
- Jobs are sorted newest first automatically.

### Edit education or certifications

- Education: edit `src/content/education/university-of-ghana.md`, or add another file shaped the same way.
- Add a certification: new file in `src/content/certifications/`:

  ```markdown
  ---
  org: Google
  title: Advanced Data Analytics Certificate
  year: '2026'
  order: 4
  ---
  ```

  (`order` controls the list order. The "Data certifications" number on the home page updates automatically.)

### Edit the About, Skills, hero or Contact text

Open the matching file in `src/content/home/` and edit the words.

- `about.md`: the `heading`, the `focus` bullet list, the `outside` line, and the paragraphs below `---`.
- `skills.md`: three `capabilities` (title, text, tags) and the `toolkit` groups.
- `hero.md`, `contact.md`: just edit the paragraph below `---`.

### Change your name, title, email, availability or social links

Open `src/config/site.ts`. Only change the text **inside the quotes**:

```ts
role: 'Machine Learning Engineer',
availability: 'Open to ML & data roles · on-site in Accra or remote',
email: 'epaddyy@gmail.com',
```

Keep the quotes and the comma at the end of each line.

### Add your photo

1. Choose a portrait photo (roughly 5:6, e.g. 1000 × 1200 pixels), ideally with a plain background.
2. Rename it to `profile.jpg` and put it in `src/assets/`.
3. That's it: the "EPA" placeholder is replaced, and the site makes small, fast versions automatically.

### Update your CV

Export your new CV as PDF, name it **exactly** `emmanuel-paddy-adams-cv.pdf`, and replace the file in `public/cv/`. Every "Résumé" and "Download CV" button uses it.

> Your CV includes your phone number. Once it's on the website, anyone can download it.

### Publish an article

1. Open (or create) a file in `src/content/writing/`.
2. Write your article below the `---`.
3. Change `draft: true` to `draft: false` and set `publishedAt:` to today's date.

The **Writing** page and its menu link appear automatically once at least one article is published.

### Turn on visitor statistics (free)

1. Sign up at [goatcounter.com](https://www.goatcounter.com) and choose a code, e.g. `epaddyy`.
2. In `src/config/site.ts`, set `goatcounter: 'epaddyy',`.

---

## 5. Publishing your changes to the internet

Your site goes live automatically whenever changes reach the `main` branch on GitHub. You never upload files by hand.

### One-time setup (do this once)

1. On GitHub, open your **Portfolio** repository → **Settings** → **General** → rename it to **`epaddyy.github.io`**.
2. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
3. In the VS Code terminal (inside `epaddyy.github.io`), run:

   ```
   git remote add origin https://github.com/ePaddyy/epaddyy.github.io.git
   git push --force -u origin main
   ```

   A browser window may ask you to sign in to GitHub. `--force` is only needed this first time, because it replaces the old site.

4. On GitHub, open the **Actions** tab. Wait for **Deploy to GitHub Pages** to show a green tick (about 1–2 minutes). Your site is live at **https://epaddyy.github.io**.

### Every time after that (using VS Code, no commands)

1. Make and save your changes, and check them with `npm run dev`.
2. Click the **Source Control** icon in VS Code's left sidebar (the branching-lines icon).
3. Type a short message describing the change, e.g. `Add Blinkit repo link`.
4. Click **Commit**. If it asks "stage all changes?", click **Yes**.
5. Click **Sync Changes** (or **Push**).
6. In 1–2 minutes the live site updates. Check progress in the **Actions** tab on GitHub.

> If the Actions tab shows a red ✗, your live site is **not** changed (the old version stays up). Click the failed run to see the error, fix it, and commit again.

---

## 6. Putting a project (like Blinkit) on GitHub

Your Blinkit files are in `Documents\DATA SCIENCE\DATA ANALYST\PROJECTS\BLINKIT ANALYSIS` (dashboard `.pbix`, `blinkit.sql`, and the `DATA` folder).

### The simple way (in the browser)

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `Blinkit-Grocery-Sales-Analysis`. Set it to **Public** and tick **Add a README file**. Click **Create repository**.
3. On the new repo page click **Add file → Upload files**, drag in `BLINKIT_ANALYSIS_DASHBAORD.pbix`, `blinkit.sql`, the data file, and a few dashboard screenshots. Click **Commit changes**.
4. Edit the README (pencil icon) and describe the project. Recruiters read this: what the data is, what you did in SQL, what the dashboard shows, and a screenshot.
5. Copy the repo's web address.
6. Open `src/content/projects/blinkit-grocery.md` and add a line in the settings:

   ```yaml
   repo: https://github.com/ePaddyy/Blinkit-Grocery-Sales-Analysis
   ```

7. Save, then commit and push ([section 5](#every-time-after-that-using-vs-code-no-commands)).

> GitHub can't preview `.pbix` files, so **screenshots in the README are what people will actually see.** The same applies to the other Power BI projects.

---

## 7. When something goes wrong

| What you see                                                                   | What it means / how to fix                                                                                                                                                                    |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm is not recognized`                                                        | Restart VS Code (or the PC). If it persists, reinstall Node.js LTS from [nodejs.org](https://nodejs.org).                                                                                     |
| `Missing script: "dev"`                                                        | The terminal is in the wrong folder. Use **File → Open Folder** on `epaddyy.github.io` and open a new terminal.                                                                               |
| `InvalidContentEntryDataError … projects → my-file … category: Invalid option` | A setting in that file has a value that isn't allowed. The message names the file and the setting. For `category` it must be `ml`, `analytics` or `bi`; for `icon` see the list in section 4. |
| `… Required` or `expected string, received undefined`                          | A required setting is missing from that file (e.g. no `title:`).                                                                                                                              |
| `expected string, received number`                                             | Put the value in quotes: `value: '0.95'`.                                                                                                                                                     |
| `YAMLException` / `bad indentation` / `incomplete explicit mapping pair`       | A formatting problem in the settings: usually a Tab instead of spaces, a missing space after `:`, or an unquoted value containing `:`. Check the line number it mentions.                     |
| The browser shows the old version                                              | Save the file (<kbd>Ctrl</kbd> + <kbd>S</kbd>). If it's still stuck, refresh the page.                                                                                                        |
| `Port 4321 is in use`                                                          | The site is already running in another terminal. Use that one, or close it with <kbd>Ctrl</kbd> + <kbd>C</kbd>.                                                                               |
| `JavaScript heap out of memory` or `memory allocation failed`                  | The computer is low on memory. Close some apps or Chrome tabs and try again.                                                                                                                  |
| `npm run verify` fails on "Prettier" / formatting                              | Run `npm run format`, which fixes formatting automatically, then run verify again.                                                                                                            |

**Undo a change you regret:** in VS Code's Source Control panel, right-click the file → **Discard Changes** (this restores the last committed version).

---

## 8. Files you should not need to touch

You can ignore these. They're the "machinery":

- `src/components/`, `src/layouts/`, `src/pages/`, `src/lib/`, `src/scripts/`: the website's code
- `src/styles/`: colours and layout (`tokens.css` holds the colours if you ever want to change them)
- `src/content.config.ts`: the rules that check your content files
- `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`: project settings
- `.github/`: the automatic checks and publishing
- `node_modules/`, `dist/`, `.astro/`: generated automatically; never edit or upload these

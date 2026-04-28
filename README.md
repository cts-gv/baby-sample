# 👶 Baby Martinez — Announcement Website
A beautiful, dark-themed baby announcement website ready for GitHub Pages.

---

## 📁 File Structure

```
baby-martinez/
│
├── index.html          ← Main page (all sections live here)
├── css/
│   └── style.css       ← All styles & color variables
├── js/
│   └── main.js         ← Animations, form, scroll effects
├── images/             ← Put your photos here (create this folder)
│   ├── hero.jpg
│   ├── card1.jpg ... card6.jpg
│   └── month1.jpg ... month9.jpg
└── README.md
```

---

## 🚀 Getting It Live on GitHub Pages

1. Create a new GitHub repository (e.g. `baby-martinez`)
2. Upload all these files keeping the folder structure
3. Go to **Settings → Pages**
4. Under "Source" select **main branch / root**
5. Click Save — your site will be live at `https://yourusername.github.io/baby-martinez`

---

## ✏️ How to Edit Everything

### 🎨 Change Colors
Open `css/style.css` and edit the `:root` block at the top:
```css
:root {
    --accent:     #89CFF0;   /* Main blue accent */
    --accent-2:   #B2E2D2;   /* Secondary green */
    --bg-dark:    #0f172a;   /* Page background */
    ...
}
```

### 🖼️ Change the Hero Photo
In `index.html`, find `id="hero-photo"` and update the `src`:
```html
<img src="images/your-photo.jpg" ... id="hero-photo">
```

### 💌 Edit the Parent Message
Find `<p class="parent-message">` in `index.html` and change the text.

### 📋 Edit the Highlight Cards
Find the `id="highlights-grid"` section in `index.html`.
Each card looks like:
```html
<div class="card">
    <img src="images/card1.jpg" alt="..." onerror="...">
    <div class="card-body">
        <h3>Title Here</h3>
        <p>Your text here.</p>
    </div>
</div>
```
- Change `<h3>` for the card title
- Change `<p>` for the card description
- Replace `src="images/card1.jpg"` with your own photo

### 🗓️ Edit the Journey Cards (Month by Month)
Same as above — find each `.month-card` in the `#journey` section.

### 🔗 Update Registry & Donation Links
Find this block in `index.html` and replace the placeholder URLs:
```html
<a href="YOUR_AMAZON_LINK" class="btn amazon">    ← Baby Registry
<a href="YOUR_PAYPAL_LINK" class="btn paypal">    ← Donation
<a href="YOUR_VENMO_LINK"  class="btn venmo">     ← Donation
```

### 📬 Set Up the Well Wishes Form (FormSpree)

1. Go to **https://formspree.io** and sign up free
2. Click **New Form** → give it a name → copy your Form ID (e.g. `xpwzabcd`)
3. In `index.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
   Replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/xpwzabcd"
   ```
4. Done! Form submissions will go straight to your email.

### ⚽ Change the Floating Background Emojis
In `js/main.js`, edit the `icons` array:
```js
const icons = ['⚽', '🏀', '🏈', '⚾', '🧸', '⭐', '💙', '🎀'];
```

---

## 🖼️ Adding Your Own Photos

1. Create an `images/` folder in your repository
2. Upload your photos with these names (or update the src in index.html):
   - `hero.jpg` — The big photo at the top
   - `card1.jpg` through `card6.jpg` — Highlights section
   - `month1.jpg` through `month9.jpg` — Journey section
3. Recommended sizes:
   - Hero: **1200×600px** or wider
   - Cards: **400×250px**

---

Made with 💙 for Baby Martinez

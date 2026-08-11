# Shivam.dev Portfolio

Dark-themed full stack developer portfolio (React + Vite).

## Run

```bash
cd portfolio-shivam
npm install
npm run dev
```

## Data files (`src/data/`)

| File | Content |
|------|---------|
| `global.js` | Logo, nav, mobile nav, social, CTA |
| `personal.js` | Name, role, bio, photo, tech chips |
| `services.js` | Services cards |
| `projects.js` | Projects list |
| `skills.js` | Skills groups |
| `education.js` | Education |
| `experience.js` | Work experience |

Objects are extensible — add fields anytime without breaking UI.

## Mobile

- Bottom nav: Home, About, Skills, Projects, Contact
- **More** (⋯) opens Services, Experience, Education

## Photo

Replace `personal.photo` URL in `src/data/personal.js`, or put file in `src/assets/` and import it.

## Resume (Download button)

1. Put your PDF as **`public/resume.pdf`**
2. Buttons on **Home (Hero)** and **About** page will download it as `Shivam_Kumar_Resume.pdf`
3. Path is controlled by `personal.about.resumeUrl` in `src/data/personal.js` (default: `/resume.pdf`)

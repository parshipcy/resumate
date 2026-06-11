# Resumate

**Resumate** helps you prepare for job interviews with a plan built around you - not a generic checklist.

Paste a job description, upload your resume (or write a quick summary about yourself), and Resumate uses AI to create a personalized interview strategy in about 30 seconds. Also it can create a job-specific resume as a PDF, ready to download from your interview plan.

---

## Getting started

**Backend** (runs on port 3000)

```bash
cd Backend
npm install
# Add your MONGO_URI, JWT_SECRET, and GOOGLE_GENAI_API_KEY to .env
npm run dev
```

**Frontend** (runs on port 5173)

```bash
cd Frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173), create an account, and generate your first interview plan.

---

> [!NOTE]
> Resume PDF download works locally but may fail when deployed (Netlify + Render free tier): **Netlify proxy timeout** - API requests proxied through `_redirects` are cut off after ~26 seconds. PDF generation (Gemini + Puppeteer) often takes longer. **Render free tier limits** - Puppeteer/Chromium needs more RAM than the 512 MB free instance provides, so the backend can crash during PDF creation. Login, registration, and interview plans still work; only the download step is affected.

---

## Built with

React · Express · MongoDB · Google Gemini

# Deployment Guide

## Frontend (Vercel — recommended)
1. Push to GitHub (already done)
2. Go to vercel.com → Import Repository → `pixellot-AI-Research-Scientist-one-pager`
3. Framework: Next.js (auto-detected)
4. Add environment variable:
   - `NEXT_PUBLIC_AGENT_API_URL` = your Render.com backend URL (see below)
5. Deploy → done. Auto-deploys on every push to main.

### Alternative: Netlify
A `netlify.toml` can be added with:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## AI Agent Backend (Render.com — Free Tier)
The backend lives at: `C:/Users/omerz/Documents/projectsz/ForcePoint submission/pixellot-agent-backend/`

### Deploy Steps
1. Push `pixellot-agent-backend/` to its own GitHub repo (e.g., `pixellot-agent-backend`)
2. Go to render.com → New Web Service → Connect repo
3. Settings:
   - Runtime: Python
   - Build: `pip install -r requirements.txt`
   - Start: `uvicorn app:app --host 0.0.0.0 --port $PORT`
4. Add environment variables on Render:
   - `OPENAI_API_KEY` = your key
   - `ALLOWED_ORIGINS` = `*` (or your Vercel URL)
5. Copy the `https://your-service.onrender.com` URL
6. Back in Vercel: set `NEXT_PUBLIC_AGENT_API_URL` = that URL

### Important: Free Tier Cold Starts
Render free tier sleeps after 15 min inactivity. The frontend handles this gracefully:
- 4-second health probe on component mount
- If probe fails → auto-switches to **offline demo mode** with 17+ mock responses
- User sees "Offline Demo" indicator — no broken experience

## Public CV
The CV PDF must be at: `public/cv/Omer_Zilbershtein_CV.pdf`
This is included in the repo (gitignored `.env.local` does NOT affect this).

## Environment Variables Reference
```
# .env.local (never committed)
NEXT_PUBLIC_AGENT_API_URL=http://localhost:8000         # local dev
NEXT_PUBLIC_AGENT_API_URL=https://xxx.onrender.com     # production
```

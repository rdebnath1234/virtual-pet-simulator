# Virtual Pet Simulator

## Project Overview
**Project Title:** Virtual Pet Simulator  
**Technologies:** HTML, CSS, JavaScript (implemented with React + Tailwind CSS)  
**Project Difficulty:** Hard  

**Project Description:**  
In this web development assignment, you will create a Virtual Pet Simulator using HTML, CSS, and JavaScript. The goal is to design an interactive web application that simulates the experience of taking care of a virtual pet. This project combines front-end development skills with user interaction.

---

## Project Requirements Checklist

1. **Virtual Pet Design**
   - Virtual pet character with a visual asset (cartoon cat image).
   - Attributes: hunger, happiness, energy.

2. **User Interface**
   - Engaging UI layout with pet and status indicators.
   - HTML structure + Tailwind CSS styling, animations, and transitions.

3. **Pet Interaction**
   - Feed, Play, Sleep actions.
   - Each interaction updates attributes (e.g., feed reduces hunger, play increases happiness).

4. **Attribute Display**
   - Progress bars/icons show hunger, happiness, energy.
   - Attributes update in real time as users interact.

5. **Pet Animation**
   - State-based animations:
     - Hungry → dull/sad tone
     - Happy → cheerful bounce
     - Sleeping → rolls over + Zzz
     - Play → toy shake + sparkle

6. **Game Logic**
   - Attributes change over time (decay).
   - State transitions (awake/sleeping/exhausted).

7. **Extra Features (Optional)**
   - Multiple pet types are supported in backend.

---

## How To Run

### 1) Backend
```bash
cd "/Users/riyadebnathdas/Desktop/Projects/Virtual Pet Simulator/backend"
npm install
npm run dev
```

### 2) Frontend
```bash
cd "/Users/riyadebnathdas/Desktop/Projects/Virtual Pet Simulator/frontend"
npm install
npm run dev
```

---

## How To Play
1. Click **Feed** → reduces hunger.
2. Click **Play** → increases happiness, decreases energy.
3. Click **Sleep** → restores energy, cat rolls over and snoozes.

---

## Netlify Deployment (Frontend)
1. Push this project to a Git repository.
2. In Netlify, create a new site from the repository.
3. Build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Set environment variable in Netlify:
   - `VITE_API_URL` = your backend URL (Render URL).
5. Deploy the site.

---

## Render Deployment (Backend)
1. Push this project to a Git repository.
2. In Render, create a new **Web Service** from the repo.
3. Build settings:
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `node server.js`
4. Environment variables:
   - `MONGODB_URI` = your MongoDB Atlas URI
   - `CLIENT_ORIGIN` = your Netlify site URL
   - `PORT` = `5001`
5. Deploy the service.

A `render.yaml` is included at the repo root to simplify setup.

---

## Submission Requirements
- Submit the project as a ZIP containing HTML, CSS, and JavaScript files.
- Include this `README.md` with instructions for running and interacting with the pet.

---

## Grading Criteria
- **Functionality:** Does it simulate pet care effectively?
- **User Interface:** Is the UI appealing and user-friendly?
- **Code Quality:** Is the code structured and readable?
- **Additional Features:** Bonus points for extra features.

---

## Assets
- Cat image: `frontend/src/assets/cvqx_lkdr_230628.jpg`

---

## Notes
- This project uses React + Tailwind CSS but meets HTML/CSS/JS requirements.
- Backend persistence uses MongoDB.

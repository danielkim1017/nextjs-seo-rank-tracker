# 🔍 SEO Rank Tracker

A full-stack web application that tracks the Google search ranking of keywords for specific domains over time. Built with React, Node.js, MongoDB, and Tailwind CSS, the app uses web scraping, data visualization, and scheduled updates to help users monitor their SEO performance.

---

## 🚀 Features

- ✅ **Google OAuth Authentication** for secure user login
- ✅ **MongoDB integration** to store user data, domains, and keyword rankings
- ✅ **Add & Save Domains** to monitor over time
- ✅ **Keyword Search Interface** to track ranking of specific terms
- ✅ **Scraping Google Search Results** for accurate position tracking
- ✅ **Visualize Keyword Performance** with dynamic charts and graphs
- ✅ **Scheduled Cron Job** to update keyword rankings periodically
- ✅ **Responsive UI** using Tailwind CSS and React component structure
- 🔄 **Live Deployment** (coming soon)

---

## 📂 Tech Stack

**Frontend**: React, Tailwind CSS  
**Backend**: Node.js, Express  
**Database**: MongoDB (via Mongoose)  
**Authentication**: Google OAuth 2.0  
**Web Scraping**: Puppeteer  
**Data Visualization**: Chart.js or Recharts  
**Scheduled Tasks**: Node Cron  
**Hosting**: Planned AWS (EC2/S3) or Vercel/Render

---

## 📸 Screenshots (coming soon)

---

## 🛠 Current Development Status

The project is being developed in the following stages:

1. ✅ **Dependencies & Authentication**  
   - Installed backend/frontend packages  
   - Integrated Google OAuth and user session handling  

2. ✅ **Domains Page**  
   - UI for entering and saving domains  
   - Backend routes to persist domain data  

3. 🔄 **Saving & Listing Domains**  
   - [In Progress] Connect domain save functionality to MongoDB  
   - Display domains tied to the logged-in user  

4. 🔄 **Keywords Page**  
   - [In Progress] UI to enter and track keywords per domain  
   - Route to initiate rank tracking via scraping  

5. 🟡 **Single Keyword Page**  
   - View historical rank data for a keyword  
   - Display with line or bar charts  

6. 🟡 **Google Scraping Logic**  
   - Use Puppeteer to extract rankings from live search results  
   - Parse and store position data  

7. 🟡 **Graphs / Charts**  
   - Visualize rank trends over time  
   - Use Chart.js or similar lib  

8. 🔜 **Cron Job Setup**  
   - Automate scraping every 24h or configurable interval  

9. 🔧 **Small Fixes & UI Polishing**  
   - Improve error handling, loading states, and UX  

10. 📦 **Deployment**  
    - Planned AWS (EC2 + S3), Vercel, or Render deployment  
    - Environment variable setup and `.env` documentation

---

## 📌 To Do / Planned Enhancements

✅ Domain + keyword linking  
🟡 Mobile responsiveness improvements  
🟡 Keyword history detail page  
🟡 Deployment with domain + HTTPS  
🟡 User settings / keyword notifications (future)

---

## 🧠 What I'm Learning

- Full-stack architecture from frontend input to backend scraping  
- OAuth authentication flows and secure session management  
- Scheduling jobs with cron in a production-ready app  
- Real-time data visualization and UI responsiveness  
- Deploying scalable apps using Vercel (CI/CD)

---

## 📬 Contact

Built by [Daniel Kim] – [LinkedIn](https://linkedin.com/in/daniel-ji-kim) 

Done Under Guidance of @Coding With Dawid



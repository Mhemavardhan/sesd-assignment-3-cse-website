# CSE Department Website — Git & GitHub Version Control and Deployment

> **Software Engineering and System Design (SESD) — Assignment 03/12**  
> **Institution:** SR University, Warangal / Hyderabad, Telangana  
> **Department:** Department of Computer Science and Engineering  
> **Student Name:** Mudavath Hemavardhan  
> **Hall Ticket Number:** 2403A51421  
> **Course Code:** 24CS301PC311 | **Academic Year:** 2026–27  

---

## 🌐 Live Website & Repository Links

- **GitHub Repository:** [https://github.com/Mhemavardhan/sesd-assignment-3-cse-website](https://github.com/Mhemavardhan/sesd-assignment-3-cse-website)
- **Live GitHub Pages URL:** [https://mhemavardhan.github.io/sesd-assignment-3-cse-website/](https://mhemavardhan.github.io/sesd-assignment-3-cse-website/)

---

## 🏛️ Project Overview

This project is a multi-page, fully responsive academic portal engineered for the **Department of Computer Science & Engineering, SR University**. It features:
- **Home Page (`index.html`):** Academic pillars, welcome hero banner, computing research areas (AI, Cyber Security, Data Science, Software Systems).
- **Faculty Page (`faculty.html`):** Formal academic directory table and responsive profile cards.
- **Contact Page (`contact.html`):** Department contact channels, address, and interactive inquiry form with real-time client-side validation.
- **Shared Styling (`css/style.css`):** Custom academic navy and gold palette, CSS Grid, Flexbox, and mobile breakpoints.
- **Shared Scripts (`js/script.js`):** Responsive mobile navigation drawer and interactive form validation.

---

## 📁 Project Directory Structure

```text
sesd-assignment-3-cse-website/
├── index.html                             # Department home page
├── faculty.html                           # Faculty directory table and cards
├── contact.html                           # Contact channels & interactive form
├── css/
│   └── style.css                          # Responsive styling & typography
├── js/
│   └── script.js                          # Mobile navigation & form validation
├── assets/
│   └── images/                            # SVG emblem and tech banners
├── docs/
│   └── git-workflow.md                    # In-depth Git workflow guide
├── test_website.py                        # Automated integration test suite
├── README.md                              # Main documentation & URLs
└── .gitignore                             # OS and editor ignore rules
```

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mhemavardhan/sesd-assignment-3-cse-website.git
   cd sesd-assignment-3-cse-website
   ```

2. **Open in your web browser:**
   - Double-click `index.html`, or
   - Use Python's lightweight local server:
     ```bash
     python3 -m http.server 8000
     ```
     Navigate to `http://localhost:8000`.

---

## 🔄 Git Workflow Summary

1. **Initialization:** Repository initialized with `git init` and user identity set with `git config`.
2. **Incremental Milestones:** Changes tracked across atomic commits (`chore`, `feat`, `style`, `test`, `docs`).
3. **Branching:** Spanned feature branches (`feature/home-update`, `feature/home-design`) via `git checkout -b`.
4. **Conflict Resolution:** Safely diagnosed three-way merge conflict on `index.html` via `git diff` and resolved cleanly.
5. **Deployment:** Pushed to GitHub and deployed worldwide via **GitHub Pages**.

---

## 📋 Common Git Commands Reference Table

| S.No | Command | Syntax | Purpose / Description |
| :---: | :--- | :--- | :--- |
| 1 | Initialize Repository | `git init` | Creates a new Git repository in current folder |
| 2 | Check Repository Status | `git status` | Shows status of working directory & staging area |
| 3 | Configure Username | `git config user.name "Name"` | Sets your Git author username |
| 4 | Configure Email | `git config user.email "email"` | Sets your Git author email |
| 5 | Add Files to Staging Area | `git add .` | Adds file(s) to the staging area for commit |
| 6 | Commit Changes | `git commit -m "Message"` | Saves staged changes with descriptive message |
| 7 | View Commit History | `git log --graph --oneline` | Shows list/graph of all commits |
| 8 | Create Branch | `git branch branch_name` | Creates a new feature branch |
| 9 | Switch Branch | `git checkout branch_name` | Switches to the specified branch |
| 10 | Rename Branch | `git branch -M main` | Renames the current branch to main |
| 11 | Merge Branch | `git merge branch_name` | Merges changes from specified branch into current |
| 12 | Add Remote Repository | `git remote add origin URL` | Links local repo to remote GitHub repo |
| 13 | Push to Remote | `git push -u origin main` | Pushes local changes to GitHub |
| 14 | Push Updates | `git push` | Pushes committed changes to remote repo |
| 15 | Pull Latest from Remote | `git pull` | Fetches and merges latest changes from GitHub |
| 16 | Clone Remote Repository | `git clone URL` | Copies an existing GitHub repo locally |
| 17 | Delete Branch | `git branch -d branch_name` | Deletes a local branch |
| 18 | Show Changes | `git diff` | Shows unstaged changes compared to last commit |
| 19 | Revert Last Commit | `git revert commit_id` | Creates new commit to undo previous commit |
| 20 | Reset to Last Commit | `git reset --hard HEAD` | Discards all changes in working directory |

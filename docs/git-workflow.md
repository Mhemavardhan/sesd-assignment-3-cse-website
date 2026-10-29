# Software Engineering & System Design (SESD) — Assignment 3
## Git & GitHub Version Control Workflow Documentation

- **Project:** CSE Department Website — Git & GitHub Version Control and Deployment
- **Course:** Software Engineering and System Design (24CS301PC311)
- **Academic Year:** 2026–27 | **Regulation:** R24
- **Student Name:** Mudavath Hemavardhan
- **Hall Ticket Number:** 2403A51422
- **Institution:** SR University, Warangal / Hyderabad, Telangana

---

## 1. Project Overview & Architecture

The **Department of Computer Science and Engineering** website is a multi-page, responsive academic web application built using HTML5, CSS3, and JavaScript ES6. It provides:
1. **Home Page (`index.html`):** Academic pillars, welcome hero banner, computing research areas.
2. **Faculty Directory (`faculty.html`):** Formal academic directory table and responsive profile cards.
3. **Contact Page (`contact.html`):** Department contact channels, address, and interactive inquiry form.

```text
sesd-assignment-3-cse-website/
├── index.html               # Home page
├── faculty.html             # Faculty directory table and cards
├── contact.html             # Department address and inquiry form
├── css/
│   └── style.css            # Responsive layout and university branding
├── js/
│   └── script.js            # Mobile navigation drawer & form validation
├── assets/
│   └── images/              # University emblem and hero illustrations
├── test_website.py          # Integration test suite
├── docs/
│   └── git-workflow.md      # Detailed Git workflow documentation
└── README.md                # Project README & deployment URLs
```

---

## 2. Step-by-Step Git Operations & Terminal Evidence

### Step 1: Repository Initialization & Identity Configuration
```bash
$ git init
Initialized empty Git repository in sesd-assignment-3-cse-website/.git/

$ git config user.name "Mudavath Hemavardhan"
$ git config user.email "2403a51422@sru.edu.in"
$ git branch -M main
```

### Step 2: Staging & Initial Repository Commit
```bash
$ git add .gitignore
$ git commit -m "chore: initialize SESD assignment repository"
[main (root-commit) 6ea08d1] chore: initialize SESD assignment repository
 1 file changed, 15 insertions(+)
 create mode 100644 .gitignore
```

### Step 3: Incremental Milestone Commits
```bash
# Commit 2: Home Page
$ git add index.html assets/
$ git commit -m "feat: create CSE department home page"
[main 71204f9] feat: create CSE department home page

# Commit 3: Faculty & Contact Pages
$ git add faculty.html contact.html
$ git commit -m "feat: add faculty and contact pages"
[main 85dccf1] feat: add faculty and contact pages

# Commit 4: Styling & Scripts
$ git add css/ js/
$ git commit -m "style: implement responsive department website"
[main d158f25] style: implement responsive department website

# Commit 5: Verification & Testing
$ git add test_website.py
$ git commit -m "test: verify navigation and responsive layout"
[main 3f8fb37] test: verify navigation and responsive layout
```

---

## 3. Branching, Merging & Conflict Resolution

### Branch 1 (`feature/home-update`)
```bash
$ git checkout -b feature/home-update
# Updated headline to: "Welcome to the CSE Department — SR University"
$ git add index.html
$ git commit -m "feat: update department hero headline for institutional branding"
```

### Branch 2 (`feature/home-design`)
```bash
$ git checkout main
$ git checkout -b feature/home-design
# Updated same headline to: "Welcome to Computer Science & Engineering"
$ git add index.html
$ git commit -m "style: refine hero headline for concise typography"
```

### Merge Conflict Observation & Resolution
```bash
$ git checkout main
$ git merge feature/home-update   # Fast-forward merge succeeded
$ git merge feature/home-design   # Conflict triggered

Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Conflict markers inspected via `git diff`:
```html
<<<<<<< HEAD
          <h1 class="hero-heading" id="heroHeadline">Welcome to the CSE Department — SR University</h1>
=======
          <h1 class="hero-heading" id="heroHeadline">Welcome to Computer Science &amp; Engineering</h1>
>>>>>>> feature/home-design
```

**Resolution:** Both perspectives harmonized into:
```html
<h1 class="hero-heading" id="heroHeadline">Welcome to the Department of Computer Science &amp; Engineering — SR University</h1>
```

Committed the resolution:
```bash
$ git add index.html
$ git commit -m "fix: resolve merge conflict in home page heading"
[main 658d9e1] fix: resolve merge conflict in home page heading
```

---

## 4. Final Commit Graph
```text
*   658d9e1 (HEAD -> main) fix: resolve merge conflict in home page heading
|\  
| * 3b88926 (feature/home-design) style: refine hero headline for concise typography
* | a4487d2 (feature/home-update) feat: update department hero headline for institutional branding
|/  
* 3f8fb37 test: verify navigation and responsive layout
* d158f25 style: implement responsive department website
* 85dccf1 feat: add faculty and contact pages
* 71204f9 feat: create CSE department home page
* 6ea08d1 chore: initialize SESD assignment repository
```

---

## 5. Official 5–6 Line Git Workflow Summary

1. Initialized the local repository using `git init` and bound identity credentials using `git config`.
2. Developed features incrementally, staging files with `git add` and capturing distinct milestones using descriptive semantic commits with `git commit -m`.
3. Created isolated feature branches (`feature/home-update` and `feature/home-design`) using `git checkout -b` to test parallel development workflows safely.
4. Diagnosed a simulated three-way merge conflict on `index.html`, inspected `git diff` conflict markers, and resolved the discrepancy before final commit.
5. Linked to GitHub using `git remote add origin`, pushed all branches using `git push`, and published the site live across the globe using **GitHub Pages**.

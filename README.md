# 🎁 Secret Santa Assignment Tool

Automated Secret Santa pairing tool built with Node.js and React. Prevents repeat pairings or self-assignment, and supports Excel-based employee lists.

---

## 📦 Tech Stack

| Layer       | Technologies                      |
| ----------- | --------------------------------- |
| Backend     | Node.js, Express.js, Multer, XLSX |
| Frontend    | React.js, Axios, Bootstrap        |
| File Format | `.xlsx` for employee data         |

---

## 🚀 Getting Started

### 🔧 Step 1: Clone the Repository

```bash
git clone https://github.com/ilayabharathi-sakthivel/secret-santa-assignment.git
cd secret-santa-assignment
```

### 🛠 Step 2: Install Dependencies & Start Server

```bash
cd backend
npm install
node server.js
```

Server starts at http://localhost:300

## 🎨 Frontend Setup

### 💻 Step 3: Install Dependencies & Run React App

```bash
cd frontend
npm install
npm start

```

### 📂 Step 4: Upload Files via UI

- Current.xlsx — current employee list
- Past.xlsx — last year's pairings

Expected Columns:

Current.xlsx:

- Employee_Name
- Employee_EmailID

Past.xlsx:

- Employee_Name
- Employee_EmailID
- Secret_Child_Name
- Secret_Child_EmailID

### ✍️ Author

Made by Ilayabharathi Sakthivel
For enhancements or collaboration, feel free to reach out or contribute!

### ⚠️ Notes

- Ensure .xlsx files are correctly formatted (no merged cells or missing headers)
- Node.js v14+ and React 18+ recommended

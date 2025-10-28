# 🧩 JSON Validator with Local Storage

A simple web-based JSON validator that lets users input JSON, validate its structure, and automatically save their input using **localStorage** — ensuring the data persists even after the page reloads.

---

## 🧠 Overview

This project demonstrates how to:
- Validate JSON input using `JSON.parse()` and error handling.
- Provide real-time feedback for valid or invalid JSON.
- Store and retrieve user data from **localStorage**.
- Implement a clean, minimal UI using vanilla JavaScript, HTML, and CSS.

---

## ✨ Features

- ✅ **Live JSON validation** using `try...catch`
- 💾 **Persistent user data** via `localStorage`
- 💬 **Instant feedback messages** (valid or error)
- ♻️ **Automatic retrieval** of the last input on page reload
- 🧹 **Clear storage option** (optional enhancement)

---

## 🧰 Technologies Used

| Tool | Purpose |
|------|----------|
| **HTML5** | Structure and content |
| **CSS3** | Styling and layout |
| **JavaScript (ES6)** | Logic and DOM manipulation |
| **localStorage API** | Client-side data persistence |

---

## ⚙️ How It Works

1. User enters JSON text into the textarea.  
2. Clicking **Validate JSON** runs a validation check using `JSON.parse()`.  
3. If the JSON is valid, a green success message appears.  
4. If invalid, an error message (in red) is displayed showing the parsing issue.  
5. The input is saved automatically in **localStorage**.  
6. When the page reloads, the app retrieves and displays the previous JSON input.

---

## 🧩 Code Highlights

```js
try {
  JSON.parse(jsonTextareaText);
  messageSpan.textContent = "✅ JSON is valid";
  messageSpan.className = "valid";
} catch (error) {
  messageSpan.textContent = `❌ Error: ${error.message}`;
  messageSpan.className = "invalid";
}

## 🏦 Bank Registration Form ##

A clean, responsive web form built with Bootstrap and Vanilla JS to collect personal and banking details. This was designed as a practical exercise for API integration.
🛠️ Tech Stack

    Frontend: HTML5, CSS3 (Custom Hover Effects)

    Framework: Bootstrap

    Logic: JavaScript (Fetch API)

# 📂 Code Structure #

The project is contained within a single index.html file for simplicity:
HTML

- Personal Details (Name, Aadhaar, Email, etc.)
- Bank Details (Account Name, Bank, IFSC)
- AJAX Submission via Fetch

# 🚀 API Integration #

The form captures data using FormData and sends a POST request to:
https://..........php :)

JavaScript

```
fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})
```

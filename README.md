## 🏦 Bank Registration Form ##
For demo visit : https://alienq7.github.io/fswdpract1

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

Do these practicals in class-
Create a 1D array of numbers 0–9, then reverse it.
Create a 4x4 identity matrix, then replace its diagonal with the values 1,2,3,4.
Given arr = np.arange(20), reshape it into a 4x5 matrix, then extract all values greater than 10.
Create two arrays of shape (3,3) and compute their matrix product (not element-wise).
Given a 1D array of 15 random integers, find the index of the maximum value and replace all values above the mean with 0.

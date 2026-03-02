# ✍️ Signature Generator

A simple web application that allows users to create a personalized email signature, preview it, and export it as a PNG image.  
Built with **HTML**, **CSS**, and **JavaScript** using the [html2canvas](https://html2canvas.hertzen.com/) library.

---

## 🚀 Features

- **Form Inputs with Defaults**  
  Pre-filled fields for name, position, cellphone, and email.

- **Live Signature Preview**  
  Updates the signature container with user input.

- **Generate Signature URL**  
  Creates a base64 PNG data URL of the signature preview.

- **Download PNG**  
  Save the signature as a PNG file directly to your computer.

- **Copy Signature URL**  
  Copies the generated base64 image URL to your clipboard.

- **Visible URL Label**  
  Displays the generated signature URL in a text field for easy viewing and copying.

---

## 📂 Project Structure
project/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── script.js       # JavaScript logic
└── assets/
└── template.png    # Signature template image

---

## ⚙️ How It Works

1. Fill in the form with your details (defaults are already provided).
2. Click **Update Signature**:
   - Updates the preview with your details.
   - Generates a PNG screenshot of the signature container.
   - Displays the base64 URL in the input field.
3. Use **Download PNG** to save the signature locally.
4. Use **Copy Signature URL** to copy the base64 image link to your clipboard.

---

## 🖼️ Example Workflow
![Signature Generator Demo](https://github.com/ZAmystic/Waterford-Carriers_HTML5/blob/main/assets/signature.png?raw=true)
- Enter your details → Click **Update Signature**  
- Preview updates instantly.  
- Signature URL appears in the text field.  
- Choose to **Download** or **Copy** the signature.

---

## 📦 Dependencies

- [html2canvas](https://cdnjs.com/libraries/html2canvas) (via CDN)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>


// Handle form submission
document.getElementById("signatureForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Update signature preview
  document.getElementById("sigName").textContent = document.getElementById("fullName").value;
  document.getElementById("sigPosition").textContent = document.getElementById("position").value;
  document.getElementById("sigCell").textContent = "c: " + document.getElementById("cellphone").value;
  document.getElementById("sigEmail").textContent = "e: " + document.getElementById("email").value;
  document.getElementById("sigWebsite").textContent = "www.waterfordcarriers.co.za";

  // Generate signature URL with html2canvas
  const signatureContainer = document.querySelector(".signature-container");
  html2canvas(signatureContainer).then(canvas => {
    const dataUrl = canvas.toDataURL("image/png");

    // Put URL into the input field
    document.getElementById("signatureUrl").value = dataUrl;
  });
});

// Download PNG
document.getElementById("downloadBtn").addEventListener("click", function () {
  const signatureContainer = document.querySelector(".signature-container");

  html2canvas(signatureContainer).then(canvas => {
    const link = document.createElement("a");
    link.download = "signature.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

// Copy URL
document.getElementById("copyUrlBtn").addEventListener("click", function () {
  const urlField = document.getElementById("signatureUrl");
  const dataUrl = urlField.value;

  if (dataUrl) {
    navigator.clipboard.writeText(dataUrl).then(() => {
      alert("Signature URL copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  } else {
    alert("Please update the signature first to generate a URL.");
  }
});

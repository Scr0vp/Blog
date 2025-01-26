fetch("http://localhost:3000/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password,
  }),
})
.then(response => response.text())  // Use .text() instead of .json() for debugging
.then(data => {
  console.log("Response data:", data);  // Log the raw response
  try {
    const parsedData = JSON.parse(data);  // Try parsing JSON
    if (parsedData.token) {
      localStorage.setItem("authToken", parsedData.token);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error-message").style.display = "block";
    }
  } catch (error) {
    console.error("Error parsing response:", error);
    document.getElementById("error-message").style.display = "block";
  }
})
.catch(error => {
  console.error("Error during login:", error);
  document.getElementById("error-message").style.display = "block";
});

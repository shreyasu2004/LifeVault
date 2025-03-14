document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token); // Store token for authentication
            document.getElementById('loginMessage').innerHTML = "<p style='color: green;'>Login successful! Redirecting...</p>";
            
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to dashboard
            }, 1500);
        } else {
            document.getElementById('loginMessage').innerHTML = `<p style="color: red;">${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('loginMessage').innerHTML = "<p style='color: red;'>Server error. Try again later.</p>";
    }
});

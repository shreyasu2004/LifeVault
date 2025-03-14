document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "index.html"; // Redirect to login if not authenticated
    }

    async function loadDashboard() {
        const res = await fetch("http://localhost:5000/dashboard", {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();

        if (data.analytics) {
            const ctx = document.getElementById("chart").getContext("2d");
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: data.analytics.labels,
                    datasets: [{
                        label: "Health Tracking",
                        data: data.analytics.values,
                        borderColor: "#ff5722",
                        fill: false
                    }]
                }
            });
        }
    }

    loadDashboard();
});

document.getElementById("saveAvatar").addEventListener("click", async () => {
    const avatarData = {
        color: document.getElementById("color").value,
        outfit: document.getElementById("outfit").value,
    };

    const response = await fetch("https://still-shape-5b00.cubiodojo.workers.dev/api/avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "123", avatar: avatarData }),
    });

    if (response.ok) {
        alert("Avatar saved!");
    } else {
        alert("Failed to save avatar.");
    }
});

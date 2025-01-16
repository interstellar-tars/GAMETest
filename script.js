const apiUrl = "https://still-shape-5b00.cubiodojo.workers.dev/";

document.getElementById("saveAvatar").addEventListener("click", async () => {
    const avatarData = {
        color: document.getElementById("color").value,
        outfit: document.getElementById("outfit").value,
    };

    const response = await fetch(`${apiUrl}/api/avatar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "123", avatar: avatarData }),
    });

    if (response.ok) {
        alert("Avatar saved successfully!");
    } else {
        alert("Failed to save avatar.");
    }
});

async function loadMarketplaceItems() {
    const response = await fetch(`${apiUrl}/api/marketplace`);
    if (response.ok) {
        const items = await response.json();
        const itemsContainer = document.getElementById("items");
        items.forEach(item => {
            const div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button>Buy for ${item.price} coins</button>
            `;
            itemsContainer.appendChild(div);
        });
    }
}

loadMarketplaceItems();

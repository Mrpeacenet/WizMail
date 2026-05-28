// ===============================
// DROPDOWN FILTER
// ===============================
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", function (event) {
    dropdownMenu.classList.toggle("active");
    event.stopPropagation();
});

document.addEventListener("click", function () {
    dropdownMenu.classList.remove("active");
});


// ===============================
// ANNOUNCEMENT POST SYSTEM
// ===============================
const announcementFeed = document.getElementById("announcementFeed");
const form = document.querySelector(".announce-container");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page refresh

    const titleInput = document.getElementById("announcementTitle");
    const descriptionInput = document.getElementById("announcementDescription");

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title || !description) return;

    // Create card
    const announcementCard = document.createElement("div");
    announcementCard.classList.add("announcement-card");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("announcement-title");
    titleDiv.textContent = title;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("announcement-description");
    descriptionDiv.textContent = description;

    announcementCard.appendChild(titleDiv);
    announcementCard.appendChild(descriptionDiv);

    // Add to feed
    announcementFeed.prepend(announcementCard);

    // Reset form properly
    form.reset();
});
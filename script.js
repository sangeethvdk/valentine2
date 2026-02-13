const text = "From the moment you came into my life, everything changed in the most beautiful way. You became my happiness, my comfort, and my favorite person in this world. These three years with you have been filled with unforgettable memories, laughter, and unconditional love. I don't just want today with you. I want every tomorrow, every dream, and every forever with you.";

let index = 0;
let musicStarted = false;

/* Start when first button clicked */
function startExperience() {
    nextPage(2);
    typeWriter();

    // Start music only once when entering page 2
    if (!musicStarted) {
        document.getElementById("bgMusic").play();
        musicStarted = true;
    }
}

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");
}

/* Modal */
function openModal(img, text) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
    document.getElementById("caption").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* ❤️ Love Counter */
const startDate = new Date("2022-09-13");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("loveCounter").innerText =
        days + " Days " + hours + " Hours " + minutes + " Minutes ❤️";
}

setInterval(updateCounter, 1000);

/* Cursor Glitter */
document.addEventListener("mousemove", e => {
    const glitter = document.createElement("div");
    glitter.className = "cursor-glitter";
    glitter.style.left = e.clientX + "px";
    glitter.style.top = e.clientY + "px";
    document.body.appendChild(glitter);

    setTimeout(() => glitter.remove(), 1000);
});

const reviews = [{
        id: 1,
        name: "Pratham",
        job: "Backend Engineer",
        img: "photo.jpg",
        text: "This course helped me a lot in cracking my coding interview at google north america.",
    },
    {
        id: 2,
        name: "Alex",
        job: "Android Developer",
        img: "img-2.png",
        text: "This course helped me in switching my career from electrical engineering to software developer.",
    },
    {
        id: 3,
        name: "Sanket Singh",
        job: "Front-end Engineer",
        img: "img-3.png",
        text: "This course helped me in cracking my react js interview at sprinkler."
    },
    {
        id: 4,
        name: "Gaurav Sen",
        job: "Systems Engineer",
        img: "img-4.png",
        text: "This course helped me in acing my high level system design interview at google warshaw.",
    }
];

// Selecting item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set the starting item
let currentItem = 3;
window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});
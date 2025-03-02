document.getElementById("btn1").addEventListener("click", function () {
    alert("board updated successfully");
    const initial = getInnerTextByValue("task");
    const sum = initial - 1;
    document.getElementById("task").innerText = sum;

    const completedTask = getInnerTextByValue("completed-task");
    const add = completedTask + 1;
    document.getElementById("completed-task").innerText = add;

    this.disabled = true;

    this.style.opacity = "0.2";



    const container = document.getElementById("activityContainer");
    const taskDiv = event.target.closest(".p-6");
    const taskTitle = taskDiv ? taskDiv.querySelector("h3").innerText : "Unknown Task";
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const div = document.createElement("div");
    div.innerHTML = `
    <p>You have completed <strong>${taskTitle}</strong> at <strong>${formattedTime}</strong></p>
`;
    container.appendChild(div);


})


document.getElementById("btn2").addEventListener("click", function () {
    alert("board updated successfully");
    const initial = getInnerTextByValue("task");
    const sum = initial - 1;
    document.getElementById("task").innerText = sum;

    const completedTask = getInnerTextByValue("completed-task");
    const add = completedTask + 1;
    document.getElementById("completed-task").innerText = add;

    this.disabled = true;

    this.style.opacity = "0.2";

    const container = document.getElementById("activityContainer");
    const taskDiv = event.target.closest(".p-6");
    const taskTitle = taskDiv ? taskDiv.querySelector("h3").innerText : "Unknown Task";
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const div = document.createElement("div");
    div.innerHTML = `
    <p>You have completed <strong>${taskTitle}</strong> at <strong>${formattedTime}</strong></p>
`;
    container.appendChild(div);
})
document.getElementById("btn3").addEventListener("click", function () {
    alert("board updated successfully");
    const initial = getInnerTextByValue("task");
    const sum = initial - 1;
    document.getElementById("task").innerText = sum;

    const completedTask = getInnerTextByValue("completed-task");
    const add = completedTask + 1;
    document.getElementById("completed-task").innerText = add;

    this.disabled = true;

    this.style.opacity = "0.2";

    const container = document.getElementById("activityContainer");
    const taskDiv = event.target.closest(".p-6");
    const taskTitle = taskDiv ? taskDiv.querySelector("h3").innerText : "Unknown Task";
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const div = document.createElement("div");
    div.innerHTML = `
    <p>You have completed <strong>${taskTitle}</strong> at <strong>${formattedTime}</strong></p>
`;
    container.appendChild(div);
})
document.getElementById("btn4").addEventListener("click", function () {
    alert("board updated successfully");
    const initial = getInnerTextByValue("task");
    const sum = initial - 1;
    document.getElementById("task").innerText = sum;

    const completedTask = getInnerTextByValue("completed-task");
    const add = completedTask + 1;
    document.getElementById("completed-task").innerText = add;

    this.disabled = true;

    this.style.opacity = "0.2";

    const container = document.getElementById("activityContainer");
    const taskDiv = event.target.closest(".p-6");
    const taskTitle = taskDiv ? taskDiv.querySelector("h3").innerText : "Unknown Task";
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const div = document.createElement("div");
    div.innerHTML = `
    <p>You have completed <strong>${taskTitle}</strong> at <strong>${formattedTime}</strong></p>
`;
    container.appendChild(div);
})
document.getElementById("btn5").addEventListener("click", function () {
    alert("board updated successfully");
    const initial = getInnerTextByValue("task");
    const sum = initial - 1;
    document.getElementById("task").innerText = sum;

    const completedTask = getInnerTextByValue("completed-task");
    const add = completedTask + 1;
    document.getElementById("completed-task").innerText = add;

    this.disabled = true;

    this.style.opacity = "0.2";
    const container = document.getElementById("activityContainer");
    const taskDiv = event.target.closest(".p-6");
    const taskTitle = taskDiv ? taskDiv.querySelector("h3").innerText : "Unknown Task";
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const div = document.createElement("div");
    div.innerHTML = `
    <p>You have completed <strong>${taskTitle}</strong> at <strong>${formattedTime}</strong></p>
`;
    container.appendChild(div);
})
document.getElementById("btn6").addEventListener("click", function () {

    alert("board updated successfully");
    alert("Congrats you have completed All the Current Task");
    const initial = getInnerTextByValue("task");
    const sum = initial - 1;
    document.getElementById("task").innerText = sum;

    const completedTask = getInnerTextByValue("completed-task");
    const add = completedTask + 1;
    document.getElementById("completed-task").innerText = add;

    this.disabled = true;

    this.style.opacity = "0.2";
    const container = document.getElementById("activityContainer");
    const taskDiv = event.target.closest(".p-6");
    const taskTitle = taskDiv ? taskDiv.querySelector("h3").innerText : "Unknown Task";
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const div = document.createElement("div");
    div.innerHTML = `
    <p>You have completed <strong>${taskTitle}</strong> at <strong>${formattedTime}</strong></p>
`;
    container.appendChild(div);
})

const day = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerText = days[day.getDay()];

const month = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerText = months[month.getMonth()];

const date = new Date();
const dates = date.getDate();
document.getElementById("date").innerText = dates;

const year = new Date().getFullYear();
document.getElementById("year").innerText = year;

document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = './blog.html';
})

document.getElementById("clearHistoryBtn").addEventListener("click", function () {
    document.getElementById("activityContainer").innerText = "";
});


document.getElementById("bg-btn").addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
});

function rand() {
    return Math.floor(Math.random() * 256);
}



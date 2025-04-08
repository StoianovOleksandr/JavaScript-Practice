function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderCircles() {
    const container = document.querySelector(".circles-list");
    container.innerHTML = "";
    const colors = [
        "#FF5733", 
        "#33FF57", 
        "#5733FF", 
        "#FF33A1", 
        "#33FFF6", 
        "#33A1FF",
        "#A133FF", 
        "#FF5733", 
        "#33FF9A", 
        "#9A33FF", 
        "#FF9A33", 
        "#33A1A1", 
        "#A1A133",
        "#A1FF33", 
        "#5733A1", 
        "#FFA133", 
        "#33FFA1", 
        "#A133A1", 
        "#FF3333", 
        "#33FF33",
        "#3333FF", 
        "#FF33FF", 
        "#33FFFF", 
        "#F333FF", 
        "#33FF6F", 
        "#6FFF33", 
        "#FF6F33",
        "#33A16F", 
        "#A16FFF", 
        "#FF33A6", 
        "#33F6FF", 
        "#F6A133", 
        "#33FF99", 
        "#99FF33",
        "#FF9933", 
        "#33A199", 
        "#A19933", 
        "#9933FF", 
        "#FF3399", 
        "#3399FF", 
        "#F69933",
        "#33A166", 
        "#66A133", 
        "#FF66A1", 
        "#33A1FF", 
        "#A1F633", 
        "#F66633", 
        "#33FFA6"
    ];
    for (let i = 0; i < 100; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        const randomLeftOffset = getRandomInt(0, container.clientWidth);
        const randomTopOffset = getRandomInt(0, container.clientHeight);
        const randomColor = getRandomInt(0, 49);
        circle.style.left = `${randomLeftOffset}px`;
        circle.style.top = `${randomTopOffset}px`;
        circle.style.backgroundColor = colors[randomColor];
        container.appendChild(circle);
    }
}

document.querySelector(".btn").addEventListener("click", renderCircles);
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let viewStr;

    if (views < 1000) {
        viewStr = views; // Display the number as is for views less than 1000
    } else if (views < 1000000) {
        viewStr = (views / 1000).toFixed(1) + "K"; // Convert views to thousands and keep one decimal place
    } else {
        viewStr = (views / 1000000).toFixed(1) + "M"; // Convert views to millions and keep one decimal place
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="timeCapsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cName}. ${viewStr} views. ${monthsOld} ago</p>
            </div>  
        </div>`

        document.querySelector(".container").innerHTML += html;

        // if we dont do += then, it will replace the existing content inside it
        // document.querySelector(".container").innerHTML = html;
}

const title = prompt("Enter the title:")
const cName = prompt("Enter your channel's name:")
const views = parseFloat(prompt("Enter the number of views:"))
const monthsOld = prompt("How old is the video?")
const duration = prompt("Enter the duration of the video:")
const thumbnail = prompt("Insert the link of your thumbnail:")

createCard(title, cName, views, monthsOld, duration, thumbnail)
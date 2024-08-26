// when we will click on child that means the childcontainer will be also clicked and the container will be also clicked because its inside them
// suppose i live in WB, that means i live in India, then asia and then in the world

// this is known as event bubbling

// let child= document.querySelector(".child")

// child.addEventListener("click", ()=> {
//     alert("Child was clicked")
// })

// let childCont= document.querySelector(".childContainer")

// childCont.addEventListener("click", ()=> {
//     alert("Child Container was clicked")
// })

// let Cont= document.querySelector(".container")

// Cont.addEventListener("click", ()=> {
//     alert("Container was clicked")
// })


//to prevent event bubbling
let child= document.querySelector(".child")

child.addEventListener("click", (e)=> {
    // we use this to stop the propagation after this
    e.stopPropagation()
    alert("Child was clicked")
})

let childCont= document.querySelector(".childContainer")

childCont.addEventListener("click", ()=> {
    alert("Child Container was clicked")
})

let Cont= document.querySelector(".container")

Cont.addEventListener("click", ()=> {
    alert("Container was clicked")
})





// random color genrator. no need to look at this
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// setInterval
// if we want to do something which will keep on going and change something at regular intervals

// setInterval(() => {
//     document.querySelector(".child").style.backgroundColor= getRandomColor()
// }, 1000);
// interval time: 3000= 3sec


// to stop the setinterval we can use clearInterval
// let a = setInterval(() => {
//     document.querySelector(".child").style.backgroundColor= getRandomColor()
// }, 1000);

// console.log(a)

// only in browser
// clearInterval(1)





// setTimeout
// if we want to do something once, after a certain period of time or delay
setTimeout(() => {
    document.querySelector(".child").style.backgroundColor= getRandomColor()
}, 1000);

// similarly here also we can use clearTimeout to stop this
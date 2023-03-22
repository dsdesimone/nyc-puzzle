const pieces = document.querySelectorAll(".pieces")

pieces.forEach(piece => {
    piece.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando")
        piece.classList.add("dragging")
        event.dataTransfer.setData("id", piece.id)
    })
    piece.addEventListener("dragend", () => {
        piece.classList.remove("dragging")
    })
})

// const sites = document.querySelectorAll(".puzzle__site")

// sites.forEach(site => {
//     site.addEventListener("dragover", event => {
//         event.preventDefault()
//     })

//     site.addEventListener("drop", event => {
//         const id_site = event.dataTransfer.getData("id")
//         const site = document.getElementById(id_site)
//         console.log(site)
//     })
// })

const ph12 = document.querySelector(".ph12")

ph12.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph12.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph12"){
        console.log("correcto")
        ph12.classList.add("photo12", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*********/

const ph11 = document.querySelector(".ph11")

ph11.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph11.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph11"){
        console.log("correcto")
        ph11.classList.add("photo11", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*********/

const ph10 = document.querySelector(".ph10")

ph10.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph10.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph10"){
        console.log("correcto")
        ph10.classList.add("photo10", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*********/

const ph9 = document.querySelector(".ph9")

ph9.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph9.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph9"){
        console.log("correcto")
        ph9.classList.add("photo9", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*********/


const ph8 = document.querySelector(".ph8")

ph8.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph8.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph8"){
        console.log("correcto")
        ph8.classList.add("photo8", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*********/

const ph7 = document.querySelector(".ph7")

ph7.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph7.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph7"){
        console.log("correcto")
        ph7.classList.add("photo7", "photo")
        document.getElementById(id_photo).remove()
    }
})


/*********/

const ph6 = document.querySelector(".ph6")

ph6.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph6.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph6"){
        console.log("correcto")
        ph6.classList.add("photo6", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*********/

const ph5 = document.querySelector(".ph5")

ph5.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph5.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph5"){
        console.log("correcto")
        ph5.classList.add("photo5", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*************/

const ph4 = document.querySelector(".ph4")

ph4.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph4.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph4"){
        console.log("correcto")
        ph4.classList.add("photo4", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*************/

const ph3 = document.querySelector(".ph3")

ph3.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph3.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph3"){
        console.log("correcto")
        ph3.classList.add("photo3", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*************/

const ph2 = document.querySelector(".ph2")

ph2.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph2.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph2"){
        console.log("correcto")
        ph2.classList.add("photo2", "photo")
        document.getElementById(id_photo).remove()
    }
})

/*************/

const ph1 = document.querySelector(".ph1")

ph1.addEventListener("dragover", event => {
    event.preventDefault()
})
    
ph1.addEventListener("drop", event => {
    const id_photo = event.dataTransfer.getData("id")
    console.log(id_photo)
    
    if (id_photo === "ph1"){
        console.log("correcto")
        ph1.classList.add("photo1", "photo")
        document.getElementById(id_photo).remove()
    }
})


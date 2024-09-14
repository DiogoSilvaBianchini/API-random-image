const getImage = async () => {
    const request = await fetch("http://localhost:8084/")
    const urlImg = await request.json()
    return urlImg
}

const addImg = async () => {
    const container = document.querySelector("#container")
    const {urlImg} = await getImage()
    let elementImg = document.createElement("img")
    elementImg.src = urlImg
    container.appendChild(elementImg)
}

addImg()
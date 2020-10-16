// Disable map options
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false,
}

// Create map
const map = L.map('mapid', options).setView([-8.0467394,-34.9235161], 14);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

// Create and add marker
L
.marker([-8.0467394,-34.9235161], { icon })
.addTo(map)

/* Image gallery */

function selectImage(event) {
    const button = event.currentTarget
 
    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    /* Outra forma de escrever a função acima.

        buttons.forEach((button) => {
        button.classList.remove("active");
    });
    */

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    // adcionar a classe .active para este botão
    button.classList.add('active')
}
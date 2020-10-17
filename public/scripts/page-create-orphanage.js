// Create map
const map = L.map('mapid').setView([-8.0467394,-34.9235161], 14)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
})

let marker;

// Create and add marker
map.on('click', (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lng]').value = lng;


   // remove icon
   marker && map.removeLayer(marker);

   //add icon layer
   marker = L.marker([lat, lng], {icon}).addTo(map);
    
})
    
// Adding Photos
function addPhotoField(){
    // get #images photo container
    const container = document.querySelector('#images')
    // get the .new-image to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // doing the clonage of last image field
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verify if field is empty. If it's true, don't add a new one.
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // cleanup the field before add to the image container
    input.value = ""

    //add the clone to container
    container.appendChild(newFieldContainer)

}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()

}

// Select Yes or No button
function toggleSelect(event){
    // remove the .active class in both buttons
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    console.log(event.currentTarget)
    // add the .active class to clicked button
    //const button = event.currentTarget
    //button.classList.add('active')

    // update the hidden input with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}
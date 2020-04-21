
document.querySelector("#websiteName").textContent = "Hotel Finder"

document.querySelector("#slogan").textContent = "Find your perfect hotel!"



async function getHotelData(){
    try {
        const response = await fetch('hotel.json')
        return await response.json() //returns JSON object

    } catch(error) {
        console.error(error)
    }
}
let hotelData = {}
getHotelData().then(data => (hotelData = data))

//store in a variable document.querySelectorAll("a")
//use that variable to loop over each element and addEventListener to each one
//use a forEach loop
//let buttons = document.querySelectorAll("a")





document.querySelector("#mariott").addEventListener('click', hotelInfo)
document.querySelector("#sheraton").addEventListener('click', hotelInfo)
document.querySelector("#hilton").addEventListener('click', hotelInfo)


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    }) 
   
    console.log(hotelChoice)
document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
document.querySelector('#address').textContent = `${hotelChoice.address}`
document.querySelector('#rooms').textContent = ` ${hotelChoice.rooms}`
document.querySelector('#gym').textContent = ` ${hotelChoice.gym}`
document.querySelector('#type').textContent = ` ${hotelChoice.roomType}`
document.querySelector('#picture').src = `${hotelChoice.picture}`
}
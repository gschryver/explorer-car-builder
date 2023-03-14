import { getVehicles, setVehicles } from "./database.js"

const vehicles = getVehicles ()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "jewel") {
//             window.alert(`User chose style ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "vehicle") {
            setVehicles(parseInt(event.target.value))
        }
    }
)

export const VehicleTypes = () => {
    let html = "<label class='vehicles-inline'>"

    
    const listItems = vehicles.map(vehicle => {
        return `<li>
        <input type="radio" name="vehicle" value="${vehicle.id}" /> ${vehicle.style}</li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</label>"
    return html
}
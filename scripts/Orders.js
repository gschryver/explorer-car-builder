import { getOrders, getPaints, getWheels, getTechnologies, getInteriors, getVehicles } from "./database.js"

const paints = getPaints()
const wheels = getWheels()
const technologies = getTechnologies()
const interiors = getInteriors()
const vehicles = getVehicles()

const buildOrderListItem = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundVehicle = vehicles.find(
        (vehicle) => {
            return vehicle.id === order.vehicleId
        }
    )

    // <explorer-chapter> 
    let totalCost = 0
    if (foundPaint && foundWheel && foundTech && foundInterior && foundVehicle) {
        totalCost = (foundPaint.price + foundWheel.price + foundTech.price + foundInterior.price) * foundVehicle.price 
    } else { // thanks to joel for helping with this! 
        window.alert("Please make a selection from all available options") // alerts customer they haven't selected everything
        location.reload() // reloads the page so that they can make selections 
        return // stops execution 
    }
 
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    ${foundPaint.color} car with ${foundWheel.wheelStyle} wheels, ${foundInterior.seatType} interior, and the ${foundTech.package} for a total cost of ${costString}.
    </li>`
}

export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

import { getShippingShips } from "./database.js";

export const cargoShipList = () => {
    const cargoShip = getShippingShips()

    let cargoShipHTML = "<ul>"

    for (const ship of cargoShips) {
        cargoShipHTML += `<li>${ship.id} ${ship.name} ${ship.haulderId}</li>`
    }

    cargoShipHTML += `</ul>`

    return cargoShipHTML
}
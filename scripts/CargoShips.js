import { getShippingShips, getHaulingShips } from "./database.js";

const cargoShips = getShippingShips()
const haulingShips = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "cargoShip") {
            const haulerIdClicked = parseInt(itemClicked.dataset.haulerid)
            
            let haulingShip = { name: "Incorrect" }
            for (const hauler of haulingShips) {
                if (hauler.id === haulerIdClicked) {
                    haulingShip.name = hauler.name
                }
            }
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)

        }
    }
)
export const cargoShipList = () => {
    

    let cargoShipHTML = `<ul class="cargoships-list"><h3>Cargo Ships</h3>`
    
    cargoShips.sort(function (a, b) {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })
    for (const ship of cargoShips) {
        cargoShipHTML += `<li 
                            data-type="cargoShip" 
                            data-name="${ship.name}"
                            data-id="${ship.id}" 
                            data-haulerid="${ship.haulerId}"
                            > ${ship.name}
                         </li>`
    }

    cargoShipHTML += `</ul>`

    return cargoShipHTML
}
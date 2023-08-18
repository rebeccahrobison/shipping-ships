import { getHaulingShips, getShippingShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            let counter = 0
            const shippingShips = getShippingShips()
            for (const ship of shippingShips) {
                if (ship.id === parseInt(itemClicked.dataset.id)) {
                    counter++
                }
            }

            window.alert()
        }
    }
)


export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = `<ul class="haulers-list">`

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name} ${hauler.dockId}</li>`
    }

    haulersHTML += `</ul>`

    return haulersHTML
}
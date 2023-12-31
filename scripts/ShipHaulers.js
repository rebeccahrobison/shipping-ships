import { getHaulingShips, getShippingShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            let counter = 0
            const shippingShips = getShippingShips()
            console.log(itemClicked.dataset.id)
            for (const ship of shippingShips) {
                if (ship.haulerId === parseInt(itemClicked.dataset.id)) {
                    counter++
                }
            }

            window.alert(`This hauler is caryying ${counter} shipping ships`)
        }
    }
)


export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = `<ul class="haulers-list"><h3>Ship Haulers</h3>`

    haulers.sort(function (a, b) {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })

    for (const hauler of haulers) {
        haulersHTML += `<li 
                        data-type="hauler" 
                        data-id="${hauler.id}" 
                        data-dockId="${hauler.dockId}"
                        >${hauler.name}
                        </li>`
    }

    haulersHTML += `</ul>`

    return haulersHTML
}
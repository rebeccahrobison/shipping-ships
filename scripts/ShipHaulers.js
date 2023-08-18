import { getHaulingShips } from "./database.js";

export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li>${hauler.id} ${hauler.name} ${hauler.dockId}</li>`
    }

    haulersHTML += `</ul>`

    return haulersHTML
}
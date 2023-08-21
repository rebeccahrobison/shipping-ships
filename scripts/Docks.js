import { getDocks, getHaulingShips } from "./database.js";

const docks = getDocks()
const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        console.log(itemClicked.dataset.type)
        if (itemClicked.dataset.type === "dock") {
            const dockIdClicked = parseInt(itemClicked.dataset.id)
            console.log(dockIdClicked)
            let haulingShips = []
            let dockCounter = 0
            
            for (const hauler of haulers) {
                if (hauler.dockId === dockIdClicked){
                    haulingShips.push(hauler.name)
                    dockCounter++
                }
            }
            
            if (dockCounter === 0) {
                window.alert(`The ${itemClicked.dataset.name} is currently unloading nothing`)
            } else if (dockCounter === 1) {
                window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${haulingShips[0]}`)
            } else if (dockCounter > 1) {
                let alertText = `The ${itemClicked.dataset.name} dock is currently unloading `
                
                let i =0
                while (i < haulingShips.length - 1) {
                    alertText += `${haulingShips[i]}, `
                    i++
                }
                alertText += `${haulingShips[i]}`
                window.alert(alertText)      
            }
                    
                
        }     
    }
)

export const DockList = () => {


    let docksHTML = `<ul class='docks-list'>`

    for (const dock of docks) {
        docksHTML += `<li 
        data-type="dock"
        data-name="${dock.location}"
        data-id="${dock.id}" 
        data-volume="${dock.volume}"
        >${dock.location} 
        </li>`
    }

    docksHTML += `</ul>`

    return docksHTML
}
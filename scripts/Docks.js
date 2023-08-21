import { getDocks } from "./database.js";

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = `<ul class='docks-list'>`

    for (const dock of docks) {
        docksHTML += `<li data-id="${dock.id}" data-volume="${dock.volume}">${dock.location} </li>`
    }

    docksHTML += `</ul>`

    return docksHTML
}
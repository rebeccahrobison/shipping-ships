import { DockList } from "./Docks.js";
import { cargoShipList } from "./CargoShips.js";
import { HaulerList } from "./ShipHaulers.js";

const htmlDockList = DockList()
const htmlCargoShipList = cargoShipList()
const htmlHaulerList = HaulerList()

let parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = htmlDockList
parentHTMLElement.innerHTML += htmlCargoShipList
parentHTMLElement.innerHTML += htmlHaulerList

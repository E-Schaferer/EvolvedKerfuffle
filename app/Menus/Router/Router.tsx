import { useSelector } from "react-redux"
import type { rootState } from "~/ReduxStore/storeTypes"
import { MainMenu } from "../MainMenu"
import { MissionPlayScreen } from "~/InGame/MissionPlayScreen/MissionPlayScreen"
import { useMemo } from "react"

export const MenuRouter = () => {
    const currentMenuItem = useSelector((state: rootState) => state.menus.currentMenu)

    const menuItemToReturn = useMemo(() => {
        switch(currentMenuItem) {
            case "mission":
                return <MissionPlayScreen />
            case "mainMenu":
            default:
                return <MainMenu />
        }
    }, [currentMenuItem])

    return menuItemToReturn
}
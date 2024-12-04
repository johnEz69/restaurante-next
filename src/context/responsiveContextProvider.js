import { createContext } from "react"
import { useBreakpoint } from "@/hooks/useResponsive"

export const responsiveContext = createContext()

const responsiveContextProvider = ({children}) => {
    const width = useBreakpoint()

  return (
    <responsiveContext.Provider value= {width}>
        {children}
    </responsiveContext.Provider>
  )
}

export default responsiveContextProvider

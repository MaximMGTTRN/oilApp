import { AboutUs } from "./AboutUs/AboutUs"
import Home from "./Home"
import { HomeCatalog } from "./HomeCatalog/HomeCatalog"

export const HomePage = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <HomeCatalog color='#F7F7F7' />
      <HomeCatalog />
      <HomeCatalog color='#F7F7F7' />
    </>
  )
}
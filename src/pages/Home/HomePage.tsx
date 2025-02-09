import { AboutUs } from "./AboutUs/AboutUs"
import Home from "./Home"

export const HomePage = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <AboutUs color='#F7F7F7' />
      <AboutUs />
      <AboutUs color='#F7F7F7' />
    </>
  )
}
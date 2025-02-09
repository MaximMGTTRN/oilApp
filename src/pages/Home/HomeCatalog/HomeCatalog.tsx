import { HomePart } from "../HomePart/HomePart"
import "./HomeCatalog.css"
export const HomeCatalog = ({ color = "#F5F5F5" }) => {
  return (
    <HomePart backgroundColor={color}>
      <div className="home-catalog">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, erat et fringilla vehicula, nisl nunc tincidunt nunc,
          vitae maximus nunc dui nec nibh. Nullam nec justo ut enim tempor
          ultricies. Nam ac mi nec nunc bibendum blandit. Nulla facilisi. Ut
          ullamcorper, metus nec lacinia fermentum, nunc nunc dictum libero, nec
          lacinia nunc nunc nec eros. Donec nec ligula at dolor tincidunt
          fermentum. Sed auctor, orci nec tincidunt ultrices, nunc nunc
          scelerisque purus, nec facilisis nunc nunc nec eros. Donec nec ligula
          at dolor tincidunt fermentum. Sed auctor, orci nec tincidunt ultrices,
          nunc nunc scelerisque purus, nec facilisis nunc nunc nec eros.
        </p>
      </div>
    </HomePart>
  )
}
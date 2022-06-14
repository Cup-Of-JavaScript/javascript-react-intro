import './Menu.scss'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'

export const Menu = () => {
  return (
    <div className="Menulist">
      <h1 className="Menu">Menu</h1>
      <Food />
      <Drink />
      <Dessert />
    </div>
  )
}
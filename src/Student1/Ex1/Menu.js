import './Menu.scss'

export const Menu = () => {
    return (
      <div className="Menulist">
        <h1 className="Menu">Menu</h1>
          <div className='Food'>
            <h2 className='Food-t'>Food</h2>
            <hr/>
            <ul>
            <li>Hamburger ... $1.00</li>
            <li>Cheeseburger ... $1.00</li>
            <li> Hot Dog ... $1.00</li>
            <li>Fries ... $1.00</li>
            </ul>
          </div>
          <div className='Drink'>
            <h2 className='Drink-t'>Drink</h2>
            <hr/>
            <ul>
            <li>Coffee ... $1.00</li>
            <li>Tea ... $1.00</li>
            <li> Milk ... $1.00</li>
            <li>Coke ... $1.00</li>
            </ul>
          </div>
          <div className='Dessert'>
            <h2 className='Dessert-t'>Dessert</h2>
            <hr/>
            <ul>
            <li>Chocolate Pie ... $1.00</li>
            <li>Apple Pie ... $1.00</li>
            <li> Cannoli ... $1.00</li>
            </ul>
          </div>
      </div>
    )
  }
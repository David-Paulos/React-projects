import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/layout/Main.js'
import Home from './Components/Home/Home'
import CoffeeMachines from './Components/Departments/CoffeeMachines/CoffeeMachines'
import Headphones from './Components/Departments/Headphones/Headphones'
import Laptops from './Components/Departments/Laptops/Laptops'
import MobilePhones from './Components/Departments/MobilePhones/MobilePhones'
import TVs from './Components/Departments/TVs/TVs'
import VacuumCleners from './Components/Departments/VacuumCleaners/VacuumCleaners'
import WashingMachines from './Components/Departments/WashingMachines/WashingMachines'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.js'

// ========== DATABASE =========
import CoffeeMachinesData from './ProductsData/CoffeeMachinesData'
import HeadphonesData from './ProductsData/HeadphonesData'
import LaptopsData from './ProductsData/LaptopsData'
import MobilesData from './ProductsData/MobilesData'
import TVsData from './ProductsData/TVsData'
import VacuumData from './ProductsData/VacuumData'
import WashingData from './ProductsData/WashingData'


export default function App() {
  const {coffeeProducts} = CoffeeMachinesData
  const {headphonesProducts} = HeadphonesData
  const {laptopProducts} = LaptopsData
  const {mobilesProducts} = MobilesData
  const {tvsProducts} = TVsData
  const {vacuumProducts} = VacuumData
  const {washingProducts} = WashingData

  const [cartItems, setCartItems] = React.useState(() => JSON.parse(localStorage.getItem('cartItems')) || [])
  
  React.useEffect(()=>{
    const cartItemsString = JSON.stringify(cartItems)
    localStorage.setItem('cartItems', cartItemsString)
}, [cartItems])

  function onAdd(product){
    const exist = cartItems.find(x => x.id === product.id)
    if(exist){
      setCartItems(prevState => prevState.map(x => x.id === product.id ? {...exist, qty: exist.qty +1}: x ))
    } else {
      setCartItems(prevState => {
        return [...prevState, 
          {...product, qty: 1 }
        ]})
    }
  }

  function onRemove(product){
    const exist = cartItems.find(x => x.id === product.id)
    if(exist.qty === 1){
      setCartItems(prevState => prevState.filter(x => x.id !== product.id))
    } else {
      setCartItems(prevState => {
         return prevState.map(x => {
          return x.id === product.id ? {...exist, qty: exist.qty -1} : x
        })
    })
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main countCartItems={cartItems.length}/>}>
            <Route index element={<Home />} />
            <Route path="Shopping-Cart" element={<ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
            <Route path="Coffee-Machines" element={<CoffeeMachines coffeeProducts={coffeeProducts} onAdd={onAdd}/>} />
            <Route path="Headphones" element={<Headphones headphonesProducts={headphonesProducts} onAdd={onAdd}/>} />
            <Route path="Laptops" element={<Laptops laptopProducts={laptopProducts} onAdd={onAdd}/>} />
            <Route path="Mobile-Phones" element={<MobilePhones mobilesProducts={mobilesProducts} onAdd={onAdd}/>} />
            <Route path="TVs" element={<TVs tvsProducts={tvsProducts} onAdd={onAdd}/>} />
            <Route path="Vacuum-Cleaners" element={<VacuumCleners vacuumProducts={vacuumProducts} onAdd={onAdd}/>} />
            <Route path="Washing-Machines" element={<WashingMachines washingProducts={washingProducts} onAdd={onAdd}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


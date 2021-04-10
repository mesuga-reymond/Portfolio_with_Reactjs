/* eslint-disable no-unused-vars */
import React from 'react'
import Categories from '../Components/Categories'
import Title from '../Components/Title'
import portfolios from "../Components/allportfolios"
import {useState} from "react"
import MenuItems from '../Components/MenuItems'

function PortfoliosPage() {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={"Portfolios"} span={"Portfolios"}/>
            </div>
            <div className="portfolios">
                <Categories />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage

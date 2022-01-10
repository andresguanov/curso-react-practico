import { Link } from 'react-router-dom'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from "@icons/icon_shopping_cart.svg"


interface HeaderItem {
    title: string
    url: string
}

const HeaderItems: HeaderItem[] = [
    { title: "All", url: "/" },
    { title: "Clothes", url: "/" },
    { title: "Electronics", url: "/" },
    { title: "Furnitures", url: "/" },
    { title: "Toys", url: "/" },
    { title: "Others", url: "/" },
]

export const Header = (): JSX.Element => {
    return (
        <nav className="flex justify-between py-0 px-6 border-b border-solid border-gray-400">
            <img src={menu} className="sm:hidden" alt="menu" />
            <div className="flex">
                <img src={logo} className="w-24" alt="logo" />
                <ul className="hidden p-0 m-0 sm:flex sm:items-center h-16 ml-3">

                    {HeaderItems.map(({ title, url }) => (
                        <li key={title}>
                            <Link
                                className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400 hover:text-green-400"
                                to={url}
                            >{title}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
            <div>
                <ul className="p-0 m-0 flex items-center h-16">
                    <li className="hidden md:block text-gray-400 text-sm mr-3">platzi@example.com</li>
                    <li className="relative">
                        <img src={shoppingCart} alt="shopping cart" />
                        <div className="w-4 w h-4 bg-green-400 rounded-full text-sm font-bold absolute -top-1 -right-1 flex justify-center items-center">2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
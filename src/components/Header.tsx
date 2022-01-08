export const Header = (): JSX.Element => {
    return (
        <nav className="flex justify-between py-0 px-6 border-b border-solid border-gray-400 ">
            <img src="./icons/icon_menu.svg" alt="menu" className="sm:hidden" />
            <div className="flex">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="w-24" />
                <ul className="hidden p-0 m-0 sm:flex sm:items-center h-16 ml-3">
                    <li>
                        <a className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400" href="/">All</a>
                    </li>
                    <li>
                        <a className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400" href="/">Clothes</a>
                    </li>
                    <li>
                        <a className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400" href="/">Electronics</a>
                    </li>
                    <li>
                        <a className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400" href="/">Furnitures</a>
                    </li>
                    <li>
                        <a className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400" href="/">Toys</a>
                    </li>
                    <li>
                        <a className="text-gray-400 border border-solid border-white p-2 rounded-lg hover:border-green-400" href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="hidden p-0 m-0 sm:flex sm:items-center h-16">
                    <li className="text-gray-400 text-sm mr-3">platzi@example.com</li>
                    <li className="relative">
                        <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
                        <div className="w-4 h-4 bg-green-400 rounded-full text-sm font-bold absolute -top-1 -right-1 flex justify-center items-center">2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
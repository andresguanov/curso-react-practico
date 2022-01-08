export const MobileMenu = (): JSX.Element => {
    return (
        <div className="p-6">
            <ul className="p-0 mt-6 mb-0 mx-0 border-b border-solid border-gray-400">
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">CATEGORIES</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">All</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">Clothes</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">Electronics</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">Furnitures</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">Toys</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">Other</a>
                </li>
            </ul>
            <ul className="p-0 mt-6 mb-0 mx-0">
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">My orders</a>
                </li>
                <li className="mb-6">
                    <a className="text-black font-bold" href="/">My account</a>
                </li>
            </ul>
            <ul className="p-0 mt-6 mb-0 mx-0">
                <li className="mb-6">
                    <a className="text-black text-sm font-light" href="/" >
                        platzi@example.com
                    </a>
                </li>
                <li className="mb-6">
                    <a className="font-bold text-sm text-green-400" href="/" >
                        Sign out
                    </a>
                </li>
            </ul>
        </div>

    )
}
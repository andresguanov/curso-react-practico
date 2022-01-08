export const DesktopMenu = (): JSX.Element => {
    return (
        <div className="w-36 h-auto border-solid border border-gray-400 rounded-md px-5 pt-5 pb-0">
            <ul className="p-0 m-0">
                <li className="text-right font-bold">
                    <a className="text-black mb-5 inline-block" href="/">
                        My orders
                    </a>
                </li>
                <li className="text-right font-bold">
                    <a className="text-black mb-5 inline-block" href="/">My account</a>
                </li>
                <li className="text-right pt-5 border-t border-solid border-gray-400">
                    <a className="text-green-400 text-sm mb-5 inline-block" href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}
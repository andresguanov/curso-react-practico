import { ShoppingItem } from '@components/ShoppingItem'
import flechita from '@icons/icon_close.png'

export const ProductsContainer = (): JSX.Element => {
    return (
        <aside className="w-full sm:w-96 p-6 absolute right-0">
            <div className="flex">
                <img className="rotate-180 mr-3.5" src={flechita} alt="arrow" />
                <p className="text-lg font-bold">My order</p>
            </div>
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />


            <div className="grid grid-cols-2 gap-4 items-center bg-gray-50 mb-6 rounded-lg py-4 px-6">
                <p className='flex flex-col'>
                    <span className='text-base font-bold'>Total</span>
                </p>
                <p className='text-right font-bold'>$560.00</p>
            </div>
            <button className="bg-green-400 rounded-lg border-0 text-white w-full h-12 cursor-pointer text-base font-bold">Checkout</button>
        </aside>
    )
}
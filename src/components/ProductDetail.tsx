import addToCart from '@icons/bt_add_to_cart.svg'
import close from '@icons/icon_close.png'

export const ProductDetail = (): JSX.Element => {
    return (
        <aside className="w-full sm:w-96 pb-6 absolute right-0">
            <div className="bg-white grid place-content-center w-7 h-7 absolute top-6 left-6 z-10 rounded-full cursor-pointer">
                <img className='w-3 h-3' src={close} alt="close" />
            </div>
            <img
                className="w-full h-96 object-cover rounded-b-3xl "
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
            />
            <div className="m-6 mb-0">
                <p className="font-bold text-base mt-0 mb-1">$35,00</p>
                <p className="text-gray-400 mt-0 mb-9">Bike</p>
                <p className="text-gray-400 text-sm mt-0 mb-9">
                    With its practical position, this bike also fulfills a decorative
                    function, add your hall or workspace.
                </p>
                <button className="bg-green-400 rounded-lg border-0 text-white w-full cursor-pointer text-base font-bold h-12 flex items-center justify-center">
                    <img src={addToCart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </aside>
    )
}
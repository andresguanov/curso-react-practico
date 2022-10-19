import addToCart from '@icons/bt_add_to_cart.svg'

export const ProductCard = (): JSX.Element => {
    return (
        <div className="w-36 sm:w-60">
            <img
                className="w-36 h-36  sm:w-60 sm:h-60 rounded-3xl object-cover"
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
            <div className="flex justify-between items-center mt-3">
                <div>
                    <p className="font-bold text-base mt-0 mb-1">
                        $120,00
                    </p>
                    <p className="text-sm my-0 text-gray-400">
                        Bike
                    </p>
                </div>
                <figure className="m-0">
                    <img className="w-9 h-9 border-red-700 cursor-pointer" src={addToCart} alt="" />
                </figure>
            </div>
        </div>
    )
}
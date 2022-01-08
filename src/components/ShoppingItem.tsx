export const ShoppingItem = (): JSX.Element => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-6 items-center">
            <figure className="m-0">
                <img
                    className="w-16 h-16 rounded-2xl object-cover"
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="bike"
                />
            </figure>
            <p className="col-start-2 col-end-4 text-gray-400">Bike</p>
            <p className=" text-base font-bold">$30,00</p>
        </div>
    )
}
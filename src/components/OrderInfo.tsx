export const OrderInfo = (): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-4 items-center bg-gray-50 mb-6 rounded-lg py-4 px-6">
            <p className="flex flex-col">
                <span className="text-base font-bold">03.25.21</span>
                <span className="text-sm text-gray-400">6 articles</span>
            </p>
            <p className="text-right font-bold">$560.00</p>
        </div>
    )
}
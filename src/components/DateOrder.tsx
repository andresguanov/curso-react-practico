import flechita from '@icons/flechita.svg'

export const DateOrder = (): JSX.Element => {
    return (
        <div className="grid grid-cols-3 gap-4 items-center mb-3">
            <p className="flex flex-col">
                <span className="text-base font-bold">03.25.21</span>
                <span className="text-sm text-gray-400">6 articles</span>
            </p>
            <p className="text-right font-bold">$560.00</p>
            <img src={flechita} alt="arrow" />
        </div>
    )
}
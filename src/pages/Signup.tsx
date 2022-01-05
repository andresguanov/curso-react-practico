
export const Signup = (): JSX.Element => {
    return (
        <div className="tracking-wide w-full h-screen grid place-items-center">
            <div className="grid  w-80 ">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="mb-12 justify-self-center sm:hidden w-36" />
                <h1 className="text-lg font-bold mb-3 text-center">Create a new password</h1>
                <p className="text-gray-500 text-base font-light mt-0 mb-8 text-center">
                    Enter a new password for your account
                </p>
                <form action="/" className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-bold mb-1">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="bg-gray-50 border-0 h-7 mb-3 p-1.5 rounded-lg text-base"
                    />
                    <label htmlFor="new-password" className="text-sm font-bold mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className="bg-gray-50 border-0 rounded-lg h-7 text-base p-1.5 mb-3"
                    />
                    <input
                        type="submit"
                        defaultValue="Confirm"
                        className="bg-green-400 rounded-lg border-0 text-white w-full cursor-pointer text-base font-bold h-12 mt-3.5 mb-7"
                    />
                </form>
            </div>
        </div>

    )
}

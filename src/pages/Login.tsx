export const Login = (): JSX.Element => {
    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="grid w-72">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="w-36 mb-12 justify-self-center sm:hidden" />
                <form action="/" className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-bold mb-1">
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="platzi@example.cm"
                        className="bg-gray-50 border-hidden rounded-lg h-9 p-1.5 mb-5"
                    />
                    <label htmlFor="password" className="text-sm font-bold mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="bg-gray-50 border-hidden rounded-lg h-9 p-1.5 mb-5"
                    />
                    <input
                        type="submit"
                        value="Log in"
                        className="bg-green-400 rounded-lg border-hidden text-white w-full cursor-pointer text-base font-bold h-12 mt-3.5 mb-7"
                    />
                    <a href="/" className="text-green-400 text-sm text-center mb-12">Forgot my password</a>
                </form>
                <button className="bg-white rounded-lg border border-green-400 text-green-400 w-full cursor-pointer text-base font-bold h-12 border-solid signup-button">Sign up</button>
            </div>
        </div>
    )
}
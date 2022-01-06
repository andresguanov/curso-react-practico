export const Signup = (): JSX.Element => {
    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="grid w-72 ">
                <h1 className="text-lg mb-9 text-left font-bold">My account</h1>
                <form action="/" className="flex flex-col ">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-bold mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Teff"
                            className="bg-gray-50 border-hidden rounded-lg h-8 text-base p-1.5 mb-6"
                        />
                        <label htmlFor="email" className="text-sm font-bold mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="platzi@example.com"
                            className="bg-gray-50 border-hidden rounded-lg h-7 text-base p-1.5 mb-5"
                        />
                        <label htmlFor="password" className="text-sm font-bold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*********"
                            className="bg-gray-50 border-hidden rounded-lg h-7 text-base p-1.5 mb-5"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Create"
                        className="bg-green-400 border-hidden rounded-lg text-white w-full cursor-pointer text-base font-bold h-12 mt-3.5 mb-7"
                    />
                </form>
            </div>
        </div>
    )
}
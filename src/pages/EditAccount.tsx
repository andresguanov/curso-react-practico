export const EditAccount = (): JSX.Element => {
    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="grid w-72">
                <h1 className="text-lg mb-9 font-bold">My account</h1>
                <form action="/" className="flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-bold mb-1">
                            Name
                        </label>
                        <p className="text-gray-400 text-base mt-2 mb-8">Camila Yokoo</p>
                        <label htmlFor="email" className="text-sm font-bold mb-1">
                            Email
                        </label>
                        <p className="text-gray-400 text-base mt-2 mb-8">camilayokoo@gmail.com</p>
                        <label htmlFor="password" className="text-sm font-bold mb-1">
                            Password
                        </label>
                        <p className="text-gray-400 text-base mt-2 mb-8">*********</p>
                    </div>
                    <input
                        type="submit"
                        value="Edit"
                        className="bg-white rounded-lg border-green-400 border-solid border text-green-400 w-full cursor-pointer text-base font-bold h-12 mt-3.5 mb-8"
                    />
                </form>
            </div>
        </div>
    )
}
export const EmailSent = (): JSX.Element => {
    return (
        <div className="tracking-wide w-full h-screen grid place-items-center">
            <div className="grid w-72 justify-items-center ">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="w-36 mb-12 justify-self-center sm:hidden" />
                <h1 className="text-lg mb-3 text-center font-bold">Email has been sent!</h1>
                <p className="text-gray-500 text-base font-light mt-0 mb-8 text-center">
                    Please check your inbox for instructions on how to reset the password
                </p>
                <div className="w-32 h-32 rounded-full bg-gray-50 flex justify-center items-center mb-6">
                    <img src="./icons/email.svg" alt="email" className="w-20" />
                </div>
                <button className="bg-green-400 rounded-lg border-hidden text-white w-full cursor-pointer text-base font-bold h-12 mt-3 mb-7">Login</button>
                <p className="text-sm">
                    <span className="text-gray-500">Didn't receive the email?</span>
                    <a href="/" className="ml-1 text-green-400">Resend</a>
                </p>
            </div>
        </div>
    )
}
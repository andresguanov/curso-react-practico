import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NewPassword } from '../pages/NewPassword'
import { Signup } from '../pages/Signup'
import { EditAccount } from '../pages/EditAccount';
import { NotFound } from '../pages/NotFound'
import { EmailSent } from '../pages/EmailSent'


function App(): JSX.Element {

  return (
    <div className="App font-san">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* Password Recovery */}
            <Route path="/email-sent" element={<EmailSent />} />
            <Route path="/new-password" element={<NewPassword />} />
            {/* MyAccount */}
            <Route path="/edit-account" element={<EditAccount />} />
            <Route path="/signup" element={<Signup />} /> {/*Create Account */}
            {/* Checkout */}
            {/* Orders */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>

    </div>
  )
}

export default App

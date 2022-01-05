import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'

import { NotFound } from '../pages/NotFound'
import { EmailSent } from '../pages/EmailSent'

function App(): JSX.Element {

  return (
    <div className="App font-san">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Signup />} />

            <Route path="/email-sent" element={<EmailSent />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>

    </div>
  )
}

export default App

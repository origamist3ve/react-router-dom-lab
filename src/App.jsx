// src/App.jsx
import {useState, useEffect} from 'react'
import {Route, Routes} from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx"
import MailboxList from "./components/MailboxList/MailboxesList.jsx"
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx"
import "./App.css"


const App = () => {


    const initialState = {
        boxSize: "",
        boxOwner: "",
    }

    const [formData, setFormData] = useState(initialState);

    const [mailboxes, setMailboxes] = useState([
        {
            id: 1,
            boxOwner: "Alex"
        }
    ])


    const addBox =(e) => {
        e.preventDefault()
        const id = mailboxes[mailboxes.length - 1].id + 1
        setMailboxes([...mailboxes])

    }


    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<main><h1>Post Office</h1></main>} />
                <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
                <Route path="/new-mailbox" element={<MailboxForm />}/>
                <Route path="/mailboxes/:mailboxId" element={<MailboxDetails setMailboxes={setMailboxes} mailboxes={mailboxes} />}/>
            </Routes>
        </>
    )
};

export default App;

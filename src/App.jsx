// src/App.jsx
import {useState, useEffect, } from 'react'
import {useNavigate} from "react-router";
import {Route, Routes} from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx"
import MailboxList from "./components/MailboxList/MailboxesList.jsx"
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx"
import "./App.css"


const App = () => {
    const navigate = useNavigate();

    const initialState = {
        _id: null,
        boxSize: "",
        boxOwner: "",
    }

    const [formData, setFormData] = useState(initialState);

    const [mailboxes, setMailboxes] = useState([
        {
            _id: 1,
            boxSize: "Small",
            boxOwner: "Alex",
        }
    ])


    const addBox =(e) => {
        e.preventDefault()
        const id = mailboxes[mailboxes.length - 1]._id + 1
        setMailboxes([...mailboxes, {...formData, _id:id}])
        setFormData(initialState)
        navigate("/mailboxes")
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };


    return (
        <>
            <NavBar />
            <Routes >
                <Route path="/" element={<main><h1>Post Office</h1></main>} />
                <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
                <Route path="/new-mailbox" element={<MailboxForm handleChange={handleChange} addBox={addBox} formData={formData} setFormData={setFormData} />}/>
                <Route path="/mailboxes/:mailboxId" element={<MailboxDetails setMailboxes={setMailboxes} mailboxes={mailboxes} />}/>
            </Routes>
        </>
    )
};

export default App;

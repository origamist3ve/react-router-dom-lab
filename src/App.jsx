// src/App.jsx
import {useState, useEffect, } from 'react'
import {useNavigate} from "react-router";
import {Route, Routes} from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx"
import MailboxList from "./components/MailboxList/MailboxesList.jsx"
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx"
import LetterForm from "./components/LetterForm/LetterForm.jsx"
import "./App.css"


const App = () => {
    const navigate = useNavigate();

    const initialStateBox = {
        _id: null,
        boxSize: "",
        boxOwner: "",
    }

    const initialStateLetter = {
        mailboxId: null,
        recipient: "",
        message: "",
    }


    const [formDataBox, setFormDataBox] = useState(initialStateBox);
    const [formDataLetter, setFormDataLetter] = useState(initialStateLetter);

    const [mailboxes, setMailboxes] = useState([
        {
            _id: 1,
            boxSize: "Small",
            boxOwner: "Alex",
        }
    ])

    const [letters, setLetters] = useState([
        {
            mailboxId: 1,
            recipient: 'Johnny',
            message: 'Lorem Ipsum',
        }

    ])


    const addBox =(e) => {
        e.preventDefault()
        const id = mailboxes[mailboxes.length - 1]._id + 1
        setMailboxes([...mailboxes, {...formDataBox, _id:id}])
        setFormDataBox(initialStateBox)
        navigate("/mailboxes")
    }

    const addLetter =(e) => {
        e.preventDefault()
        const id = letters[letters.length - 1].mailboxId + 1
        setLetters([...letters, {...formDataLetter, mailboxId:id}])
        setFormDataLetter(initialStateLetter)
        navigate("/mailboxes")
    }

    const handleChangeBox = ({ target }) => {
        setFormDataBox({ ...formDataBox, [target.name]: target.value });
    };

    const handleChangeLetter = ({ target }) => {
        setFormDataLetter({ ...formDataLetter, [target.name]: target.value });
    };


    return (
        <div>
            <NavBar />
            <Routes >
                <Route path="/" element={<main><h1>Post Office</h1></main>} />
                <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
                <Route path="/new-mailbox" element={<MailboxForm handleChangeBox={handleChangeBox} addBox={addBox} formDataBox={formDataBox} setFormDataBox={setFormDataBox} />}/>
                <Route path="/mailboxes/:mailboxId" element={<MailboxDetails setMailboxes={setMailboxes} mailboxes={mailboxes} letters={letters} setLetters={setLetters} />}/>
                <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} handleChangeLetter={handleChangeLetter} formDataLetter={formDataLetter} setFormDataLetter = {setFormDataLetter}  />}/>

            </Routes>
        </div>
    )
};

export default App;

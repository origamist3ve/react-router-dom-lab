import {useState, useEffect} from 'react'
import {useParams,useNavigate} from "react-router";


const MailboxDetails = (props) => {

    const navigate = useNavigate();
    const {mailboxId} = useParams();
    const [mailboxes, setMailboxes] = useState({});
    const [letters, setLetters] = useState({});

    useEffect(() => {
        const selectedBox = props.mailboxes.filter((mailbox) => {
            return mailbox._id === Number(mailboxId);
        })
        setMailboxes(selectedBox[0]);

        const selectedLetters = props.letters.filter((letter) => (
            letter.mailboxId === Number(mailboxId)
        ));
        setLetters(selectedLetters[0]);
    }, [])

    return (
        <>
            {mailboxes ? (

            <dl>
                <h1>Mailbox {mailboxes._id}</h1>
                <h2>Details</h2>
                <dt>boxholder: {mailboxes.boxOwner}</dt>
                <dd></dd>
                <dt>Box Size: {mailboxes.boxSize}</dt>
                <dd></dd>
            </dl>
                ): (
                    <h2> Mailbox Not Found!</h2>
            )}
            {letters ? (
                <dl>
                    <h1>Letters</h1>
                    <dt>dear {letters.recipient}</dt>
                    <br/>
                    <dt>{letters.message}</dt>
                    <dd></dd>
                </dl>
            ):(
                <p>No letters</p>
            )}

        </>
    )
};


export default MailboxDetails
import {useState, useEffect} from 'react'
import {useParams,useNavigate} from "react-router";


const MailboxDetails = (props) => {

    const navigate = useNavigate();
    const {mailboxId} = useParams();
    const [mailboxes, setMailboxes] = useState({});

    useEffect(() => {
        const selectedBox = props.mailboxes.filter((mailbox) => {
            return mailbox._id === Number(mailboxId);
        })
        setMailboxes(selectedBox[0]);
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

        </>
    )
};


export default MailboxDetails
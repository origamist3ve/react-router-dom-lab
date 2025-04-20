import {Link} from "react-router";


const MailboxesList = (props) => (
    <>
        <h1> MailBox list</h1>
        <ul className="mail-box">
            {props.mailboxes.map(mailbox => (
                <li key={mailbox._id}>
                    <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                </li>
            ))}
        </ul>
    </>
)

export default MailboxesList
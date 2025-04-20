


const MailboxesList = (props) => (
    <>
        <h1> Mail Box list</h1>
        <ul>
            {props.mailboxes.map(mailbox => (
                <li key={mailbox.id}>
                    {mailbox.boxOwner}
                </li>
            ))}
        </ul>
    </>
)

export default MailboxesList
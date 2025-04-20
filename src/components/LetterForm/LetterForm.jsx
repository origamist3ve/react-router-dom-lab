

const LetterForm = (props) => {
    return (
        <main>
            <h1> New Letter</h1>
            <form onSubmit={props.addLetter}>
                <label htmlFor="name">Select a Mailbox: </label>
                <select id="mailbox"
                        name="mailbox"
                        value={props.mailboxId}
                        onChange={props.handleChangeLetter}>
                    {props.mailboxes.map(mailbox => (
                        <option key={mailbox._id} value="mailbox._id">Mailbox {mailbox._id}</option>
                    ))}
                </select>
                <label htmlFor = "name">Recepient: </label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={props.formDataLetter.recipient}
                    onChange={props.handleChangeLetter}
                />
                <label htmlFor = "name">message: </label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={props.formDataLetter.message}
                    onChange={props.handleChangeLetter}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )

}

export default LetterForm
import {useState} from "react";
import {useNavigate} from "react-router";



const MailboxForm =(props) => {
// How to import the submit state from APP again?
    return (
        <main>
            <h2>New Mailbox </h2>
            <form onSubmit={props.addBox}>
                <label htmlFor = "name">Enter a Boxholder: </label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={props.formDataBox.boxOwner}
                    onChange={props.handleChangeBox}
                />
                <label htmlFor="name">Select a Mailbox: </label>
                <select id="boxSize"
                        name="boxSize"
                        value={props.formDataBox.boxSize}
                        onChange={props.handleChangeBox}>
                    <option value="">Please choose an option</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>

    )

}


export default MailboxForm
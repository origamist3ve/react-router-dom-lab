import {useState, useEffect} from 'react'
import {useParams,useNavigate} from "react-router";


const MailboxDetails = (props) => {

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const selectedBox = props.mailboxes.filter((mailbox) => {
            return mailbox.id === Number(id);
        })
    }, [])

    return (
        <>

        </>
    )
};


export default MailboxDetails
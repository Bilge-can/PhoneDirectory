import React ,{useState, useEffect} from 'react';
import List from './list';
import Form from "./form";

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
    return(
        <div>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>

    )
}
export default Contacts;
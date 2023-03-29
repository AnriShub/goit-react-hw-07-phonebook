import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useFetchContactsQuery, useDeleteContactMutation } from "redux/api";
import { Oval } from 'react-loader-spinner';

export const ContactList = () => {
    const { data: contacts, isFetching } = useFetchContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    return (<div className={css.wraperContactList}>
        <ul className={css.contactList}>
            {isFetching ? <Oval
                height="40"
                width="40"
                radius="9"
                color="#000000"
                ariaLabel="three-dots-loading"
                visible={true}
            /> : getVisibleContacts().map((contact, index) => (
                <li key={index} className={css.contactListItem}>
                    {contact.name}: {contact.number}
                    <button type='button' className={css.contactListItemBtn}
                        onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>)
}
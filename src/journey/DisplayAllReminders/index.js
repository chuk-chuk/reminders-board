import React from 'react';
import PropTypes from 'prop-types';

import Reminder from '../../components/Reminder';

import styles from './styles.scss';

const DisplayAllReminders = ({ onReminderClick }) => {

    const reminders = [{
        text: "Reminder one",
        expired_by: "2019-01-26"
    },
    {
        text: "Reminder two",
        expired_by: "2018-12-20"
    },
    {
        text: "Reminder three",
        expired_by: "2019-03-15"
    }]

    return (
        <div className={styles.ListOfReminders}>
            {reminders.length ?  
            <ul>
                {reminders.map((todo, index) => (
                    <Reminder key={index} {...todo} onClick={() => onReminderClick(index)} />
                    ))}
            </ul> : <span>You have no reminders to display.</span> }
        </div>
    )
}

DisplayAllReminders.propTypes = {
    reminders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            expired_by: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onReminderClick: PropTypes.func.isRequired
}

// const mapDispatchToProps = dispatch => {
//     return {
//       onReminderClick: id => {
//         dispatch(editReminder(id))
//         dispatch(deleteReminder(id))
//       }
//     }
// }

export default DisplayAllReminders;
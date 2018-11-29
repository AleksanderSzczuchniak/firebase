import React from 'react'
import moment from 'moment'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

const MessagesList = (props) => (
    <div>
        {
            props.messages.map(message => (
                <ListItem
                    primaryText={message.text}
                    secondaryText={moment(message.timestamp).format('DD-MM-YYYY')}
                    key={message.key}
                    rightIconButton={
                        <IconButton
                            onClick={() => props.onDeleteMessageClickHandler(message.key)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            ))
        }
    </div>
)
export default MessagesList
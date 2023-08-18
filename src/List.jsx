import React from 'react'

const List = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task =>
                <li>{task}</li>
            )}
        </ul>

    )
}

export default List
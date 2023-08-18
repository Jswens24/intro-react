import React from 'react'

const List = ({ tasks, deleteTask }) => {



    return (
        <ul>
            {tasks.map((task, index) =>
                <li onClick={() => {
                    deleteTask(index)
                }} key={index}>{task}</li>
            )}
        </ul>

    )
}

export default List
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className="container">
            {items.map((item) => {
                const { id, title,title1 } = item;
                return (
                    <ul className="list-group list-group-flush" key={id}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        {/* <input type="checkbox"  /> */}
                            {/* <div>{id}</div> */}
                            <div>{title}</div>
                            <div>{title1}</div>
                            
                            <div style={{ float: "right" }}>

                                {/* <input type="checkbox" onChange={() => checkedItem(id)} /> */}
                                <button type="button" className="edit-btn" onClick={() => editItem(id)}> <FaEdit /> Edit </button>
                                <button type="button" className="delete-btn" onClick={() => removeItem(id)}> <FaTrash />Delete </button>

                            </div>
                        </li>
                    </ul>
                )
            })}

        </div>
    )
}

export default List;
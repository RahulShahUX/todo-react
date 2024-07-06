import { useState } from "react";
import GoceryList from "./GroceryList";
import AddList from "./AddList";
import DeleteAll from "./DeleteAll";

export default function GroceryBox() {
    const [toDoList, settoDoList] = useState(
        ["Milk", "Cheese"]
    )
    const [editedItem, setEditedItem] = useState("")
    const handleEdit = (data) => {
        setEditedItem(data);
    }
    const handleDelete = (data) => {
        const toDoListAfterDelete = toDoList.filter((item)=> {
            return item != data
        })
        settoDoList(toDoListAfterDelete);
        console.log("data deleted", data);
    }

    const DeleteList = () => {
        settoDoList([]);
    }
    return (
        <>
            <ul style={{ width: "100%", margin: "0", padding: "0"}}>
                {toDoList.map((item) => {
                    return <GoceryList handleDelete={handleDelete} handleEdit={handleEdit} item={item} />
                })}
            </ul>
            <AddList editedItem={editedItem} setEditedItem={setEditedItem} toDoList={toDoList} settoDoList={settoDoList} />
            <DeleteAll DeleteList={DeleteList} />
        </>
    )
}
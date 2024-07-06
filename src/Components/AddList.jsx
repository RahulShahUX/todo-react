import { useEffect, useRef } from "react"

export default function AddList(props) {
    useEffect(()=> {
        if(props.editedItem) {
            nameRef.current.value = props.editedItem
        }
    }, [props.editedItem])
    const nameRef = useRef("");
    console.log("props.editedItem", props.editedItem);
    const handleAdd = () => {
        const isProductDuplicate = props.toDoList.some((items) => {
            return items == nameRef.current.value
        })
        if (!props.editedItem) {
            console.log("added");
            if(!isProductDuplicate) {
                props.settoDoList([...props.toDoList, nameRef.current.value]);
                nameRef.current.value = ""
            }
            else {
                alert("product is already there");
            }
        }
        else {
            console.log("edited");
            const updatedList = props.toDoList.map((item) => {
                return item == props.editedItem ? nameRef.current.value : item
            })
            if(!isProductDuplicate) {
                props.settoDoList(updatedList);
                props.setEditedItem(null);
                nameRef.current.value = ""
            }
            else {
                alert("product is already there");
            }
            
            
        }
    }
    return (
        <div style={{ border: "1px solid #ccc", display: "flex", padding: "10px" }}>
            <input ref={nameRef} type="text" style={{ flex: "1" }} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
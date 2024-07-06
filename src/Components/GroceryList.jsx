export default function GoceryList(props) {
    // const handleEdit = () => {
    //     console.log("handleEdit")
    // }
    return(
        <li style={{display: "flex", border: "1px solid #ccc", marginBottom: "10px", padding: "10px"}}>
            <div style={{flex: "1"}}>{props.item}</div>
            <div>
                <button style={{marginRight: '10px'}} onClick={()=>props.handleEdit(props.item)}>Edit</button>
                <button onClick={()=>props.handleDelete(props.item)}>Delete</button>
            </div>
        </li>
    )
}
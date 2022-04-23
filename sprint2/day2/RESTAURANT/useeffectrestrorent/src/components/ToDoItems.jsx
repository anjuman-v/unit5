export const ToDosItems = ({title, status, id}) => {
    return <div>{title} - {status ? "Done" : "Not Done"}
            <button onClick={()=>{
                // markDone(id)
            }}>Mark as Done</button>
            <button onClick={()=>{
                // console.log(id);
                // deleteToDo(id)

            }}>Delete</button>
            </div>
}
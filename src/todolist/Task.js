export const Task = (props) => {
  return (
    <tr className="task" style={{backgroundColor: props.checked ? "lightgreen" : "white"}}>
      <td className="taskName">
        <div>{props.value}. {props.taskName}</div>
      </td>

      <td className="buttons">
        <input type="checkbox" onChange={() => props.updateTask(props.id)} checked={props.checked}/>
        <button id="del-btn" onClick={() => props.deleteTask(props.id)}>Delete</button>
      </td>
    </tr>
  )
}
function List(props){
    const listItem = props.items.map((item)=>
    <li key={item}>{item}</li>
    )
    return(
        // <ul>
        //     <li>
        //         {props.item1}
        //         {props.item2}
        //         {}
        //     </li>
        // </ul>
        <ul>{listItem}</ul>
    )
}
export default List;
const FunkosList = (props) => {
    return (
        <ul>
            {props.funkos?.map(elm => <li>{elm.name}</li>)}
        </ul>

    )

}
export default FunkosList
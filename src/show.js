function UseColor(props){
    const {dataStore}=props
    const store=dataStore.map((e)=>{
    return(
         <div >
            <li>{e.name}</li>
            <li>{e.skills[0].name}</li>
         </div>
    )
    })
    return(
        <div >
            <ul>
            {store}
            </ul>
        </div>
    )
}
export default UseColor;
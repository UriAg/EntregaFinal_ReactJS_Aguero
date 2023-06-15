let estilos = {
    textAlign: "center",
    color: "red"

}

export const ItemListContainer = props =>{
    return(
        <main>
            <h2 style={estilos}>{props.greeting}</h2>
        </main>
    )
}
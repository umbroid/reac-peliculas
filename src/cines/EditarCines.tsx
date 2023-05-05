import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>, 
            <h3>Editar Cines</h3>
            <FormularioCines
                modelo={{ nombre: 'Sambil', latitud: -27.328665, longitud: -55.864873 }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}
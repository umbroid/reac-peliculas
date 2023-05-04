import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico(props: listadoGenericosProps){
    if(!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI;
        }
        return <Cargando/>
    }else if(props.listado.length === 0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar</>
    }else {
        return props.children;
    }
}

interface listadoGenericosProps{
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}
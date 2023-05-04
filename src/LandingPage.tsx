import { useEffect, useState } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})
  
    useEffect(() => {
    const timerid = setTimeout(() => {
      setPeliculas({enCartelera: [
        {
          id: 1, titulo: 'Spider-Man: Far from home', 
          poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
        },
        {
          id: 2, titulo: 'Moana', 
          poster: 'https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SY679_.jpg'
        }
      ],
    proximosEstrenos: [
      {id: 3, titulo: 'Soul', 
      poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg'}
    ]})
    }, 500);

    return () => clearTimeout(timerid);
    })
    return(
        <>
        <h3>En cartelera</h3> 
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Proximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    )
}
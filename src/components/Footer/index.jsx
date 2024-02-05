import { Link } from "react-router-dom";
import { StyleFooter } from "./style";

export function Footer(){

    return(
        <StyleFooter>
            <p>Projeto by Coti Informática</p>
            <Link to="/">Página Inicial</Link> - <Link to="/contato">Contato</Link>
        </StyleFooter>
    )

}
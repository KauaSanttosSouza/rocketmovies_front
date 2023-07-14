import { Container, User } from "./styles"
import { Input } from "../Input"

export function Header() {
   return (
      <Container>
         <h1>RocketMovies</h1>
         <Input type="text" placeholder="Pesquisar por titulos" />
         <User>
            <div>
               <h1>
                  Kaua Santos de Souza
               </h1>
               <button>Sair</button>
            </div>
            <img src="https://github.com/KauaSanttosSouza.png" alt="Foto de perfil" />
         </User>
      </Container>
   )
}
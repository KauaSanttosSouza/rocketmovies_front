import { Container, User } from "./styles"

export function Header() {
   return (
      <Container>
         <h1>RocketMovies</h1>
         <input type="text" placeholder="Pesquisar por titulos" />
         <User>
            <h1>
               Kaua Santos de Souza
            </h1>
            <button>Sair</button>
         </User>
      </Container>
   )
}
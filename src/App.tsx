import { ListFormat } from 'typescript'
import BarraLateral from './contaienrs/BarraLateral'
import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from './contaienrs/ListaDeTarefas'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App

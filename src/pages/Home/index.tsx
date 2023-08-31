import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../contaienrs/BarraLateral'
import ListaDeTarefas from '../../contaienrs/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home

import BarraLateral from '../../contaienrs/BarraLateral'
import Formulario from '../../contaienrs/Formulario'

const Cadastro = () => (
  <>
    {/* barra lateral */}
    <BarraLateral mostrarFiltros={false} />

    <Formulario />
  </>
)

export default Cadastro

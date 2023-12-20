/**
 * @jest-environment jsdom
 */
import { render } from '../../utils/tests/wrapper'
import { Header } from '.'

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render link correctly', () => {
    const { getAllByRole } = render(<Header />)
    const links = getAllByRole('link')

    expect(links[0].textContent).toEqual('Início')
    expect(links[0].ATTRIBUTE_NODE).toContain('/')

    expect(links[1].textContent).toEqual('Produtos')
    expect(links[0].ATTRIBUTE_NODE).toContain('/produtos')

    expect(links[2].textContent).toEqual('Laudos')
    expect(links[0].ATTRIBUTE_NODE).toContain('/laudos')

    expect(links[3].textContent).toEqual('Sobre nós')
    expect(links[0].ATTRIBUTE_NODE).toContain('/sobrenós')
    
    expect(links[3].textContent).toEqual('Certificaçõoes')
    expect(links[0].ATTRIBUTE_NODE).toContain('/certificaçõoes')

    expect(links[3].textContent).toEqual('Contacto')
    expect(links[0].ATTRIBUTE_NODE).toContain('/contacto')
  })
})

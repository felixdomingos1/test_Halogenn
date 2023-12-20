/**
 * @jest-environment jsdom
 */
import { render } from '../../utils/tests/wrapper'
import { CardRelease } from '.'
import { mockProduct } from './mock'

describe('CardRelease Component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<CardRelease {...mockProduct} />)
    expect(container.firstChild).toMatchSnapshot()

    expect(getByText(mockProduct.name))
  })

  it('should render the information received via props', () => {
    const { getAllByRole, getByText } = render(<CardRelease {...mockProduct} />)

    expect(getAllByRole('img')[0]).toHaveAttribute(
      'src',
      mockProduct
    )

    expect(getAllByRole('img')[1]).toHaveAttribute(
      'src',
      mockProduct
    )

    expect(getByText(mockProduct.name)).toBeInTheDocument()
    expect(getByText(mockProduct.details)).toBeInTheDocument()
  })
})

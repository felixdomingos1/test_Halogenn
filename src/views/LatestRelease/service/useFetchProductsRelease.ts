import { api } from 'src/services/api'

const fetchProductsRelease = async () => {
  const productsReleaseResponse = await api.get('/products')

  return productsReleaseResponse.data
}

export { fetchProductsRelease }

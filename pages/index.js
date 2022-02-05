import axios from "axios"
import { Layout } from "../components/Layout"
import { ProductCard } from "../components/ProductCard"

function HomePage({ products }) {
  const renderProducts = () => {
    if (products.length === 0)
      return (
        <h1 className="text-center text-2xl font-bold text-gray-400">
          No Products Yet
        </h1>
      )
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderProducts()}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  )

  return {
    props: {
      products,
    },
  }
}

export default HomePage

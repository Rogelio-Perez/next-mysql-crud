import axios from "axios"
import { Layout } from "../../components/Layout"
import { useRouter } from "next/router"

function ProductView({ product }) {
  const router = useRouter()

  const handleDelete = async (id) => {
    await axios.delete("/api/products/" + id)
    router.push("/")
  }

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        className="bg-red-500 px-3 py-2 text-white hover:bg-red-700"
        onClick={() => handleDelete(product.id)}
      >
        Delete
      </button>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  )

  return {
    props: {
      product,
    },
  }
}

export default ProductView

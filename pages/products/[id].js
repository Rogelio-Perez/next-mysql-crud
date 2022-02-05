import axios from "axios"
import { Layout } from "../../components/Layout"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

function ProductPage({ product }) {
  const router = useRouter()

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id)
      router.push("/")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  let price = product.price

  return (
    <Layout>
      <div className="grid place-items-center h-screen">
        <div className="p-4 shadow-md rounded">
          <div className="mb-4">
            <h1 className="text-center text-2xl mb-2 font-semibold text-gray-600">
              {product.name}
            </h1>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-green-700 font-semibold text-right">
              {new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                useGrouping: true,
                minimumFractionDigits: 2,
              }).format(price)}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-red-500 px-3 py-2 text-white hover:bg-red-700 rounded"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>

            <button
              className="bg-gray-500 py-2 text-white hover:bg-gray-800 ml-2 px-5 rounded"
              onClick={() => router.push("/products/edit/" + product.id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
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

export default ProductPage

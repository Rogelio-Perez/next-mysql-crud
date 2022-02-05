import Link from "next/link"

export function ProductCard({ product }) {
  let price = product.price
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
      <a>
        <div className="border border-gray-200 shadow-md p-6 hover:transform hover:scale-105 transition duration-200 ease-in-out">
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
      </a>
    </Link>
  )
}

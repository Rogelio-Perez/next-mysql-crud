import { pool } from "../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json("Getting a product")
    case "POST":
      const { name, description, price } = req.body

      const [result] = await pool.query("INSERT INTO product SET ?", {
        name,
        description,
        price,
      })

      console.log(result)
      return res
        .status(200)
        .json({ name, price, description, id: result.insertId })
  }
}

export default function handler(req, res) {
  return res.status(200).json("Getting prodcut: " + req.query.id)
}

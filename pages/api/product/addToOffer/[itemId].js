import Product from "../../../../models/product";
import db from "../../../../utils/db";




export default async function handler(req, res) {

  await db.connect()

  const { itemId } = req.query
  // console.log(req.body);

  if (req.method == "PUT") {

    const { ourOffer } = req.body

    await Product.findByIdAndUpdate(itemId, { ourOffer })

    res.status(201).json({msg:"product added to Offer"})
  }
}
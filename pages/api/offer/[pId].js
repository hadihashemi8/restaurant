import db from "../../../utils/db";
import Product from "../../../models/product";



export default async function handler(req, res) {

    await db.connect()


    const { pId } = req.query


    if (req.method == "PUT") {
        const { offerPresent } = req.body

        await Product.findByIdAndUpdate(pId, { offerPresent })

        res.status(201).json({ msg: "offer add to product" })
    } else if (req.method == "DELETE") {
        await Product.findByIdAndUpdate(pId, { offerPresent: 0 })

        res.status(201).json({ msg: "offer deleted" })
    }

}
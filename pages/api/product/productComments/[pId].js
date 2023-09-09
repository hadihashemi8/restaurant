import db from "../../../../utils/db";
import Product from "../../../../models/product"


export default async function handler(req, res) {
    await db.connect()

    const { pId } = req.query

    if (req.method == "PUT") {

        const comment = req.body


        await Product.findByIdAndUpdate(pId, { $push: { comments: comment } })
            .then(response => {
                res.status(201).json({ msg: "comment Added" })
            }).catch(err => res.status(500).json({ err }))

    } else if (req.method == "DELETE") {

        const { id } = req.body

        await Product.updateOne({ _id: pId }, { $pull: { comments: { id } } })
            .then(response => {

                res.status(201).json("comment removed in product")
            })

    } else if (req.method == "GET") {

        await Product.findOne({ _id: pId })
            .then(response => {
                console.log(response);
                res.status(201).json({ status: true, data: response })
            })



    }

}


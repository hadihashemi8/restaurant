import db from "../../../../utils/db"
import User from "../../../../models/user"



export default async function handler(req, res) {

    await db.connect()

    const { uId } = req.query

    if (req.method == "GET") {

        

        await User.findOne({ _id: uId })
            .then(response => {
               
                res.status(201).json({ status: true, data: response })
            })

    }
}
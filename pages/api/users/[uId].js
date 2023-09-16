import db from "../../../utils/db";
import User from "../../../models/user";

export default async function handler(req, res) {
    await db.connect()

    const { uId } = req.query

    if (req.method == "PUT") {

        const { isAdmin } = req.body

        await User.findByIdAndUpdate(uId, { isAdmin })


        res.status(201).json({ msg: "this user is admin" })

    } else if (req.method == "GET") {

        const items = await User.find()

        const slicedItems = items.slice(-uId)

        res.status(201).json({ status: true, data: slicedItems })
    } else if (req.method == "DELETE") {

        await User.findByIdAndDelete({ _id: uId })
            .then(response => {
                if (response) {
                    res.status(201).json({ msg: "user deleted:)" })

                }
            })


    }

}
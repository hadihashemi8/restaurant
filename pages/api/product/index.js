import db from "../../../utils/db"
import Product from "../../../models/product";
import { IncomingForm } from "formidable"
// import { mv } from "mv"

var mv = require('mv');

export default async function handler(req, res) {
  await db.connect()


  const { offset } = req.query



  if (req.method == "POST") {



    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm()
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err)

        var oldPath = files.file[0].filepath;
        var newPath = `./public/uploads/${files.file[0].originalFilename}`;



        if (files.file[0].mimetype == "image/png" || files.file[0].mimetype == "image/jpeg" || files.file[0].mimetype == "image/jpg") {

          mv(oldPath, newPath, function (err) {
            err && console.log(err);
          });

          const newObj = {
            name: fields.name[0],
            price: fields.price[0],
            aboutProduct: fields.aboutProduct[0],
            aboutProductFull: fields.aboutProductFull[0],
            categories: fields.categories[0],
            image: `/uploads/${files.file[0].originalFilename}`,
            comments: [],
            offerPresent: 0,
            ourOffer: false

          }

          resolve(newObj)

        } else {

          res.status(400).json({ msg: "this format not valid" })
        }

      })
    }).then(response => {
      console.log(response);
      if (response) {
        Product.create(response)
          .then(data => {
          
            if (data) {
              res.status(201).json({ msg: "product added to db" })
            }
          })
      }
    })

  } else if (req.method == "GET") {

    await Product.find()
      .then(products => {

        if (products) {

          if (offset) {

            const endSlice = offset
            const startSlice = endSlice - 10



            const sliceProducts = products.slice(startSlice, endSlice)

            res.status(201).json({ status: true, data: sliceProducts })
          } else {
            res.status(201).json({ status: true, data: products })
          }

        }
      }).catch(err => console.log(err))


  }
}



export const config = {
  api: {
    bodyParser: false,

  },
};
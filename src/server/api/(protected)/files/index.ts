import e from 'express'
import { HttpStatus } from 'http-status-ts'
import multer from 'multer'

const fileRoutes = e.Router()

fileRoutes.post(
  // Handle POST requests for uploading files
  '/upload',
  multer({ dest: 'uploads/' }).single('file'),
  (req, res) => {
    const { file } = req

    if (file) {
      console.log(file)
    }

    res.sendStatus(HttpStatus.OK)
  }
)

export default fileRoutes

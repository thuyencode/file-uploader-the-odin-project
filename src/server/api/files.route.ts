/* eslint-disable @typescript-eslint/no-unsafe-type-assertion -- This is ok */
import { FileConfigurationSchema } from '@/shared/validation/file.schema'
import { HttpStatusCode } from 'axios'
import e from 'express'
import expressAsyncHandler from 'express-async-handler'
import type { ParamsDictionary } from 'express-serve-static-core'
import multer from 'multer'
import { UploadedFileDB } from '../db/UploadedFile.db'
import { BadRequest, NotFound, Unauthorized } from '../errors'
import { unauthedReqHandler, validateReqBody } from '../middlewares'
import type { FileConfigurationInput } from '../types/file'
import { checkIfDownloadable } from '../utils/files'

const upload = multer({ dest: 'uploads/' })

const fileRoutes = e.Router()

fileRoutes.get(
  // Handle GET requests for getting files' info
  '/',
  unauthedReqHandler,
  expressAsyncHandler(async (req, res) => {
    const {
      user: { id: userId }
    } = req as typeof req & { user: NonNullable<Express.User> }

    const files = await UploadedFileDB.findByUserId(userId)

    res.send(files)
  })
)

fileRoutes.post(
  // Handle POST requests for uploading files
  '/upload',
  unauthedReqHandler,
  upload.single('file'),
  expressAsyncHandler(async (req, res) => {
    const {
      file,
      query: { shareable },
      user: { id: userId }
    } = req as typeof req & { user: NonNullable<Express.User> }

    if (!file) {
      throw new BadRequest(
        "A file is required in the field named 'file' in form data"
      )
    }

    const { fieldname, path, ...rest } = file

    const uploadedFile = await UploadedFileDB.insert({
      ...rest,
      shareable: shareable !== undefined,
      userId
    })

    res.status(HttpStatusCode.Created).send(uploadedFile)
  })
)

fileRoutes.get(
  // Handle GET requests for getting file' info
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const {
      params: { id },
      user
    } = req

    const file = await UploadedFileDB.findById(id)

    if (!file) {
      throw new NotFound()
    }

    const isDownloadable = checkIfDownloadable(file, user)

    if (!isDownloadable) {
      throw new Unauthorized()
    }

    res.send(file)
  })
)

fileRoutes.post(
  // Handle POST requests for configuring file
  '/:id',
  unauthedReqHandler,
  validateReqBody<FileConfigurationInput>(FileConfigurationSchema),
  expressAsyncHandler<ParamsDictionary, unknown, FileConfigurationInput>(
    async (req, res) => {
      const {
        body: { shareable },
        params: { id },
        user: { id: userId }
      } = req as typeof req & { user: NonNullable<Express.User> }

      const file = await UploadedFileDB.findById(id)

      if (!file) {
        throw new NotFound()
      }

      if (file.userId !== userId) {
        throw new Unauthorized()
      }

      const updatedFile = await UploadedFileDB.updateById(id, { shareable })

      res.status(HttpStatusCode.Ok).send(updatedFile)
    }
  )
)

fileRoutes.get(
  '/:id/download',
  expressAsyncHandler(async (req, res) => {
    const {
      params: { id },
      user
    } = req

    const file = await UploadedFileDB.findById(id)

    if (!file) {
      throw new NotFound()
    }

    const isDownloadable = checkIfDownloadable(file, user)

    if (!isDownloadable) {
      throw new Unauthorized()
    }

    res.download(`${file.destination}/${file.filename}`, file.originalname)
  })
)

export default fileRoutes

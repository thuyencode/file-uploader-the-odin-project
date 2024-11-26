import v from '@/shared/validation'
import type { FilterByFields, OrderByFields } from '../types/file'

const OrderByValueSchema = v.union([v.literal('asc'), v.literal('desc')])

type OrderByEntries = Record<OrderByFields, typeof OrderByValueSchema>

export const OrderBySchema = v.partial(
  v.object<OrderByEntries>({
    created_date: OrderByValueSchema,
    updated_date: OrderByValueSchema,
    size: OrderByValueSchema
  })
)

const FilterByStringValueSchema = v.pipe(v.string(), v.nonEmpty())
const FilterByBooleanValueSchema = v.boolean()

type FilterByStringValueEntries = Record<
  Exclude<FilterByFields, 'shareable'>,
  typeof FilterByStringValueSchema
>

type FilterByBooleanValueEntries = Record<
  Extract<FilterByFields, 'shareable'>,
  typeof FilterByBooleanValueSchema
>

export const FilterBySchema = v.intersect([
  v.partial(
    v.object<FilterByStringValueEntries>({
      destination: FilterByStringValueSchema,
      encoding: FilterByStringValueSchema,
      originalname: FilterByStringValueSchema,
      id: FilterByStringValueSchema,
      mimetype: FilterByStringValueSchema,
      userId: FilterByStringValueSchema
    })
  ),
  v.partial(
    v.object<FilterByBooleanValueEntries>({
      shareable: FilterByBooleanValueSchema
    })
  )
])

import type { FilterByFields, OrderByFields } from '../types/file'

export const ORDER_BY_FIELDS: OrderByFields[] = [
  'created_date',
  'updated_date',
  'size'
] as const

export const FILTER_BY_FIELDS: FilterByFields[] = [
  'destination',
  'encoding',
  'originalname',
  'id',
  'mimetype',
  'shareable',
  'userId'
] as const

import { api } from 'src/lib/axios'
const REPOSITORY_API = 'ZNzdeBEAAB4AyOoJ'

async function getCategories(PAGE_SIZE: number) {
  return await api.get(
    `/api/v2/documents/search?ref=${REPOSITORY_API}&q=%5B%5Bat%28document.type%2C+%22categories%22%29%5D%5D&page=1&pageSize=${PAGE_SIZE}`,
  )
}

async function getAllJobsWithCategory(PAGE_SIZE: number, PAGE_INDEX: number) {
  return await api.get(
    `/api/v2/documents/search?ref=${REPOSITORY_API}&q=%5B%5Bat%28document.type%2C+%22jobs%22%29%5D%5D&page=${PAGE_INDEX}&pageSize=${PAGE_SIZE}&fetchLinks=categories.categoryName`,
  )
}

async function getJobWithCategory(slug: string, PAGE_SIZE: number) {
  return await api.get(
    `/api/v2/documents/search?ref=${REPOSITORY_API}&q=%5B%5Bat%28my.jobs.category%2C+%22${slug}%22%29%5D%5D&page=1&pageSize=${PAGE_SIZE}&fetchLinks=categories.categoryName`,
  )
}

async function getByUid(documentType: string, uid: string) {
  return await api.get(
    `/api/v2/documents/search?ref=${REPOSITORY_API}&q=%5B%5B%3Ad+%3D+at%28my.${documentType}.uid%2C+%22${uid}%22%29+%5D%5D`,
  )
}

async function getCategoryBySlug(slug: string) {
  return await api.get(
    `/api/v2/documents/search?ref=${REPOSITORY_API}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${slug}%22%29+%5D%5D`,
  )
}

const documentsRepository = {
  getCategories,
  getAllJobsWithCategory,
  getByUid,
  getCategoryBySlug,
  getJobWithCategory,
}

export default documentsRepository

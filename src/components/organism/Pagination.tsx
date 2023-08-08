'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  // onPageChange: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  return (
    <nav className="flex items-center justify-center mt-6">
      <ul className="flex space-x-2">
        <li>
          <button
            className={`${
              Number(page) === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'opacity-100 cursor-pointer'
            } rounded-lg px-3 py-1 text-lightColor`}
            onClick={() => {
              router.push(`/trabalhos/?page=${Number(page) - 1}`)
            }}
            disabled={Number(page) === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              className={`${
                Number(page) === index + 1
                  ? ' text-lightColor font-bold'
                  : 'text-lightColor opacity-60'
              } rounded-lg px-3 py-1`}
              onClick={() => {
                router.push(`/trabalhos/?page=${Number(index + 1)}`)
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${
              Number(page) === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : 'opacity-100 cursor-pointer'
            } rounded-lg px-3 py-1 text-lightColor`}
            onClick={() => {
              router.push(`/trabalhos/?page=${Number(page) + 1}`)
            }}
            disabled={Number(page) === totalPages}
          >
            Próximo
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

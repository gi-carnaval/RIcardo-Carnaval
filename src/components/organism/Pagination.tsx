'use client'
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  nextPageFunction: (page: string) => void
  prevPageFunction: (page: string) => void
  // onPageChange: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  nextPageFunction,
  prevPageFunction,
}) => {
  const page = String(currentPage) ?? '1'
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
              prevPageFunction(page)
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
                nextPageFunction(String(index))
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
              nextPageFunction(page)
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

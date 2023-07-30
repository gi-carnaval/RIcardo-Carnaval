// components/ImageModal.js

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const photos = [
  { id: 1, src: '/images/photo1.jpg', title: 'Foto 1' },
  { id: 2, src: '/images/photo2.jpg', title: 'Foto 2' },
  { id: 3, src: '/images/photo3.jpg', title: 'Foto 3' },
  // Adicione mais fotos aqui
]

const ImageModal = ({ imageId, onClose }) => {
  const router = useRouter()
  const photo = photos.find((photo) => photo.id === parseInt(imageId))

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!url.includes('/gallery/')) {
        onClose()
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [onClose, router])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75">
      <div className="max-w-lg bg-white p-4 rounded-lg">
        <Image src={photo.src} alt={photo.title} width={600} height={400} />
        <p className="text-center mt-4">{photo.title}</p>
        <button
          className="mt-4 bg-gray-200 px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default ImageModal

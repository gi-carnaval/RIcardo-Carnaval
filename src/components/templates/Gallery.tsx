import Image from 'next/image'
import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/style.css'

interface Props {
  photos?: [
    {
      image: {
        url: string
        dimensions: {
          height: number
          width: number
        }
      }
    },
  ]
}

const GalleryPhotos = ({ photos }: Props) => {
  return (
    <Gallery>
      <div className="gallery p-3 max-w-[100%] md:max-w-[70%] my-0 md:mx-auto mx-3 grid gap-3 grid-flow-dense auto-rows-fr">
        {photos?.map((photo, i) => {
          const photoOrientation =
            photo.image.dimensions.height > photo.image.dimensions.width
              ? 'vertical'
              : 'horizontal'

          return (
            <div
              key={i}
              data-orientation={photoOrientation}
              className="overflow-hidden border-2 data-[orientation=vertical]:row-span-2  data-[orientation=horizontal]:row-span-1"
            >
              <Item
                original={photo.image.url}
                thumbnail={photo.image.url}
                width={photo.image.dimensions.width}
                height={photo.image.dimensions.height}
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    alt={photo.image.url}
                    src={photo.image.url}
                    width={photo.image.dimensions.width}
                    height={photo.image.dimensions.height}
                    priority={false}
                  />
                )}
              </Item>
            </div>
          )
        })}
      </div>
    </Gallery>
  )
}

export default GalleryPhotos

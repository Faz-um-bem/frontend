import { ChangeEvent } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

import { Container, ImageContent, NoImage } from './styled';

type GalleryItemProps = {
  url?: string;
  addNewImage?: boolean;
  onSelectImages?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function GalleryItem({
  url,
  addNewImage = false,
  onSelectImages,
}: GalleryItemProps) {
  return (
    <Container>
      {!addNewImage ? (
        <ImageContent>
          <button type="button">
            <IoMdClose size={20} />
          </button>
          <img src={url} alt="Foto" />
        </ImageContent>
      ) : (
        <NoImage>
          <label htmlFor="images">
            <FiPlus size={20} />
          </label>

          <input multiple type="file" id="images" onChange={onSelectImages} />
        </NoImage>
      )}
    </Container>
  );
}

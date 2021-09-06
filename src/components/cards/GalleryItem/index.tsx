import { ChangeEvent } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

import { Container, ImageContent, NoImage } from './styled';

type GalleryItemProps = {
  url?: string;
  id?: number;
  addNewImage?: boolean;
  onSelectImages?: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (id: number) => void;
};

export function GalleryItem({
  url,
  id,
  addNewImage = false,
  onSelectImages,
  onDelete,
}: GalleryItemProps) {
  return (
    <Container>
      {!addNewImage ? (
        <ImageContent>
          <button type="button" onClick={() => onDelete(id)}>
            <IoMdClose size={20} />
          </button>
          <img src={url} alt="Foto" />
        </ImageContent>
      ) : (
        <NoImage>
          <label htmlFor="images">
            <FiPlus size={20} />
          </label>

          <input type="file" id="images" onChange={onSelectImages} />
        </NoImage>
      )}
    </Container>
  );
}

import { IoMdClose } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

import { Container, ImageContent, NoImage } from './styled';

type GalleryItemProps = {
  url?: string;
  addNewImage?: boolean;
};

export function GalleryItem({ url, addNewImage = false }: GalleryItemProps) {
  return (
    <Container>
      {!addNewImage ? (
        <ImageContent>
          <button type="button">
            <IoMdClose size={20} />
          </button>
          <img src={url} alt="Image" />
        </ImageContent>
      ) : (
        <NoImage>
          <FiPlus size={20} />
        </NoImage>
      )}
    </Container>
  );
}

import React, { ReactNode } from 'react';
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet';

import { Container } from './styles';

type MapProps = MapContainerProps & {
  interactive?: boolean;
  children: ReactNode;
};

export default function InstitutionsMap({
  interactive = true,
  children,
  ...rest
}: MapProps) {
  return (
    <Container>
      <MapContainer
        center={[-29.7031818, -53.7027934]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
        dragging={interactive}
        touchZoom={interactive}
        zoomControl={interactive}
        doubleClickZoom={interactive}
        {...rest}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        />
        {children}
      </MapContainer>
    </Container>
  );
}

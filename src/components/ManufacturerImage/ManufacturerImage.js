import { Avatar } from '@mui/material';
import React from 'react';

const ManufacturerImage = ({ manufacturerName }) => {
  const getManufacturerImage = () => {
    switch (manufacturerName) {
      case 'AMD':
        return '/amd-logo.png';
      case 'Intel':
        return '/intel-logo.png';
    }
  };

  return (
    <Avatar
      variant="square"
      src={getManufacturerImage()}
      sx={{ width: 56, height: 56 }}
    />
  );
};

export default ManufacturerImage;

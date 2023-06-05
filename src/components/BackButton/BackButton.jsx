import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { smBtnStyles } from 'common/styles';
import { ArrowBackIcon } from '@chakra-ui/icons';

const BackBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Button onClick={handleClick} leftIcon={<ArrowBackIcon />} sx={smBtnStyles}>
      Back
    </Button>
  );
};

export default BackBtn;

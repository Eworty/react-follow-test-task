import Wellcome from 'components/Wellcome/Wellcome';
import { Box, AbsoluteCenter } from '@chakra-ui/react';
import { colorBrandLight } from 'common/styles';

const Home = () => {
  return (
    <Box bg={colorBrandLight} minH="94.6vh">
      <AbsoluteCenter textAlign="center">
        <Wellcome />
      </AbsoluteCenter>
    </Box>
  );
};

export default Home;

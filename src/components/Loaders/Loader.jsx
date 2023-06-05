import { Grid } from 'react-loader-spinner';
import { Center } from '@chakra-ui/react';
import { colorBrandDark, colorBrandLight } from 'common/styles';

const Loader = () => {
  return (
    <Center mt="24px" bg={colorBrandLight} minH="94.6vh">
      <Grid
        height="80"
        width="80"
        color={colorBrandDark}
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Center>
  );
};

export default Loader;

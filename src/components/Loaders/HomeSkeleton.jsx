import { Box, SkeletonText } from '@chakra-ui/react';
import { colorBrandLight } from 'common/styles';

const HomeSkeleton = () => {
  return (
    <Box bg={colorBrandLight} minH="94.6vh" px="25%" py="20%">
      <SkeletonText noOfLines={3} spacing="3" skeletonHeight="7" />
    </Box>
  );
};

export default HomeSkeleton;

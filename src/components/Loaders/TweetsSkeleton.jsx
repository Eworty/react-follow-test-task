import { Box, Flex, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { colorBrandLight } from 'common/styles';

const TweetsSkeleton = () => {
  return (
    <Box bg={colorBrandLight} minH="94.6vh">
      <Box maxW="1256px" mx="auto" py="24px" px="34px">
        <Flex justify="space-between" gap="24px" mb="24px">
          <Skeleton w="126px" h="40px" borderRadius="10px" />
          <Skeleton w="200px" h="40px" borderRadius="10px" />
        </Flex>
        <SimpleGrid minChildWidth="380px" spacing="24px">
          <Skeleton w="380px" h="460px" borderRadius="20px" />
          <Skeleton w="380px" h="460px" borderRadius="20px" />
          <Skeleton w="380px" h="460px" borderRadius="20px" />
        </SimpleGrid>
        <Skeleton mx="auto" mt="24px" w="196px" h="50px" borderRadius="10px" />
      </Box>
    </Box>
  );
};

export default TweetsSkeleton;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirstUsers } from 'store/tweets/tweetsOperations';
import { selectError } from 'store/tweets/tweetsSelectors';
import { Box, Flex } from '@chakra-ui/react';
import { colorBrandLight } from 'common/styles';

import UserList from 'components/UserList/UserList';
import BackBtn from 'components/BackButton/BackButton';
import LoadMore from 'components/LoadMore/LoadMore';
import Filter from 'components/Filter/Filter';
import Error from 'components/Error/Error';

const Tweets = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFirstUsers());
  }, [dispatch]);

  return (
    <Box bg={colorBrandLight} minH="94.6vh">
      <Box maxW="1256px" mx="auto" py="24px" px="34px" textAlign="center">
        {error ? (
          <Error />
        ) : (
          <>
            <Flex justify="space-between" gap="24px" mb="24px">
              <BackBtn />
              <Filter />
            </Flex>
            <UserList />
            <LoadMore />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Tweets;

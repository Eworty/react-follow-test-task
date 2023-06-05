import { NavLink as MenuLink } from 'react-router-dom';
import { Center, Flex, Link } from '@chakra-ui/react';
import { linkStyles } from 'common/styles';

const AppBar = () => {
  return (
    <Center as="nav" h="50px" bg="#471CA9">
      <Flex align="center" gap="24px" flex="1" maxW="1256px" px="34px">
        <Link as={MenuLink} to="/" sx={linkStyles}>
          Home
        </Link>

        <Link as={MenuLink} to="/tweets" sx={linkStyles}>
          Tweets
        </Link>
      </Flex>
    </Center>
  );
};

export default AppBar;

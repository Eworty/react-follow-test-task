export const create = (title, description) => {
  return {
    title,
    description,
    status: 'warning',
    variant: 'subtle',
    position: 'top',
    isClosable: true,
  };
};

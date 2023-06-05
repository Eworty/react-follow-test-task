import { useDispatch } from 'react-redux';
import { Box, Select, Tooltip } from '@chakra-ui/react';
import { setFilter } from 'store/filter/filterSlice';
import {
  filterStyles,
  filterOptionStyles,
  colorBrandLight,
} from 'common/styles';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box w="200px">
      <Tooltip label="Filters out already loaded tweets">
        <Select
          onChange={handleChange}
          sx={filterStyles}
          iconColor={colorBrandLight}
        >
          <option value="all" style={filterOptionStyles}>
            All
          </option>
          <option value="follow" style={filterOptionStyles}>
            Follow
          </option>
          <option value="followings" style={filterOptionStyles}>
            Followings
          </option>
        </Select>
      </Tooltip>
    </Box>
  );
};

export default Filter;

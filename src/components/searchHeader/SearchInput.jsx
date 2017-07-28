import React, { Component } from 'react';
import { SearchBar} from 'antd-mobile';

class SearchInput extends Component {
   render() {

    return (
      <SearchBar placeholder="输入您想查找的企业" />
    );
  }
}
export default SearchInput;

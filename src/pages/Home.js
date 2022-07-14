import React from 'react';
import HomeTitleComponent from '../components/Home/HomeTitleComponent';

const Home = () => {
  const [search, setSearch] = React.useState('');
  const inputRef = React.useRef(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    console.log('ㅋㅋㅋ');
    return () => {
      console.log('씨발 끝났다!');
    };
  }, []);

  return (
    <>
      <HomeTitleComponent />
      <input ref={inputRef} value={search} onChange={handleSearch} placeholder="입력해주세요" />
    </>
  );
};

export default Home;

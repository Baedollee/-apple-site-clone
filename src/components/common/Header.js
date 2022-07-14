import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LiStyled, NavStyled, UlStyled } from './Header.style';

const Header = () => {
  const arr = [
    { title: '홈', link: '/' },
    { title: '아이폰', link: '/iphone' },
  ];
  return (
    <>
      <NavStyled>
        <UlStyled>
          {arr.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Link style={{ textDecoration: 'none' }} to={item.link}>
                  <LiStyled>{item.title}</LiStyled>
                </Link>
              </React.Fragment>
            );
          })}
        </UlStyled>
      </NavStyled>
    </>
  );
};

export default Header;

import styled from "styled-components"
import { Link } from "react-router-dom"


export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  width: 100%;
  font-size: 2rem;
  background-color: green;
  transition: all 0.3s ease-in-out;
`;

export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri YEŞİL*/
  background-color: green!important;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #eee!important;
  transition: all 0.3s ease-in-out;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında sonrasında tıklanınca linklerde
    /* ekran küçülünce alttaki stiller olsun */
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 91%;
  }
`;

export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
  background: #e1f1dd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* içinde bulunduğu div in  stillerine göre ayarla kendini, bunu yazmazsak food app in altında kalacak */
  /* 3 kelime  açılınca üstteki özelliklerde olsun*/
  @media (max-width: 768px) {
    overflow: hidden;
    /* display: none; */
    /* tamamen gizler, hamburger tıklanınca bile açılmaz, o yüzden hidden kullandık */
    /* uzun yazı olurda taşarsa gizle (hamburgere dönüşünce)*/
    flex-direction: column;

    width: 100%;
    /* height:200px; */
    /* props olarak, osman=true geldi mesela */
    /* max-height: ${({ osman }) => (osman ? "300px" : "0")};  */

    /*  alttaki gibi de kontrol edebiliriz . Menu div i display flex ve flex-direction column old için alt altalar*/
    display: ${({ osman }) => (osman ? "flex" : "none")};

    /* max-height:300px; */
    /* 3 çizgiye ilk tıklandığında 300 px açılsın, sonraki tıklamada kapansın */
    /* max-height:300px yazarsak hep açık olur */
  }
  /* export const Mlink=styled.a */

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #000;
    background-color: lightgreen;
    transition: all 0.3s ease-in;
    font-size: 2rem;
    font-family: "Girassol", sans-serif;
    &:hover {
      color: #00adb5;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
      border: 1px solid #00adb5;
      border-radius: 10px;
      width: 91%;
    }
  }
`;


export const Logo = styled(MenuLink)`
  background-color: lightgreen !important;
  padding: 0.93rem .5rem;
  color: #000 !important;
  font-weight: 800;
  transition: all 0.3s ease;

  span {
    color: #00adb5 !important;
  }
`;


export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

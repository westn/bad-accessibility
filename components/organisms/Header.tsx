import { FC, useEffect } from 'react';

import styles from './Header.module.css';

const timeout = 3000;
let timer: any = 0;
let subMenu: NodeListOf<HTMLUListElement> | null = null;

const closeSubMenu = () => {
  if (subMenu) {
    subMenu.forEach(ul => ul.style.display = 'none');
    subMenu = null;
  }
}

const Header: FC = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll('#menu > li');
    listItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        // close previously open submenu
        closeSubMenu();
        // get and show new submenu
        subMenu = item.querySelectorAll('ul');
        subMenu.forEach(ul => ul.style.display = 'block');
        clearTimeout(timer);
      });
      item.parentNode?.addEventListener('mouseout', () => {
        clearTimeout(timer);
        timer = setTimeout(function(){
          closeSubMenu();
        },timeout);
      });
    });

    document.onclick = closeSubMenu;
  }, []);

  return (
    <>
      <div id="banner">
        <img id="logo" src="/logo.gif" width="441" height="90" />
      </div>

      <ul id="menu" className={styles.menu}>
        <li>
          <a href="#">Om</a>
          <ul>
            <li><a href="/article">Nyheter</a></li>
            <li><a href="somepage.html?ref=Governance">Styrning</a></li>
            <li><a href="somepage.html?ref=Diversity">Mångfald</a></li>
            <li><a href="somepage.html?ref=Contact%20Us">Kontakta oss</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Akademiker</a>
          <ul>
            <li><a href="somepage.html?ref=Degree%20Programs">Examensprogram</a></li>
            <li><a href="somepage.html?ref=AU%20Faculty">AU-fakulteten</a></li>
            <li><a href="somepage.html?ref=Distance%20Learning">Distansutbildning</a></li>
            <li><a href="somepage.html?ref=Libraries">Bibliotek</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Antagningar</a>
          <ul>
            <li><a href="somepage.html?ref=Undergraduate">Grundutbildning</a></li>
            <li><a href="somepage.html?ref=Graduate">Examen</a></li>
            <li><a href="somepage.html?ref=Tuition">Undervisning</a></li>
            <li><a href="somepage.html?ref=Financial%20Aid">Finansiellt stöd</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Besökare</a>
          <ul>
            <li><a href="somepage.html?ref=Events">Evenemang</a></li>
            <li><a href="somepage.html?ref=Campus_Map">Karta över campus</a></li>
            <li><a href="somepage.html?ref=Parking">Parkering</a></li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Header;

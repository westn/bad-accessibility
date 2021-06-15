import { FC } from 'react';

import Carousel from '../molecules/Carousel';
import Table from '../molecules/Table';

const Main: FC = () => (
  <div id="main">
    <div className="heading">Lär dig om tillgängliga webbplatser</div>
    <Carousel />

    <div className="heading">Välkommen!</div>
    <p>
      Accessible University (AU) är ett fiktivt universitet och detta är en fiktiv
      hemsida. Sidan är utformad för att visa en mängd olika vanliga problem med
      webbdesign som leder till att besökare med funktionsnedsättning inte kan
      kunna komma åt innehållet eller funktionerna. Även om rubriken högst upp i
      det här avsnittet på sidan påstår att AU är en välkomnande institution så
      skickar den svårtillgängliga utformningen ett omväntmeddelande.
    </p>

    <img className="hr" src="images/line_gradient.gif" alt="horizontal line graphic" />

    <div className="heading">Welcome!</div>
    <p>
      Accessible University (AU) is a fictional university, and this is its
      fictional home page. This page is designed to demonstrate a variety of
      common web design problems that result in visitors with disabilities
      being unable to access the content or features of a web page.
      Although the heading at the top of this section of the page
      suggests that AU may be a welcoming institution,
      the inaccessible design of this page sends the opposite message.
    </p>

    <img className="hr" src="images/line_gradient.gif" alt="horizontal line graphic" />

    <div className="heading">Kan du hitta barriärerna?</div>
    <p>
      Det finns minst 20 tillgänglighetsproblem på den här sidan.
      <a href="#link">Klicka här</a> för att se en lista
      över alla kända problem och förslag på hur man löser dem.
    </p>

    <img className="hr" src="images/line_gradient.gif" alt="horizontal line graphic" />
    
    <Table />
  </div>
);

export default Main;

/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

const Footer: FC = () => (
  <footer id="footer" role="contentinfo">
    <div id="ccLogo">
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
      </a>
    </div>
    Accessible University by <a href="http://washington.edu/accesscomputing/AU">University of Washington</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
    <p>This product was originally developed with support from the National Institute on Disability and Rehabilitation Research of the U.S. Department of Education (grant #H133D010306), and has been subsequently updated and maintained with support from the National Science Foundation (grant #CNS-054061S). The contents do not necessarily represent the policies of the U.S. federal government, and you should not assume their endorsement.</p>
  </footer>
);

export default Footer;

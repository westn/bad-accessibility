import { FC } from 'react';

const Table: FC = () => (
  <>
    <div className="heading">AU-registreringstrender</div>
            <table id="enrollment">
                <tr>
                    <td style={{ width: '6em'}}>&nbsp;</td>
                    <td colSpan={6} style={{ textAlign: 'center'}}><b>2019-20</b></td>
                    <td colSpan={6} style={{ textAlign: 'center'}}><b>2020-21</b></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td><b>DV</b></td>
                    <td><b>Tek</b></td>
                    <td><b>Eko</b></td>
                    <td><b>Fys</b></td>
                    <td><b>Psy</b></td>
                    <td><b>Spa</b></td>
                    <td><b>DV</b></td>
                    <td><b>Tek</b></td>
                    <td><b>Eko</b></td>
                    <td><b>Fys</b></td>
                    <td><b>Psy</b></td>
                    <td><b>Spa</b></td>
                </tr>
                <tr>
                    <td><b>Total</b></td>
                    {/*<!--2007-08 data-->*/}
                    <td>84</td>
                    <td>126</td>
                    <td>43</td>
                    <td>32</td>
                    <td>112</td>
                    <td>59</td>
                    {/*<!--2008-09 data-->*/}
                    <td>82</td>
                    <td>140</td>
                    <td>45</td>
                    <td>34</td>
                    <td>101</td>
                    <td>64</td>
                </tr>
                <tr>
                    <td>% Män</td>
                    {/*<!--2007-08 data-->*/}
                    <td>89</td>
                    <td>84</td>
                    <td>73</td>
                    <td>69</td>
                    <td>20</td>
                    <td>47</td>
                    {/*<!--2008-09 data-->*/}
                    <td>87</td>
                    <td>80</td>
                    <td>69</td>
                    <td>69</td>
                    <td>22</td>
                    <td>48</td>
                </tr>
                <tr>
                    <td>% Kvinnor</td>
                    {/*<!--2007-08 data-->*/}
                    <td>11</td>
                    <td>16</td>
                    <td>27</td>
                    <td>31</td>
                    <td>80</td>
                    <td>53</td>
                    {/*<!--2007-08 data-->*/}
                    <td>13</td>
                    <td>20</td>
                    <td>31</td>
                    <td>31</td>
                    <td>78</td>
                    <td>52</td>
                </tr>
            </table>
  </>
);

export default Table;

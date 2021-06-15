import { FC, useCallback, useState } from 'react';

import styles from './Form.module.css';

const Form: FC = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const handleSubmit = useCallback((e:any) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0,0);
  }, [setIsSubmitted]);

  return (
    <div id="appForm" className={styles.appForm}>
      <div className={styles.heading}>Ansök nu!</div>
        <p className={`${styles.required} ${styles.reqExample}`}>(obligatoriska fält är i blått)</p>
        <form onSubmit={handleSubmit}>
          {isSubmitted && (
            <div id="error" className={styles.error}>
              
                <div className={styles.errorHeading}>
                  <p>
                    Det finns fel i formuläret. Korrigera dem och skicka in dem igen.
                  </p>
                </div>
            </div>
          )}
          
          <div className={styles.required}>
            Namn:
            <input type="text" name="namn" />
          </div>

          <div className={styles.required}>
            E-post:
            <input type="text" name="epost" />
          </div>

          <div>
            Ort:
            <input type="text" name="stad" />
          </div>

          <div>
            Stat/provins/Landskap:
            <input type="text" name="stat" />
          </div>

          <div>
            Postnummer:
            <input type="text" name="postkod" />
          </div>

          <div>
            Land:
            <input type="text" name="land" />
          </div>

          <div><b>Önskat huvudämne:</b></div>

          <div id="majors" className={styles.majors}>
            <div className={styles.major}>Datavetenskap <input type="checkbox" name="major_cs" /></div>
            <div className={styles.major}>Teknik <input type="checkbox" name="major_eng" /></div>
            <div className={styles.major}>Ekonomi <input type="checkbox" name="major_econ" /></div>
            <div className={styles.major}>Fysik <input type="checkbox" name="major_phy" /></div>
            <div className={styles.major}>Psykologi <input type="checkbox" name="major_psy" /></div>
            <div className={styles.major}>Spanska <input type="checkbox" name="major_sp" /></div>
          </div>

          <div id="captcha" className={styles.captcha}>
            <b>Säkerhetstest</b>
            <p>Ange de två orden du ser nedan, åtskilda av ett mellanslag</p>
            <input type="text" name="captcha" />
            <img src="/images/captcha.png" />
          </div>

          <div>
            <input id="submit" type="submit" name="submit" value="Skicka in" />
          </div>

        </form>
    </div>
  );
}

export default Form;

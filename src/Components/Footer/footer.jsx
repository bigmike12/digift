import React from "react";
import styles from "./footer.module.scss";
import Icon from "../../Icon";
import { contacts, links, socials } from "./data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__socials}>
          <Icon name="Logo" />
          <p>Creating Happiness One Giftcard at a Time.</p>
          <div className={styles.footer__top__socials__icons}>
            {socials && socials.map((social) => <Icon name={social.icon} />)}
          </div>
        </div>

        <div className={styles.footer__top__contact}>
          {contacts &&
            contacts.map((contact, index) => (
              <div className={styles.footer__top__contact__info} key={index}>
                <h4>{contact.title}</h4>
                <p>{contact.info}</p>
              </div>
            ))}
          <div className={styles.terms}>
            <div className={styles.terms__policy}>
              <p>Our privacy policy</p>
              <Icon name="Right" />
            </div>
            <div className={styles.terms__policy}>
              <p>Terms and Condition</p>
              <Icon name="Right" />
            </div>
          </div>
        </div>

        <div className={styles.footer__top__links}>
          {links &&
            links.map((link, index) => (
              <div className={styles.footer__top__links__info} key={index}>
                <h3 className={styles.title}>{link.title}</h3>
                <p>{link.one}</p>
                <p>{link.two}</p>
                <p>{link.three}</p>
                <p>{link.four}</p>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__text}>
          <img src="images/ToTop.png" alt="ScrollToTop" />
          <p>
            The website www.digiftng.com is owned and operated by Blinksky
            Nigeria Limited, a company duly registered under the Laws of the
            Federal Republic of Nigeria with RC Number: 1656204. Trademark to
            all logos of Giftcards are owned by their respective brands and
            Blinksky Nigeria Limited doesn’t claim ownership of these
            trademarks. All Giftcards dominated in USD are provided in
            conjunction with BlinkSky Inc. Users must have valid US account and
            in some cases a valid US address before purchasing.
          </p>
        </div>
        <p className={styles.footer__bottom__copywrite}>
          Copyright © 2022 Blinksky Nigeria Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;

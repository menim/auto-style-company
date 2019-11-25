<script>
import BaseLogo from './BaseLogo';

export default {
  name: 'Footer',
  components: {
    BaseLogo,
  },
};
</script>
<template>
  <footer id="footer" class="footer">
    <h3 class="footer__title">По любому вопросу возникшему у Вас:</h3>
    <ul class="footer__list">
      <li class="footer__item">
        <a class="footer__link footer__link--telephone" href="tel:+79166677773"
          >+7 (916) 667 77 73</a
        >
      </li>
      <li class="footer__item">
        <a
          class="footer__link footer__link--mail"
          href="mailto:welcome@autostyle-pro.ru"
          >welcome@autostyle-pro.ru</a
        >
      </li>
      <li class="footer__item">
        <a class="footer__link" href="https://autostyle-pro.ru"
          >autostyle-pro.ru</a
        >
      </li>
      <li class="footer__item">
        <a
          class="footer__link"
          href="https://www.instagram.com/autostyle_pro/?hl=ru"
          >Instagram</a
        >
      </li>
      <li class="footer__item">
        <a
          class="footer__link"
          href="https://www.facebook.com/Auto-Style-Pro-2159176694170320/"
          >Facebook</a
        >
      </li>
    </ul>
    <div class="footer__bottom">
      <BaseLogo class="footer__logo" />
      <p class="footer__copyright">© 2019 AutoStyle pro. Все права защищены</p>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background: rgba(4, 8, 25, 0.95);
  text-align: center;
  padding-top: 34px;
}

.footer__title {
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 16px;
}

.footer__list {
  margin-bottom: 36px;
}

.footer__item {
  margin-bottom: 10px;
}

.footer__link {
  color: #1650fe;
  font-size: 0.8175rem;
  font-weight: 300;
  text-align: center;
}

.footer__link--telephone {
  background-image: url('../assets/images/whatsapp-icon2x.png'),
    url('../assets/images/viber-icon2x.png');
  background-repeat: no-repeat;
  background-position: 40% 0%, 65% 2%;
  background-size: 24px 24px, 22px 24px;
  color: #fff;
  display: inline-block;
  font-size: 1.0625rem;
  font-weight: 900;
  text-decoration: none;
  padding-top: 42px;
}

.footer__link--mail {
  color: #868686;
  text-decoration: none;
}
.footer__bottom {
  background: #040819;
  padding: 17px 0 21px;
}

.footer__logo {
  margin-bottom: 8px;
  width: 67px;
  height: 27px;
}

.footer__copyright {
  color: rgba(229, 229, 229, 0.77);
  font-weight: 300;
  font-size: 0.75rem;
  text-align: center;
}
</style>

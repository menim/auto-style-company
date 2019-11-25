<script>
import HamburgerMenuIcon from './NavbarHamburgerIcon';

export default {
  name: 'NavbarMenu',
  components: {
    HamburgerMenuIcon,
  },
  data: function() {
    return {
      isShow: false,
    };
  },
};
</script>
<template>
  <div class="menu">
    <HamburgerMenuIcon v-on:toggleMenu="isShow = !isShow" />
    <ul :class="isShow ? 'menu__list' : 'menu__list menu__list--hidden'">
      <li class="menu__item">
        <a v-scroll-to="'#paper-cars'" class="menu__link" href="#">Оклейка</a>
      </li>
      <li class="menu__item">
        <a v-scroll-to="'#license-cars'" class="menu__link" href="#"
          >Лицензия</a
        >
      </li>
      <li class="menu__item">
        <a v-scroll-to="'#packages'" class="menu__link" href="#">Расценки</a>
      </li>
      <li class="menu__item">
        <a v-scroll-to="'#footer'" class="menu__link" href="#">Контакты</a>
      </li>
      <li class="menu__item menu__item--whatsapp"></li>
    </ul>
    <a
      class="whatsapp-link menu__whatsapp-link"
      href="https://api.whatsapp.com/send?phone=79166677773"
      >7 (916) 667 77 73</a
    >
  </div>
</template>
<style scoped>
.menu {
  position: static;
  text-align: right;
}

.menu__list {
  background-color: #040819;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  width: calc(100% - 34px);
  margin-left: 17px;
  padding: 40px 34px;
  position: absolute;
  left: 0;
  top: 100%;
}

.menu__list--hidden {
  visibility: hidden;
  display: none;
}

.menu__item {
  height: 38px;
}

.menu__link {
  color: #fff;
  line-height: 38px;
  letter-spacing: 0.095em;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  width: 100%;
}

.meni__link:hover {
  color: #fff;
}

.menu__link:active {
  border: 1px solid #1650fe;
}

.whatsapp-link {
  color: #fff;
  background-image: url('../assets/images/whatsapp-icon.png');
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: left center;
  display: inline-block;
  font-weight: 500;
  text-decoration: none;
  padding-left: 30px;
}

.menu__whatsapp-link {
  display: none;
}

@media screen and (min-width: 768px) {
  .menu {
    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
  }

  .menu__list {
    display: flex;
    font-size: 0.8rem;
    visibility: visible;
    position: static;
    margin-left: -10px;
    padding: 0;
    width: auto;
  }

  .menu__item {
    height: 72px;
  }

  .menu__link {
    border-bottom: 4px solid transparent;
    display: flex;
    align-items: center;
    transition: border-bottom 300ms ease-in;
    height: 100%;
    padding: 0 15px;
  }

  .menu__link:hover {
    border-bottom: 4px solid #1650fe;
  }

  .menu__link:active {
    border: 0;
    border-bottom: 4px solid #1650fe;
  }

  .menu__whatsapp-link {
    background-size: 15px 15px;
    display: block;
    font-size: 0.8rem;
    margin-left: 15px;
    margin-bottom: 4px;
    padding-left: 23px;
  }
}

@media screen and (min-width: 992px) {
  .menu__list {
    font-size: 0.9rem;
  }

  .menu__link {
    padding: 0 20px;
  }

  .menu__whatsapp-link {
    background-size: 17px 17px;
    display: block;
    font-size: 0.9rem;
    margin-left: 30px;
    padding-left: 30px;
  }
}

@media screen and (min-width: 1200px) {
  .menu__list {
    font-size: 1rem;
  }

  .menu__link {
    padding: 0 30px;
  }

  .menu__whatsapp-link {
    background-size: 19px 19px;
    font-size: 1rem;
    margin-left: 60px;
  }
}
</style>

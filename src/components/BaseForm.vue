<script>
//import emailjs from "emailjs-com";
import BaseAgreementMessage from "./BaseAgreementMessage";
import BaseError from "./BaseError";
import BaseLoader from "./BaseLoader";
import successEventBus from "../successEventBus";

export default {
  name: "Form",
  components: {
    BaseAgreementMessage,
    BaseError,
    BaseLoader
  },
  data: function() {
    return {
      firstNameError: "",
      telephoneError: "",
      firstName: null,
      telephone: null,
      sendingState: false
    };
  },
  methods: {
    checkForm(event) {
      this.firstNameError = "";
      this.telephoneError = "";
      if (!this.firstName) {
        this.firstNameError = "Введите Ваше имя";
      }
      if (!this.telephone) {
        this.telephoneError = "Введите Ваш телефон";
      } else if (!this.validTelephone(this.telephone)) {
        this.telephoneError = "Номер телефона указан неверно";
      }
      if (!this.firstNameError && !this.telephoneError) {
        this.sendingState = true;
        new Promise(function(resolve) {
          setTimeout(function() {
            resolve();
          }, 1000);
        }).then(() => {
          this.sendingState = false;
          this.firstName = "";
          this.telephone = "";
          successEventBus.$emit("showModal");
        });
        // emailjs
        //   .sendForm(
        //     'gmail',
        //     'contact_form',
        //     event.target,
        //     'user_Re0uFcpXKCgoCQterTvI4'
        //   )
        //   .then(() => {
        //     this.sendingState = false;
        //     this.firstName = '';
        //     this.telephone = '';
        //   });
      }
      event.preventDefault();
    },
    validTelephone(telephone) {
      let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      return re.test(telephone);
    }
  }
};
</script>
<template>
  <form class="form" id="form" @submit.prevent="checkForm" method="post" novalidate="true">
    <h2 class="form__title">Перезвоним в течении минуты и ответим на любой Ваш вопрос:</h2>
    <div class="form__item">
      <label class="form__label" for="user-name">Укажите Ваше имя:</label>
      <input
        class="form__input form__input--user"
        name="user_name"
        v-model="firstName"
        type="text"
        id="user-name"
        placeholder="Имя"
      />
      <BaseError class="form__error" v-show="firstNameError">
        {{
        firstNameError
        }}
      </BaseError>
    </div>
    <div class="form__item form__item--last">
      <label class="form__label" for="user-telephone">Номер телефона:</label>
      <input
        class="form__input form__input--telephone"
        name="user_telephone"
        v-model="telephone"
        type="text"
        id="user-telephone"
        placeholder="+7....."
      />
      <BaseError class="form__error" v-show="telephoneError">
        {{
        telephoneError
        }}
      </BaseError>
    </div>
    <button class="form__button">
      <BaseLoader v-if="sendingState"></BaseLoader>
      <span v-else>Заказать звонок</span>
    </button>
    <BaseAgreementMessage>
      Нажимая кнопку, вы даете согласие на обработку персональных
      данных
    </BaseAgreementMessage>
  </form>
</template>
<style>
.form {
  color: #263651;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  max-width: 340px;
  margin: 0 auto;
  padding: 25px 30px;
}

.form__title {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.45;
  margin-bottom: 15px;
}

.form__item {
  margin-bottom: 21px;
  position: relative;
}

.form__item--last {
  margin-bottom: 32px;
}

.form__label {
  color: rgba(38, 54, 81, 0.8);
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 7px;
}

.form__input {
  background-color: #f5f5f5;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 2px;
  color: #040819;
  font-size: 1.0625rem;
  font-weight: 300;
  text-align: center;
  height: 48px;
  width: 100%;
}

.form__input--telephone {
  background-image: url("../assets/images/mobile-icon.svg");
  background-position: 18px 14px;
  background-repeat: no-repeat;
  background-size: 12px 21px;
}

.form__input--user {
  background-image: url("../assets/images/user-icon.svg");
  background-repeat: no-repeat;
  background-position: 16px 16px;
  background-size: 15px 16px;
}

.form__input::-webkit-input-placeholder {
  color: #040819;
  font-weight: 300;
}

.form__input::-moz-placeholder {
  color: #040819;
  font-weight: 300;
}

.form__input:-ms-input-placeholder {
  color: #040819;
  font-weight: 300;
}

.form__input:-moz-placeholder {
  color: #040819;
  font-weight: 300;
}

.form__input:focus::-webkit-input-placeholder {
  color: transparent;
}
.form__input:focus:-moz-placeholder {
  color: transparent;
} /* FF 4-18 */
.form__input:focus::-moz-placeholder {
  color: transparent;
} /* FF 19+ */
.form__input:focus:-ms-input-placeholder {
  color: transparent;
} /* IE 10+ */

.form__button {
  background-color: #1650fe;
  box-shadow: 0px 5px 0px rgba(32, 32, 32, 0.17);
  border: 0;
  border-radius: 2px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  max-width: 276px;
  width: 100%;
  height: 48px;
  margin-bottom: 19px;
  transition: background-color 300ms ease-in, box-shadow 300ms ease-in;
}

.form__button:hover {
  background-color: #4a78ff;
  box-shadow: 0px 5px 0px rgba(32, 32, 32, 0.39);
}

.form__error {
  text-align: left;
  position: absolute;
  bottom: -15px;
}

.form__error--show {
  display: block;
}

@media screen and (min-width: 768px) {
  .form {
    max-width: 316px;
  }
}

@media screen and (min-width: 1200px) {
  .form {
    max-width: 416px;
  }
}
</style>

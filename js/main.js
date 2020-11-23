/**
 * VUE JS API
 */

const app = new Vue({
    el: '#app',
    data: {
        isShown: true,
        emails: [],
    },
    created(){
      const self = this;

      // Using loop For
      for (var i = 0; i < 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
              self.emails.push(response.data.response);
              console.log('email random:', response.data.response);
            })
            .catch(function (error) {
              console.log('errore:', error);
            })
      // Using forEach loop
      };
    },
    methods: {
        visibleEmail() {
            this.isShown = ! this.isShown;
        },
    }
});
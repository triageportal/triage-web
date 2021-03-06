document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
    var translate = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(translate);
  });

  var langService = {
    install: function (Vue) {
      Vue.getTranslate = function (page) {
        console.log(page)
        const language = localStorage.getItem('triage-language');        
        console.log(language)
        if (language && language != "" && page) {
          console.log(page)
          switch (language) {
            case 'ENG': return page.ENG;
            case 'RUS': return page.RUS;
          } 
        } else {
          return page.ENG;
        }
        return page.ENG;
      }
    }
};

Vue.use(langService);

  const eventBus = new Vue();

  new Vue({
    el: '#navMenu',
    data: function(){
      return {
        nav: {
          title: 'Triage Portal',
          tests: 'Tests',
          howToTest: 'How to test',
          login: 'Login'         
        }
      }
    },
    methods: {
      login: function(){
        let language = 'ENG';
        if (localStorage.getItem('triage-language')) language = localStorage.getItem('triage-language');
        window.location.href = "https://triagetest.startng.app/#/login/" + language;
      }
    },
    created: function() {
      this.nav = Vue.getTranslate(sharedPage).nav
      let self = this;
      eventBus.$on('language', function(){
        self.nav = Vue.getTranslate(sharedPage).nav;
      });
    }
  })

  new Vue({
    el: '#mobile-links',
    data: function(){
      return {
        sidenav: {
          tests: 'Tests',
          howToTest: 'How to test',
          login: 'Login'          
        }
      }
    },
    methods: {
      login: function(){
        let language = 'ENG';
        if (localStorage.getItem('triage-language')) language = localStorage.getItem('triage-language');
        window.location.href = "https://triagetest.startng.app/#/login/" + language;
      }
    },
    created: function() {
      this.sidenav = Vue.getTranslate(sharedPage).nav
      
      let self = this;
      eventBus.$on('language', function(){
        self.sidenav = Vue.getTranslate(sharedPage).nav;
      });
    }
  })

  new Vue({
    el: '#footer',
    data: function(){
      return {
        footer: {
          contactUs: 'Contact us'
        },
        language: 'ENG'
      }
    },
    created: function() {
      this.footer = Vue.getTranslate(sharedPage).footer;
      if (localStorage.getItem('triage-language')) {
        this.language = localStorage.getItem('triage-language');
      }
    },
    methods: {
        translate: function(lang){
          localStorage.setItem('triage-language', lang); 
          eventBus.$emit('language', lang);       
          this.footer = Vue.getTranslate(sharedPage).footer;
          this.language = lang;         
        },
        contactUs: function(){
          const language = localStorage.getItem('triage-language');
          window.location.href = "https://triagetest.startng.app/#/contactus/" + language;
        }
    }
  })
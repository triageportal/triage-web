document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
    var translate = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(translate);
  });

  var langService = {
    install: function (Vue) {
      Vue.getTranslate = function (page) {
        const language = localStorage.getItem('triage-language');
             
        if (language && language != "" && language != 'en') {
          return JSON.parse(localStorage.getItem('portal'));
        }
        return false
      }
    }
};

Vue.use(langService);

  const portalru = {
    shared: {
      footer: {
        contactUs: 'связаться'
      },
      nav: {
        title: 'Tриаж портал',
        tests: 'Tесты',
        howToTest: 'Kак тестировать',
        login: 'Bойти'         
      },
    },
    pages: {
      index: {
        title: 'Tриаж портал',
        welcome: 'Лорем ипсум долор сит амет цонсецтетур адиписицинг елит. Итаяуе, сунт цум тенетур велит атяуе праесентиум ат, ест моллитиа долорес, аспернатур саепе ехплицабо илло темпорибус репеллат? Яуос деленити волуптатум моллитиа магни?',
        triages: [
          {
              id: 1,
              name: 'ацсс',
              link: 'acss',
              description: 'И ам а веры симпле цард. И ам гоод ат цонтаининг смалл битс оф информатион. И ам цонвениент бецаусе И реяуире литтле маркуп то усе еффецтивелы.'
          },
          {
              id: 2,
              name: 'Преждевременная эакуляция',
              link: 'ejacul',
              description: 'И ам а веры симпле цард. И ам гоод ат цонтаининг смалл битс оф информатион. И ам цонвениент бецаусе И реяуире литтле маркуп то усе еффецтивелы.'
          },
      ],
      learnMoreButton: 'подробнее'
      },
      triagesPage: {
        title: 'тесты на ваше....',
        triages: [
          {
              id: 1,
              name: 'ацсс',
              link: 'acss',
              description: 'И ам а веры симпле цард. И ам гоод ат цонтаининг смалл битс оф информатион. И ам цонвениент бецаусе И реяуире литтле маркуп то усе еффецтивелы.'
          },
          {
              id: 2,
              name: 'Преждевременная эакуляция',
              link: 'ejacul',
              description: 'И ам а веры симпле цард. И ам гоод ат цонтаининг смалл битс оф информатион. И ам цонвениент бецаусе И реяуире литтле маркуп то усе еффецтивелы.'
          },
      ],
      learnMoreButton: 'подробнее'
      },
      howToTest: {
        title: 'Как Проводить Диагностику'
      }
    }
  }

  const portalen = {
    shared: {
      footer: {
        contactUs: 'Contact us'
      },
      nav: {
        title: 'Triage Portal',
          tests: 'Tests',
          howToTest: 'How to test',
          login: 'Login'         
      },
    },
    pages: {
      index: {
        title: 'Triage Portal',
        triages: [
          {
              id: 1,
              name: 'ACSS',
              link: 'acss',
              description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          },
          {
              id: 2,
              name: 'PM Ejacul',
              link: 'ejacul',
              description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          },
        ],
        learnMoreButton: 'Learn more'
      },
      triagesPage: {
        title: 'Triages at your service',
        triages: [
          {
              id: 1,
              name: 'ACSS',
              link: 'acss',
              description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          },
          {
              id: 2,
              name: 'PM Ejacul',
              link: 'ejacul',
              description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          },
        ],
        learnMoreButton: 'Learn more'
      }
    },
    howToTest: {
      title: 'How To Test'
    }
  }

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
    created: function() {
      if (Vue.getTranslate()) {
        this.nav = Vue.getTranslate().shared.nav;
      }
      let self = this;
      eventBus.$on('portal', function(res){
        self.nav = res.shared.nav;
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
    created: function() {
      if (Vue.getTranslate()) {
        this.nav = Vue.getTranslate().shared.nav;
      }
      let self = this;
      eventBus.$on('portal', function(res){
        self.sidenav = res.shared.nav;
      });
    }
  })

  new Vue({
    el: '#footer',
    data: function(){
      return {
        footer: {
          contactUs: 'Contact us'
        }
      }
    },
    created: function() {
      if (Vue.getTranslate()) {
        this.footer = Vue.getTranslate().shared.footer;
      }
    },
    methods: {
        translate: function(lang){
          console.log(lang)
          console.log(localStorage.getItem('triage-language'));
          if (lang != localStorage.getItem('triage-language')) { //if chosen lang not the same as current
            console.log(lang)
            axios.get('')
            .then(res => {
              if (lang == 'en') {
                res =  portalen
              } else {
                res = portalru
              }
              eventBus.$emit('portal', res);
              eventBus.$emit('language', lang);
              localStorage.setItem('portal', JSON.stringify(res));
              localStorage.setItem('triage-language', lang);
              this.footer = res.shared.footer;
            })
            .catch(error => console.log(error))
          }
          
        }
    }
  })
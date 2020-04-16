new Vue({
    el: '#triagesPage',
    data: function() {
        return {
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
    created: function() {
        if (Vue.getTranslate()) {
            const page = Vue.getTranslate().pages.triagesPage;
            this.triages = page.triages;
            this.title = page.title;
            this.learnMoreButton = page.learnMoreButton;
          }
          let self = this;
          eventBus.$on('portal', function(res){
            self.triages = res.pages.triagesPage.triages;
            self.title = res.pages.triagesPage.title;
            self.learnMoreButton = res.pages.triagesPage.learnMoreButton;
          });
    }
})
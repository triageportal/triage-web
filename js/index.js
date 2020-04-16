

new Vue({
    el: '#index',
    data: function() {
        return {
            title: 'Triage Portal',
            welcome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit voluptates quos adipisci nemo ipsam animi ea nulla. Laudantium quae soluta rerum esse voluptatibus aliquam at voluptates velit facere ipsa.',
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
            learnMoreButton: 'Learn More'
        }
    },
    created: function() {
        if (Vue.getTranslate()) {
            const index = Vue.getTranslate().pages.index;
            this.triages = index.triages;
            this.title = index.title;
            this.welcome = index.welcome;
            this.learnMoreButton = index.learnMoreButton;
          }
          let self = this;
          eventBus.$on('portal', function(res){
            self.triages = res.pages.index.triages;
            self.title = res.pages.index.title;
            self.welcome = res.pages.index.welcome;
            self.learnMoreButton = res.pages.index.learnMoreButton;
          });
    }
})


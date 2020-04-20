

new Vue({
    el: '#index',
    data: function() {
        return {
            title: '',
            welcome: '',
            triages: [],
            learnMoreButton: ''
        }
    },
    created: function() {
        
            const index = Vue.getTranslate(indexPage);
            this.triages = index.triages;
            this.title = index.title;
            this.welcome = index.welcome;
            this.learnMoreButton = index.learnMoreButton;
         
          let self = this;
          eventBus.$on('language', function(){
            const index = Vue.getTranslate(indexPage);
            self.triages = index.triages;
            self.title = index.title;
            self.welcome = index.welcome;
            self.learnMoreButton = index.learnMoreButton;
          });
    }
})


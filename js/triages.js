new Vue({
    el: '#triagesPage',
    data: function() {
        return {
            /* ENG by default */
            title: '',
            triages: [],
            learnMoreButton: ''
        }
    },
    created: function() {
        
            const page = Vue.getTranslate(triagesPage);
            this.triages = page.triages;
            this.title = page.title;
            this.learnMoreButton = page.learnMoreButton;
          
          let self = this;
          eventBus.$on('language', function(){
            const page = Vue.getTranslate(triagesPage);
            self.triages = page.triages;
            self.title = page.title;
            self.learnMoreButton = page.learnMoreButton;
          });
    }
})
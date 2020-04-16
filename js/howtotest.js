new Vue({
    el: '#howToTest',
    data: function(){
        return {
            title: 'How To Test'
        }
    },
    created: function() {
        if (Vue.getTranslate()) {
            const page = Vue.getTranslate().pages.howToTest;
            this.title = page.title;
          }
          let self = this;
          eventBus.$on('portal', function(res){
            self.title = res.pages.howToTest.title;
          });
    }
})
new Vue({
    el: '#howToTest',
    data: function(){
        return {
            title: 'How To Test'
        }
    },
    created: function() {
        const page = Vue.getTranslate(howToTest);
        this.title = page.title;

        let self = this;
        eventBus.$on('language', function(){
            const page = Vue.getTranslate(howToTest);
            self.title = page.title;
        });
    }
})
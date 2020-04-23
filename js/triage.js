var triageAcssEn = {
    name: 'ACSS',
    data: [
        {
            header: 'About ACSS First Paragraph',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt cum tenetur velit atque praesentium at, est mollitia dolores, aspernatur saepe explicabo illo temporibus repellat? Quos deleniti voluptatum mollitia magni?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        },
        {
            header: 'About ACSS Second Paragraph',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt cum tenetur velit atque praesentium at, est mollitia dolores, aspernatur saepe explicabo illo temporibus repellat? Quos deleniti voluptatum mollitia magni?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        }
    ],
    helpFullLinks: 'Helpfull links',
    links: [
        {
            description: 'link1',
            link: '#'
        },
        {
            description: 'link2',
            link: '#'
        },
        {
            description: 'link3',
            link: '#'
        },
        {
            description: 'link4',
            link: '#'
        },
    ]
}
var triageAcssRu = {
    name: 'АСЦЦ',
    data: [
        {
            header: 'АСЦЦ Первый Параграф',
            paragraph: 'Лорем ипсум долор сит амет цонсецтетур адиписицинг елит. Итаяуе, сунт цум тенетур велит атяуе праесентиум ат, ест моллитиа долорес, аспернатур саепе ехплицабо илло темпорибус репеллат? Яуос деленити волуптатум моллитиа магни?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        },
        {
            header: 'АСЦЦ Второй Параграф',
            paragraph: 'Лорем ипсум долор сит амет цонсецтетур адиписицинг елит. Итаяуе, сунт цум тенетур велит атяуе праесентиум ат, ест моллитиа долорес, аспернатур саепе ехплицабо илло темпорибус репеллат? Яуос деленити волуптатум моллитиа магни?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        }
    ],
    helpFullLinks: 'полезные ссылки',
    links: [
        {
            description: 'link1',
            link: '#'
        },
        {
            description: 'link2',
            link: '#'
        },
        {
            description: 'link3',
            link: '#'
        },
        {
            description: 'link4',
            link: '#'
        },
    ]
}
var triageEjaculEn = {
    name: 'PM Ejacul',
    data: [
        {
            header: 'PM Ejacul First Paragraph',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt cum tenetur velit atque praesentium at, est mollitia dolores, aspernatur saepe explicabo illo temporibus repellat? Quos deleniti voluptatum mollitia magni?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        },
        {
            header: 'PM Ejacul Second Paragraph',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt cum tenetur velit atque praesentium at, est mollitia dolores, aspernatur saepe explicabo illo temporibus repellat? Quos deleniti voluptatum mollitia magni?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        }
    ],
    helpFullLinks: 'Helpfull links',
    links: [
        
    ]
}
var triageEjaculRu = {
    name: 'Преждевременная эакуляция',
    data: [
        {
            header: 'Преждевременная эакуляция Первый Параграф',
            paragraph: 'Лорем ипсум долор сит амет цонсецтетур адиписицинг елит. Итаяуе, сунт цум тенетур велит атяуе праесентиум ат, ест моллитиа долорес, аспернатур саепе ехплицабо илло темпорибус репеллат? Яуос деленити волуптатум моллитиа магни?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        },
        {
            header: 'Преждевременная эакуляция Второй Параграф',
            paragraph: 'Лорем ипсум долор сит амет цонсецтетур адиписицинг елит. Итаяуе, сунт цум тенетур велит атяуе праесентиум ат, ест моллитиа долорес, аспернатур саепе ехплицабо илло темпорибус репеллат? Яуос деленити волуптатум моллитиа магни?',
            img: '/images/photo_2020-04-15_14-36-41.jpg'
        }
    ],
    helpFullLinks: 'полезные ссылки',
    links: [
        
    ]
}

new Vue({
    el: '#aboutTriage',
    data: function(){
        return {
            triage: {}
        }
    },
    methods: {
        getTriage: function(id, lang){
            if (id) { 
                axios.get('')
                .then(res => {
                    this.triage = this.fakeapi(id, lang);;
                    console.log(this.triage)
                })
                .catch(error => console.log(error))
            } else {
                console.log('modal')
            }
        },
        fakeapi(id, lang){
            if (lang == 'RUS') {
                if (id == '1') {
                    return triageAcssRu;
                } 
                return triageEjaculRu;
            } else {
                if (id == 1) return triageAcssEn;
            }
            return triageEjaculEn;
        } 
    },
    created: function() {
        const triageId = window.location.search.substring(1);
        const language = localStorage.getItem('triage-language');
        this.getTriage(triageId, language);
        let self = this;
        eventBus.$on('language', function(language){
            self.getTriage(triageId, language);
        });
    }
})
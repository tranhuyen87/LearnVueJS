var vueTest = new Vue({
    el: '#app',
    data: {
        title: 'Hunter Marvel Captain - DSMH00911XNH Blue',
        URL: 'http://sub7.lv8.jp/ie/',
        target: '_blank',
        price: 890000,
        check: true
    },
    methods: {
        formatPrice() {
            const number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
});


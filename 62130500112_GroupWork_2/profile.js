    const app = {
        data() {
            return {
                msg: 'Hello, Vue3' ,
                firstname: 'Thitikorn' ,
                lastname: 'Panyawachirayan' ,
                status: 'IT Student' ,
                image: './images/1.jpg' ,

                
            }
        }

    }
    Vue.createApp(app).mount('#app')
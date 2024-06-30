<template>
    <div class="cont">
        <div class="form-cont">
            <h1 class="form-title">Оставте заявку на <br/>консультацию</h1>
            <p class="form-subtitle">Наша команда специалистов<br/> поможет вам в выборе<br/> подходящей сплит-системы</p>
        </div>
        <form :style="formCreateOrder" class="form-create-application"  @submit.prevent="" novalidate>
            <div>
                <label for="name"></label>
                <input :style="errorStyleName" class="input-create-application" placeholder="Имя" type="text" v-model="User.name" >
            </div>
            <p  class="error-message-create-order">{{ ErrorMessageDiscount.errorName }}</p>
            <div>
                <label for="surname"></label>
                <input :style="errorStyleNumber" class="input-create-application" placeholder="Номер телефона" type="number" v-model="User.number" >
            </div>
            <p class="error-message-create-order">{{ ErrorMessageDiscount.errorNumber }}</p>
            <button @click="sendForm" class="send-application">Отправить</button>
        </form>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            User: {
                name: '',
                number: ''
            },
            ErrorMessageDiscount: {
                errorName: '',
                errorNumber: ''
            },
            errorStyleName: {
                    border: '2px solid black',
                },
            errorStyleNumber: {
                    border: '2px solid black',
                }
        }
    },
    methods: {
        sendForm() {
            if (this.User.name.length === 0) {
                this.ErrorMessageDiscount.errorName = 'Данное поле должно быть заполнено'
                this.errorStyleName.border = '2px solid red'
            } else if (this.User.name.length != 0) {
                this.ErrorMessageDiscount.errorName = ''
                this.errorStyleName.border = '2px solid black'
            }

            if (this.User.name.includes(' ')) {
                this.ErrorMessageDiscount.errorName = 'Введите корректное имя'
                this.errorStyleName.border = '2px solid red'
            }

            if (this.User.name.length > 12) {
                this.ErrorMessageDiscount.errorName = 'Имя слишком длинное'
                this.errorStyleName.border = '2px solid red'
            }

            // if (this.User.number.length === 0) {
            //     this.ErrorMessageDiscount.errorNumber = 'Данное поле должно быть заполнено'
            // } else if (this.User.number.length != 0 && this.User.number.length < 12) {
            //     this.ErrorMessageDiscount.errorNumber = ''
            // }

            // if (this.User.number.length > 12) {
            //     this.ErrorMessageDiscount.errorNumber = 'Введите корректный номер'
            // } 
        }
        

            
        }
    }
    
</script>

<style>

body {
    background-color: #FAF8F8;
    margin: 0;
    padding: 0;
}

.cont {
    width: 100%;
    height: 360px;
    background-color: white;
    display: flex;
    align-items: center;
}

.form-cont {
    margin-left: 180px;
}

.form-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 30px;
}

.form-subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
}

.form-create-application {
    text-align: center;
    margin-left: 850px;
}

.input-create-application {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 13px;
    padding: 10px;
    border-radius: 16px;
    width: 300px;
    height: 40px;
    background-color: rgb(255, 255, 255);
}

.send-application {
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 13px;
    outline: none;
    border-radius: 14px;
    width: 272px;
    height: 50px;
    background: #d2d2d2;
}

</style>
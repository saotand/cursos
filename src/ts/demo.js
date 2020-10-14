"use strict";
/* eslint-disable no-console */
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
// import axios from 'axios'
exports["default"] = {
    // Nombre del Token
    token: 'token',
    // Token lang
    langtoken: 'lang',
    // Salt de encriptacion
    salt: 'Cpvz13A1otc',
    //  Constante para final de las URL y forzar formato json
    format: '?format=json',
    // Colores de Vistas
    colors: ['', 'success', 'info', 'warning', 'error', 'primary'],
    // Tipos de usuario
    user_types: ['Usuario', 'Vendedor', 'Mayorista', 'Supervisor', 'Agente', 'Administrador'],
    // Crear url con formato json
    url: function (url) { return url + this.format; },
    // Establecer el Token
    setToken: function (payload) { return sessionStorage.setItem(this.token, payload); },
    // Obtener el token (Recursivo)
    getToken: function () { return document.sessionStorage.getItem(this.token); },
    // Eliminar el Token
    delToken: function () { return document.sessionStorage.removeItem(this.token); },
    // set load lang token
    langToken: function (value) {
        var langtoken = '';
        if (value) {
            sessionStorage.setItem(this.langtoken, value);
            langtoken = value;
        }
        else {
            langtoken = sessionStorage.getItem(this.langtoken);
            if (!langtoken) {
                sessionStorage.setItem(this.langtoken, 'es');
                langtoken = 'es';
            }
        }
        return langtoken;
    },
    // Verificar el Token
    verify: function (Token) { return jsonwebtoken_1["default"].verify(Token, this.salt); },
    // Creamos el objeto options para las consultas al api con autorizacion
    options: function () {
        var Token = this.getToken();
        var options = {};
        if (Token) {
            options = { headers: { Authorization: Token } };
        }
        return options;
    },
    // Formato Correo Eletrónico
    formatEmail: function (email) {
        var regexemail = /^[a-zA-Z0-9!#$&*?^{}˜.Çç-]+(\.[a-zA-Z0-9!#$&*?^{}˜.Çç-]+)*@([a-zA-Z0-9]+([a-zA-Z0-9-]*)\.)+[a-zA-Z]+$/;
        var validemail = false;
        if (email !== undefined) {
            validemail = email.match(regexemail);
        }
        return validemail;
    },
    // Devuelve un numero segun el nivel de seguridad de una contraseña 0=nula, 1=media, 2=alta
    passStrength: function (pass) {
        if (pass) {
            var strongregex = new RegExp('"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.-])(?=.{8,})');
            var mediumregex = new RegExp('"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
            if (strongregex.test(pass)) {
                return 2;
            }
            else if (mediumregex.test(pass)) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return false;
        }
    },
    arraymeter: function (array, value, def) {
        if (value === void 0) { value = false; }
        if (def === void 0) { def = false; }
        if (value !== false) {
            return array[value];
        }
        return def;
    },
    // Obtiene los datos de repuesta de una peticion Axios
    getdata: function (response) {
        var data = null;
        if (response !== undefined) {
            if (response.data !== undefined) {
                if (response.data.data !== undefined) {
                    data = response.data.data;
                }
                else {
                    return false;
                }
            }
            else {
                return response.data;
            }
        }
        else {
            return false;
        }
        return data;
    },
    // Objeto error para el toast
    error: function (error) {
        // Holder para el error
        var message = false;
        var type = this.colors[4];
        // Verificamos si el error es enviado desde el backend
        if (error.response !== undefined) {
            // Asignamos el error del backend al holder
            message = error.response.data.error.message;
            type = this.colors[4];
        }
        else {
            // Asignamos el error enviado por el navegador
            message = error;
            type = this.colors[3];
        }
        // Retornamos un objeto con el formato de Error
        return { text: message, type: type };
    },
    // Cambia formato de fecha DD/MM/AAAA -> AAAA-MM-DD
    parseDate: function (date) {
        if (!date)
            return null;
        var _a = date.split('/'), month = _a[0], day = _a[1], year = _a[2];
        return year + "-" + month.padStart(2, '0') + "-" + day.padStart(2, '0');
    },
    // Cambia formato de fecha a AAAA-MM-DD -> DD/MM/AAAA
    formatDate: function (date) {
        if (!date)
            return null;
        var _a = date.split('-'), year = _a[0], month = _a[1], day = _a[2];
        return day + "/" + month + "/" + year;
    },
    // Format Phone Number
    formatPhone: function (phone) {
        return phone;
    },
    // Animacion de elementos CSS con [animatecss]
    animateCSS: function (element, animationName, callback) {
        var node = document.querySelector(element);
        node.classList.add('animated', animationName);
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName);
            node.removeEventListener('animationend', handleAnimationEnd);
            if (typeof callback === 'function')
                callback();
        }
        node.addEventListener('animationend', handleAnimationEnd);
    }
};

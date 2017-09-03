(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.netlifyIdentity = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var styles = require('./styles.csjs');
var Nanocomponent = require('nanocomponent');
var html = {};
var LoginForm = function (_Nanocomponent) {
    _inherits(LoginForm, _Nanocomponent);
    function LoginForm() {
        _classCallCheck(this, LoginForm);
        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));
        _this.state = {};
        _this.emit = null;
        _this.email = '';
        _this.password = '';
        _this.handleEmailInput = _this.handleInput.bind(_this, 'email');
        _this.handlePasswordInput = _this.handleInput.bind(_this, 'password');
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    _createClass(LoginForm, [
        {
            key: 'createElement',
            value: function createElement(state, emit) {
                this.state = state;
                this.emit = emit;
                return function () {
                    var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                    var bel11 = document.createElement('form');
                    bel11['onsubmit'] = arguments[15];
                    bel11.setAttribute('class', arguments[16]);
                    var bel4 = document.createElement('div');
                    bel4.setAttribute('class', arguments[6]);
                    var bel3 = document.createElement('label');
                    var bel0 = document.createElement('span');
                    bel0.setAttribute('class', arguments[0]);
                    ac(bel0, ['\n              Enter your email\n            ']);
                    var bel1 = document.createElement('input');
                    bel1.setAttribute('value', arguments[1]);
                    bel1['oninput'] = arguments[2];
                    bel1.setAttribute('type', 'email');
                    bel1.setAttribute('placeholder', 'Email');
                    bel1.setAttribute('required', 'required');
                    bel1.setAttribute('class', arguments[3]);
                    var bel2 = document.createElement('div');
                    bel2.setAttribute('class', arguments[4] + ' ' + arguments[5]);
                    ac(bel3, [
                        '\n            ',
                        bel0,
                        '\n            ',
                        bel1,
                        '\n            ',
                        bel2,
                        '\n          '
                    ]);
                    ac(bel4, [
                        '\n          ',
                        bel3,
                        '\n        '
                    ]);
                    var bel9 = document.createElement('div');
                    bel9.setAttribute('class', arguments[13]);
                    var bel8 = document.createElement('label');
                    var bel5 = document.createElement('span');
                    bel5.setAttribute('class', arguments[7]);
                    ac(bel5, ['\n              Enter your password\n            ']);
                    var bel6 = document.createElement('input');
                    bel6.setAttribute('value', arguments[8]);
                    bel6['oninput'] = arguments[9];
                    bel6.setAttribute('type', 'password');
                    bel6.setAttribute('placeholder', 'Password');
                    bel6.setAttribute('required', 'required');
                    bel6.setAttribute('class', arguments[10]);
                    var bel7 = document.createElement('div');
                    bel7.setAttribute('class', arguments[11] + ' ' + arguments[12]);
                    ac(bel8, [
                        '\n            ',
                        bel5,
                        '\n            ',
                        bel6,
                        '\n            ',
                        bel7,
                        '\n          '
                    ]);
                    ac(bel9, [
                        '\n          ',
                        bel8,
                        '\n        '
                    ]);
                    var bel10 = document.createElement('button');
                    bel10.setAttribute('type', 'submit');
                    bel10.setAttribute('value', 'Login');
                    bel10.setAttribute('class', arguments[14]);
                    ac(bel10, ['Log In']);
                    ac(bel11, [
                        '\n        ',
                        bel4,
                        '\n        ',
                        bel9,
                        '\n        ',
                        bel10,
                        '\n      '
                    ]);
                    return bel11;
                }(styles.visuallyHidden, this.email, this.handleEmailInput, styles.formControl, styles.inputFieldIcon, styles.inputFieldEmail, styles.formGroup, styles.visuallyHidden, this.email, this.handlePasswordInput, styles.formControl, styles.inputFieldIcon, styles.inputFieldPassword, styles.formGroup, styles.btn, this.handleSubmit, styles.form);
            }
        },
        {
            key: 'update',
            value: function update(state, emit) {
                return true;
            }
        },
        {
            key: 'handleInput',
            value: function handleInput(key, ev) {
                this[key] = ev.target.value;
            }
        },
        {
            key: 'handleSubmit',
            value: function handleSubmit(ev) {
                ev.preventDefault();
                this.emit('submit-login', {
                    email: this.email,
                    password: this.password
                });
                this.email = '';
                this.password = '';
                this.render(this.state, this.emit);
                return false;
            }
        }
    ]);
    return LoginForm;
}(Nanocomponent);
exports.LoginForm = LoginForm;
var LogoutForm = function (_Nanocomponent2) {
    _inherits(LogoutForm, _Nanocomponent2);
    function LogoutForm() {
        _classCallCheck(this, LogoutForm);
        var _this2 = _possibleConstructorReturn(this, (LogoutForm.__proto__ || Object.getPrototypeOf(LogoutForm)).call(this));
        _this2.state = {};
        _this2.emit = null;
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }
    _createClass(LogoutForm, [
        {
            key: 'createElement',
            value: function createElement(state, emit) {
                this.state = state;
                this.emit = emit;
                return function () {
                    var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                    var bel3 = document.createElement('form');
                    bel3['onsubmit'] = arguments[1];
                    bel3.setAttribute('class', arguments[2]);
                    var bel1 = document.createElement('label');
                    var bel0 = document.createElement('input');
                    bel0.setAttribute('value', arguments[0]);
                    bel0.setAttribute('readonly', 'readonly');
                    bel0.setAttribute('type', 'email');
                    ac(bel1, [
                        '\n          Email\n          ',
                        bel0,
                        '\n        '
                    ]);
                    var bel2 = document.createElement('input');
                    bel2.setAttribute('type', 'submit');
                    bel2.setAttribute('value', 'Logout');
                    ac(bel3, [
                        '\n        ',
                        bel1,
                        '\n        ',
                        bel2,
                        '\n      '
                    ]);
                    return bel3;
                }(this.state.user && this.state.user.email || '', this.handleSubmit, styles.form);
            }
        },
        {
            key: 'update',
            value: function update(state, emit) {
                return true;
            }
        },
        {
            key: 'handleSubmit',
            value: function handleSubmit(ev) {
                ev.preventDefault();
                this.emit('submit-logout');
                this.render(this.state, this.emit);
                return false;
            }
        }
    ]);
    return LogoutForm;
}(Nanocomponent);
exports.LogoutForm = LogoutForm;
var SignupForm = function (_Nanocomponent3) {
    _inherits(SignupForm, _Nanocomponent3);
    function SignupForm() {
        _classCallCheck(this, SignupForm);
        var _this3 = _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this));
        _this3.state = {};
        _this3.emit = null;
        _this3.name = '';
        _this3.email = '';
        _this3.password = '';
        _this3.handleNameInput = _this3.handleInput.bind(_this3, 'name');
        _this3.handleEmailInput = _this3.handleInput.bind(_this3, 'email');
        _this3.handlePasswordInput = _this3.handleInput.bind(_this3, 'password');
        _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
        return _this3;
    }
    _createClass(SignupForm, [
        {
            key: 'createElement',
            value: function createElement(state, emit) {
                this.state = state;
                this.emit = emit;
                return function () {
                    var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                    var bel16 = document.createElement('form');
                    bel16['onsubmit'] = arguments[22];
                    bel16.setAttribute('class', arguments[23]);
                    var bel4 = document.createElement('div');
                    bel4.setAttribute('class', arguments[6]);
                    var bel3 = document.createElement('label');
                    var bel0 = document.createElement('span');
                    bel0.setAttribute('class', arguments[0]);
                    ac(bel0, ['Enter your full name']);
                    var bel1 = document.createElement('input');
                    bel1['oninput'] = arguments[1];
                    bel1.setAttribute('value', arguments[2]);
                    bel1.setAttribute('type', 'text');
                    bel1.setAttribute('placeholder', 'Name');
                    bel1.setAttribute('required', 'required');
                    bel1.setAttribute('class', arguments[3]);
                    var bel2 = document.createElement('div');
                    bel2.setAttribute('class', arguments[4] + ' ' + arguments[5]);
                    ac(bel3, [
                        '\n            ',
                        bel0,
                        '\n            ',
                        bel1,
                        '\n            ',
                        bel2,
                        '\n          '
                    ]);
                    ac(bel4, [
                        '\n          ',
                        bel3,
                        '\n        '
                    ]);
                    var bel9 = document.createElement('div');
                    bel9.setAttribute('class', arguments[13]);
                    var bel8 = document.createElement('label');
                    var bel5 = document.createElement('span');
                    bel5.setAttribute('class', arguments[7]);
                    ac(bel5, ['Enter your email']);
                    var bel6 = document.createElement('input');
                    bel6['oninput'] = arguments[8];
                    bel6.setAttribute('value', arguments[9]);
                    bel6.setAttribute('type', 'email');
                    bel6.setAttribute('placeholder', 'Email');
                    bel6.setAttribute('autocapitalize', 'off');
                    bel6.setAttribute('required', 'required');
                    bel6.setAttribute('class', arguments[10]);
                    var bel7 = document.createElement('div');
                    bel7.setAttribute('class', arguments[11] + ' ' + arguments[12]);
                    ac(bel8, [
                        '\n            ',
                        bel5,
                        '\n            ',
                        bel6,
                        '\n            ',
                        bel7,
                        '\n          '
                    ]);
                    ac(bel9, [
                        '\n          ',
                        bel8,
                        '\n        '
                    ]);
                    var bel14 = document.createElement('div');
                    bel14.setAttribute('class', arguments[20]);
                    var bel13 = document.createElement('label');
                    var bel10 = document.createElement('span');
                    bel10.setAttribute('class', arguments[14]);
                    ac(bel10, ['Enter a password']);
                    var bel11 = document.createElement('input');
                    bel11['oninput'] = arguments[15];
                    bel11.setAttribute('value', arguments[16]);
                    bel11.setAttribute('type', 'password');
                    bel11.setAttribute('placeholder', 'Password');
                    bel11.setAttribute('required', 'required');
                    bel11.setAttribute('class', arguments[17]);
                    var bel12 = document.createElement('div');
                    bel12.setAttribute('class', arguments[18] + ' ' + arguments[19]);
                    ac(bel13, [
                        '\n            ',
                        bel10,
                        '\n            ',
                        bel11,
                        '\n            ',
                        bel12,
                        '\n          '
                    ]);
                    ac(bel14, [
                        '\n          ',
                        bel13,
                        '\n        '
                    ]);
                    var bel15 = document.createElement('button');
                    bel15.setAttribute('type', 'submit');
                    bel15.setAttribute('value', 'Signup');
                    bel15.setAttribute('class', arguments[21]);
                    ac(bel15, ['Sign Up']);
                    ac(bel16, [
                        '\n        ',
                        bel4,
                        '\n        ',
                        bel9,
                        '\n        ',
                        bel14,
                        '\n        ',
                        bel15,
                        '\n      '
                    ]);
                    return bel16;
                }(styles.visuallyHidden, this.handleNameInput, this.name, styles.formControl, styles.inputFieldIcon, styles.inputFieldName, styles.formGroup, styles.visuallyHidden, this.handleEmailInput, this.email, styles.formControl, styles.inputFieldIcon, styles.inputFieldEmail, styles.formGroup, styles.visuallyHidden, this.handlePasswordInput, this.password, styles.formControl, styles.inputFieldIcon, styles.inputFieldPassword, styles.formGroup, styles.btn, this.handleSubmit, styles.form);
            }
        },
        {
            key: 'update',
            value: function update() {
                return true;
            }
        },
        {
            key: 'handleInput',
            value: function handleInput(key, ev) {
                this[key] = ev.target.value;
            }
        },
        {
            key: 'handleSubmit',
            value: function handleSubmit(ev) {
                ev.preventDefault();
                this.emit('submit-signup', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                this.name = '';
                this.email = '';
                this.password = '';
                this.render(this.state, this.emit);
                return false;
            }
        }
    ]);
    return SignupForm;
}(Nanocomponent);
exports.SignupForm = SignupForm;
},{"./styles.csjs":5,"/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js":50,"nanocomponent":39}],2:[function(require,module,exports){
'use strict';
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var styles = require('./styles.csjs');
var Nanocomponent = require('nanocomponent');
var html = {};
var cn = require('classnames');
var Header = function (_Nanocomponent) {
    _inherits(Header, _Nanocomponent);
    function Header() {
        _classCallCheck(this, Header);
        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
        _this.page = 'login';
        _this.emit = 'null';
        _this.navigateLoginPage = _this.navigateLoginPage.bind(_this);
        _this.navigateSignupPage = _this.navigateSignupPage.bind(_this);
        return _this;
    }
    _createClass(Header, [
        {
            key: 'navigateLoginPage',
            value: function navigateLoginPage() {
                this.emit('navigate', 'login');
            }
        },
        {
            key: 'navigateSignupPage',
            value: function navigateSignupPage() {
                this.emit('navigate', 'signup');
            }
        },
        {
            key: 'createElement',
            value: function createElement(state, emit) {
                var page = state.page, message = state.message, disabled = state.disabled;
                this.page = page;
                this.emit = emit;
                this.message = message;
                this.disabled = disabled;
                var loginClass = cn(_defineProperty({}, styles.active, page === 'login'));
                var signupClass = cn(_defineProperty({}, styles.active, page === 'signup'));
                return function () {
                    var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                    var bel2 = document.createElement('div');
                    bel2.setAttribute('class', arguments[10]);
                    var bel0 = document.createElement('button');
                    if (arguments[0] && 'disabled')
                        bel0.setAttribute('disabled', 'disabled');
                    bel0['onclick'] = arguments[1];
                    bel0.setAttribute('class', arguments[2] + ' ' + arguments[3] + ' ' + arguments[4]);
                    ac(bel0, ['Sign Up']);
                    var bel1 = document.createElement('button');
                    if (arguments[5] && 'disabled')
                        bel1.setAttribute('disabled', 'disabled');
                    bel1['onclick'] = arguments[6];
                    bel1.setAttribute('class', arguments[7] + ' ' + arguments[8] + ' ' + arguments[9]);
                    ac(bel1, ['Log In']);
                    ac(bel2, [
                        '\n        ',
                        bel0,
                        '\n        ',
                        bel1,
                        '\n      '
                    ]);
                    return bel2;
                }(disabled, this.navigateSignupPage, styles.btn, styles.btnHeader, signupClass, disabled, this.navigateLoginPage, styles.btn, styles.btnHeader, loginClass, styles.header);
            }
        },
        {
            key: 'update',
            value: function update(state, emit) {
                var page = state.page, message = state.message, disabled = state.disabled;
                if (this.page !== page)
                    return true;
                if (this.message !== message)
                    return true;
                if (this.disabled !== disabled)
                    return true;
                return false;
            }
        }
    ]);
    return Header;
}(Nanocomponent);
module.exports = Header;
},{"./styles.csjs":5,"/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js":50,"classnames":8,"nanocomponent":39}],3:[function(require,module,exports){
'use strict';
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var styles = require('./styles.csjs');
var Nanocomponent = require('nanocomponent');
var html = {};
var Header = require('./header');
var Providers = require('./providers');
var _require = require('./forms'), SignupForm = _require.SignupForm, LoginForm = _require.LoginForm, LogoutForm = _require.LogoutForm;
var Modal = function (_Nanocomponent) {
    _inherits(Modal, _Nanocomponent);
    function Modal(opts) {
        _classCallCheck(this, Modal);
        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));
        opts = Object.assign({}, opts);
        _this.state = {};
        _this.emit = null;
        _this.header = new Header();
        _this.providers = new Providers();
        _this.signupForm = new SignupForm();
        _this.loginForm = new LoginForm();
        _this.logoutForm = new LogoutForm();
        _this.close = _this.close.bind(_this);
        return _this;
    }
    _createClass(Modal, [
        {
            key: 'close',
            value: function close() {
                this.emit('close');
            }
        },
        {
            key: 'createElement',
            value: function createElement(state, emit) {
                this.state = state;
                this.emit = emit;
                if (this.state.open) {
                    return this.layout(state, emit);
                } else {
                    return placeHolder();
                }
            }
        },
        {
            key: 'update',
            value: function update(state, emit) {
                return true;
            }
        },
        {
            key: 'layout',
            value: function layout(state, emit) {
                var page = state.page, submitting = state.submitting, message = state.message, user = state.user;
                if (page === 'logout') {
                    return function () {
                        var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                        var bel6 = document.createElement('div');
                        bel6.setAttribute('role', 'dialog');
                        bel6.setAttribute('class', arguments[9]);
                        var bel3 = document.createElement('div');
                        bel3.setAttribute('class', arguments[6]);
                        var bel2 = document.createElement('div');
                        bel2.setAttribute('class', arguments[4]);
                        var bel1 = document.createElement('button');
                        bel1['onclick'] = arguments[1];
                        bel1.setAttribute('class', arguments[2] + ' ' + arguments[3]);
                        var bel0 = document.createElement('span');
                        bel0.setAttribute('class', arguments[0]);
                        ac(bel0, ['Close']);
                        ac(bel1, [
                            '\n                  ',
                            bel0,
                            '\n                '
                        ]);
                        ac(bel2, [
                            '\n                ',
                            bel1,
                            '\n                ',
                            arguments[5],
                            '\n              '
                        ]);
                        ac(bel3, [
                            '\n              ',
                            bel2,
                            '\n            '
                        ]);
                        var bel5 = document.createElement('a');
                        bel5.setAttribute('href', 'https://www.netlify.com');
                        bel5.setAttribute('class', arguments[8]);
                        var bel4 = document.createElement('span');
                        bel4.setAttribute('class', arguments[7]);
                        ac(bel5, [
                            '\n              ',
                            bel4,
                            '\n              Coded by Netlify\n            '
                        ]);
                        ac(bel6, [
                            '\n            ',
                            bel3,
                            '\n            ',
                            bel5,
                            '\n          '
                        ]);
                        return bel6;
                    }(styles.visuallyHidden, this.close, styles.btn, styles.btnClose, styles.modalContent, this.formRouter({
                        page: page,
                        submitting: submitting,
                        user: user
                    }, emit), styles.modalDialog, styles.netlifyLogo, styles.callOut, styles.modalContainer);
                } else {
                    return function () {
                        var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                        var bel7 = document.createElement('div');
                        bel7.setAttribute('role', 'dialog');
                        bel7.setAttribute('class', arguments[12]);
                        var bel4 = document.createElement('div');
                        bel4.setAttribute('class', arguments[9]);
                        var bel3 = document.createElement('div');
                        bel3.setAttribute('class', arguments[5]);
                        var bel1 = document.createElement('button');
                        bel1['onclick'] = arguments[1];
                        bel1.setAttribute('class', arguments[2] + ' ' + arguments[3]);
                        var bel0 = document.createElement('span');
                        bel0.setAttribute('class', arguments[0]);
                        ac(bel0, ['Close']);
                        ac(bel1, [
                            '\n                  ',
                            bel0,
                            '\n                '
                        ]);
                        var bel2 = document.createElement('hr');
                        bel2.setAttribute('class', arguments[4]);
                        ac(bel3, [
                            '\n                ',
                            bel1,
                            '\n                ',
                            arguments[6],
                            '\n                ',
                            arguments[7],
                            '\n                ',
                            bel2,
                            '\n                ',
                            arguments[8],
                            '\n              '
                        ]);
                        ac(bel4, [
                            '\n              ',
                            bel3,
                            '\n            '
                        ]);
                        var bel6 = document.createElement('a');
                        bel6.setAttribute('href', 'https://www.netlify.com');
                        bel6.setAttribute('class', arguments[11]);
                        var bel5 = document.createElement('span');
                        bel5.setAttribute('class', arguments[10]);
                        ac(bel6, [
                            '\n              ',
                            bel5,
                            '\n              Coded by Netlify\n            '
                        ]);
                        ac(bel7, [
                            '\n            ',
                            bel4,
                            '\n            ',
                            bel6,
                            '\n          '
                        ]);
                        return bel7;
                    }(styles.visuallyHidden, this.close, styles.btn, styles.btnClose, styles.hr, styles.modalContent, this.header.render({
                        page: page,
                        disabled: submitting,
                        message: message
                    }, emit), this.formRouter({
                        page: page,
                        submitting: submitting
                    }, emit), this.providers.render({}, emit), styles.modalDialog, styles.netlifyLogo, styles.callOut, styles.modalContainer);
                }
            }
        },
        {
            key: 'formRouter',
            value: function formRouter(state, emit) {
                var page = state.page, submitting = state.submitting, user = state.user;
                if (!submitting) {
                    switch (page) {
                    case 'login':
                        return this.loginForm.render({}, emit);
                    case 'signup':
                        return this.signupForm.render({}, emit);
                    case 'logout':
                        return this.logoutForm.render({ user: user }, emit);
                    default:
                        return function () {
                            var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                            var bel0 = document.createElement('div');
                            ac(bel0, [
                                arguments[0],
                                ' missing'
                            ]);
                            return bel0;
                        }(page);
                    }
                } else {
                    return function () {
                        var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                        var bel0 = document.createElement('div');
                        ac(bel0, ['submitting']);
                        return bel0;
                    }();
                }
            }
        }
    ]);
    return Modal;
}(Nanocomponent);
function placeHolder() {
    return function () {
        var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
        var bel0 = document.createElement('div');
        return bel0;
    }();
}
module.exports = Modal;
},{"./forms":1,"./header":2,"./providers":4,"./styles.csjs":5,"/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js":50,"nanocomponent":39}],4:[function(require,module,exports){
'use strict';
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var styles = require('./styles.csjs');
var Nanocomponent = require('nanocomponent');
var html = {};
var Providers = function (_Nanocomponent) {
    _inherits(Providers, _Nanocomponent);
    function Providers() {
        _classCallCheck(this, Providers);
        return _possibleConstructorReturn(this, (Providers.__proto__ || Object.getPrototypeOf(Providers)).apply(this, arguments));
    }
    _createClass(Providers, [
        {
            key: 'createElement',
            value: function createElement(state, emit) {
                this.emit = emit;
                return function () {
                    var ac = require('/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js');
                    var bel4 = document.createElement('div');
                    bel4.setAttribute('class', arguments[16]);
                    var bel0 = document.createElement('button');
                    bel0['onclick'] = arguments[0];
                    bel0.setAttribute('class', arguments[1] + ' ' + arguments[2] + ' ' + arguments[3]);
                    ac(bel0, ['Continue with Google']);
                    var bel1 = document.createElement('button');
                    bel1['onclick'] = arguments[4];
                    bel1.setAttribute('class', arguments[5] + ' ' + arguments[6] + ' ' + arguments[7]);
                    ac(bel1, ['Continue with GitHub']);
                    var bel2 = document.createElement('button');
                    bel2['onclick'] = arguments[8];
                    bel2.setAttribute('class', arguments[9] + ' ' + arguments[10] + ' ' + arguments[11]);
                    ac(bel2, ['Continue with GitLab']);
                    var bel3 = document.createElement('button');
                    bel3['onclick'] = arguments[12];
                    bel3.setAttribute('class', arguments[13] + ' ' + arguments[14] + ' ' + arguments[15]);
                    ac(bel3, ['Continue with Bitbucket']);
                    ac(bel4, [
                        '\n        ',
                        bel0,
                        '\n        ',
                        bel1,
                        '\n        ',
                        bel2,
                        '\n        ',
                        bel3,
                        '\n      '
                    ]);
                    return bel4;
                }(this.login.bind(this, 'google'), styles.providerGoogle, styles.btn, styles.btnProvider, this.login.bind(this, 'github'), styles.providerGitHub, styles.btn, styles.btnProvider, this.login.bind(this, 'gitlab'), styles.providerGitLab, styles.btn, styles.btnProvider, this.login.bind(this, 'bitbucket'), styles.providerBitbucket, styles.btn, styles.btnProvider, styles.providersGroup);
            }
        },
        {
            key: 'update',
            value: function update() {
                return false;
            }
        },
        {
            key: 'login',
            value: function login(provider) {
                this.emit('external-login', { provider: provider });
            }
        }
    ]);
    return Providers;
}(Nanocomponent);
module.exports = Providers;
},{"./styles.csjs":5,"/Users/mbc/netlify/netlify-identity-widget/node_modules/yo-yoify/lib/appendChild.js":50,"nanocomponent":39}],5:[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n\n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    color: ',
    ';\n    font-weight: 500;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    color: ',
    ';\n    font-weight: 500;\n  }\n  :-ms-input-placeholder { /* IE 10+ */\n    color: ',
    ';\n    font-weight: 500;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    color: ',
    ';\n    font-weight: 500;\n  }\n\n  .modalContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    min-height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-sizing: border-box;\n    font-family: ',
    ';\n    font-size: 14px;\n    line-height: 1.5;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    z-index: 99999;\n  }\n\n  .modalContainer::before {\n    content: "";\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #fff;\n    z-index: -1;\n  }\n\n  .modalDialog {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .modalContent {\n    position: relative;\n    padding: ',
    ';\n    background: #fff;\n  }\n\n  @media (min-width: 480px) {\n    .modalContainer::before {\n      background-color: ',
    ';\n      opacity: 0.87;\n    }\n\n    .modalDialog {\n      max-width: 364px;\n      justify-content: center;\n    }\n\n    .modalContent {\n      background: #fff;\n      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07), 0 12px 32px 0 rgba(14, 30, 37, 0.1);\n      border-radius: 8px;\n      margin-top: ',
    ';\n    }\n  }\n\n  .btn {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    margin: 14px 0 0;\n    padding: 6px;\n    outline: 0;\n    cursor: pointer;\n    border: 2px solid ',
    ';\n    border-radius: 4px;\n    background-color: #2d3b41;\n    color: #fff;\n    transition: background-color 0.2s ease;\n    font-family: ',
    ';\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: center;\n    text-decoration: none;\n    white-space: nowrap;\n  }\n\n  .btn:hover,\n  .btn:focus {\n    background-color: ',
    ';\n    text-decoration: none;\n  }\n\n  .btnClose {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    margin: 6px;\n    background: #fff;\n    color: ',
    ';\n  }\n\n  .btnClose::before {\n    content: "\xD7";\n    font-size: 20px;\n    line-height: 22px;\n  }\n\n  .btnClose:hover,\n  .btnClose:focus {\n    background: #e9ebeb;\n    color: ',
    ';\n  }\n\n  .header {\n    display: flex;\n    margin-top: -8px;\n    margin-bottom: ',
    ';\n  }\n\n  .btnHeader {\n    font-size: 16px;\n    line-height: 24px;\n    background: #fff;\n    color: ',
    ';\n    border: 0;\n    border-bottom: 2px solid #e9ebeb;\n    border-radius: 4px 4px 0 0;\n    margin: 0;\n  }\n\n  .btnHeader:focus,\n  .btnHeader.active {\n    background: #fff;\n    color: ',
    ';\n    border-color: ',
    ';\n    font-weight: 700;\n  }\n\n  .btnHeader:hover {\n    background-color: #e9ebeb;\n    color: ',
    ';\n  }\n\n  .form {\n  }\n\n  .formGroup {\n    position: relative;\n    margin-top: 14px;\n  }\n\n  .formControl {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    height: 40px;\n    margin: 0;\n    padding: 6px 12px 6px 34px;\n    border: 2px solid #e9ebeb;\n    border-radius: 4px;\n    background: #fff;\n    color: ',
    ';\n    box-shadow: none;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    transition: box-shadow ease-in-out 0.15s;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\n  .inputFieldIcon {\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n    pointer-events: none;\n  }\n\n  .inputFieldName {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgsNyBDNi4zNDMxNDU3NSw3IDUsNS42NTY4NTQyNSA1LDQgQzUsMi4zNDMxNDU3NSA2LjM0MzE0NTc1LDEgOCwxIEM5LjY1Njg1NDI1LDEgMTEsMi4zNDMxNDU3NSAxMSw0IEMxMSw1LjY1Njg1NDI1IDkuNjU2ODU0MjUsNyA4LDcgWiBNOCwxNSBMMS41LDE1IEMxLjUsMTEuMTM0MDA2OCA0LjQxMDE0OTEzLDggOCw4IEMxMS41ODk4NTA5LDggMTQuNSwxMS4xMzQwMDY4IDE0LjUsMTUgTDgsMTUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIi8+PC9zdmc+);\n  }\n\n  .inputFieldEmail {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE2IDExIj4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xLjE3MDczMTcxLDMgQzAuNTIyMTQ2MzQxLDMgMy45MDI0NTk4N2UtMDgsMy41NDUxMTA4MSAzLjkwMjQ1OTg3ZS0wOCw0LjIyMjIyMTU0IEwzLjkwMjQ1OTg3ZS0wOCwxMi43Nzc3Nzg1IEMzLjkwMjQ1OTg3ZS0wOCwxMy40NTQ4ODkyIDAuNTIyMTQ2MzQxLDE0IDEuMTcwNzMxNzEsMTQgTDE0LjgyOTI2ODMsMTQgQzE1LjQ3Nzg1MzcsMTQgMTYsMTMuNDU0ODg5MiAxNiwxMi43Nzc3Nzg1IEwxNiw0LjIyMjIyMTU0IEMxNiwzLjU0NTExMDgxIDE1LjQ3Nzg1MzcsMyAxNC44MjkyNjgzLDMgTDEuMTcwNzMxNzEsMyBaIE0yLjMzNzQyMTE5LDUuMDAxODY1NjYgQzIuNDU3NTExNzUsNC45ODk1NTIxNCAyLjU2MDcxNDU3LDUuMDM5MzM5OCAyLjYzNjM1OTg1LDUuMTE3Mjg0MzcgTDcuNDgyNjA2MTcsMTAuMTEzMjU0NSBDNy43ODQ0ODgyMiwxMC40MjQ3NDU1IDguMjAzMjc4MjksMTAuNDI0NzY2IDguNTA1ODk2MTksMTAuMTEzMjU0NSBMMTMuMzYzNjQwMiw1LjExNzI4NDM3IEMxMy41MDUxMjU1LDQuOTcxMjA0OTkgMTMuNzUyOTc3OSw0Ljk4MTg5NzIzIDEzLjg4MzkyMjIsNS4xMzk3MzYwMiBDMTQuMDE0ODY2NSw1LjI5NzU3NDgxIDE0LjAwNTI4MjEsNS41NzQwNzQ4OCAxMy44NjM3OTY3LDUuNzIwMTU0MjYgTDExLjExNTg2MDYsOC41NDg0MTE1MiBMMTMuODU4MDU3MSwxMS4yNjc2NDY5IEMxNC4wMjE3ODM1LDExLjQwMzE5ODIgMTQuMDQ4OTM2MywxMS43MDE0OTMyIDEzLjkxMjk4ODIsMTEuODcwOTg4OCBDMTMuNzc3MDQwMSwxMi4wNDA1MDQ5IDEzLjUwODI4OTcsMTIuMDQzNDE5MSAxMy4zNjkzOTgyLDExLjg3Njk0MDQgTDEwLjU3NTQ3MTUsOS4xMDYzOTg2MiBMOS4wMDYwNTI3NSwxMC43MTYxMjQ0IEM4LjQzNDk0MTk1LDExLjMwNDAzMzQgNy41NTMzMDI4NiwxMS4zMDUxNjIxIDYuOTgyNDY4LDEwLjcxNjEyNDQgTDUuNDI0NTI4NSw5LjEwNjM5ODYyIEwyLjYzMDYwMTgzLDExLjg3Njk0MDQgQzIuNDkxNzEwMzMsMTIuMDQzNDM5NyAyLjIyMjk1OTg4LDEyLjA0MDUyNTUgMi4wODcwMTE3OCwxMS44NzA5ODg4IEMxLjk1MTA2MzY3LDExLjcwMTQ5MzIgMS45NzgyMTY1LDExLjQwMzE5ODIgMi4xNDE5NDI5LDExLjI2NzY0NjkgTDQuODg0MTM5MzksOC41NDg0MTE1MiBMMi4xMzYyMDMyOCw1LjcyMDE1NDI2IEMyLjAyODcxNDE0LDUuNjE2MjI4MTYgMS45ODM1NTE0MSw1LjQzODk1NDUzIDIuMDI1OTkxNSw1LjI4NzQ5ODI1IEMyLjA2ODQxMzE5LDUuMTM2MDYyNDkgMi4xOTYwMjc4MSw1LjAxOTAyMjQ5IDIuMzM3NDIxMTksNS4wMDE4NjU2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIvPjwvc3ZnPg==);\n  }\n\n  .inputFieldPassword {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDEyIDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0yLjQ0NTkxMDQ1LDMuNjQzMDg0MjcgQzIuNDQ1OTEwMzgsMi42NzY2MjEzNyAyLjgxODk3NTQ2LDEuNzQ5NzYzOTMgMy40ODI5OTUxOCwxLjA2NjUxMDUyIEM0LjE0NzAxNDksMC4zODMyNTcxMTEgNS4wNDc1NjY0MywtMC4wMDAzOTMwNDg2MTggNS45ODY0NDEwNSwzLjAyMTc0MDY5ZS0wNyBMNi4xMTc1MTg0NywzLjAyMTc0MDY5ZS0wNyBDOC4wNjkyOTIwNSwwLjAwMjQ1Mjc4Mzg0IDkuNjUwNzAwMTMsMS42MzA5OTI4MyA5LjY1MjI4NzQyLDMuNjQwMTE4NzkgTDkuNjUyMjg3NDIsNC42NzgwMzQ0NSBDOS4xMzk1MDEwNSw0LjcwMzI0MDk4IDguNjM2Nzk3NTYsNC43NDYyNDAzNCA4LjEzMTIxMzI1LDQuODAxMTAxNiBMOC4xMzEyMTMyNSwzLjY0MzA4NDI3IEM4LjEzMTIxMzI1LDIuNDk2NjM0MjkgNy4yMjgzNjE2LDEuNTY3MjUyOTUgNi4xMTQ2Mzc2NCwxLjU2NzI1Mjk1IEw1Ljk4MzU2MDIzLDEuNTY3MjUyOTUgQzQuODY5ODM2MjgsMS41NjcyNTI5NSAzLjk2Njk4NDYyLDIuNDk2NjM0MjkgMy45NjY5ODQ2MiwzLjY0MzA4NDI3IEwzLjk2Njk4NDYyLDMuOTYwMzg5OTEgQzMuOTY3NTc5ODgsNC4zNTY0OTE4MiAzLjY3NzAzNTY1LDQuNjg4ODc1OTUgMy4yOTQzMTI2Miw0LjcyOTkzMDI0IEwzLjI3ODQ2ODEsNC43Mjk5MzAyNCBDMy4wNjYyNDA5Miw0Ljc1MzUwMjk2IDIuODU0MjgyODcsNC42ODMxMDg3IDIuNjk1NDU2MTMsNC41MzYzMDM3NiBDMi41MzY2Mjk0LDQuMzg5NDk4ODIgMi40NDU5MDUzMyw0LjE4MDEyMTMzIDIuNDQ1OTEwNDUsMy45NjAzODk5MSBMMi40NDU5MTA0NSwzLjY0MzA4NDI3IFogTTExLjQxNjY2Niw3LjExNTY1MzUyIEwxMS40MTY2NjYsMTIuNjkwNzQzMyBDMTEuNDE3MDQwOCwxMy4wODMxMTQzIDExLjE0NTkyMDMsMTMuNDIwMTM3MSAxMC43NzEzNjE4LDEzLjQ5MjkwMzkgTDEwLjI5MDI2NDQsMTMuNTg2MzE2MyBDOC44NzYwNzU2NCwxMy44NjE1OTU5IDcuNDM5OTcxMzMsMTQuMDAwMDkzNyA2LjAwMDcyMDA1LDEzLjk5OTk5OTggQzQuNTYwOTg3NTgsMTQuMDAwMTg2MiAzLjEyNDM5Njg0LDEzLjg2MTY4OCAxLjcwOTczNTI0LDEzLjU4NjMxNjMgTDEuMjI4NjM3OTIsMTMuNDkyOTAzOSBDMC44NTQwNzk0MDcsMTMuNDIwMTM3MSAwLjU4Mjk1ODg2NywxMy4wODMxMTQzIDAuNTgzMzMzNzIyLDEyLjY5MDc0MzMgTDAuNTgzMzMzNzIyLDcuMTE1NjUzNTIgQzAuNTgyOTU4ODY3LDYuNzIzMjgyNTYgMC44NTQwNzk0MDcsNi4zODYyNTk4MSAxLjIyODYzNzkyLDYuMzEzNDkyOTkgTDEuMjk5MjE4MDYsNi4zMDAxNDgzNiBDNC40MDU5OTg0Nyw1LjY5NTEyMTY3IDcuNTk1NDQxNjIsNS42OTUxMjE2NyAxMC43MDIyMjIsNi4zMDAxNDgzNiBMMTAuNzcyODAyMiw2LjMxMzQ5Mjk5IEMxMS4xNDY3ODgsNi4zODY4ODY0NSAxMS40MTcxNzE2LDYuNzIzNzQ1MTYgMTEuNDE2NjY2LDcuMTE1NjUzNTIgWiIvPjwvc3ZnPg==);\n  }\n\n  .formLabel {\n  }\n\n  .hr {\n    border: 0;\n    border-top: 2px solid #e9ebeb;\n    margin: ',
    ' 0 -1px;\n    text-align: center;\n  }\n\n  .hr::before {\n    content: "or";\n    position: relative;\n    display: inline-block;\n    font-size: 12px;\n    font-weight: 800;\n    line-height: 1;\n    text-transform: uppercase;\n    background-color: #fff;\n    color: ',
    ';\n    padding: 4px;\n    top: -13px;\n  }\n\n  .btnProvider {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .btnProvider::before {\n    content: "";\n    position: absolute;\n    display: inline-block;\n    vertical-align: middle;\n    width: 32px;\n    height: 40px;\n    background-repeat: no-repeat;\n    background-position: left center;\n    top: -2px;\n    left: 14px;\n  }\n\n  .providerGoogle {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerGoogle:hover {\n    background-color: ',
    ';\n  }\n\n  .providerGitHub {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerGitHub:hover {\n    background-color: ',
    ';\n  }\n\n  .providerGitLab {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerGitLab:hover {\n    background-color: ',
    ';\n  }\n\n  .providerBitbucket {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerBitbucket:hover {\n    background-color: ',
    ';\n  }\n\n  .providerGoogle:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNDg4IC0yKSI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wLjY1MjczNDM3NSwzLjI5NTI4MjQ0IEMwLjIzNzk4NDM3NSw0LjEwNTgzMjA2IDIuODQyMTcwOTRlLTE0LDUuMDE2MDQ1OCAyLjg0MjE3MDk0ZS0xNCw1Ljk3OTM4OTMxIEMyLjg0MjE3MDk0ZS0xNCw2Ljk0MjczMjgyIDAuMjM3OTg0Mzc1LDcuODUyOTAwNzYgMC42NTI3MzQzNzUsOC42NjM0NTAzOCBDMS42NTkwNDY4NywxMC42MTY3MDIzIDMuNzI2MDkzNzUsMTEuOTU4Nzc4NiA2LjExOTUzMTI1LDExLjk1ODc3ODYgQzcuNzcxNzgxMjUsMTEuOTU4Nzc4NiA5LjE1ODg1OTM3LDExLjQyNzI1MTkgMTAuMTcyMDE1NiwxMC41MTA0NDI3IEMxMS4zMjc5MDYyLDkuNDY3MzU4NzggMTEuOTk0MjgxMiw3LjkzMjY0MTIyIDExLjk5NDI4MTIsNi4xMTIyNTk1NCBDMTEuOTk0MjgxMiw1LjYyMDYyNTk1IDExLjk1MzQ1MzEsNS4yNjE4NjI2IDExLjg2NTA5MzcsNC44ODk4MTY3OSBMNi4xMTk1MzEyNSw0Ljg4OTgxNjc5IEw2LjExOTUzMTI1LDcuMTA4ODA5MTYgTDkuNDkyMDQ2ODcsNy4xMDg4MDkxNiBDOS40MjQwNzgxMiw3LjY2MDI1OTU0IDkuMDU2OTA2MjUsOC40OTA3MzI4MiA4LjI0MDk1MzEyLDkuMDQ4Nzc4NjMgQzcuNzI0MjAzMTIsOS40MDA5MDA3NiA3LjAzMDY0MDYyLDkuNjQ2NzE3NTYgNi4xMTk1MzEyNSw5LjY0NjcxNzU2IEM0LjUwMTI2NTYyLDkuNjQ2NzE3NTYgMy4xMjc3ODEyNSw4LjYwMzY3OTM5IDIuNjM4MTcxODcsNy4xNjE5ODQ3MyBMMi42Mjg3MTIwNSw3LjE2Mjc2OTU5IEMyLjUwNTM0MTU4LDYuNzk3Mjk0NjggMi40MzQyMTg3NSw2LjM4MTEyMjg1IDIuNDM0MjE4NzUsNS45NzkzODkzMSBDMi40MzQyMTg3NSw1LjU2NzQ1MDM4IDIuNTA4OTg0MzgsNS4xNjg4Mzk2OSAyLjYzMTM3NSw0Ljc5Njc5Mzg5IEMzLjEyNzc4MTI1LDMuMzU1MDk5MjQgNC41MDEyNjU2MiwyLjMxMjAxNTI3IDYuMTE5NTMxMjUsMi4zMTIwMTUyNyBDNy4yNjg2MjUsMi4zMTIwMTUyNyA4LjA0Mzc1LDIuNzk3MDA3NjMgOC40ODU3MzQzNywzLjIwMjMwNTM0IEwxMC4yMTI3OTY5LDEuNTU0NjQxMjIgQzkuMTUyMTA5MzcsMC41OTEyOTc3MSA3Ljc3MTc4MTI1LDguODgxNzg0MmUtMTYgNi4xMTk1MzEyNSw4Ljg4MTc4NDJlLTE2IEMzLjcyNjA5Mzc1LDguODgxNzg0MmUtMTYgMS42NTkwNDY4NywxLjM0MjAzMDUzIDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgTDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPiAgPC9nPjwvc3ZnPg==);\n  }\n\n  .providerGitHub:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04LjAwMDA2NjI1LDAgQzMuNTgyMzMwNzksMCAwLDMuNjcyMzE1ODUgMCw4LjIwMjUzNzczIEMwLDExLjgyNjYzMzggMi4yOTIyNjI0OCwxNC45MDEyOTUgNS40NzA5MzM1NiwxNS45ODU5MDIzIEM1Ljg3MDc1MTM5LDE2LjA2MTgzMTUgNi4wMTc1MzY3NSwxNS44MDc5NjQyIDYuMDE3NTM2NzUsMTUuNTkxMzE0NCBDNi4wMTc1MzY3NSwxNS4zOTU3MTgzIDYuMDEwMTE3OTksMTQuNzQ5NTcyMiA2LjAwNjY3MzU2LDE0LjA2NDE3MTEgQzMuNzgxMDQ3NDEsMTQuNTYwMzYwMiAzLjMxMTQxMzc5LDEzLjA5NjM3ODEgMy4zMTE0MTM3OSwxMy4wOTYzNzgxIEMyLjk0NzQ5NzQsMTIuMTQ4MjgwNiAyLjQyMzE1MDUsMTEuODk2MTc5IDIuNDIzMTUwNSwxMS44OTYxNzkgQzEuNjk3MzA0OTEsMTEuMzg3MDg2IDIuNDc3ODYzNzksMTEuMzk3NTQ0OSAyLjQ3Nzg2Mzc5LDExLjM5NzU0NDkgQzMuMjgxMjA4ODcsMTEuNDU1NDA4NyAzLjcwNDIxMDMxLDEyLjI0MjgxODcgMy43MDQyMTAzMSwxMi4yNDI4MTg3IEM0LjQxNzczNTQ3LDEzLjQ5NjgwNjcgNS41NzU3MjM0NiwxMy4xMzQyNzQ4IDYuMDMyMjQxNzgsMTIuOTI0Njg4MiBDNi4xMDQwNDQ3MiwxMi4zOTQ1NDE0IDYuMzExMzcyNDQsMTIuMDMyNjg4NyA2LjU0MDE2MTQ0LDExLjgyNzg1NjIgQzQuNzYzMjM3NDQsMTEuNjIwNDQyOCAyLjg5NTMwMTE5LDEwLjkxNzExMjEgMi44OTUzMDExOSw3Ljc3NDEyNzk5IEMyLjg5NTMwMTE5LDYuODc4NTk2ODggMy4yMDc4MTYxOCw2LjE0Njg3NzU3IDMuNzE5NTc3NzMsNS41NzI0NDk5OSBDMy42MzY1MTQxNyw1LjM2NTg1MTY2IDMuMzYyNjgyNjgsNC41MzE1ODAxNyAzLjc5NzA3NzIxLDMuNDAxNzQxMzMgQzMuNzk3MDc3MjEsMy40MDE3NDEzMyA0LjQ2ODg3MTg4LDMuMTgxMjg4MjcgNS45OTc2NjUwNyw0LjI0MjUzMjY3IEM2LjYzNTgxMDQ0LDQuMDYwNzkxMzQgNy4zMjAxOTA0NCwzLjk2OTY0OTAyIDguMDAwMDY2MjUsMy45NjY1MjQ5MiBDOC42Nzk5NDIwNiwzLjk2OTY0OTAyIDkuMzY0ODUyLDQuMDYwNzkxMzQgMTAuMDA0MTg5Niw0LjI0MjUzMjY3IEMxMS41MzExMjgxLDMuMTgxMjg4MjcgMTIuMjAxOTk1NCwzLjQwMTc0MTMzIDEyLjIwMTk5NTQsMy40MDE3NDEzMyBDMTIuNjM3NDQ5OCw0LjUzMTU4MDE3IDEyLjM2MzQ4NTgsNS4zNjU4NTE2NiAxMi4yODA0MjIzLDUuNTcyNDQ5OTkgQzEyLjc5MzM3NjEsNi4xNDY4Nzc1NyAxMy4xMDM3NzE0LDYuODc4NTk2ODggMTMuMTAzNzcxNCw3Ljc3NDEyNzk5IEMxMy4xMDM3NzE0LDEwLjkyNDU4MjggMTEuMjMyMjU4MywxMS42MTgyNjk2IDkuNDUwODMwMDYsMTEuODIxMzM2MyBDOS43Mzc3NzY4NywxMi4wNzU4ODI5IDkuOTkzNDU4ODcsMTIuNTc1MDYwMiA5Ljk5MzQ1ODg3LDEzLjM0MDMyOTggQzkuOTkzNDU4ODcsMTQuNDM3ODQxMSA5Ljk4NDE4NTUsMTUuMzIxMTQ3MyA5Ljk4NDE4NTUsMTUuNTkxMzE0NCBDOS45ODQxODU1LDE1LjgwOTU5NDIgMTAuMTI4MTg4NywxNi4wNjUzNjMxIDEwLjUzMzcwMzEsMTUuOTg0ODE1NiBDMTMuNzEwNjUyLDE0Ljg5ODk4NTggMTYsMTEuODI1NDExMyAxNiw4LjIwMjUzNzczIEMxNiwzLjY3MjMxNTg1IDEyLjQxODE5OTIsMCA4LjAwMDA2NjI1LDAgWiBNMi45OTYyODQ5NiwxMS42ODQ2ODgyIEMyLjk3ODY2NTQxLDExLjcyNTQzNzMgMi45MTYxMzU5MSwxMS43Mzc2NjIxIDIuODU5MTcwNDgsMTEuNzA5NjgxIEMyLjgwMTE0NTIyLDExLjY4MjkyMjMgMi43Njg1NTU3MSwxMS42MjczNjc2IDIuNzg3MzY3NTUsMTEuNTg2NDgyNyBDMi44MDQ1ODk2NSwxMS41NDQ1MTEgMi44NjcyNTE2MiwxMS41MzI4Mjk1IDIuOTI1MTQ0MzksMTEuNTYwOTQ2NSBDMi45ODMzMDIxNCwxMS41ODc3MDUxIDMuMDE2NDIxNTcsMTEuNjQzODAzMSAyLjk5NjI4NDk2LDExLjY4NDY4ODIgWiBNMy4zODk3OTkzMiwxMi4wNDQ3MDI0IEMzLjM1MTY0NTc0LDEyLjA4MDk2OTEgMy4yNzcwNjA3NywxMi4wNjQxMjYxIDMuMjI2NDU0MjYsMTIuMDA2ODA1NyBDMy4xNzQxMjU1NSwxMS45NDk2MjEgMy4xNjQzMjIyMSwxMS44NzMxNDg0IDMuMjAzMDA1NywxMS44MzYzMzgyIEMzLjI0MjM1MTU5LDExLjgwMDA3MTUgMy4zMTQ2ODQ0NSwxMS44MTcwNTAzIDMuMzY3MTQ1NjQsMTEuODc0MjM1IEMzLjQxOTQ3NDMyLDExLjkzMjA5ODggMy40Mjk2NzUxMiwxMi4wMDgwMjgxIDMuMzg5Nzk5MzIsMTIuMDQ0NzAyNCBaIE0zLjY1OTc2NTA4LDEyLjUwNTMyODMgQzMuNjEwNzQ4MzMsMTIuNTQwMjM2OCAzLjUzMDU5OTI5LDEyLjUwNzUwMTUgMy40ODEwNTI2MSwxMi40MzQ1NjA2IEMzLjQzMjAzNTgzLDEyLjM2MTYxOTUgMy40MzIwMzU4MywxMi4yNzQxNDQ2IDMuNDgyMTEyNDQsMTIuMjM5MTAwMyBDMy41MzE3OTE1NywxMi4yMDQwNTYgMy42MTA3NDgzMywxMi4yMzU1Njg4IDMuNjYwOTU3MzgsMTIuMzA3OTY2NSBDMy43MDk4NDE2OCwxMi4zODIxMjk5IDMuNzA5ODQxNjgsMTIuNDY5NjA0OCAzLjY1OTc2NTA4LDEyLjUwNTMyODMgWiBNNC4xMTYzMzQ5NSwxMy4wMzg3OTgxIEM0LjA3MjQ4NDgyLDEzLjA4ODM3NjQgMy45NzkwODgwMiwxMy4wNzUwNjUgMy45MTA3Mjk0OCwxMy4wMDc0MjE0IEMzLjg0MDc4MTI0LDEyLjk0MTI3MTggMy44MjEzMDcwMSwxMi44NDc0MTI5IDMuODY1Mjg5NjMsMTIuNzk3ODM0NyBDMy45MDk2Njk2NiwxMi43NDgxMjA3IDQuMDAzNTk2MzksMTIuNzYyMTExMyA0LjA3MjQ4NDgyLDEyLjgyOTIxMTYgQzQuMTQxOTAzMTYsMTIuODk1MjI1MyA0LjE2MzA5OTYsMTIuOTg5NzYzNCA0LjExNjMzNDk1LDEzLjAzODc5ODEgWiBNNC43MDY0MDcxOSwxMy4yMTg4OTE2IEM0LjY4NzA2NTQ2LDEzLjI4MzEzOTUgNC41OTcxMTMwNiwxMy4zMTIzNDMgNC41MDY0OTgyNywxMy4yODUwNDExIEM0LjQxNjAxNTk3LDEzLjI1NjkyNDIgNC4zNTY3OTg0MiwxMy4xODE2NzQxIDQuMzc1MDgwMzYsMTMuMTE2NzQ3IEM0LjM5Mzg5MjE5LDEzLjA1MjA5MTcgNC40ODQyNDIwMSwxMy4wMjE2NjU2IDQuNTc1NTE5MTgsMTMuMDUwODY5MiBDNC42NjU4NjkwMSwxMy4wNzg4NTAzIDQuNzI1MjE5MDUsMTMuMTUzNTU3MSA0LjcwNjQwNzE5LDEzLjIxODg5MTYgWiBNNS4zNzc5MzQxOSwxMy4yOTUyODI1IEM1LjM4MDE4NjI5LDEzLjM2MjkyNjEgNS4zMDMzNDkxOSwxMy40MTkwMjQxIDUuMjA4MjMwMTgsMTMuNDIwMjQ2NyBDNS4xMTI1ODEyNSwxMy40MjI0MiA1LjAzNTIxNDI1LDEzLjM2NzY4MDMgNS4wMzQxNTQ0MiwxMy4zMDExMjMyIEM1LjAzNDE1NDQyLDEzLjIzMjgwMDUgNS4xMDkyNjkzLDEzLjE3NzI0NTggNS4yMDQ5MTgyMywxMy4xNzU2MTU4IEM1LjMwMDAzNzI2LDEzLjE3MzcxNDIgNS4zNzc5MzQxOSwxMy4yMjgwNDY0IDUuMzc3OTM0MTksMTMuMjk1MjgyNSBaIE02LjAzNzYzNDE5LDEzLjI2OTM1NDggQzYuMDQ5MDI3MjksMTMuMzM1MzY4NSA1Ljk4MjkyMDg4LDEzLjQwMzE0NzkgNS44ODg0NjQyNSwxMy40MjEyMTM0IEM1Ljc5NTU5NzM2LDEzLjQzODU5OTcgNS43MDk2MTkyOSwxMy4zOTc4NTA1IDUuNjk3ODI4NzcsMTMuMzMyMzgwMiBDNS42ODYzMDMyMiwxMy4yNjQ3MzY1IDUuNzUzNjAxOTEsMTMuMTk2OTU3MSA1Ljg0NjMzNjMzLDEzLjE3OTQzNSBDNS45NDA5MjU0NCwxMy4xNjI1OTIgNi4wMjU1Nzg3MiwxMy4yMDIyNTQ1IDYuMDM3NjM0MTksMTMuMjY5MzU0OCBaIi8+ICA8L2c+PC9zdmc+);\n  }\n\n  .providerGitLab:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTIpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBMNC40MjgwOTMzMyw0Ljk5NzI4MjU0IEw5LjU4MDA5MzM2LDQuOTk3MjgyNTQgTDcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBaIE03LjAwNDA5MzM2LDEyLjk0OTIzIEwwLjgxNzg5MzMzMyw0Ljk5NzI2OTE3IEw0LjQyODA5MzMzLDQuOTk3MjY5MTcgTDcuMDA0MDkzMzYsMTIuOTQ5MjMgWiBNMC44MTc4OTk5OTksNC45OTcyODkyMyBMNy4wMDQwOTk5OCwxMi45NDkyNSBMMC4yMjg4MzMzMzMsOC4wMTE4ODA4IEMwLjA0MTksNy44NzU2NzE1MiAtMC4wMzYzLDcuNjM0MjEyNyAwLjAzNTEsNy40MTM4MTcxMiBMMC44MTc4OTk5OTksNC45OTcyODkyMyBaIE0wLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIEwyLjM2OTM2NjY3LDAuMjA3OTA0NzE0IEMyLjQ0OTE2NjY3LC0wLjAzODUwMjM1ODggMi43OTY3NjY2NywtMC4wMzg1NjkyMjY1IDIuODc2NTY2NjcsMC4yMDc5MDQ3MTQgTDQuNDI4MSw0Ljk5NzI5NTkxIEwwLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIFogTTcuMDA0MDkzMzYsMTIuOTQ5MjMgTDkuNTgwMDkzMzYsNC45OTcyNjkxNyBMMTMuMTkwMjkzMyw0Ljk5NzI2OTE3IEw3LjAwNDA5MzM2LDEyLjk0OTIzIFogTTEzLjE5MDI5MzMsNC45OTcyODkyMyBMMTMuOTczMDkzMyw3LjQxMzgxNzEyIEMxNC4wNDQ0OTMzLDcuNjM0MjEyNyAxMy45NjYyOTM0LDcuODc1NjcxNTIgMTMuNzc5MzYsOC4wMTE4ODA4IEw3LjAwNDA5MzM2LDEyLjk0OTI1IEwxMy4xOTAyOTMzLDQuOTk3Mjg5MjMgWiBNMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIEw5LjU4MDA5MzM2LDQuOTk3Mjk1OTEgTDExLjEzMTYyNjcsMC4yMDc5MDQ3MTQgQzExLjIxMTQyNjcsLTAuMDM4NTY5MjI2NSAxMS41NTkwMjY3LC0wLjAzODUwMjM1ODggMTEuNjM4ODI2NywwLjIwNzkwNDcxNCBMMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMikiLz4gIDwvZz48L3N2Zz4=);\n  }\n\n  .providerBitbucket:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPiAgICAgIDxwYXRoIGQ9Ik03LDIuNDk4OTQxODdlLTA3IEw3LDIuNDk4OTQxODdlLTA3IEMzLjE1NzIxMjI5LDIuNDk4OTQxODdlLTA3IDAuMDAwNjM2NTM1NDM1LDEuMDIwODQ0MjQgMC4wMDA2MzY1MzU0MzUsMi4zMTM5MTM1OSBDMC4wMDA2MzY1MzU0MzUsMi42NTQxOTUxMyAwLjgyNDA5MTAyMyw3LjQ4NjE5MiAxLjE2NzE5NzE3LDkuMzkxNzY3NTkgQzEuMzA0NDM5MzcsMTAuMjc2NDk5OSAzLjU2ODkzOTUzLDExLjUwMTUxMyA3LDExLjUwMTUxMyBMNywxMS41MDE1MTMgQzEwLjQzMTA2MDIsMTEuNTAxNTEzIDEyLjYyNjkzODYsMTAuMjc2NDk5OSAxMi44MzI4MDMyLDkuMzkxNzY3NTkgQzEzLjE3NTkwODYsNy40ODYxOTIgMTMuOTk5MzYzMiwyLjY1NDE5NTEzIDEzLjk5OTM2MzIsMi4zMTM5MTM1OSBDMTMuOTMwNzQyMSwxLjAyMDg0NDI0IDEwLjg0Mjc4NzQsMi40OTg5NDE4N2UtMDcgNywyLjQ5ODk0MTg3ZS0wNyBMNywyLjQ5ODk0MTg3ZS0wNyBaIE03LDkuOTM2MjE4MzEgQzUuNzY0ODE4MjgsOS45MzYyMTgzMSA0LjgwNDEyMTI2LDguOTgzNDI5ODYgNC44MDQxMjEyNiw3Ljc1ODQxNjcxIEM0LjgwNDEyMTI2LDYuNTMzNDAzNTUgNS43NjQ4MTgyOCw1LjU4MDYxNTk3IDcsNS41ODA2MTU5NyBDOC4yMzUxODExMiw1LjU4MDYxNTk3IDkuMTk1ODc4NCw2LjUzMzQwMzU1IDkuMTk1ODc4NCw3Ljc1ODQxNjcxIEM5LjE5NTg3ODQsOC45MTUzNzM3MiA4LjIzNTE4MTEyLDkuOTM2MjE4MzEgNyw5LjkzNjIxODMxIEw3LDkuOTM2MjE4MzEgWiBNNywyLjk5NDQ3NjY3IEM0LjUyOTYzNjIyLDIuOTk0NDc2NjcgMi41Mzk2MjExLDIuNTg2MTM4OTUgMi41Mzk2MjExLDIuMDQxNjg4ODYgQzIuNTM5NjIxMSwxLjQ5NzIzODE1IDQuNTI5NjM2MjIsMS4wODg5MDA0MyA3LDEuMDg4OTAwNDMgQzkuNDcwMzYyODQsMS4wODg5MDA0MyAxMS40NjAzNzg2LDEuNDk3MjM4MTUgMTEuNDYwMzc4NiwyLjA0MTY4ODg2IEMxMS40NjAzNzg2LDIuNTg2MTM4OTUgOS40NzAzNjI4NCwyLjk5NDQ3NjY3IDcsMi45OTQ0NzY2NyBMNywyLjk5NDQ3NjY3IFoiLz4gICAgICA8cGF0aCBkPSJNMTIuMDY0NTA5NiwxMS4yMjkyODc2IEMxMS45MjcyNjY3LDExLjIyOTI4NzYgMTEuODU4NjQ1NywxMS4yOTczNDM4IDExLjg1ODY0NTcsMTEuMjk3MzQzOCBDMTEuODU4NjQ1NywxMS4yOTczNDM4IDEwLjE0MzExNTYsMTIuNjU4NDcgNy4wNTUxNjA5MywxMi42NTg0NyBDMy45NjcyMDY4NywxMi42NTg0NyAyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4yNTE2NzYxNiwxMS4yOTczNDM4IEMyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4xMTQ0MzM5NSwxMS4yMjkyODc2IDIuMDQ1ODEyODUsMTEuMjI5Mjg3NiBDMS45MDg1NzAwMiwxMS4yMjkyODc2IDEuNzcxMzI3ODEsMTEuMjk3MzQzOCAxLjc3MTMyNzgxLDExLjUwMTUxMyBMMS43NzEzMjc4MSwxMS41Njk1NjkyIEMyLjA0NTgxMjg1LDEyLjk5ODc1MTYgMi4yNTE2NzYxNiwxNC4wMTk1OTU2IDIuMjUxNjc2MTYsMTQuMTU1NzA3OSBDMi40NTc1NDAwOSwxNS4xNzY1NTI1IDQuNTE2MTc2MzIsMTUuOTkzMjI4IDYuOTg2NTM5ODIsMTUuOTkzMjI4IEw2Ljk4NjUzOTgyLDE1Ljk5MzIyOCBDOS40NTY5MDMzMSwxNS45OTMyMjggMTEuNTE1NTM5NSwxNS4xNzY1NTI1IDExLjcyMTQwMzUsMTQuMTU1NzA3OSBDMTEuNzIxNDAzNSwxNC4wMTk1OTU2IDExLjkyNzI2NjcsMTIuOTk4NzUxNiAxMi4yMDE3NTE4LDExLjU2OTU2OTIgTDEyLjIwMTc1MTgsMTEuNTAxNTEzIEMxMi4yNzAzNzI5LDExLjM2NTQgMTIuMjAxNzUxOCwxMS4yMjkyODc2IDEyLjA2NDUwOTYsMTEuMjI5Mjg3NiBMMTIuMDY0NTA5NiwxMS4yMjkyODc2IFoiLz4gICAgICA8ZWxsaXBzZSBjeD0iNyIgY3k9IjcuNjkiIHJ4PSIxLjA5OCIgcnk9IjEuMDg5Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=);\n  }\n\n  .callOut {\n    display: block;\n    padding: ',
    ';\n    font-size: 14px;\n    font-weight: 500;\n    text-decoration: none;\n    color: ',
    ';\n    text-align: center;\n  }\n\n  .callOut:after {\n    content: " \u2665";\n    transition: color 4s ease;\n  }\n\n  .callOut:hover:after {\n    color: red;\n  }\n\n  .callOut .netlifyLogo {\n    display: block;\n    margin: auto;\n    width: 32px;\n    height: 32px;\n    margin-bottom: 8px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4gIDxkZWZzPiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN5PSIwJSIgcj0iMTAwJSIgZng9IjUwJSIgZnk9IjAlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMS4xNTE4NSAwIC41IC0uNSkiPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMEM2QjciIG9mZnNldD0iMCUiLz4gICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEQ5QUJGIiBvZmZzZXQ9IjEwMCUiLz4gICAgPC9yYWRpYWxHcmFkaWVudD4gIDwvZGVmcz4gIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjk4MDYyMywxMS42MjYyMzc3IEMyMi44NzE3MTA3LDExLjUwNTEzMDYgMjIuNzM1NTcwNCwxMS4zOTc0Nzk4IDIyLjU3MjIwMjEsMTEuMzE2NzQxOCBDMjIuNTU4NTg4MSwxMS4zMTY3NDE4IDIyLjU0NDk3NCwxMS4yODk4MjkxIDIyLjUzMTM2LDExLjI3NjM3MjcgTDIzLjE3MTIxOTQsNy4zNjA1NzY2MSBDMjMuMTcxMjE5NCw3LjMzMzY2MzkyIDIzLjE4NDgzMzQsNy4zMjAyMDc1OCAyMy4xOTg0NDc1LDcuMzIwMjA3NTggTDIzLjIxMjA2MTUsNy4zMjAyMDc1OCBDMjMuMjEyMDYxNSw3LjMyMDIwNzU4IDIzLjIyNTY3NTUsNy4zMjAyMDc1OCAyMy4yMzkyODk2LDcuMzMzNjYzOTIgTDI2LjE2NjMwNiwxMC4yMjY3Nzc5IEMyNi4xNzk5MiwxMC4yNDAyMzQzIDI2LjE3OTkyLDEwLjI1MzY5MDYgMjYuMTc5OTIsMTAuMjY3MTQ2OSBDMjYuMTc5OTIsMTAuMjgwNjAzMyAyNi4xNjYzMDYsMTAuMjk0MDU5NiAyNi4xNTI2OTE5LDEwLjMwNzUxNiBMMjMuMDIxNDY1MSwxMS42Mzk2OTQgTDIzLjAwNzg1MSwxMS42Mzk2OTQgQzIyLjk5NDIzNywxMS42Mzk2OTQgMjIuOTk0MjM3LDExLjYzOTY5NCAyMi45ODA2MjMsMTEuNjI2MjM3NyBaIE0xNi4zNTA1NzM2LDkuNDU5NzM4MSBDMTYuMzIzMzQ1Myw5LjE5MDYxMjc0IDE2LjIyODA0NjMsOC45MjE0ODczOCAxNi4wNzgyOTA2LDguNjkyNzMwODMgQzE2LjA2NDY3NjUsOC42NzkyNzQ1NiAxNi4wNjQ2NzY1LDguNjUyMzYyMDIgMTYuMDc4MjkwNiw4LjYyNTQ0OTQ5IEwxOS4zNTkzMDEsMy41Mzg5ODAyMiBDMTkuMzU5MzAxLDMuNTI1NTIzOTUgMTkuMzcyOTE1MSwzLjUxMjA2NzY4IDE5LjM4NjUyOTMsMy41MTIwNjc2OCBDMTkuNDAwMTQzNCwzLjUxMjA2NzY4IDE5LjQwMDE0MzQsMy41MTIwNjc2OCAxOS40MTM3NTc2LDMuNTI1NTIzOTUgTDIyLjMyNzE4NTgsNi40MTg2MjE1NSBDMjIuMzQwOCw2LjQzMjA3NzgyIDIyLjM0MDgsNi40NDU1MzQwOSAyMi4zNDA4LDYuNDU4OTkwMzUgTDIxLjU3ODQwNzYsMTEuMTgyMTQwNCBDMjEuNTc4NDA3NiwxMS4yMDkwNTI5IDIxLjU2NDc5MzQsMTEuMjIyNTA5MiAyMS41NTExNzkzLDExLjIyMjUwOTIgQzIxLjM3NDE5NTMsMTEuMjc2MzM0MyAyMS4yMTA4MjU1LDExLjM1NzA3MTkgMjEuMDc0Njg0LDExLjQ2NDcyMiBDMjEuMDc0Njg0LDExLjQ3ODE3ODMgMjEuMDYxMDY5OCwxMS40NzgxNzgzIDIxLjAzMzg0MTUsMTEuNDc4MTc4MyBMMTYuMzc3ODAxOSw5LjUwMDEwNjkgQzE2LjM2NDE4NzgsOS40ODY2NTA2MyAxNi4zNTA1NzM2LDkuNDczMTk0MzcgMTYuMzUwNTczNiw5LjQ1OTczODEgWiBNMjYuOTgzMTkwNywxMS4wMjA3NjY5IEwzMS45Nzk1Nzg4LDE1Ljk3MjY2NCBDMzIuMDA2ODA3MSwxNS45ODYxMjAyIDMyLjAwNjgwNzEsMTYuMDI2NDg4OSAzMS45Nzk1Nzg4LDE2LjAyNjQ4ODkgTDMxLjk1MjM1MDUsMTYuMDUzNDAxNCBDMzEuOTUyMzUwNSwxNi4wNjY4NTc3IDMxLjkzODczNjQsMTYuMDY2ODU3NyAzMS45MTE1MDgxLDE2LjA2Njg1NzcgTDIzLjU1MjQyODMsMTIuNTI3ODY2IEMyMy41Mzg4MTQxLDEyLjUyNzg2NiAyMy41MjUyLDEyLjUwMDk1MzUgMjMuNTI1MiwxMi40ODc0OTczIEMyMy41MjUyLDEyLjQ3NDA0MSAyMy41Mzg4MTQxLDEyLjQ2MDU4NDggMjMuNTUyNDI4MywxMi40NDcxMjg2IEwyNi45NTU5NjI0LDExLjAwNzMxMDcgQzI2Ljk1NTk2MjQsMTEuMDA3MzEwNyAyNi45Njk1NzY1LDExLjAwNzMxMDcgMjYuOTgzMTkwNywxMS4wMjA3NjY5IFogTTIzLjEzMDQzNjMsMTMuMzg5MDg4MSBMMzEuMTQ5MTg1OCwxNi43ODAwNzYxIEMzMS4xNjI4LDE2Ljc5MzUzMjQgMzEuMTYyOCwxNi44MDY5ODg3IDMxLjE2MjgsMTYuODIwNDQ1IEMzMS4xNjI4LDE2LjgzMzkwMTMgMzEuMTYyOCwxNi44NDczNTc2IDMxLjE0OTE4NTgsMTYuODYwODEzOSBMMjYuNzEwOTY0NSwyMS4yNjEwMjQ1IEMyNi43MTA5NjQ1LDIxLjI3NDQ4MDggMjYuNjk3MzUwMywyMS4yNzQ0ODA4IDI2LjY3MDEyMiwyMS4yNzQ0ODA4IEwyMS44MjM0NzU0LDIwLjI2NTI1ODIgQzIxLjc5NjI0NywyMC4yNjUyNTgyIDIxLjc4MjYzMjksMjAuMjUxODAxOSAyMS43ODI2MzI5LDIwLjIyNDg4OTMgQzIxLjc0MTc5MDMsMTkuODQ4MTEyOCAyMS41NjQ4MDYsMTkuNTExNzA1MyAyMS4yNjUyOTQyLDE5LjI4Mjk0ODEgQzIxLjI1MTY4LDE5LjI2OTQ5MTggMjEuMjUxNjgsMTkuMjU2MDM1NSAyMS4yNTE2OCwxOS4yNDI1NzkyIEwyMi4xMDkzNzMxLDEzLjk4MTE2NTMgQzIyLjEwOTM3MzEsMTMuOTU0MjUyNyAyMi4xMzY2MDE0LDEzLjk0MDc5NjQgMjIuMTUwMjE1NiwxMy45NDA3OTY0IEMyMi41MzE0MTI1LDEzLjg4Njk3MTIgMjIuODU4MTUyNywxMy42OTg1ODMgMjMuMDc1OTc5NiwxMy40MDI1NDQ0IEMyMy4wODk1OTM3LDEzLjM4OTA4ODEgMjMuMTAzMjA3OSwxMy4zODkwODgxIDIzLjEzMDQzNjMsMTMuMzg5MDg4MSBaIE0xNi4xNDYzNzksMTAuNDI4Njg1OSBMMjAuNTMwMTMxNywxMi4yODU2NTMyIEMyMC41NDM3NDU5LDEyLjI5OTEwOTUgMjAuNTU3MzYsMTIuMzEyNTY1OCAyMC41NTczNiwxMi4zMzk0NzgzIEMyMC41NDM3NDU5LDEyLjQwNjc1OTggMjAuNTMwMTMxNywxMi40ODc0OTc1IDIwLjUzMDEzMTcsMTIuNTY4MjM1MiBMMjAuNTMwMTMxNywxMi42MzU1MTY2IEwyMC41MzAxMzE3LDEyLjY4OTM0MTcgQzIwLjUzMDEzMTcsMTIuNzAyNzk4IDIwLjUxNjUxNzYsMTIuNzE2MjU0MyAyMC41MDI5MDM0LDEyLjcyOTcxMDYgQzIwLjUwMjkwMzQsMTIuNzI5NzEwNiAxMC44Nzc3MDcyLDE2LjgzMzg3NzUgMTAuODY0MDkzLDE2LjgzMzg3NzUgQzEwLjg1MDQ3ODksMTYuODMzODc3NSAxMC44MzY4NjQ3LDE2LjgzMzg3NzUgMTAuODIzMjUwNiwxNi44MjA0MjEyIEMxMC44MDk2MzY1LDE2LjgwNjk2NDkgMTAuODA5NjM2NSwxNi43ODAwNTI0IDEwLjgyMzI1MDYsMTYuNzY2NTk2MSBMMTQuNDMwOTk3NCwxMS4xODIyMzc4IEMxNC40NDQ2MTE2LDExLjE2ODc4MTUgMTQuNDU4MjI1NywxMS4xNTUzMjUzIDE0LjQ4NTQ1NCwxMS4xNTUzMjUzIEMxNC41ODA3NTMsMTEuMTY4NzgxNSAxNC42NjI0Mzc4LDExLjE4MjIzNzggMTQuNzQ0MTIyNiwxMS4xODIyMzc4IEMxNS4yODg2ODgyLDExLjE4MjIzNzggMTUuNzkyNDExMywxMC45MTMxMTIxIDE2LjA5MTkyMjQsMTAuNDU1NTk4NCBDMTYuMTA1NTM2NSwxMC40NDIxNDIyIDE2LjExOTE1MDcsMTAuNDI4Njg1OSAxNi4xNDYzNzksMTAuNDI4Njg1OSBaIE0yMS41NTExNDI5LDIxLjE4MDI0MzMgTDI1LjgxMjM3MTcsMjIuMDU0OTA1MyBDMjUuODI1OTg1OSwyMi4wNTQ5MDUzIDI1LjgzOTYsMjIuMDY4MzYxNiAyNS44Mzk2LDIyLjEwODczMDcgQzI1LjgzOTYsMjIuMTIyMTg3IDI1LjgzOTYsMjIuMTM1NjQzMyAyNS44MjU5ODU5LDIyLjE0OTA5OTcgTDE5LjkxNzQ0NDksMjguMDAyNjA3MiBDMTkuOTE3NDQ0OSwyOC4wMTYwNjM2IDE5LjkwMzgzMDcsMjguMDE2MDYzNiAxOS44OTAyMTY2LDI4LjAxNjA2MzYgTDE5Ljg2Mjk4ODMsMjguMDE2MDYzNiBDMTkuODQ5Mzc0MSwyOC4wMDI2MDcyIDE5LjgzNTc2LDI3Ljk4OTE1MDkgMTkuODM1NzYsMjcuOTYyMjM4MiBMMjAuODU2ODIxMiwyMS42OTE1ODQxIEMyMC44NTY4MjEyLDIxLjY3ODEyNzggMjAuODcwNDM1NCwyMS42NTEyMTUxIDIwLjg4NDA0OTUsMjEuNjUxMjE1MSBDMjEuMTI5MTA0MiwyMS41NTcwMjA4IDIxLjMzMzMxNjUsMjEuMzk1NTQ0NyAyMS40OTY2ODYzLDIxLjE5MzY5OTYgQzIxLjUxMDMwMDQsMjEuMTkzNjk5NiAyMS41MjM5MTQ2LDIxLjE4MDI0MzMgMjEuNTUxMTQyOSwyMS4xODAyNDMzIFogTTE5LjA0NjE2NzksMjAuNjgyNDAzIEMxOS4xNTUwODE0LDIxLjA5OTU0ODcgMTkuNDU0NTkzMywyMS40NjI4NjkyIDE5Ljg2MzAxODcsMjEuNjI0MzQ0OSBDMTkuODkwMjQ3MSwyMS42Mzc4MDEyIDE5Ljg5MDI0NzEsMjEuNjY0NzEzOSAxOS44NjMwMTg3LDIxLjY2NDcxMzkgQzE5Ljg2MzAxODcsMjEuNjY0NzEzOSAxOC42MjQxMjgzLDI5LjIxMzcwNTQgMTguNjI0MTI4MywyOS4yMjcxNjE3IEwxOC4xODg0NzQ2LDI5LjY1Nzc2MzcgQzE4LjE4ODQ3NDYsMjkuNjcxMjIwMSAxOC4xNzQ4NjA0LDI5LjY3MTIyMDEgMTguMTYxMjQ2MiwyOS42NzEyMjAxIEMxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xMzQwMTc4LDI5LjY1Nzc2MzcgTDEwLjk0NTczMDYsMTkuMjY5NDkwMSBDMTAuOTMyMTE2NSwxOS4yNTYwMzM4IDEwLjkzMjExNjUsMTkuMjI5MTIxMiAxMC45NDU3MzA2LDE5LjIxNTY2NDkgQzEwLjk4NjU3MzIsMTkuMTYxODM5NiAxMS4wMTM4MDE1LDE5LjEwODAxNDQgMTEuMDU0NjQ0MSwxOS4wNDA3MzI4IEMxMS4wNjgyNTgzLDE5LjAyNzI3NjUgMTEuMDgxODcyNCwxOS4wMTM4MjAyIDExLjEwOTEwMDgsMTkuMDEzODIwMiBMMTkuMDA1MzI1NCwyMC42NDIwMzQxIEMxOS4wMzI1NTM3LDIwLjY1NTQ5MDQgMTkuMDQ2MTY3OSwyMC42Njg5NDY3IDE5LjA0NjE2NzksMjAuNjgyNDAzIFogTTExLjMxMzM2NDcsMTguMDk4NzI4NiBDMTEuMjg2MTM2NSwxOC4wOTg3Mjg2IDExLjI3MjUyMjQsMTguMDg1MjcyNCAxMS4yNzI1MjI0LDE4LjA1ODM1OTggQzExLjI3MjUyMjQsMTcuOTUwNzA5NiAxMS4yNDUyOTQxLDE3Ljg1NjUxNTcgMTEuMjMxNjgsMTcuNzQ4ODY1NCBDMTEuMjMxNjgsMTcuNzIxOTUyOSAxMS4yMzE2OCwxNy43MDg0OTY2IDExLjI1ODkwODIsMTcuNjk1MDQwMyBDMTEuMjU4OTA4MiwxNy42OTUwNDAzIDIwLjkzODU0NTksMTMuNTYzOTYzNSAyMC45NTIxNiwxMy41NjM5NjM1IEMyMC45NTIxNiwxMy41NjM5NjM1IDIwLjk2NTc3NDEsMTMuNTYzOTYzNSAyMC45NzkzODgyLDEzLjU3NzQxOTcgQzIxLjA0NzQ1ODgsMTMuNjQ0NzAxMSAyMS4xMDE5MTUzLDEzLjY4NTA2OTkgMjEuMTU2MzcxOCwxMy43MjU0Mzg4IEMyMS4xODM2LDEzLjcyNTQzODggMjEuMTgzNiwxMy43NTIzNTEzIDIxLjE4MzYsMTMuNzY1ODA3NiBMMjAuMzM5NTI0NywxOC45NDY0NzQxIEMyMC4zMzk1MjQ3LDE4Ljk3MzM4NjYgMjAuMzI1OTEwNiwxOC45ODY4NDI5IDIwLjI5ODY4MjQsMTguOTg2ODQyOSBDMTkuODM1ODAyNCwxOS4wMTM3NTU0IDE5LjQyNzM3ODgsMTkuMjgyODgxIDE5LjE5NTkzODgsMTkuNjg2NTY5MyBDMTkuMTgyMzI0NywxOS43MDAwMjU1IDE5LjE2ODcxMDYsMTkuNzEzNDgxOCAxOS4xNDE0ODI0LDE5LjcxMzQ4MTggTDExLjMxMzM2NDcsMTguMDk4NzI4NiBaIE03Ljg2ODk3NzU4LDE5LjE4ODcyOTEgQzcuOTA5ODIwMywxOS4yNTYwMTExIDcuOTUwNjYzMDMsMTkuMzA5ODM2NyA3Ljk5MTUwNTc2LDE5LjM2MzY2MjMgQzguMDA1MTIsMTkuMzc3MTE4NyA4LjAwNTEyLDE5LjM5MDU3NTEgOC4wMDUxMiwxOS4zOTA1NzUxIEw2LjEzOTk2ODc5LDIyLjI4MzcwMDcgQzYuMTI2MzU0NTUsMjIuMjk3MTU3MSA2LjExMjc0MDMsMjIuMzEwNjEzNSA2LjA5OTEyNjA2LDIyLjMxMDYxMzUgQzYuMDk5MTI2MDYsMjIuMzEwNjEzNSA2LjA4NTUxMTgyLDIyLjMxMDYxMzUgNi4wNzE4OTc1OCwyMi4yOTcxNTcxIEw0LjQyNDU3NDI0LDIwLjY2ODkzMjkgQzQuNDEwOTYsMjAuNjU1NDc2NSA0LjQxMDk2LDIwLjY0MjAyMDEgNC40MTA5NiwyMC42Mjg1NjM3IEM0LjQxMDk2LDIwLjYxNTEwNzMgNC40MjQ1NzQyNCwyMC42MDE2NTA5IDQuNDM4MTg4NDgsMjAuNjAxNjUwOSBMNy44MTQ1MjA2MSwxOS4xNjE4MTYzIEw3LjgyODEzNDg1LDE5LjE2MTgxNjMgQzcuODQxNzQ5MDksMTkuMTYxODE2MyA3Ljg1NTM2MzMzLDE5LjE3NTI3MjcgNy44Njg5Nzc1OCwxOS4xODg3MjkxIFogTTEwLjE4MzMxOTEsMTkuODYxNTU3OSBDMTAuMTk2OTMzMiwxOS44NjE1NTc5IDEwLjIxMDU0NzMsMTkuODc1MDE0MiAxMC4yMjQxNjE0LDE5Ljg4ODQ3MDYgTDE3LjQzOTYyOTQsMzAuMzU3NDg3OCBDMTcuNDUzMjQzNSwzMC4zNzA5NDQxIDE3LjQ1MzI0MzUsMzAuMzk3ODU2NyAxNy40Mzk2Mjk0LDMwLjQxMTMxMzEgTDE1Ljg2MDM5NDksMzEuOTg1NzAyNSBDMTUuODYwMzk0OSwzMS45OTkxNTg5IDE1Ljg0Njc4MDgsMzEuOTk5MTU4OSAxNS44MDU5Mzg2LDMxLjk4NTcwMjUgTDYuNzkzNDEwNTcsMjMuMDY0MTYyMiBDNi43Nzk3OTY0OCwyMy4wNTA3MDU4IDYuNzc5Nzk2NDgsMjMuMDIzNzkzMiA2LjgwNzAyNDY2LDIyLjk5Njg4MDYgTDguNzY3NDUzNzEsMTkuOTU1NzUyMiBDOC43ODEwNjc4LDE5Ljk0MjI5NTggOC43OTQ2ODE4OSwxOS45Mjg4Mzk1IDguODIxOTEwMDcsMTkuOTI4ODM5NSBDOS4wMjYxMjE0MywxOS45OTYxMjExIDkuMjE2NzE4NywyMC4wMjMwMzM4IDkuNDIwOTMwMDYsMjAuMDIzMDMzOCBDOS42Nzk1OTc3OCwyMC4wMjMwMzM4IDkuOTI0NjUxNDEsMTkuOTY5MjA4NSAxMC4xODMzMTkxLDE5Ljg2MTU1NzkgWiBNOC45OTg5MTg1NiwxNi40MDMyMzIyIEM4Ljk4NTMwNDM5LDE2LjQwMzIzMjIgOC45NzE2OTAyMiwxNi4zODk3NzU5IDguOTU4MDc2MDQsMTYuMzc2MzE5NiBMNS4wOTE2NTA2MywxMC43MzgxMzg4IEM1LjA3ODAzNjQ2LDEwLjcyNDY4MjUgNS4wNzgwMzY0NiwxMC42OTc3NyA1LjA5MTY1MDYzLDEwLjY4NDMxMzcgTDguNTYzMjY1LDcuMjM5NTA2MzMgQzguNTYzMjY1LDcuMjI2MDUwMDYgOC41NzY4NzkxNyw3LjIyNjA1MDA2IDguNjA0MTA3NTIsNy4yMjYwNTAwNiBDOC42MDQxMDc1Miw3LjIzOTUwNjMzIDEyLjcwMTk3MzksOC45NjE5MTAwMiAxMy4xNjQ4NTU4LDkuMTYzNzU0MiBDMTMuMTc4NDcsOS4xNzcyMTA0OCAxMy4xOTIwODQyLDkuMTkwNjY2NzYgMTMuMTkyMDg0Miw5LjIxNzU3OTMyIEMxMy4xNjQ4NTU4LDkuMzM4Njg1ODMgMTMuMTUxMjQxNiw5LjQ1OTc5MjM0IDEzLjE1MTI0MTYsOS41ODA4OTg4NCBDMTMuMTUxMjQxNiw5Ljk5ODA0MzQ5IDEzLjMxNDYxMTcsMTAuMzg4Mjc1NiAxMy42MDA1MDk0LDEwLjY4NDMxMzcgQzEzLjYxNDEyMzUsMTAuNjk3NzcgMTMuNjE0MTIzNSwxMC43MjQ2ODI1IDEzLjYwMDUwOTQsMTAuNzM4MTM4OCBMOS45NTE5MTA3NCwxNi4zODk3NzU5IEM5LjkzODI5NjU3LDE2LjQwMzIzMjIgOS45MjQ2ODIzOSwxNi40MTY2ODg1IDkuODk3NDU0MDUsMTYuNDE2Njg4NSBDOS43NDc2OTgxMywxNi4zNzYzMTk2IDkuNTg0MzI4MDQsMTYuMzQ5NDA3MSA5LjQzNDU3MjEzLDE2LjM0OTQwNzEgQzkuMjk4NDMwMzksMTYuMzQ5NDA3MSA5LjE0ODY3NDQ4LDE2LjM3NjMxOTYgOC45OTg5MTg1NiwxNi40MDMyMzIyIFogTTEzLjY2ODYwMTksOC4zNTY0MjAzNCBDMTMuNDkxNjE4Niw4LjI3NTY4MTk4IDkuMzUyOTMzMjQsNi41MjYzNTA4MyA5LjM1MjkzMzI0LDYuNTI2MzUwODMgQzkuMzM5MzE5MTQsNi41MTI4OTQ0NCA5LjMyNTcwNTA1LDYuNTEyODk0NDQgOS4zMzkzMTkxNCw2LjQ4NTk4MTY1IEM5LjMzOTMxOTE0LDYuNDcyNTI1MjYgOS4zMzkzMTkxNCw2LjQ1OTA2ODg2IDkuMzUyOTMzMjQsNi40NDU2MTI0NyBMMTUuODMzMjQzMiwwLjAxMzQ1NjM5MzUgQzE1LjgzMzI0MzIsMCAxNS44NDY4NTczLDAgMTUuODYwNDcxNCwwIEMxNS44NzQwODU1LDAgMTUuODc0MDg1NSwwIDE1Ljg4NzY5OTYsMC4wMTM0NTYzOTM1IEwxOC42Nzg1ODk0LDIuNzcyMDE3MDUgQzE4LjY5MjIwMzUsMi43ODU0NzM0NSAxOC42OTIyMDM1LDIuODEyMzg2MjMgMTguNjc4NTg5NCwyLjgyNTg0MjYzIEwxNS4zMTU5MDc2LDguMDMzNDY2OSBDMTUuMzAyMjkzNSw4LjA0NjkyMzI5IDE1LjI4ODY3OTQsOC4wNjAzNzk2OSAxNS4yNjE0NTEyLDguMDYwMzc5NjkgQzE1LjA4NDQ2NzksOC4wMDY1NTQxMSAxNC45MDc0ODQ3LDcuOTc5NjQxMzMgMTQuNzMwNTAxNCw3Ljk3OTY0MTMzIEMxNC4zNjI5MjA4LDcuOTc5NjQxMzMgMTMuOTk1MzQwMiw4LjExNDIwNTI2IDEzLjcwOTQ0NDIsOC4zNDI5NjM5NSBDMTMuNjk1ODMwMSw4LjM1NjQyMDM0IDEzLjY5NTgzMDEsOC4zNTY0MjAzNCAxMy42Njg2MDE5LDguMzU2NDIwMzQgWiBNNy43ODcyODk5NSwxNy4zMzE3NTExIEM3Ljc3MzY3NTgxLDE3LjM0NTIwNzQgNy43NjAwNjE2NywxNy4zNTg2NjM3IDcuNzQ2NDQ3NTIsMTcuMzU4NjYzNyBMMC4wNDA4NDI0Mjk4LDE1Ljc0MzkwOCBDMC4wMTM2MTQxNDMzLDE1Ljc0MzkwOCAwLDE1LjczMDQ1MTcgMCwxNS43MTY5OTU0IEMwLDE1LjcwMzUzOTEgMCwxNS42OTAwODI4IDAuMDEzNjE0MTQzMywxNS42NzY2MjY1IEw0LjMxNTY4MzQyLDExLjQyNDQzNjMgQzQuMzE1NjgzNDIsMTEuNDEwOTgwMSA0LjMyOTI5NzU2LDExLjQxMDk4MDEgNC4zNDI5MTE3MSwxMS40MTA5ODAxIEM0LjM3MDEzOTk5LDExLjQyNDQzNjMgNC4zNzAxMzk5OSwxMS40MjQ0MzYzIDQuMzgzNzU0MTMsMTEuNDM3ODkyNiBDNC4zODM3NTQxMywxMS40NTEzNDg5IDguMDczMTg2OTYsMTYuNzgwMDQyOSA4LjExNDAyOTM5LDE2LjgzMzg2ODEgQzguMTI3NjQzNTQsMTYuODQ3MzI0NCA4LjEyNzY0MzU0LDE2Ljg3NDIzNyA4LjExNDAyOTM5LDE2Ljg4NzY5MzMgQzcuOTkxNTAyMSwxNy4wMjIyNTYzIDcuODY4OTc0ODEsMTcuMTcwMjc1NSA3Ljc4NzI4OTk1LDE3LjMzMTc1MTEgWiBNNy4zNTE1NTc4MywxOC4yNDY3NDY0IEM3LjM3ODc4NTk0LDE4LjI0Njc0NjQgNy4zOTI0LDE4LjI2MDIwMjcgNy4zOTI0LDE4LjI4NzExNTEgQzcuMzkyNCwxOC4zMDA1NzEzIDcuMzc4Nzg1OTQsMTguMzE0MDI3NSA3LjM1MTU1NzgzLDE4LjM0MDkzOTkgTDMuNjM0OTIsMTkuOTE1MzE2NSBDMy42MzQ5MiwxOS45MTUzMTY1IDMuNjIxMzA1OTQsMTkuOTE1MzE2NSAzLjYwNzY5MTg4LDE5LjkwMTg2MDMgTDAuNjI2MjEzMTg1LDE2Ljk0MTQ5NDEgQzAuNjEyNTk5MTI3LDE2LjkyODAzNzggMC41OTg5ODUwNjksMTYuOTAxMTI1NCAwLjYxMjU5OTEyNywxNi44ODc2NjkyIEMwLjYyNjIxMzE4NSwxNi44NzQyMTMgMC42Mzk4MjcyNDMsMTYuODYwNzU2OCAwLjY2NzA1NTM1OSwxNi44NjA3NTY4IEw3LjM1MTU1NzgzLDE4LjI0Njc0NjQgWiIvPjwvc3ZnPg==);\n  }\n\n  .visuallyHidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    #fff-space: nowrap;\n  }\n'
], [
    '\n\n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    color: ',
    ';\n    font-weight: 500;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    color: ',
    ';\n    font-weight: 500;\n  }\n  :-ms-input-placeholder { /* IE 10+ */\n    color: ',
    ';\n    font-weight: 500;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    color: ',
    ';\n    font-weight: 500;\n  }\n\n  .modalContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    min-height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-sizing: border-box;\n    font-family: ',
    ';\n    font-size: 14px;\n    line-height: 1.5;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    z-index: 99999;\n  }\n\n  .modalContainer::before {\n    content: "";\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #fff;\n    z-index: -1;\n  }\n\n  .modalDialog {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .modalContent {\n    position: relative;\n    padding: ',
    ';\n    background: #fff;\n  }\n\n  @media (min-width: 480px) {\n    .modalContainer::before {\n      background-color: ',
    ';\n      opacity: 0.87;\n    }\n\n    .modalDialog {\n      max-width: 364px;\n      justify-content: center;\n    }\n\n    .modalContent {\n      background: #fff;\n      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07), 0 12px 32px 0 rgba(14, 30, 37, 0.1);\n      border-radius: 8px;\n      margin-top: ',
    ';\n    }\n  }\n\n  .btn {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: auto;\n    margin: 14px 0 0;\n    padding: 6px;\n    outline: 0;\n    cursor: pointer;\n    border: 2px solid ',
    ';\n    border-radius: 4px;\n    background-color: #2d3b41;\n    color: #fff;\n    transition: background-color 0.2s ease;\n    font-family: ',
    ';\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: center;\n    text-decoration: none;\n    white-space: nowrap;\n  }\n\n  .btn:hover,\n  .btn:focus {\n    background-color: ',
    ';\n    text-decoration: none;\n  }\n\n  .btnClose {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    margin: 6px;\n    background: #fff;\n    color: ',
    ';\n  }\n\n  .btnClose::before {\n    content: "\xD7";\n    font-size: 20px;\n    line-height: 22px;\n  }\n\n  .btnClose:hover,\n  .btnClose:focus {\n    background: #e9ebeb;\n    color: ',
    ';\n  }\n\n  .header {\n    display: flex;\n    margin-top: -8px;\n    margin-bottom: ',
    ';\n  }\n\n  .btnHeader {\n    font-size: 16px;\n    line-height: 24px;\n    background: #fff;\n    color: ',
    ';\n    border: 0;\n    border-bottom: 2px solid #e9ebeb;\n    border-radius: 4px 4px 0 0;\n    margin: 0;\n  }\n\n  .btnHeader:focus,\n  .btnHeader.active {\n    background: #fff;\n    color: ',
    ';\n    border-color: ',
    ';\n    font-weight: 700;\n  }\n\n  .btnHeader:hover {\n    background-color: #e9ebeb;\n    color: ',
    ';\n  }\n\n  .form {\n  }\n\n  .formGroup {\n    position: relative;\n    margin-top: 14px;\n  }\n\n  .formControl {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    height: 40px;\n    margin: 0;\n    padding: 6px 12px 6px 34px;\n    border: 2px solid #e9ebeb;\n    border-radius: 4px;\n    background: #fff;\n    color: ',
    ';\n    box-shadow: none;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    transition: box-shadow ease-in-out 0.15s;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\n  .inputFieldIcon {\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n    pointer-events: none;\n  }\n\n  .inputFieldName {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgsNyBDNi4zNDMxNDU3NSw3IDUsNS42NTY4NTQyNSA1LDQgQzUsMi4zNDMxNDU3NSA2LjM0MzE0NTc1LDEgOCwxIEM5LjY1Njg1NDI1LDEgMTEsMi4zNDMxNDU3NSAxMSw0IEMxMSw1LjY1Njg1NDI1IDkuNjU2ODU0MjUsNyA4LDcgWiBNOCwxNSBMMS41LDE1IEMxLjUsMTEuMTM0MDA2OCA0LjQxMDE0OTEzLDggOCw4IEMxMS41ODk4NTA5LDggMTQuNSwxMS4xMzQwMDY4IDE0LjUsMTUgTDgsMTUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIi8+PC9zdmc+);\n  }\n\n  .inputFieldEmail {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE2IDExIj4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xLjE3MDczMTcxLDMgQzAuNTIyMTQ2MzQxLDMgMy45MDI0NTk4N2UtMDgsMy41NDUxMTA4MSAzLjkwMjQ1OTg3ZS0wOCw0LjIyMjIyMTU0IEwzLjkwMjQ1OTg3ZS0wOCwxMi43Nzc3Nzg1IEMzLjkwMjQ1OTg3ZS0wOCwxMy40NTQ4ODkyIDAuNTIyMTQ2MzQxLDE0IDEuMTcwNzMxNzEsMTQgTDE0LjgyOTI2ODMsMTQgQzE1LjQ3Nzg1MzcsMTQgMTYsMTMuNDU0ODg5MiAxNiwxMi43Nzc3Nzg1IEwxNiw0LjIyMjIyMTU0IEMxNiwzLjU0NTExMDgxIDE1LjQ3Nzg1MzcsMyAxNC44MjkyNjgzLDMgTDEuMTcwNzMxNzEsMyBaIE0yLjMzNzQyMTE5LDUuMDAxODY1NjYgQzIuNDU3NTExNzUsNC45ODk1NTIxNCAyLjU2MDcxNDU3LDUuMDM5MzM5OCAyLjYzNjM1OTg1LDUuMTE3Mjg0MzcgTDcuNDgyNjA2MTcsMTAuMTEzMjU0NSBDNy43ODQ0ODgyMiwxMC40MjQ3NDU1IDguMjAzMjc4MjksMTAuNDI0NzY2IDguNTA1ODk2MTksMTAuMTEzMjU0NSBMMTMuMzYzNjQwMiw1LjExNzI4NDM3IEMxMy41MDUxMjU1LDQuOTcxMjA0OTkgMTMuNzUyOTc3OSw0Ljk4MTg5NzIzIDEzLjg4MzkyMjIsNS4xMzk3MzYwMiBDMTQuMDE0ODY2NSw1LjI5NzU3NDgxIDE0LjAwNTI4MjEsNS41NzQwNzQ4OCAxMy44NjM3OTY3LDUuNzIwMTU0MjYgTDExLjExNTg2MDYsOC41NDg0MTE1MiBMMTMuODU4MDU3MSwxMS4yNjc2NDY5IEMxNC4wMjE3ODM1LDExLjQwMzE5ODIgMTQuMDQ4OTM2MywxMS43MDE0OTMyIDEzLjkxMjk4ODIsMTEuODcwOTg4OCBDMTMuNzc3MDQwMSwxMi4wNDA1MDQ5IDEzLjUwODI4OTcsMTIuMDQzNDE5MSAxMy4zNjkzOTgyLDExLjg3Njk0MDQgTDEwLjU3NTQ3MTUsOS4xMDYzOTg2MiBMOS4wMDYwNTI3NSwxMC43MTYxMjQ0IEM4LjQzNDk0MTk1LDExLjMwNDAzMzQgNy41NTMzMDI4NiwxMS4zMDUxNjIxIDYuOTgyNDY4LDEwLjcxNjEyNDQgTDUuNDI0NTI4NSw5LjEwNjM5ODYyIEwyLjYzMDYwMTgzLDExLjg3Njk0MDQgQzIuNDkxNzEwMzMsMTIuMDQzNDM5NyAyLjIyMjk1OTg4LDEyLjA0MDUyNTUgMi4wODcwMTE3OCwxMS44NzA5ODg4IEMxLjk1MTA2MzY3LDExLjcwMTQ5MzIgMS45NzgyMTY1LDExLjQwMzE5ODIgMi4xNDE5NDI5LDExLjI2NzY0NjkgTDQuODg0MTM5MzksOC41NDg0MTE1MiBMMi4xMzYyMDMyOCw1LjcyMDE1NDI2IEMyLjAyODcxNDE0LDUuNjE2MjI4MTYgMS45ODM1NTE0MSw1LjQzODk1NDUzIDIuMDI1OTkxNSw1LjI4NzQ5ODI1IEMyLjA2ODQxMzE5LDUuMTM2MDYyNDkgMi4xOTYwMjc4MSw1LjAxOTAyMjQ5IDIuMzM3NDIxMTksNS4wMDE4NjU2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIvPjwvc3ZnPg==);\n  }\n\n  .inputFieldPassword {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDEyIDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0yLjQ0NTkxMDQ1LDMuNjQzMDg0MjcgQzIuNDQ1OTEwMzgsMi42NzY2MjEzNyAyLjgxODk3NTQ2LDEuNzQ5NzYzOTMgMy40ODI5OTUxOCwxLjA2NjUxMDUyIEM0LjE0NzAxNDksMC4zODMyNTcxMTEgNS4wNDc1NjY0MywtMC4wMDAzOTMwNDg2MTggNS45ODY0NDEwNSwzLjAyMTc0MDY5ZS0wNyBMNi4xMTc1MTg0NywzLjAyMTc0MDY5ZS0wNyBDOC4wNjkyOTIwNSwwLjAwMjQ1Mjc4Mzg0IDkuNjUwNzAwMTMsMS42MzA5OTI4MyA5LjY1MjI4NzQyLDMuNjQwMTE4NzkgTDkuNjUyMjg3NDIsNC42NzgwMzQ0NSBDOS4xMzk1MDEwNSw0LjcwMzI0MDk4IDguNjM2Nzk3NTYsNC43NDYyNDAzNCA4LjEzMTIxMzI1LDQuODAxMTAxNiBMOC4xMzEyMTMyNSwzLjY0MzA4NDI3IEM4LjEzMTIxMzI1LDIuNDk2NjM0MjkgNy4yMjgzNjE2LDEuNTY3MjUyOTUgNi4xMTQ2Mzc2NCwxLjU2NzI1Mjk1IEw1Ljk4MzU2MDIzLDEuNTY3MjUyOTUgQzQuODY5ODM2MjgsMS41NjcyNTI5NSAzLjk2Njk4NDYyLDIuNDk2NjM0MjkgMy45NjY5ODQ2MiwzLjY0MzA4NDI3IEwzLjk2Njk4NDYyLDMuOTYwMzg5OTEgQzMuOTY3NTc5ODgsNC4zNTY0OTE4MiAzLjY3NzAzNTY1LDQuNjg4ODc1OTUgMy4yOTQzMTI2Miw0LjcyOTkzMDI0IEwzLjI3ODQ2ODEsNC43Mjk5MzAyNCBDMy4wNjYyNDA5Miw0Ljc1MzUwMjk2IDIuODU0MjgyODcsNC42ODMxMDg3IDIuNjk1NDU2MTMsNC41MzYzMDM3NiBDMi41MzY2Mjk0LDQuMzg5NDk4ODIgMi40NDU5MDUzMyw0LjE4MDEyMTMzIDIuNDQ1OTEwNDUsMy45NjAzODk5MSBMMi40NDU5MTA0NSwzLjY0MzA4NDI3IFogTTExLjQxNjY2Niw3LjExNTY1MzUyIEwxMS40MTY2NjYsMTIuNjkwNzQzMyBDMTEuNDE3MDQwOCwxMy4wODMxMTQzIDExLjE0NTkyMDMsMTMuNDIwMTM3MSAxMC43NzEzNjE4LDEzLjQ5MjkwMzkgTDEwLjI5MDI2NDQsMTMuNTg2MzE2MyBDOC44NzYwNzU2NCwxMy44NjE1OTU5IDcuNDM5OTcxMzMsMTQuMDAwMDkzNyA2LjAwMDcyMDA1LDEzLjk5OTk5OTggQzQuNTYwOTg3NTgsMTQuMDAwMTg2MiAzLjEyNDM5Njg0LDEzLjg2MTY4OCAxLjcwOTczNTI0LDEzLjU4NjMxNjMgTDEuMjI4NjM3OTIsMTMuNDkyOTAzOSBDMC44NTQwNzk0MDcsMTMuNDIwMTM3MSAwLjU4Mjk1ODg2NywxMy4wODMxMTQzIDAuNTgzMzMzNzIyLDEyLjY5MDc0MzMgTDAuNTgzMzMzNzIyLDcuMTE1NjUzNTIgQzAuNTgyOTU4ODY3LDYuNzIzMjgyNTYgMC44NTQwNzk0MDcsNi4zODYyNTk4MSAxLjIyODYzNzkyLDYuMzEzNDkyOTkgTDEuMjk5MjE4MDYsNi4zMDAxNDgzNiBDNC40MDU5OTg0Nyw1LjY5NTEyMTY3IDcuNTk1NDQxNjIsNS42OTUxMjE2NyAxMC43MDIyMjIsNi4zMDAxNDgzNiBMMTAuNzcyODAyMiw2LjMxMzQ5Mjk5IEMxMS4xNDY3ODgsNi4zODY4ODY0NSAxMS40MTcxNzE2LDYuNzIzNzQ1MTYgMTEuNDE2NjY2LDcuMTE1NjUzNTIgWiIvPjwvc3ZnPg==);\n  }\n\n  .formLabel {\n  }\n\n  .hr {\n    border: 0;\n    border-top: 2px solid #e9ebeb;\n    margin: ',
    ' 0 -1px;\n    text-align: center;\n  }\n\n  .hr::before {\n    content: "or";\n    position: relative;\n    display: inline-block;\n    font-size: 12px;\n    font-weight: 800;\n    line-height: 1;\n    text-transform: uppercase;\n    background-color: #fff;\n    color: ',
    ';\n    padding: 4px;\n    top: -13px;\n  }\n\n  .btnProvider {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .btnProvider::before {\n    content: "";\n    position: absolute;\n    display: inline-block;\n    vertical-align: middle;\n    width: 32px;\n    height: 40px;\n    background-repeat: no-repeat;\n    background-position: left center;\n    top: -2px;\n    left: 14px;\n  }\n\n  .providerGoogle {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerGoogle:hover {\n    background-color: ',
    ';\n  }\n\n  .providerGitHub {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerGitHub:hover {\n    background-color: ',
    ';\n  }\n\n  .providerGitLab {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerGitLab:hover {\n    background-color: ',
    ';\n  }\n\n  .providerBitbucket {\n    background-color: ',
    ';\n    border-color: ',
    ';\n  }\n\n  .providerBitbucket:hover {\n    background-color: ',
    ';\n  }\n\n  .providerGoogle:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNDg4IC0yKSI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wLjY1MjczNDM3NSwzLjI5NTI4MjQ0IEMwLjIzNzk4NDM3NSw0LjEwNTgzMjA2IDIuODQyMTcwOTRlLTE0LDUuMDE2MDQ1OCAyLjg0MjE3MDk0ZS0xNCw1Ljk3OTM4OTMxIEMyLjg0MjE3MDk0ZS0xNCw2Ljk0MjczMjgyIDAuMjM3OTg0Mzc1LDcuODUyOTAwNzYgMC42NTI3MzQzNzUsOC42NjM0NTAzOCBDMS42NTkwNDY4NywxMC42MTY3MDIzIDMuNzI2MDkzNzUsMTEuOTU4Nzc4NiA2LjExOTUzMTI1LDExLjk1ODc3ODYgQzcuNzcxNzgxMjUsMTEuOTU4Nzc4NiA5LjE1ODg1OTM3LDExLjQyNzI1MTkgMTAuMTcyMDE1NiwxMC41MTA0NDI3IEMxMS4zMjc5MDYyLDkuNDY3MzU4NzggMTEuOTk0MjgxMiw3LjkzMjY0MTIyIDExLjk5NDI4MTIsNi4xMTIyNTk1NCBDMTEuOTk0MjgxMiw1LjYyMDYyNTk1IDExLjk1MzQ1MzEsNS4yNjE4NjI2IDExLjg2NTA5MzcsNC44ODk4MTY3OSBMNi4xMTk1MzEyNSw0Ljg4OTgxNjc5IEw2LjExOTUzMTI1LDcuMTA4ODA5MTYgTDkuNDkyMDQ2ODcsNy4xMDg4MDkxNiBDOS40MjQwNzgxMiw3LjY2MDI1OTU0IDkuMDU2OTA2MjUsOC40OTA3MzI4MiA4LjI0MDk1MzEyLDkuMDQ4Nzc4NjMgQzcuNzI0MjAzMTIsOS40MDA5MDA3NiA3LjAzMDY0MDYyLDkuNjQ2NzE3NTYgNi4xMTk1MzEyNSw5LjY0NjcxNzU2IEM0LjUwMTI2NTYyLDkuNjQ2NzE3NTYgMy4xMjc3ODEyNSw4LjYwMzY3OTM5IDIuNjM4MTcxODcsNy4xNjE5ODQ3MyBMMi42Mjg3MTIwNSw3LjE2Mjc2OTU5IEMyLjUwNTM0MTU4LDYuNzk3Mjk0NjggMi40MzQyMTg3NSw2LjM4MTEyMjg1IDIuNDM0MjE4NzUsNS45NzkzODkzMSBDMi40MzQyMTg3NSw1LjU2NzQ1MDM4IDIuNTA4OTg0MzgsNS4xNjg4Mzk2OSAyLjYzMTM3NSw0Ljc5Njc5Mzg5IEMzLjEyNzc4MTI1LDMuMzU1MDk5MjQgNC41MDEyNjU2MiwyLjMxMjAxNTI3IDYuMTE5NTMxMjUsMi4zMTIwMTUyNyBDNy4yNjg2MjUsMi4zMTIwMTUyNyA4LjA0Mzc1LDIuNzk3MDA3NjMgOC40ODU3MzQzNywzLjIwMjMwNTM0IEwxMC4yMTI3OTY5LDEuNTU0NjQxMjIgQzkuMTUyMTA5MzcsMC41OTEyOTc3MSA3Ljc3MTc4MTI1LDguODgxNzg0MmUtMTYgNi4xMTk1MzEyNSw4Ljg4MTc4NDJlLTE2IEMzLjcyNjA5Mzc1LDguODgxNzg0MmUtMTYgMS42NTkwNDY4NywxLjM0MjAzMDUzIDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgTDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPiAgPC9nPjwvc3ZnPg==);\n  }\n\n  .providerGitHub:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04LjAwMDA2NjI1LDAgQzMuNTgyMzMwNzksMCAwLDMuNjcyMzE1ODUgMCw4LjIwMjUzNzczIEMwLDExLjgyNjYzMzggMi4yOTIyNjI0OCwxNC45MDEyOTUgNS40NzA5MzM1NiwxNS45ODU5MDIzIEM1Ljg3MDc1MTM5LDE2LjA2MTgzMTUgNi4wMTc1MzY3NSwxNS44MDc5NjQyIDYuMDE3NTM2NzUsMTUuNTkxMzE0NCBDNi4wMTc1MzY3NSwxNS4zOTU3MTgzIDYuMDEwMTE3OTksMTQuNzQ5NTcyMiA2LjAwNjY3MzU2LDE0LjA2NDE3MTEgQzMuNzgxMDQ3NDEsMTQuNTYwMzYwMiAzLjMxMTQxMzc5LDEzLjA5NjM3ODEgMy4zMTE0MTM3OSwxMy4wOTYzNzgxIEMyLjk0NzQ5NzQsMTIuMTQ4MjgwNiAyLjQyMzE1MDUsMTEuODk2MTc5IDIuNDIzMTUwNSwxMS44OTYxNzkgQzEuNjk3MzA0OTEsMTEuMzg3MDg2IDIuNDc3ODYzNzksMTEuMzk3NTQ0OSAyLjQ3Nzg2Mzc5LDExLjM5NzU0NDkgQzMuMjgxMjA4ODcsMTEuNDU1NDA4NyAzLjcwNDIxMDMxLDEyLjI0MjgxODcgMy43MDQyMTAzMSwxMi4yNDI4MTg3IEM0LjQxNzczNTQ3LDEzLjQ5NjgwNjcgNS41NzU3MjM0NiwxMy4xMzQyNzQ4IDYuMDMyMjQxNzgsMTIuOTI0Njg4MiBDNi4xMDQwNDQ3MiwxMi4zOTQ1NDE0IDYuMzExMzcyNDQsMTIuMDMyNjg4NyA2LjU0MDE2MTQ0LDExLjgyNzg1NjIgQzQuNzYzMjM3NDQsMTEuNjIwNDQyOCAyLjg5NTMwMTE5LDEwLjkxNzExMjEgMi44OTUzMDExOSw3Ljc3NDEyNzk5IEMyLjg5NTMwMTE5LDYuODc4NTk2ODggMy4yMDc4MTYxOCw2LjE0Njg3NzU3IDMuNzE5NTc3NzMsNS41NzI0NDk5OSBDMy42MzY1MTQxNyw1LjM2NTg1MTY2IDMuMzYyNjgyNjgsNC41MzE1ODAxNyAzLjc5NzA3NzIxLDMuNDAxNzQxMzMgQzMuNzk3MDc3MjEsMy40MDE3NDEzMyA0LjQ2ODg3MTg4LDMuMTgxMjg4MjcgNS45OTc2NjUwNyw0LjI0MjUzMjY3IEM2LjYzNTgxMDQ0LDQuMDYwNzkxMzQgNy4zMjAxOTA0NCwzLjk2OTY0OTAyIDguMDAwMDY2MjUsMy45NjY1MjQ5MiBDOC42Nzk5NDIwNiwzLjk2OTY0OTAyIDkuMzY0ODUyLDQuMDYwNzkxMzQgMTAuMDA0MTg5Niw0LjI0MjUzMjY3IEMxMS41MzExMjgxLDMuMTgxMjg4MjcgMTIuMjAxOTk1NCwzLjQwMTc0MTMzIDEyLjIwMTk5NTQsMy40MDE3NDEzMyBDMTIuNjM3NDQ5OCw0LjUzMTU4MDE3IDEyLjM2MzQ4NTgsNS4zNjU4NTE2NiAxMi4yODA0MjIzLDUuNTcyNDQ5OTkgQzEyLjc5MzM3NjEsNi4xNDY4Nzc1NyAxMy4xMDM3NzE0LDYuODc4NTk2ODggMTMuMTAzNzcxNCw3Ljc3NDEyNzk5IEMxMy4xMDM3NzE0LDEwLjkyNDU4MjggMTEuMjMyMjU4MywxMS42MTgyNjk2IDkuNDUwODMwMDYsMTEuODIxMzM2MyBDOS43Mzc3NzY4NywxMi4wNzU4ODI5IDkuOTkzNDU4ODcsMTIuNTc1MDYwMiA5Ljk5MzQ1ODg3LDEzLjM0MDMyOTggQzkuOTkzNDU4ODcsMTQuNDM3ODQxMSA5Ljk4NDE4NTUsMTUuMzIxMTQ3MyA5Ljk4NDE4NTUsMTUuNTkxMzE0NCBDOS45ODQxODU1LDE1LjgwOTU5NDIgMTAuMTI4MTg4NywxNi4wNjUzNjMxIDEwLjUzMzcwMzEsMTUuOTg0ODE1NiBDMTMuNzEwNjUyLDE0Ljg5ODk4NTggMTYsMTEuODI1NDExMyAxNiw4LjIwMjUzNzczIEMxNiwzLjY3MjMxNTg1IDEyLjQxODE5OTIsMCA4LjAwMDA2NjI1LDAgWiBNMi45OTYyODQ5NiwxMS42ODQ2ODgyIEMyLjk3ODY2NTQxLDExLjcyNTQzNzMgMi45MTYxMzU5MSwxMS43Mzc2NjIxIDIuODU5MTcwNDgsMTEuNzA5NjgxIEMyLjgwMTE0NTIyLDExLjY4MjkyMjMgMi43Njg1NTU3MSwxMS42MjczNjc2IDIuNzg3MzY3NTUsMTEuNTg2NDgyNyBDMi44MDQ1ODk2NSwxMS41NDQ1MTEgMi44NjcyNTE2MiwxMS41MzI4Mjk1IDIuOTI1MTQ0MzksMTEuNTYwOTQ2NSBDMi45ODMzMDIxNCwxMS41ODc3MDUxIDMuMDE2NDIxNTcsMTEuNjQzODAzMSAyLjk5NjI4NDk2LDExLjY4NDY4ODIgWiBNMy4zODk3OTkzMiwxMi4wNDQ3MDI0IEMzLjM1MTY0NTc0LDEyLjA4MDk2OTEgMy4yNzcwNjA3NywxMi4wNjQxMjYxIDMuMjI2NDU0MjYsMTIuMDA2ODA1NyBDMy4xNzQxMjU1NSwxMS45NDk2MjEgMy4xNjQzMjIyMSwxMS44NzMxNDg0IDMuMjAzMDA1NywxMS44MzYzMzgyIEMzLjI0MjM1MTU5LDExLjgwMDA3MTUgMy4zMTQ2ODQ0NSwxMS44MTcwNTAzIDMuMzY3MTQ1NjQsMTEuODc0MjM1IEMzLjQxOTQ3NDMyLDExLjkzMjA5ODggMy40Mjk2NzUxMiwxMi4wMDgwMjgxIDMuMzg5Nzk5MzIsMTIuMDQ0NzAyNCBaIE0zLjY1OTc2NTA4LDEyLjUwNTMyODMgQzMuNjEwNzQ4MzMsMTIuNTQwMjM2OCAzLjUzMDU5OTI5LDEyLjUwNzUwMTUgMy40ODEwNTI2MSwxMi40MzQ1NjA2IEMzLjQzMjAzNTgzLDEyLjM2MTYxOTUgMy40MzIwMzU4MywxMi4yNzQxNDQ2IDMuNDgyMTEyNDQsMTIuMjM5MTAwMyBDMy41MzE3OTE1NywxMi4yMDQwNTYgMy42MTA3NDgzMywxMi4yMzU1Njg4IDMuNjYwOTU3MzgsMTIuMzA3OTY2NSBDMy43MDk4NDE2OCwxMi4zODIxMjk5IDMuNzA5ODQxNjgsMTIuNDY5NjA0OCAzLjY1OTc2NTA4LDEyLjUwNTMyODMgWiBNNC4xMTYzMzQ5NSwxMy4wMzg3OTgxIEM0LjA3MjQ4NDgyLDEzLjA4ODM3NjQgMy45NzkwODgwMiwxMy4wNzUwNjUgMy45MTA3Mjk0OCwxMy4wMDc0MjE0IEMzLjg0MDc4MTI0LDEyLjk0MTI3MTggMy44MjEzMDcwMSwxMi44NDc0MTI5IDMuODY1Mjg5NjMsMTIuNzk3ODM0NyBDMy45MDk2Njk2NiwxMi43NDgxMjA3IDQuMDAzNTk2MzksMTIuNzYyMTExMyA0LjA3MjQ4NDgyLDEyLjgyOTIxMTYgQzQuMTQxOTAzMTYsMTIuODk1MjI1MyA0LjE2MzA5OTYsMTIuOTg5NzYzNCA0LjExNjMzNDk1LDEzLjAzODc5ODEgWiBNNC43MDY0MDcxOSwxMy4yMTg4OTE2IEM0LjY4NzA2NTQ2LDEzLjI4MzEzOTUgNC41OTcxMTMwNiwxMy4zMTIzNDMgNC41MDY0OTgyNywxMy4yODUwNDExIEM0LjQxNjAxNTk3LDEzLjI1NjkyNDIgNC4zNTY3OTg0MiwxMy4xODE2NzQxIDQuMzc1MDgwMzYsMTMuMTE2NzQ3IEM0LjM5Mzg5MjE5LDEzLjA1MjA5MTcgNC40ODQyNDIwMSwxMy4wMjE2NjU2IDQuNTc1NTE5MTgsMTMuMDUwODY5MiBDNC42NjU4NjkwMSwxMy4wNzg4NTAzIDQuNzI1MjE5MDUsMTMuMTUzNTU3MSA0LjcwNjQwNzE5LDEzLjIxODg5MTYgWiBNNS4zNzc5MzQxOSwxMy4yOTUyODI1IEM1LjM4MDE4NjI5LDEzLjM2MjkyNjEgNS4zMDMzNDkxOSwxMy40MTkwMjQxIDUuMjA4MjMwMTgsMTMuNDIwMjQ2NyBDNS4xMTI1ODEyNSwxMy40MjI0MiA1LjAzNTIxNDI1LDEzLjM2NzY4MDMgNS4wMzQxNTQ0MiwxMy4zMDExMjMyIEM1LjAzNDE1NDQyLDEzLjIzMjgwMDUgNS4xMDkyNjkzLDEzLjE3NzI0NTggNS4yMDQ5MTgyMywxMy4xNzU2MTU4IEM1LjMwMDAzNzI2LDEzLjE3MzcxNDIgNS4zNzc5MzQxOSwxMy4yMjgwNDY0IDUuMzc3OTM0MTksMTMuMjk1MjgyNSBaIE02LjAzNzYzNDE5LDEzLjI2OTM1NDggQzYuMDQ5MDI3MjksMTMuMzM1MzY4NSA1Ljk4MjkyMDg4LDEzLjQwMzE0NzkgNS44ODg0NjQyNSwxMy40MjEyMTM0IEM1Ljc5NTU5NzM2LDEzLjQzODU5OTcgNS43MDk2MTkyOSwxMy4zOTc4NTA1IDUuNjk3ODI4NzcsMTMuMzMyMzgwMiBDNS42ODYzMDMyMiwxMy4yNjQ3MzY1IDUuNzUzNjAxOTEsMTMuMTk2OTU3MSA1Ljg0NjMzNjMzLDEzLjE3OTQzNSBDNS45NDA5MjU0NCwxMy4xNjI1OTIgNi4wMjU1Nzg3MiwxMy4yMDIyNTQ1IDYuMDM3NjM0MTksMTMuMjY5MzU0OCBaIi8+ICA8L2c+PC9zdmc+);\n  }\n\n  .providerGitLab:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTIpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBMNC40MjgwOTMzMyw0Ljk5NzI4MjU0IEw5LjU4MDA5MzM2LDQuOTk3MjgyNTQgTDcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBaIE03LjAwNDA5MzM2LDEyLjk0OTIzIEwwLjgxNzg5MzMzMyw0Ljk5NzI2OTE3IEw0LjQyODA5MzMzLDQuOTk3MjY5MTcgTDcuMDA0MDkzMzYsMTIuOTQ5MjMgWiBNMC44MTc4OTk5OTksNC45OTcyODkyMyBMNy4wMDQwOTk5OCwxMi45NDkyNSBMMC4yMjg4MzMzMzMsOC4wMTE4ODA4IEMwLjA0MTksNy44NzU2NzE1MiAtMC4wMzYzLDcuNjM0MjEyNyAwLjAzNTEsNy40MTM4MTcxMiBMMC44MTc4OTk5OTksNC45OTcyODkyMyBaIE0wLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIEwyLjM2OTM2NjY3LDAuMjA3OTA0NzE0IEMyLjQ0OTE2NjY3LC0wLjAzODUwMjM1ODggMi43OTY3NjY2NywtMC4wMzg1NjkyMjY1IDIuODc2NTY2NjcsMC4yMDc5MDQ3MTQgTDQuNDI4MSw0Ljk5NzI5NTkxIEwwLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIFogTTcuMDA0MDkzMzYsMTIuOTQ5MjMgTDkuNTgwMDkzMzYsNC45OTcyNjkxNyBMMTMuMTkwMjkzMyw0Ljk5NzI2OTE3IEw3LjAwNDA5MzM2LDEyLjk0OTIzIFogTTEzLjE5MDI5MzMsNC45OTcyODkyMyBMMTMuOTczMDkzMyw3LjQxMzgxNzEyIEMxNC4wNDQ0OTMzLDcuNjM0MjEyNyAxMy45NjYyOTM0LDcuODc1NjcxNTIgMTMuNzc5MzYsOC4wMTE4ODA4IEw3LjAwNDA5MzM2LDEyLjk0OTI1IEwxMy4xOTAyOTMzLDQuOTk3Mjg5MjMgWiBNMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIEw5LjU4MDA5MzM2LDQuOTk3Mjk1OTEgTDExLjEzMTYyNjcsMC4yMDc5MDQ3MTQgQzExLjIxMTQyNjcsLTAuMDM4NTY5MjI2NSAxMS41NTkwMjY3LC0wLjAzODUwMjM1ODggMTEuNjM4ODI2NywwLjIwNzkwNDcxNCBMMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMikiLz4gIDwvZz48L3N2Zz4=);\n  }\n\n  .providerBitbucket:before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPiAgICAgIDxwYXRoIGQ9Ik03LDIuNDk4OTQxODdlLTA3IEw3LDIuNDk4OTQxODdlLTA3IEMzLjE1NzIxMjI5LDIuNDk4OTQxODdlLTA3IDAuMDAwNjM2NTM1NDM1LDEuMDIwODQ0MjQgMC4wMDA2MzY1MzU0MzUsMi4zMTM5MTM1OSBDMC4wMDA2MzY1MzU0MzUsMi42NTQxOTUxMyAwLjgyNDA5MTAyMyw3LjQ4NjE5MiAxLjE2NzE5NzE3LDkuMzkxNzY3NTkgQzEuMzA0NDM5MzcsMTAuMjc2NDk5OSAzLjU2ODkzOTUzLDExLjUwMTUxMyA3LDExLjUwMTUxMyBMNywxMS41MDE1MTMgQzEwLjQzMTA2MDIsMTEuNTAxNTEzIDEyLjYyNjkzODYsMTAuMjc2NDk5OSAxMi44MzI4MDMyLDkuMzkxNzY3NTkgQzEzLjE3NTkwODYsNy40ODYxOTIgMTMuOTk5MzYzMiwyLjY1NDE5NTEzIDEzLjk5OTM2MzIsMi4zMTM5MTM1OSBDMTMuOTMwNzQyMSwxLjAyMDg0NDI0IDEwLjg0Mjc4NzQsMi40OTg5NDE4N2UtMDcgNywyLjQ5ODk0MTg3ZS0wNyBMNywyLjQ5ODk0MTg3ZS0wNyBaIE03LDkuOTM2MjE4MzEgQzUuNzY0ODE4MjgsOS45MzYyMTgzMSA0LjgwNDEyMTI2LDguOTgzNDI5ODYgNC44MDQxMjEyNiw3Ljc1ODQxNjcxIEM0LjgwNDEyMTI2LDYuNTMzNDAzNTUgNS43NjQ4MTgyOCw1LjU4MDYxNTk3IDcsNS41ODA2MTU5NyBDOC4yMzUxODExMiw1LjU4MDYxNTk3IDkuMTk1ODc4NCw2LjUzMzQwMzU1IDkuMTk1ODc4NCw3Ljc1ODQxNjcxIEM5LjE5NTg3ODQsOC45MTUzNzM3MiA4LjIzNTE4MTEyLDkuOTM2MjE4MzEgNyw5LjkzNjIxODMxIEw3LDkuOTM2MjE4MzEgWiBNNywyLjk5NDQ3NjY3IEM0LjUyOTYzNjIyLDIuOTk0NDc2NjcgMi41Mzk2MjExLDIuNTg2MTM4OTUgMi41Mzk2MjExLDIuMDQxNjg4ODYgQzIuNTM5NjIxMSwxLjQ5NzIzODE1IDQuNTI5NjM2MjIsMS4wODg5MDA0MyA3LDEuMDg4OTAwNDMgQzkuNDcwMzYyODQsMS4wODg5MDA0MyAxMS40NjAzNzg2LDEuNDk3MjM4MTUgMTEuNDYwMzc4NiwyLjA0MTY4ODg2IEMxMS40NjAzNzg2LDIuNTg2MTM4OTUgOS40NzAzNjI4NCwyLjk5NDQ3NjY3IDcsMi45OTQ0NzY2NyBMNywyLjk5NDQ3NjY3IFoiLz4gICAgICA8cGF0aCBkPSJNMTIuMDY0NTA5NiwxMS4yMjkyODc2IEMxMS45MjcyNjY3LDExLjIyOTI4NzYgMTEuODU4NjQ1NywxMS4yOTczNDM4IDExLjg1ODY0NTcsMTEuMjk3MzQzOCBDMTEuODU4NjQ1NywxMS4yOTczNDM4IDEwLjE0MzExNTYsMTIuNjU4NDcgNy4wNTUxNjA5MywxMi42NTg0NyBDMy45NjcyMDY4NywxMi42NTg0NyAyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4yNTE2NzYxNiwxMS4yOTczNDM4IEMyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4xMTQ0MzM5NSwxMS4yMjkyODc2IDIuMDQ1ODEyODUsMTEuMjI5Mjg3NiBDMS45MDg1NzAwMiwxMS4yMjkyODc2IDEuNzcxMzI3ODEsMTEuMjk3MzQzOCAxLjc3MTMyNzgxLDExLjUwMTUxMyBMMS43NzEzMjc4MSwxMS41Njk1NjkyIEMyLjA0NTgxMjg1LDEyLjk5ODc1MTYgMi4yNTE2NzYxNiwxNC4wMTk1OTU2IDIuMjUxNjc2MTYsMTQuMTU1NzA3OSBDMi40NTc1NDAwOSwxNS4xNzY1NTI1IDQuNTE2MTc2MzIsMTUuOTkzMjI4IDYuOTg2NTM5ODIsMTUuOTkzMjI4IEw2Ljk4NjUzOTgyLDE1Ljk5MzIyOCBDOS40NTY5MDMzMSwxNS45OTMyMjggMTEuNTE1NTM5NSwxNS4xNzY1NTI1IDExLjcyMTQwMzUsMTQuMTU1NzA3OSBDMTEuNzIxNDAzNSwxNC4wMTk1OTU2IDExLjkyNzI2NjcsMTIuOTk4NzUxNiAxMi4yMDE3NTE4LDExLjU2OTU2OTIgTDEyLjIwMTc1MTgsMTEuNTAxNTEzIEMxMi4yNzAzNzI5LDExLjM2NTQgMTIuMjAxNzUxOCwxMS4yMjkyODc2IDEyLjA2NDUwOTYsMTEuMjI5Mjg3NiBMMTIuMDY0NTA5NiwxMS4yMjkyODc2IFoiLz4gICAgICA8ZWxsaXBzZSBjeD0iNyIgY3k9IjcuNjkiIHJ4PSIxLjA5OCIgcnk9IjEuMDg5Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=);\n  }\n\n  .callOut {\n    display: block;\n    padding: ',
    ';\n    font-size: 14px;\n    font-weight: 500;\n    text-decoration: none;\n    color: ',
    ';\n    text-align: center;\n  }\n\n  .callOut:after {\n    content: " \u2665";\n    transition: color 4s ease;\n  }\n\n  .callOut:hover:after {\n    color: red;\n  }\n\n  .callOut .netlifyLogo {\n    display: block;\n    margin: auto;\n    width: 32px;\n    height: 32px;\n    margin-bottom: 8px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4gIDxkZWZzPiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN5PSIwJSIgcj0iMTAwJSIgZng9IjUwJSIgZnk9IjAlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMS4xNTE4NSAwIC41IC0uNSkiPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMEM2QjciIG9mZnNldD0iMCUiLz4gICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEQ5QUJGIiBvZmZzZXQ9IjEwMCUiLz4gICAgPC9yYWRpYWxHcmFkaWVudD4gIDwvZGVmcz4gIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjk4MDYyMywxMS42MjYyMzc3IEMyMi44NzE3MTA3LDExLjUwNTEzMDYgMjIuNzM1NTcwNCwxMS4zOTc0Nzk4IDIyLjU3MjIwMjEsMTEuMzE2NzQxOCBDMjIuNTU4NTg4MSwxMS4zMTY3NDE4IDIyLjU0NDk3NCwxMS4yODk4MjkxIDIyLjUzMTM2LDExLjI3NjM3MjcgTDIzLjE3MTIxOTQsNy4zNjA1NzY2MSBDMjMuMTcxMjE5NCw3LjMzMzY2MzkyIDIzLjE4NDgzMzQsNy4zMjAyMDc1OCAyMy4xOTg0NDc1LDcuMzIwMjA3NTggTDIzLjIxMjA2MTUsNy4zMjAyMDc1OCBDMjMuMjEyMDYxNSw3LjMyMDIwNzU4IDIzLjIyNTY3NTUsNy4zMjAyMDc1OCAyMy4yMzkyODk2LDcuMzMzNjYzOTIgTDI2LjE2NjMwNiwxMC4yMjY3Nzc5IEMyNi4xNzk5MiwxMC4yNDAyMzQzIDI2LjE3OTkyLDEwLjI1MzY5MDYgMjYuMTc5OTIsMTAuMjY3MTQ2OSBDMjYuMTc5OTIsMTAuMjgwNjAzMyAyNi4xNjYzMDYsMTAuMjk0MDU5NiAyNi4xNTI2OTE5LDEwLjMwNzUxNiBMMjMuMDIxNDY1MSwxMS42Mzk2OTQgTDIzLjAwNzg1MSwxMS42Mzk2OTQgQzIyLjk5NDIzNywxMS42Mzk2OTQgMjIuOTk0MjM3LDExLjYzOTY5NCAyMi45ODA2MjMsMTEuNjI2MjM3NyBaIE0xNi4zNTA1NzM2LDkuNDU5NzM4MSBDMTYuMzIzMzQ1Myw5LjE5MDYxMjc0IDE2LjIyODA0NjMsOC45MjE0ODczOCAxNi4wNzgyOTA2LDguNjkyNzMwODMgQzE2LjA2NDY3NjUsOC42NzkyNzQ1NiAxNi4wNjQ2NzY1LDguNjUyMzYyMDIgMTYuMDc4MjkwNiw4LjYyNTQ0OTQ5IEwxOS4zNTkzMDEsMy41Mzg5ODAyMiBDMTkuMzU5MzAxLDMuNTI1NTIzOTUgMTkuMzcyOTE1MSwzLjUxMjA2NzY4IDE5LjM4NjUyOTMsMy41MTIwNjc2OCBDMTkuNDAwMTQzNCwzLjUxMjA2NzY4IDE5LjQwMDE0MzQsMy41MTIwNjc2OCAxOS40MTM3NTc2LDMuNTI1NTIzOTUgTDIyLjMyNzE4NTgsNi40MTg2MjE1NSBDMjIuMzQwOCw2LjQzMjA3NzgyIDIyLjM0MDgsNi40NDU1MzQwOSAyMi4zNDA4LDYuNDU4OTkwMzUgTDIxLjU3ODQwNzYsMTEuMTgyMTQwNCBDMjEuNTc4NDA3NiwxMS4yMDkwNTI5IDIxLjU2NDc5MzQsMTEuMjIyNTA5MiAyMS41NTExNzkzLDExLjIyMjUwOTIgQzIxLjM3NDE5NTMsMTEuMjc2MzM0MyAyMS4yMTA4MjU1LDExLjM1NzA3MTkgMjEuMDc0Njg0LDExLjQ2NDcyMiBDMjEuMDc0Njg0LDExLjQ3ODE3ODMgMjEuMDYxMDY5OCwxMS40NzgxNzgzIDIxLjAzMzg0MTUsMTEuNDc4MTc4MyBMMTYuMzc3ODAxOSw5LjUwMDEwNjkgQzE2LjM2NDE4NzgsOS40ODY2NTA2MyAxNi4zNTA1NzM2LDkuNDczMTk0MzcgMTYuMzUwNTczNiw5LjQ1OTczODEgWiBNMjYuOTgzMTkwNywxMS4wMjA3NjY5IEwzMS45Nzk1Nzg4LDE1Ljk3MjY2NCBDMzIuMDA2ODA3MSwxNS45ODYxMjAyIDMyLjAwNjgwNzEsMTYuMDI2NDg4OSAzMS45Nzk1Nzg4LDE2LjAyNjQ4ODkgTDMxLjk1MjM1MDUsMTYuMDUzNDAxNCBDMzEuOTUyMzUwNSwxNi4wNjY4NTc3IDMxLjkzODczNjQsMTYuMDY2ODU3NyAzMS45MTE1MDgxLDE2LjA2Njg1NzcgTDIzLjU1MjQyODMsMTIuNTI3ODY2IEMyMy41Mzg4MTQxLDEyLjUyNzg2NiAyMy41MjUyLDEyLjUwMDk1MzUgMjMuNTI1MiwxMi40ODc0OTczIEMyMy41MjUyLDEyLjQ3NDA0MSAyMy41Mzg4MTQxLDEyLjQ2MDU4NDggMjMuNTUyNDI4MywxMi40NDcxMjg2IEwyNi45NTU5NjI0LDExLjAwNzMxMDcgQzI2Ljk1NTk2MjQsMTEuMDA3MzEwNyAyNi45Njk1NzY1LDExLjAwNzMxMDcgMjYuOTgzMTkwNywxMS4wMjA3NjY5IFogTTIzLjEzMDQzNjMsMTMuMzg5MDg4MSBMMzEuMTQ5MTg1OCwxNi43ODAwNzYxIEMzMS4xNjI4LDE2Ljc5MzUzMjQgMzEuMTYyOCwxNi44MDY5ODg3IDMxLjE2MjgsMTYuODIwNDQ1IEMzMS4xNjI4LDE2LjgzMzkwMTMgMzEuMTYyOCwxNi44NDczNTc2IDMxLjE0OTE4NTgsMTYuODYwODEzOSBMMjYuNzEwOTY0NSwyMS4yNjEwMjQ1IEMyNi43MTA5NjQ1LDIxLjI3NDQ4MDggMjYuNjk3MzUwMywyMS4yNzQ0ODA4IDI2LjY3MDEyMiwyMS4yNzQ0ODA4IEwyMS44MjM0NzU0LDIwLjI2NTI1ODIgQzIxLjc5NjI0NywyMC4yNjUyNTgyIDIxLjc4MjYzMjksMjAuMjUxODAxOSAyMS43ODI2MzI5LDIwLjIyNDg4OTMgQzIxLjc0MTc5MDMsMTkuODQ4MTEyOCAyMS41NjQ4MDYsMTkuNTExNzA1MyAyMS4yNjUyOTQyLDE5LjI4Mjk0ODEgQzIxLjI1MTY4LDE5LjI2OTQ5MTggMjEuMjUxNjgsMTkuMjU2MDM1NSAyMS4yNTE2OCwxOS4yNDI1NzkyIEwyMi4xMDkzNzMxLDEzLjk4MTE2NTMgQzIyLjEwOTM3MzEsMTMuOTU0MjUyNyAyMi4xMzY2MDE0LDEzLjk0MDc5NjQgMjIuMTUwMjE1NiwxMy45NDA3OTY0IEMyMi41MzE0MTI1LDEzLjg4Njk3MTIgMjIuODU4MTUyNywxMy42OTg1ODMgMjMuMDc1OTc5NiwxMy40MDI1NDQ0IEMyMy4wODk1OTM3LDEzLjM4OTA4ODEgMjMuMTAzMjA3OSwxMy4zODkwODgxIDIzLjEzMDQzNjMsMTMuMzg5MDg4MSBaIE0xNi4xNDYzNzksMTAuNDI4Njg1OSBMMjAuNTMwMTMxNywxMi4yODU2NTMyIEMyMC41NDM3NDU5LDEyLjI5OTEwOTUgMjAuNTU3MzYsMTIuMzEyNTY1OCAyMC41NTczNiwxMi4zMzk0NzgzIEMyMC41NDM3NDU5LDEyLjQwNjc1OTggMjAuNTMwMTMxNywxMi40ODc0OTc1IDIwLjUzMDEzMTcsMTIuNTY4MjM1MiBMMjAuNTMwMTMxNywxMi42MzU1MTY2IEwyMC41MzAxMzE3LDEyLjY4OTM0MTcgQzIwLjUzMDEzMTcsMTIuNzAyNzk4IDIwLjUxNjUxNzYsMTIuNzE2MjU0MyAyMC41MDI5MDM0LDEyLjcyOTcxMDYgQzIwLjUwMjkwMzQsMTIuNzI5NzEwNiAxMC44Nzc3MDcyLDE2LjgzMzg3NzUgMTAuODY0MDkzLDE2LjgzMzg3NzUgQzEwLjg1MDQ3ODksMTYuODMzODc3NSAxMC44MzY4NjQ3LDE2LjgzMzg3NzUgMTAuODIzMjUwNiwxNi44MjA0MjEyIEMxMC44MDk2MzY1LDE2LjgwNjk2NDkgMTAuODA5NjM2NSwxNi43ODAwNTI0IDEwLjgyMzI1MDYsMTYuNzY2NTk2MSBMMTQuNDMwOTk3NCwxMS4xODIyMzc4IEMxNC40NDQ2MTE2LDExLjE2ODc4MTUgMTQuNDU4MjI1NywxMS4xNTUzMjUzIDE0LjQ4NTQ1NCwxMS4xNTUzMjUzIEMxNC41ODA3NTMsMTEuMTY4NzgxNSAxNC42NjI0Mzc4LDExLjE4MjIzNzggMTQuNzQ0MTIyNiwxMS4xODIyMzc4IEMxNS4yODg2ODgyLDExLjE4MjIzNzggMTUuNzkyNDExMywxMC45MTMxMTIxIDE2LjA5MTkyMjQsMTAuNDU1NTk4NCBDMTYuMTA1NTM2NSwxMC40NDIxNDIyIDE2LjExOTE1MDcsMTAuNDI4Njg1OSAxNi4xNDYzNzksMTAuNDI4Njg1OSBaIE0yMS41NTExNDI5LDIxLjE4MDI0MzMgTDI1LjgxMjM3MTcsMjIuMDU0OTA1MyBDMjUuODI1OTg1OSwyMi4wNTQ5MDUzIDI1LjgzOTYsMjIuMDY4MzYxNiAyNS44Mzk2LDIyLjEwODczMDcgQzI1LjgzOTYsMjIuMTIyMTg3IDI1LjgzOTYsMjIuMTM1NjQzMyAyNS44MjU5ODU5LDIyLjE0OTA5OTcgTDE5LjkxNzQ0NDksMjguMDAyNjA3MiBDMTkuOTE3NDQ0OSwyOC4wMTYwNjM2IDE5LjkwMzgzMDcsMjguMDE2MDYzNiAxOS44OTAyMTY2LDI4LjAxNjA2MzYgTDE5Ljg2Mjk4ODMsMjguMDE2MDYzNiBDMTkuODQ5Mzc0MSwyOC4wMDI2MDcyIDE5LjgzNTc2LDI3Ljk4OTE1MDkgMTkuODM1NzYsMjcuOTYyMjM4MiBMMjAuODU2ODIxMiwyMS42OTE1ODQxIEMyMC44NTY4MjEyLDIxLjY3ODEyNzggMjAuODcwNDM1NCwyMS42NTEyMTUxIDIwLjg4NDA0OTUsMjEuNjUxMjE1MSBDMjEuMTI5MTA0MiwyMS41NTcwMjA4IDIxLjMzMzMxNjUsMjEuMzk1NTQ0NyAyMS40OTY2ODYzLDIxLjE5MzY5OTYgQzIxLjUxMDMwMDQsMjEuMTkzNjk5NiAyMS41MjM5MTQ2LDIxLjE4MDI0MzMgMjEuNTUxMTQyOSwyMS4xODAyNDMzIFogTTE5LjA0NjE2NzksMjAuNjgyNDAzIEMxOS4xNTUwODE0LDIxLjA5OTU0ODcgMTkuNDU0NTkzMywyMS40NjI4NjkyIDE5Ljg2MzAxODcsMjEuNjI0MzQ0OSBDMTkuODkwMjQ3MSwyMS42Mzc4MDEyIDE5Ljg5MDI0NzEsMjEuNjY0NzEzOSAxOS44NjMwMTg3LDIxLjY2NDcxMzkgQzE5Ljg2MzAxODcsMjEuNjY0NzEzOSAxOC42MjQxMjgzLDI5LjIxMzcwNTQgMTguNjI0MTI4MywyOS4yMjcxNjE3IEwxOC4xODg0NzQ2LDI5LjY1Nzc2MzcgQzE4LjE4ODQ3NDYsMjkuNjcxMjIwMSAxOC4xNzQ4NjA0LDI5LjY3MTIyMDEgMTguMTYxMjQ2MiwyOS42NzEyMjAxIEMxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xMzQwMTc4LDI5LjY1Nzc2MzcgTDEwLjk0NTczMDYsMTkuMjY5NDkwMSBDMTAuOTMyMTE2NSwxOS4yNTYwMzM4IDEwLjkzMjExNjUsMTkuMjI5MTIxMiAxMC45NDU3MzA2LDE5LjIxNTY2NDkgQzEwLjk4NjU3MzIsMTkuMTYxODM5NiAxMS4wMTM4MDE1LDE5LjEwODAxNDQgMTEuMDU0NjQ0MSwxOS4wNDA3MzI4IEMxMS4wNjgyNTgzLDE5LjAyNzI3NjUgMTEuMDgxODcyNCwxOS4wMTM4MjAyIDExLjEwOTEwMDgsMTkuMDEzODIwMiBMMTkuMDA1MzI1NCwyMC42NDIwMzQxIEMxOS4wMzI1NTM3LDIwLjY1NTQ5MDQgMTkuMDQ2MTY3OSwyMC42Njg5NDY3IDE5LjA0NjE2NzksMjAuNjgyNDAzIFogTTExLjMxMzM2NDcsMTguMDk4NzI4NiBDMTEuMjg2MTM2NSwxOC4wOTg3Mjg2IDExLjI3MjUyMjQsMTguMDg1MjcyNCAxMS4yNzI1MjI0LDE4LjA1ODM1OTggQzExLjI3MjUyMjQsMTcuOTUwNzA5NiAxMS4yNDUyOTQxLDE3Ljg1NjUxNTcgMTEuMjMxNjgsMTcuNzQ4ODY1NCBDMTEuMjMxNjgsMTcuNzIxOTUyOSAxMS4yMzE2OCwxNy43MDg0OTY2IDExLjI1ODkwODIsMTcuNjk1MDQwMyBDMTEuMjU4OTA4MiwxNy42OTUwNDAzIDIwLjkzODU0NTksMTMuNTYzOTYzNSAyMC45NTIxNiwxMy41NjM5NjM1IEMyMC45NTIxNiwxMy41NjM5NjM1IDIwLjk2NTc3NDEsMTMuNTYzOTYzNSAyMC45NzkzODgyLDEzLjU3NzQxOTcgQzIxLjA0NzQ1ODgsMTMuNjQ0NzAxMSAyMS4xMDE5MTUzLDEzLjY4NTA2OTkgMjEuMTU2MzcxOCwxMy43MjU0Mzg4IEMyMS4xODM2LDEzLjcyNTQzODggMjEuMTgzNiwxMy43NTIzNTEzIDIxLjE4MzYsMTMuNzY1ODA3NiBMMjAuMzM5NTI0NywxOC45NDY0NzQxIEMyMC4zMzk1MjQ3LDE4Ljk3MzM4NjYgMjAuMzI1OTEwNiwxOC45ODY4NDI5IDIwLjI5ODY4MjQsMTguOTg2ODQyOSBDMTkuODM1ODAyNCwxOS4wMTM3NTU0IDE5LjQyNzM3ODgsMTkuMjgyODgxIDE5LjE5NTkzODgsMTkuNjg2NTY5MyBDMTkuMTgyMzI0NywxOS43MDAwMjU1IDE5LjE2ODcxMDYsMTkuNzEzNDgxOCAxOS4xNDE0ODI0LDE5LjcxMzQ4MTggTDExLjMxMzM2NDcsMTguMDk4NzI4NiBaIE03Ljg2ODk3NzU4LDE5LjE4ODcyOTEgQzcuOTA5ODIwMywxOS4yNTYwMTExIDcuOTUwNjYzMDMsMTkuMzA5ODM2NyA3Ljk5MTUwNTc2LDE5LjM2MzY2MjMgQzguMDA1MTIsMTkuMzc3MTE4NyA4LjAwNTEyLDE5LjM5MDU3NTEgOC4wMDUxMiwxOS4zOTA1NzUxIEw2LjEzOTk2ODc5LDIyLjI4MzcwMDcgQzYuMTI2MzU0NTUsMjIuMjk3MTU3MSA2LjExMjc0MDMsMjIuMzEwNjEzNSA2LjA5OTEyNjA2LDIyLjMxMDYxMzUgQzYuMDk5MTI2MDYsMjIuMzEwNjEzNSA2LjA4NTUxMTgyLDIyLjMxMDYxMzUgNi4wNzE4OTc1OCwyMi4yOTcxNTcxIEw0LjQyNDU3NDI0LDIwLjY2ODkzMjkgQzQuNDEwOTYsMjAuNjU1NDc2NSA0LjQxMDk2LDIwLjY0MjAyMDEgNC40MTA5NiwyMC42Mjg1NjM3IEM0LjQxMDk2LDIwLjYxNTEwNzMgNC40MjQ1NzQyNCwyMC42MDE2NTA5IDQuNDM4MTg4NDgsMjAuNjAxNjUwOSBMNy44MTQ1MjA2MSwxOS4xNjE4MTYzIEw3LjgyODEzNDg1LDE5LjE2MTgxNjMgQzcuODQxNzQ5MDksMTkuMTYxODE2MyA3Ljg1NTM2MzMzLDE5LjE3NTI3MjcgNy44Njg5Nzc1OCwxOS4xODg3MjkxIFogTTEwLjE4MzMxOTEsMTkuODYxNTU3OSBDMTAuMTk2OTMzMiwxOS44NjE1NTc5IDEwLjIxMDU0NzMsMTkuODc1MDE0MiAxMC4yMjQxNjE0LDE5Ljg4ODQ3MDYgTDE3LjQzOTYyOTQsMzAuMzU3NDg3OCBDMTcuNDUzMjQzNSwzMC4zNzA5NDQxIDE3LjQ1MzI0MzUsMzAuMzk3ODU2NyAxNy40Mzk2Mjk0LDMwLjQxMTMxMzEgTDE1Ljg2MDM5NDksMzEuOTg1NzAyNSBDMTUuODYwMzk0OSwzMS45OTkxNTg5IDE1Ljg0Njc4MDgsMzEuOTk5MTU4OSAxNS44MDU5Mzg2LDMxLjk4NTcwMjUgTDYuNzkzNDEwNTcsMjMuMDY0MTYyMiBDNi43Nzk3OTY0OCwyMy4wNTA3MDU4IDYuNzc5Nzk2NDgsMjMuMDIzNzkzMiA2LjgwNzAyNDY2LDIyLjk5Njg4MDYgTDguNzY3NDUzNzEsMTkuOTU1NzUyMiBDOC43ODEwNjc4LDE5Ljk0MjI5NTggOC43OTQ2ODE4OSwxOS45Mjg4Mzk1IDguODIxOTEwMDcsMTkuOTI4ODM5NSBDOS4wMjYxMjE0MywxOS45OTYxMjExIDkuMjE2NzE4NywyMC4wMjMwMzM4IDkuNDIwOTMwMDYsMjAuMDIzMDMzOCBDOS42Nzk1OTc3OCwyMC4wMjMwMzM4IDkuOTI0NjUxNDEsMTkuOTY5MjA4NSAxMC4xODMzMTkxLDE5Ljg2MTU1NzkgWiBNOC45OTg5MTg1NiwxNi40MDMyMzIyIEM4Ljk4NTMwNDM5LDE2LjQwMzIzMjIgOC45NzE2OTAyMiwxNi4zODk3NzU5IDguOTU4MDc2MDQsMTYuMzc2MzE5NiBMNS4wOTE2NTA2MywxMC43MzgxMzg4IEM1LjA3ODAzNjQ2LDEwLjcyNDY4MjUgNS4wNzgwMzY0NiwxMC42OTc3NyA1LjA5MTY1MDYzLDEwLjY4NDMxMzcgTDguNTYzMjY1LDcuMjM5NTA2MzMgQzguNTYzMjY1LDcuMjI2MDUwMDYgOC41NzY4NzkxNyw3LjIyNjA1MDA2IDguNjA0MTA3NTIsNy4yMjYwNTAwNiBDOC42MDQxMDc1Miw3LjIzOTUwNjMzIDEyLjcwMTk3MzksOC45NjE5MTAwMiAxMy4xNjQ4NTU4LDkuMTYzNzU0MiBDMTMuMTc4NDcsOS4xNzcyMTA0OCAxMy4xOTIwODQyLDkuMTkwNjY2NzYgMTMuMTkyMDg0Miw5LjIxNzU3OTMyIEMxMy4xNjQ4NTU4LDkuMzM4Njg1ODMgMTMuMTUxMjQxNiw5LjQ1OTc5MjM0IDEzLjE1MTI0MTYsOS41ODA4OTg4NCBDMTMuMTUxMjQxNiw5Ljk5ODA0MzQ5IDEzLjMxNDYxMTcsMTAuMzg4Mjc1NiAxMy42MDA1MDk0LDEwLjY4NDMxMzcgQzEzLjYxNDEyMzUsMTAuNjk3NzcgMTMuNjE0MTIzNSwxMC43MjQ2ODI1IDEzLjYwMDUwOTQsMTAuNzM4MTM4OCBMOS45NTE5MTA3NCwxNi4zODk3NzU5IEM5LjkzODI5NjU3LDE2LjQwMzIzMjIgOS45MjQ2ODIzOSwxNi40MTY2ODg1IDkuODk3NDU0MDUsMTYuNDE2Njg4NSBDOS43NDc2OTgxMywxNi4zNzYzMTk2IDkuNTg0MzI4MDQsMTYuMzQ5NDA3MSA5LjQzNDU3MjEzLDE2LjM0OTQwNzEgQzkuMjk4NDMwMzksMTYuMzQ5NDA3MSA5LjE0ODY3NDQ4LDE2LjM3NjMxOTYgOC45OTg5MTg1NiwxNi40MDMyMzIyIFogTTEzLjY2ODYwMTksOC4zNTY0MjAzNCBDMTMuNDkxNjE4Niw4LjI3NTY4MTk4IDkuMzUyOTMzMjQsNi41MjYzNTA4MyA5LjM1MjkzMzI0LDYuNTI2MzUwODMgQzkuMzM5MzE5MTQsNi41MTI4OTQ0NCA5LjMyNTcwNTA1LDYuNTEyODk0NDQgOS4zMzkzMTkxNCw2LjQ4NTk4MTY1IEM5LjMzOTMxOTE0LDYuNDcyNTI1MjYgOS4zMzkzMTkxNCw2LjQ1OTA2ODg2IDkuMzUyOTMzMjQsNi40NDU2MTI0NyBMMTUuODMzMjQzMiwwLjAxMzQ1NjM5MzUgQzE1LjgzMzI0MzIsMCAxNS44NDY4NTczLDAgMTUuODYwNDcxNCwwIEMxNS44NzQwODU1LDAgMTUuODc0MDg1NSwwIDE1Ljg4NzY5OTYsMC4wMTM0NTYzOTM1IEwxOC42Nzg1ODk0LDIuNzcyMDE3MDUgQzE4LjY5MjIwMzUsMi43ODU0NzM0NSAxOC42OTIyMDM1LDIuODEyMzg2MjMgMTguNjc4NTg5NCwyLjgyNTg0MjYzIEwxNS4zMTU5MDc2LDguMDMzNDY2OSBDMTUuMzAyMjkzNSw4LjA0NjkyMzI5IDE1LjI4ODY3OTQsOC4wNjAzNzk2OSAxNS4yNjE0NTEyLDguMDYwMzc5NjkgQzE1LjA4NDQ2NzksOC4wMDY1NTQxMSAxNC45MDc0ODQ3LDcuOTc5NjQxMzMgMTQuNzMwNTAxNCw3Ljk3OTY0MTMzIEMxNC4zNjI5MjA4LDcuOTc5NjQxMzMgMTMuOTk1MzQwMiw4LjExNDIwNTI2IDEzLjcwOTQ0NDIsOC4zNDI5NjM5NSBDMTMuNjk1ODMwMSw4LjM1NjQyMDM0IDEzLjY5NTgzMDEsOC4zNTY0MjAzNCAxMy42Njg2MDE5LDguMzU2NDIwMzQgWiBNNy43ODcyODk5NSwxNy4zMzE3NTExIEM3Ljc3MzY3NTgxLDE3LjM0NTIwNzQgNy43NjAwNjE2NywxNy4zNTg2NjM3IDcuNzQ2NDQ3NTIsMTcuMzU4NjYzNyBMMC4wNDA4NDI0Mjk4LDE1Ljc0MzkwOCBDMC4wMTM2MTQxNDMzLDE1Ljc0MzkwOCAwLDE1LjczMDQ1MTcgMCwxNS43MTY5OTU0IEMwLDE1LjcwMzUzOTEgMCwxNS42OTAwODI4IDAuMDEzNjE0MTQzMywxNS42NzY2MjY1IEw0LjMxNTY4MzQyLDExLjQyNDQzNjMgQzQuMzE1NjgzNDIsMTEuNDEwOTgwMSA0LjMyOTI5NzU2LDExLjQxMDk4MDEgNC4zNDI5MTE3MSwxMS40MTA5ODAxIEM0LjM3MDEzOTk5LDExLjQyNDQzNjMgNC4zNzAxMzk5OSwxMS40MjQ0MzYzIDQuMzgzNzU0MTMsMTEuNDM3ODkyNiBDNC4zODM3NTQxMywxMS40NTEzNDg5IDguMDczMTg2OTYsMTYuNzgwMDQyOSA4LjExNDAyOTM5LDE2LjgzMzg2ODEgQzguMTI3NjQzNTQsMTYuODQ3MzI0NCA4LjEyNzY0MzU0LDE2Ljg3NDIzNyA4LjExNDAyOTM5LDE2Ljg4NzY5MzMgQzcuOTkxNTAyMSwxNy4wMjIyNTYzIDcuODY4OTc0ODEsMTcuMTcwMjc1NSA3Ljc4NzI4OTk1LDE3LjMzMTc1MTEgWiBNNy4zNTE1NTc4MywxOC4yNDY3NDY0IEM3LjM3ODc4NTk0LDE4LjI0Njc0NjQgNy4zOTI0LDE4LjI2MDIwMjcgNy4zOTI0LDE4LjI4NzExNTEgQzcuMzkyNCwxOC4zMDA1NzEzIDcuMzc4Nzg1OTQsMTguMzE0MDI3NSA3LjM1MTU1NzgzLDE4LjM0MDkzOTkgTDMuNjM0OTIsMTkuOTE1MzE2NSBDMy42MzQ5MiwxOS45MTUzMTY1IDMuNjIxMzA1OTQsMTkuOTE1MzE2NSAzLjYwNzY5MTg4LDE5LjkwMTg2MDMgTDAuNjI2MjEzMTg1LDE2Ljk0MTQ5NDEgQzAuNjEyNTk5MTI3LDE2LjkyODAzNzggMC41OTg5ODUwNjksMTYuOTAxMTI1NCAwLjYxMjU5OTEyNywxNi44ODc2NjkyIEMwLjYyNjIxMzE4NSwxNi44NzQyMTMgMC42Mzk4MjcyNDMsMTYuODYwNzU2OCAwLjY2NzA1NTM1OSwxNi44NjA3NTY4IEw3LjM1MTU1NzgzLDE4LjI0Njc0NjQgWiIvPjwvc3ZnPg==);\n  }\n\n  .visuallyHidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    #fff-space: nowrap;\n  }\n'
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var css = require('csjs-injectify/csjs-inject');
var baseColor = 'rgb(14, 30, 37)';
var subduedColor = '#a3a9ac';
var providerColorGoogle = '#4285f4';
var providerAltColorGoogle = '#366dc7';
var providerColorGitHub = '#333';
var providerAltColorGitHub = '#000';
var providerColorGitLab = '#e24329';
var providerAltColorGitLab = '#b03320';
var providerColorBitbucket = '#205081';
var providerAltColorBitbucket = '#14314f';
var fontFamily = '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\'';
var basePadding = '32px';
module.exports = css(_templateObject, subduedColor, subduedColor, subduedColor, subduedColor, fontFamily, basePadding, baseColor, basePadding, baseColor, fontFamily, baseColor, subduedColor, baseColor, basePadding, subduedColor, baseColor, baseColor, baseColor, baseColor, basePadding, baseColor, providerColorGoogle, providerAltColorGoogle, providerAltColorGoogle, providerColorGitHub, providerAltColorGitHub, providerAltColorGitHub, providerColorGitLab, providerAltColorGitLab, providerAltColorGitLab, providerColorBitbucket, providerAltColorBitbucket, providerAltColorBitbucket, basePadding, subduedColor);
},{"csjs-injectify/csjs-inject":12}],6:[function(require,module,exports){
'use strict';
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var GoTrue = require('gotrue-js').default;
var Nanobus = require('nanobus');
var Modal = require('./components/modal');
var queryString = require('query-string');
var NetlifyIdentity = function (_Nanobus) {
    _inherits(NetlifyIdentity, _Nanobus);
    function NetlifyIdentity(opts, goTrueOpts) {
        _classCallCheck(this, NetlifyIdentity);
        var _this = _possibleConstructorReturn(this, (NetlifyIdentity.__proto__ || Object.getPrototypeOf(NetlifyIdentity)).call(this));
        if (!goTrueOpts) {
            goTrueOpts = opts;
            opts = {};
        }
        opts = Object.assign({ open: false }, opts);
        _this.goTrue = new GoTrue(goTrueOpts);
        _this.modal = new Modal(opts);
        _this.emit = _this.emit.bind(_this);
        _this.state = {
            open: opts.open,
            page: 'login',
            submitting: false,
            message: 'messages go here',
            user: null
        };
        _this.on('render', function () {
            if (!_this.isMounted) {
                return console.warn('NetlifyIdentity: widget must be mounted first');
            }
            _this.modal.render(_this.state, _this.emit);
        });
        store(_this.state, _this, _this.goTrue);
        return _this;
    }
    _createClass(NetlifyIdentity, [
        {
            key: 'create',
            value: function create() {
                var _this2 = this;
                if (this.isMounted) {
                    return console.warn('NetlifyIdentity: Already created');
                }
                var user = this.goTrue.currentUser();
                if (user) {
                    this.state.page = 'logout';
                    this.state.user = user;
                    this.emit('login', user);
                }
                return this._parseHashTokens().then(function () {
                    return _this2.modal.render(_this2.state, _this2.emit);
                });
            }
        },
        {
            key: 'open',
            value: function open() {
                if (!this.isMounted) {
                    return console.warn('NetlifyIdentity: Can\'t open before mounting in the DOM');
                }
                this.state.open = true;
                this.emit('render');
            }
        },
        {
            key: 'close',
            value: function close() {
                if (!this.isMounted) {
                    return console.warn('NetlifyIdentity: Can\'t close before mounting in the DOM');
                }
                this.state.open = false;
                this.emit('render');
            }
        },
        {
            key: '_parseHashTokens',
            value: function _parseHashTokens() {
                var _this3 = this;
                var parsedHash = queryString.parse(window.location.hash);
                if (parsedHash.error) {
                    window.location.hash = '';
                    this.state.message = 'Error ' + parsedHash.error + ': ' + parsedHash.error_description;
                    this.emit('error', new Error(parsedHash.error_description));
                    return Promise.resolve();
                }
                if (parsedHash.confirmation_token) {
                    window.location.hash = '';
                    return this.goTrue.confirm(parsedHash.confirmation_token).then(function (user) {
                        _this3.state.message = 'Logged in ' + user.email;
                        _this3.state.page = 'logout';
                        _this3.state.user = user;
                        _this3.emit('login', user);
                    }).catch(function (err) {
                        _this3.state.message = 'Failed to confirm email ' + JSON.stringify(err);
                        _this3.emit('error', err);
                    });
                }
                if (parsedHash.recovery_token) {
                    window.location.hash = '';
                    return this.goTrue.recover(parsedHash.recovery_token).then(function (user) {
                        _this3.state.message = 'Logged in ' + user.email;
                        _this3.state.page = 'logout';
                        _this3.state.user = user;
                        _this3.emit('login', user);
                    }).catch(function (err) {
                        _this3.state.message = 'Failed to recover account ' + JSON.stringify(err);
                        _this3.emit('error', err);
                    });
                }
                if (parsedHash.invite_token) {
                    window.location.hash = '';
                    return Promise.resolve();
                }
                if (parsedHash.email_change_token) {
                    window.location.hash = '';
                    var user = this.goTrue.currentUser();
                    if (!user) {
                        return Promise.resolve();
                    }
                    return user.update({ email_change_token: parsedHash.email_change_token }).then(function (user) {
                        _this3.state.user = user;
                    }).catch(function (err) {
                        _this3.state.message = 'Failed to change email ' + JSON.stringify(err);
                        _this3.emit('error', err);
                    });
                }
                if (parsedHash.access_token) {
                    window.location.hash = '';
                    var remember = true;
                    return this.goTrue.createUser(parsedHash, remember).then(function (user) {
                        _this3.state.message = 'Logged in ' + user.email;
                        _this3.state.page = 'logout';
                        _this3.state.user = user;
                        _this3.emit('login', user);
                    }).catch(function (err) {
                        _this3.state.message = 'Failed to login ' + JSON.stringify(err);
                        _this3.emit('error', err);
                    });
                }
                return Promise.resolve();
            }
        },
        {
            key: 'isMounted',
            get: function get() {
                return this.modal.element;
            }
        }
    ]);
    return NetlifyIdentity;
}(Nanobus);
module.exports = NetlifyIdentity;
function store(state, emitter, goTrue) {
    emitter.on('navigate', function (page) {
        state.page = page;
        emitter.emit('render');
    });
    emitter.on('close', function () {
        state.open = false;
        emitter.emit('render');
    });
    emitter.on('submit-signup', function (_ref) {
        var email = _ref.email, password = _ref.password, name = _ref.name;
        state.submitting = true;
        emitter.emit('render');
        goTrue.signup(email, password, { full_name: name }).then(function (response) {
            state.message = 'Confirmation email sent';
            state.submitting = false;
            emitter.emit('render');
            emitter.emit('signup', response);
        }, function (error) {
            state.message = 'Failed to register ' + JSON.stringify(error);
            state.submitting = false;
            emitter.emit('render');
            emitter.emit('error', error);
        });
    });
    emitter.on('submit-login', function (_ref2) {
        var email = _ref2.email, password = _ref2.password;
        state.submitting = true;
        emitter.emit('render');
        var remember = true;
        goTrue.login(email, password, remember).then(function (user) {
            state.message = 'Logged in ' + user.email;
            state.submitting = false;
            state.page = 'logout';
            state.user = user;
            emitter.emit('render');
            emitter.emit('login', user);
        }, function (error) {
            state.message = 'Failed to log in ' + JSON.stringify(error);
            state.submitting = false;
            emitter.emit('render');
            emitter.emit('error', error);
        });
    });
    emitter.on('external-login', function (_ref3) {
        var provider = _ref3.provider;
        var url = goTrue.loginExternalUrl(provider);
        window.location.href = url;
    });
    emitter.on('submit-logout', function () {
        state.submitting = true;
        emitter.emit('render');
        var user = goTrue.currentUser();
        if (user) {
            user.logout().then(function () {
                state.submitting = false;
                state.page = 'login';
                state.user = null;
                state.message = 'Logged out';
                emitter.emit('render');
            });
        }
    });
}
},{"./components/modal":3,"gotrue-js":33,"nanobus":38,"query-string":47}],7:[function(require,module,exports){

},{}],8:[function(require,module,exports){
(function () {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
                continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            } else if (Array.isArray(arg)) {
                classes.push(classNames.apply(null, arg));
            } else if (argType === 'object') {
                for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
        return classes.join(' ');
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define('classnames', [], function () {
            return classNames;
        });
    } else {
        window.classNames = classNames;
    }
}());
},{}],9:[function(require,module,exports){
(function (global){
'use strict';
var csjs = require('csjs');
var insertCss = require('insert-css');
function csjsInserter() {
    var args = Array.prototype.slice.call(arguments);
    var result = csjs.apply(null, args);
    if (global.document) {
        insertCss(csjs.getCss(result));
    }
    return result;
}
module.exports = csjsInserter;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"csjs":15,"insert-css":35}],10:[function(require,module,exports){
'use strict';
module.exports = require('csjs/get-css');
},{"csjs/get-css":14}],11:[function(require,module,exports){
'use strict';
var csjs = require('./csjs');
module.exports = csjs;
module.exports.csjs = csjs;
module.exports.getCss = require('./get-css');
},{"./csjs":9,"./get-css":10}],12:[function(require,module,exports){
'use strict';
module.exports = require('csjs-inject');
},{"csjs-inject":11}],13:[function(require,module,exports){
'use strict';
module.exports = require('./lib/csjs');
},{"./lib/csjs":19}],14:[function(require,module,exports){
'use strict';
module.exports = require('./lib/get-css');
},{"./lib/get-css":23}],15:[function(require,module,exports){
'use strict';
var csjs = require('./csjs');
module.exports = csjs();
module.exports.csjs = csjs;
module.exports.noScope = csjs({ noscope: true });
module.exports.getCss = require('./get-css');
},{"./csjs":13,"./get-css":14}],16:[function(require,module,exports){
'use strict';
var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
module.exports = function encode(integer) {
    if (integer === 0) {
        return '0';
    }
    var str = '';
    while (integer > 0) {
        str = CHARS[integer % 62] + str;
        integer = Math.floor(integer / 62);
    }
    return str;
};
},{}],17:[function(require,module,exports){
'use strict';
var makeComposition = require('./composition').makeComposition;
module.exports = function createExports(classes, keyframes, compositions) {
    var keyframesObj = Object.keys(keyframes).reduce(function (acc, key) {
        var val = keyframes[key];
        acc[val] = makeComposition([key], [val], true);
        return acc;
    }, {});
    var exports = Object.keys(classes).reduce(function (acc, key) {
        var val = classes[key];
        var composition = compositions[key];
        var extended = composition ? getClassChain(composition) : [];
        var allClasses = [key].concat(extended);
        var unscoped = allClasses.map(function (name) {
            return classes[name] ? classes[name] : name;
        });
        acc[val] = makeComposition(allClasses, unscoped);
        return acc;
    }, keyframesObj);
    return exports;
};
function getClassChain(obj) {
    var visited = {}, acc = [];
    function traverse(obj) {
        return Object.keys(obj).forEach(function (key) {
            if (!visited[key]) {
                visited[key] = true;
                acc.push(key);
                traverse(obj[key]);
            }
        });
    }
    traverse(obj);
    return acc;
}
},{"./composition":18}],18:[function(require,module,exports){
'use strict';
module.exports = {
    makeComposition: makeComposition,
    isComposition: isComposition,
    ignoreComposition: ignoreComposition
};
function makeComposition(classNames, unscoped, isAnimation) {
    var classString = classNames.join(' ');
    return Object.create(Composition.prototype, {
        classNames: {
            value: Object.freeze(classNames),
            configurable: false,
            writable: false,
            enumerable: true
        },
        unscoped: {
            value: Object.freeze(unscoped),
            configurable: false,
            writable: false,
            enumerable: true
        },
        className: {
            value: classString,
            configurable: false,
            writable: false,
            enumerable: true
        },
        selector: {
            value: classNames.map(function (name) {
                return isAnimation ? name : '.' + name;
            }).join(', '),
            configurable: false,
            writable: false,
            enumerable: true
        },
        toString: {
            value: function () {
                return classString;
            },
            configurable: false,
            writeable: false,
            enumerable: false
        }
    });
}
function isComposition(value) {
    return value instanceof Composition;
}
function ignoreComposition(values) {
    return values.reduce(function (acc, val) {
        if (isComposition(val)) {
            val.classNames.forEach(function (name, i) {
                acc[name] = val.unscoped[i];
            });
        }
        return acc;
    }, {});
}
function Composition() {
}
},{}],19:[function(require,module,exports){
'use strict';
var extractExtends = require('./css-extract-extends');
var composition = require('./composition');
var isComposition = composition.isComposition;
var ignoreComposition = composition.ignoreComposition;
var buildExports = require('./build-exports');
var scopify = require('./scopeify');
var cssKey = require('./css-key');
var extractExports = require('./extract-exports');
module.exports = function csjsTemplate(opts) {
    opts = typeof opts === 'undefined' ? {} : opts;
    var noscope = typeof opts.noscope === 'undefined' ? false : opts.noscope;
    return function csjsHandler(strings, values) {
        var values = Array(arguments.length - 1);
        for (var i = 1; i < arguments.length; i++) {
            values[i - 1] = arguments[i];
        }
        var css = joiner(strings, values.map(selectorize));
        var ignores = ignoreComposition(values);
        var scope = noscope ? extractExports(css) : scopify(css, ignores);
        var extracted = extractExtends(scope.css);
        var localClasses = without(scope.classes, ignores);
        var localKeyframes = without(scope.keyframes, ignores);
        var compositions = extracted.compositions;
        var exports = buildExports(localClasses, localKeyframes, compositions);
        return Object.defineProperty(exports, cssKey, {
            enumerable: false,
            configurable: false,
            writeable: false,
            value: extracted.css
        });
    };
};
function selectorize(value) {
    return isComposition(value) ? value.selector : value;
}
function joiner(strings, values) {
    return strings.map(function (str, i) {
        return i !== values.length ? str + values[i] : str;
    }).join('');
}
function without(obj, unwanted) {
    return Object.keys(obj).reduce(function (acc, key) {
        if (!unwanted[key]) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
},{"./build-exports":17,"./composition":18,"./css-extract-extends":20,"./css-key":21,"./extract-exports":22,"./scopeify":28}],20:[function(require,module,exports){
'use strict';
var makeComposition = require('./composition').makeComposition;
var regex = /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g;
module.exports = function extractExtends(css) {
    var found, matches = [];
    while (found = regex.exec(css)) {
        matches.unshift(found);
    }
    function extractCompositions(acc, match) {
        var extendee = getClassName(match[1]);
        var keyword = match[3];
        var extended = match[4];
        var index = match.index + match[1].length + match[2].length;
        var len = keyword.length + extended.length;
        acc.css = acc.css.slice(0, index) + ' ' + acc.css.slice(index + len + 1);
        var extendedClasses = splitter(extended);
        extendedClasses.forEach(function (className) {
            if (!acc.compositions[extendee]) {
                acc.compositions[extendee] = {};
            }
            if (!acc.compositions[className]) {
                acc.compositions[className] = {};
            }
            acc.compositions[extendee][className] = acc.compositions[className];
        });
        return acc;
    }
    return matches.reduce(extractCompositions, {
        css: css,
        compositions: {}
    });
};
function splitter(match) {
    return match.split(',').map(getClassName);
}
function getClassName(str) {
    var trimmed = str.trim();
    return trimmed[0] === '.' ? trimmed.substr(1) : trimmed;
}
},{"./composition":18}],21:[function(require,module,exports){
'use strict';
module.exports = ' css ';
},{}],22:[function(require,module,exports){
'use strict';
var regex = require('./regex');
var classRegex = regex.classRegex;
var keyframesRegex = regex.keyframesRegex;
module.exports = extractExports;
function extractExports(css) {
    return {
        css: css,
        keyframes: getExport(css, keyframesRegex),
        classes: getExport(css, classRegex)
    };
}
function getExport(css, regex) {
    var prop = {};
    var match;
    while ((match = regex.exec(css)) !== null) {
        var name = match[2];
        prop[name] = name;
    }
    return prop;
}
},{"./regex":25}],23:[function(require,module,exports){
'use strict';
var cssKey = require('./css-key');
module.exports = function getCss(csjs) {
    return csjs[cssKey];
};
},{"./css-key":21}],24:[function(require,module,exports){
'use strict';
module.exports = function hashStr(str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
        hash = hash * 33 ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
};
},{}],25:[function(require,module,exports){
'use strict';
var findClasses = /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source;
var findKeyframes = /(@\S*keyframes\s*)([^{\s]*)/.source;
var ignoreComments = /(?!(?:[^*\/]|\*[^\/]|\/[^*])*\*+\/)/.source;
var classRegex = new RegExp(findClasses + ignoreComments, 'g');
var keyframesRegex = new RegExp(findKeyframes + ignoreComments, 'g');
module.exports = {
    classRegex: classRegex,
    keyframesRegex: keyframesRegex,
    ignoreComments: ignoreComments
};
},{}],26:[function(require,module,exports){
var ignoreComments = require('./regex').ignoreComments;
module.exports = replaceAnimations;
function replaceAnimations(result) {
    var animations = Object.keys(result.keyframes).reduce(function (acc, key) {
        acc[result.keyframes[key]] = key;
        return acc;
    }, {});
    var unscoped = Object.keys(animations);
    if (unscoped.length) {
        var regexStr = '((?:animation|animation-name)\\s*:[^};]*)(' + unscoped.join('|') + ')([;\\s])' + ignoreComments;
        var regex = new RegExp(regexStr, 'g');
        var replaced = result.css.replace(regex, function (match, preamble, name, ending) {
            return preamble + animations[name] + ending;
        });
        return {
            css: replaced,
            keyframes: result.keyframes,
            classes: result.classes
        };
    }
    return result;
}
},{"./regex":25}],27:[function(require,module,exports){
'use strict';
var encode = require('./base62-encode');
var hash = require('./hash-string');
module.exports = function fileScoper(fileSrc) {
    var suffix = encode(hash(fileSrc));
    return function scopedName(name) {
        return name + '_' + suffix;
    };
};
},{"./base62-encode":16,"./hash-string":24}],28:[function(require,module,exports){
'use strict';
var fileScoper = require('./scoped-name');
var replaceAnimations = require('./replace-animations');
var regex = require('./regex');
var classRegex = regex.classRegex;
var keyframesRegex = regex.keyframesRegex;
module.exports = scopify;
function scopify(css, ignores) {
    var makeScopedName = fileScoper(css);
    var replacers = {
        classes: classRegex,
        keyframes: keyframesRegex
    };
    function scopeCss(result, key) {
        var replacer = replacers[key];
        function replaceFn(fullMatch, prefix, name) {
            var scopedName = ignores[name] ? name : makeScopedName(name);
            result[key][scopedName] = name;
            return prefix + scopedName;
        }
        return {
            css: result.css.replace(replacer, replaceFn),
            keyframes: result.keyframes,
            classes: result.classes
        };
    }
    var result = Object.keys(replacers).reduce(scopeCss, {
        css: css,
        keyframes: {},
        classes: {}
    });
    return replaceAnimations(result);
}
},{"./regex":25,"./replace-animations":26,"./scoped-name":27}],29:[function(require,module,exports){
'use strict';
var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(components, split) {
    try {
        return decodeURIComponent(components.join(''));
    } catch (err) {
    }
    if (components.length === 1) {
        return components;
    }
    split = split || 1;
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    } catch (err) {
        var tokens = input.match(singleMatcher);
        for (var i = 1; i < tokens.length; i++) {
            input = decodeComponents(tokens, i).join('');
            tokens = input.match(singleMatcher);
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    var replaceMap = {
        '%FE%FF': '\uFFFD\uFFFD',
        '%FF%FE': '\uFFFD\uFFFD'
    };
    var match = multiMatcher.exec(input);
    while (match) {
        try {
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) {
                replaceMap[match[0]] = result;
            }
        }
        match = multiMatcher.exec(input);
    }
    replaceMap['%C2'] = '\uFFFD';
    var entries = Object.keys(replaceMap);
    for (var i = 0; i < entries.length; i++) {
        var key = entries[i];
        input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
    }
    return input;
}
module.exports = function (encodedURI) {
    if (typeof encodedURI !== 'string') {
        throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
    }
    try {
        encodedURI = encodedURI.replace(/\+/g, ' ');
        return decodeURIComponent(encodedURI);
    } catch (err) {
        return customDecodeURIComponent(encodedURI);
    }
};
},{}],30:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};
var minDoc = require('min-document');
var doccy;
if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}
module.exports = doccy;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":7}],31:[function(require,module,exports){
(function (global){
var win;
if (typeof window !== 'undefined') {
    win = window;
} else if (typeof global !== 'undefined') {
    win = global;
} else if (typeof self !== 'undefined') {
    win = self;
} else {
    win = {};
}
module.exports = win;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],32:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var Admin = function () {
    function Admin(user) {
        _classCallCheck(this, Admin);
        this.user = user;
    }
    _createClass(Admin, [
        {
            key: 'listUsers',
            value: function listUsers(aud) {
                return this.user._request('/admin/users', {
                    method: 'GET',
                    audience: aud
                });
            }
        },
        {
            key: 'getUser',
            value: function getUser(user) {
                return this.user._request('/admin/users/' + user.id);
            }
        },
        {
            key: 'updateUser',
            value: function updateUser(user) {
                var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.user._request('/admin/users/' + user.id, {
                    method: 'PUT',
                    body: JSON.stringify(attributes)
                });
            }
        },
        {
            key: 'createUser',
            value: function createUser(email, password) {
                var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                attributes.email = email;
                attributes.password = password;
                return this.user._request('/admin/users', {
                    method: 'POST',
                    body: JSON.stringify(attributes)
                });
            }
        },
        {
            key: 'deleteUser',
            value: function deleteUser(user) {
                return this.user._request('/admin/users/' + user.id, { method: 'DELETE' });
            }
        }
    ]);
    return Admin;
}();
exports.default = Admin;
},{}],33:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _microApiClient = require('micro-api-client');
var _microApiClient2 = _interopRequireDefault(_microApiClient);
var _user = require('./user');
var _user2 = _interopRequireDefault(_user);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var HTTPRegexp = /^http:\/\//;
var defaultApiURL = 'https://' + window.location.hostname + '/.netlify/identity';
var GoTrue = function () {
    function GoTrue() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$APIUrl = _ref.APIUrl, APIUrl = _ref$APIUrl === undefined ? defaultApiURL : _ref$APIUrl, _ref$audience = _ref.audience, audience = _ref$audience === undefined ? '' : _ref$audience;
        _classCallCheck(this, GoTrue);
        if (APIUrl.match(HTTPRegexp)) {
            console.warn('Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely.');
        }
        if (audience) {
            this.audience = audience;
        }
        this.api = new _microApiClient2.default(APIUrl);
    }
    _createClass(GoTrue, [
        {
            key: '_request',
            value: function _request(path) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                options.headers = options.headers || {};
                var aud = options.audience || this.audience;
                if (aud) {
                    options.headers['X-JWT-AUD'] = aud;
                }
                return this.api.request(path, options);
            }
        },
        {
            key: 'signup',
            value: function signup(email, password, data) {
                return this._request('/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        data: data
                    })
                });
            }
        },
        {
            key: 'login',
            value: function login(email, password, remember) {
                var _this = this;
                return this._request('/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: 'grant_type=password&username=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)
                }).then(function (response) {
                    _user2.default.removeSavedSession();
                    return _this.createUser(response, remember);
                });
            }
        },
        {
            key: 'loginExternalUrl',
            value: function loginExternalUrl(provider) {
                return this.api.apiURL + '/authorize?provider=' + provider;
            }
        },
        {
            key: 'confirm',
            value: function confirm(token) {
                return this.verify('signup', token);
            }
        },
        {
            key: 'requestPasswordRecovery',
            value: function requestPasswordRecovery(email) {
                return this._request('/recover', {
                    method: 'POST',
                    body: JSON.stringify({ email: email })
                });
            }
        },
        {
            key: 'recover',
            value: function recover(token) {
                return this.verify('recovery', token);
            }
        },
        {
            key: 'acceptInvite',
            value: function acceptInvite(token, password) {
                var _this2 = this;
                return this._request('/verify', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        password: password,
                        type: 'signup'
                    })
                }).then(function (response) {
                    return _this2.createUser(response);
                });
            }
        },
        {
            key: 'createUser',
            value: function createUser(tokenResponse) {
                var remember = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var user = new _user2.default(this.api, tokenResponse, this.audience);
                return user.getUserData().then(function (user) {
                    if (remember) {
                        user._saveSession();
                    }
                    return user;
                });
            }
        },
        {
            key: 'currentUser',
            value: function currentUser() {
                return _user2.default.recoverSession();
            }
        },
        {
            key: 'verify',
            value: function verify(type, token) {
                var _this3 = this;
                return this._request('/verify', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        type: type
                    })
                }).then(function (response) {
                    return _this3.createUser(response);
                });
            }
        }
    ]);
    return GoTrue;
}();
exports.default = GoTrue;
if (typeof window !== 'undefined') {
    window.GoTrue = GoTrue;
}
},{"./user":34,"micro-api-client":36}],34:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _microApiClient = require('micro-api-client');
var _microApiClient2 = _interopRequireDefault(_microApiClient);
var _admin = require('./admin');
var _admin2 = _interopRequireDefault(_admin);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var ExpiryMargin = 60 * 1000;
var storageKey = 'gotrue.user';
var currentUser = null;
var forbiddenUpdateAttributes = {
    api: 1,
    token: 1,
    audience: 1,
    url: 1
};
var forbiddenSaveAttributes = { api: 1 };
var User = function () {
    function User(api, tokenResponse, audience) {
        _classCallCheck(this, User);
        this.api = api;
        this.url = api.apiURL;
        this.audience = audience;
        this._processTokenResponse(tokenResponse);
        currentUser = this;
    }
    _createClass(User, [
        {
            key: 'update',
            value: function update(attributes) {
                var _this = this;
                return this._request('/user', {
                    method: 'PUT',
                    body: JSON.stringify(attributes)
                }).then(function (response) {
                    return _this._saveUserData(response)._refreshSavedSession();
                });
            }
        },
        {
            key: 'jwt',
            value: function jwt() {
                var _this2 = this;
                var _tokenDetails = this.tokenDetails(), expires_at = _tokenDetails.expires_at, refresh_token = _tokenDetails.refresh_token, access_token = _tokenDetails.access_token;
                if (expires_at - ExpiryMargin < Date.now()) {
                    return this.api._request('/token', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: 'grant_type=refresh_token&refresh_token=' + refresh_token
                    }).then(function (response) {
                        _this2._processTokenResponse(response);
                        _this2._refreshSavedSession();
                        return _this2.token.access_token;
                    }).catch(function (error) {
                        _this2.clearSession();
                        return Promise.reject(error);
                    });
                }
                return Promise.resolve(access_token);
            }
        },
        {
            key: 'logout',
            value: function logout() {
                return this._request('/logout', { method: 'POST' }).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this));
            }
        },
        {
            key: '_request',
            value: function _request(path) {
                var _this3 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                options.headers = options.headers || {};
                var aud = options.audience || this.audience;
                if (aud) {
                    options.headers['X-JWT-AUD'] = aud;
                }
                return this.jwt().then(function (token) {
                    return _this3.api.request(path, _extends({ headers: Object.assign(options.headers, { Authorization: 'Bearer ' + token }) }, options));
                });
            }
        },
        {
            key: 'getUserData',
            value: function getUserData() {
                return this._request('/user').then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this));
            }
        },
        {
            key: '_saveUserData',
            value: function _saveUserData(attributes) {
                for (var key in attributes) {
                    if (key in User.prototype || key in forbiddenUpdateAttributes) {
                        continue;
                    }
                    this[key] = attributes[key];
                }
                return this;
            }
        },
        {
            key: '_processTokenResponse',
            value: function _processTokenResponse(tokenResponse) {
                this.token = tokenResponse;
                this.token.expires_at = Date.now() + tokenResponse.expires_in * 1000;
            }
        },
        {
            key: '_refreshSavedSession',
            value: function _refreshSavedSession() {
                if (localStorage.getItem(storageKey)) {
                    this._saveSession();
                }
                return this;
            }
        },
        {
            key: '_saveSession',
            value: function _saveSession() {
                localStorage.setItem(storageKey, JSON.stringify(this._details));
                return this;
            }
        },
        {
            key: 'tokenDetails',
            value: function tokenDetails() {
                return this.token;
            }
        },
        {
            key: 'clearSession',
            value: function clearSession() {
                User.removeSavedSession();
                this.token = null;
                currentUser = null;
            }
        },
        {
            key: 'admin',
            get: function get() {
                return new _admin2.default(this);
            }
        },
        {
            key: '_details',
            get: function get() {
                var userCopy = {};
                for (var key in this) {
                    if (key in User.prototype || key in forbiddenSaveAttributes) {
                        continue;
                    }
                    userCopy[key] = this[key];
                }
                return userCopy;
            }
        }
    ], [
        {
            key: 'removeSavedSession',
            value: function removeSavedSession() {
                localStorage.removeItem(storageKey);
            }
        },
        {
            key: 'recoverSession',
            value: function recoverSession() {
                if (currentUser) {
                    return currentUser;
                }
                var json = localStorage.getItem(storageKey);
                if (json) {
                    try {
                        var data = JSON.parse(json);
                        var url = data.url, token = data.token, audience = data.audience;
                        if (!url || !token) {
                            return null;
                        }
                        var api = new _microApiClient2.default(url);
                        return new User(api, token, audience)._saveUserData(data);
                    } catch (ex) {
                        return null;
                    }
                }
                return null;
            }
        }
    ]);
    return User;
}();
exports.default = User;
},{"./admin":32,"micro-api-client":36}],35:[function(require,module,exports){
var inserted = {};
module.exports = function (css, options) {
    if (inserted[css])
        return;
    inserted[css] = true;
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');
    if ('textContent' in elem) {
        elem.textContent = css;
    } else {
        elem.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};
},{}],36:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _pagination = require('./pagination');
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var API = function () {
    function API(apiURL) {
        _classCallCheck(this, API);
        this.apiURL = apiURL;
    }
    _createClass(API, [
        {
            key: 'headers',
            value: function headers() {
                var _headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return _extends({ 'Content-Type': 'application/json' }, _headers);
            }
        },
        {
            key: 'parseJsonResponse',
            value: function parseJsonResponse(response) {
                return response.json().then(function (json) {
                    if (!response.ok) {
                        return Promise.reject(json);
                    }
                    var pagination = (0, _pagination.getPagination)(response);
                    return pagination ? {
                        pagination: pagination,
                        items: json
                    } : json;
                });
            }
        },
        {
            key: 'request',
            value: function request(path) {
                var _this = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var headers = this.headers(options.headers || {});
                return fetch(this.apiURL + path, _extends({}, options, { headers: headers })).then(function (response) {
                    var contentType = response.headers.get('Content-Type');
                    if (contentType && contentType.match(/json/)) {
                        return _this.parseJsonResponse(response);
                    }
                    return response.text().then(function (data) {
                        if (!response.ok) {
                            return Promise.reject({ data: data });
                        }
                        return { data: data };
                    });
                });
            }
        }
    ]);
    return API;
}();
exports.default = API;
},{"./pagination":37}],37:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                    break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i['return'])
                    _i['return']();
            } finally {
                if (_d)
                    throw _e;
            }
        }
        return _arr;
    }
    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
    };
}();
exports.getPagination = getPagination;
function getPagination(response) {
    var links = response.headers.get('Link');
    var pagination = {};
    if (links == null) {
        return null;
    }
    links = links.split(',');
    var total = response.headers.get('X-Total-Count');
    for (var i = 0, len = links.length; i < len; i++) {
        var link = links[i].replace(/(^\s*|\s*$)/, '');
        var _link$split = link.split(';');
        var _link$split2 = _slicedToArray(_link$split, 2);
        var url = _link$split2[0];
        var rel = _link$split2[1];
        var m = url.match(/page=(\d+)/);
        var page = m && parseInt(m[1], 10);
        if (rel.match(/last/)) {
            pagination.last = page;
        } else if (rel.match(/next/)) {
            pagination.next = page;
        } else if (rel.match(/prev/)) {
            pagination.prev = page;
        } else if (rel.match(/first/)) {
            pagination.first = page;
        }
    }
    pagination.last = Math.max(pagination.last || 0, pagination.prev && pagination.prev + 1 || 0);
    pagination.current = pagination.next ? pagination.next - 1 : pagination.last || 1;
    pagination.total = total ? parseInt(total, 10) : null;
    return pagination;
}
},{}],38:[function(require,module,exports){
var splice = require('remove-array-items');
var nanotiming = require('nanotiming');
module.exports = Nanobus;
function Nanobus(name) {
    if (!(this instanceof Nanobus))
        return new Nanobus(name);
    this._name = name || 'nanobus';
    this._starListeners = [];
    this._listeners = {};
}
Nanobus.prototype.emit = function (eventName, data) {
    var emitTiming = nanotiming(this._name + '(\'' + eventName + '\')');
    var listeners = this._listeners[eventName];
    if (listeners && listeners.length > 0) {
        this._emit(this._listeners[eventName], data);
    }
    if (this._starListeners.length > 0) {
        this._emit(this._starListeners, eventName, data, emitTiming.uuid);
    }
    emitTiming();
    return this;
};
Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
    if (eventName === '*') {
        this._starListeners.push(listener);
    } else {
        if (!this._listeners[eventName])
            this._listeners[eventName] = [];
        this._listeners[eventName].push(listener);
    }
    return this;
};
Nanobus.prototype.prependListener = function (eventName, listener) {
    if (eventName === '*') {
        this._starListeners.unshift(listener);
    } else {
        if (!this._listeners[eventName])
            this._listeners[eventName] = [];
        this._listeners[eventName].unshift(listener);
    }
    return this;
};
Nanobus.prototype.once = function (eventName, listener) {
    var self = this;
    this.on(eventName, once);
    function once() {
        listener.apply(self, arguments);
        self.removeListener(eventName, once);
    }
    return this;
};
Nanobus.prototype.prependOnceListener = function (eventName, listener) {
    var self = this;
    this.prependListener(eventName, once);
    function once() {
        listener.apply(self, arguments);
        self.removeListener(eventName, once);
    }
    return this;
};
Nanobus.prototype.removeListener = function (eventName, listener) {
    if (eventName === '*') {
        this._starListeners = this._starListeners.slice();
        return remove(this._starListeners, listener);
    } else {
        if (typeof this._listeners[eventName] !== 'undefined') {
            this._listeners[eventName] = this._listeners[eventName].slice();
        }
        return remove(this._listeners[eventName], listener);
    }
    function remove(arr, listener) {
        if (!arr)
            return;
        var index = arr.indexOf(listener);
        if (index !== -1) {
            splice(arr, index, 1);
            return true;
        }
    }
};
Nanobus.prototype.removeAllListeners = function (eventName) {
    if (eventName) {
        if (eventName === '*') {
            this._starListeners = [];
        } else {
            this._listeners[eventName] = [];
        }
    } else {
        this._starListeners = [];
        this._listeners = {};
    }
    return this;
};
Nanobus.prototype.listeners = function (eventName) {
    var listeners = eventName !== '*' ? this._listeners[eventName] : this._starListeners;
    var ret = [];
    if (listeners) {
        var ilength = listeners.length;
        for (var i = 0; i < ilength; i++)
            ret.push(listeners[i]);
    }
    return ret;
};
Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
    if (typeof arr === 'undefined')
        return;
    if (data === undefined) {
        data = eventName;
        eventName = null;
    }
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var listener = arr[i];
        if (eventName) {
            if (uuid !== undefined)
                listener(eventName, data, uuid);
            else
                listener(eventName, data);
        } else {
            listener(data);
        }
    }
};
},{"nanotiming":43,"remove-array-items":48}],39:[function(require,module,exports){
var document = require('global/document');
var nanotiming = require('nanotiming');
var morph = require('nanomorph');
var onload = require('on-load');
module.exports = Nanocomponent;
function makeID() {
    return 'ncid-' + Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function Nanocomponent(name) {
    this._hasWindow = typeof window !== 'undefined';
    this._id = null;
    this._ncID = null;
    this._proxy = null;
    this._loaded = false;
    this._rootNodeName = null;
    this._name = name || 'nanocomponent';
    this._handleLoad = this._handleLoad.bind(this);
    this._handleUnload = this._handleUnload.bind(this);
    var self = this;
    Object.defineProperty(this, 'element', {
        get: function () {
            var el = document.getElementById(self._id);
            if (el)
                return el.dataset.nanocomponent === self._ncID ? el : undefined;
        }
    });
}
Nanocomponent.prototype.render = function () {
    var timing = nanotiming(this._name + '.render');
    var self = this;
    var args = new Array(arguments.length);
    var el;
    for (var i = 0; i < arguments.length; i++)
        args[i] = arguments[i];
    if (!this._hasWindow) {
        el = this.createElement.apply(this, args);
        timing();
        return el;
    } else if (this.element) {
        var shouldUpdate = this.update.apply(this, args);
        if (shouldUpdate) {
            morph(this.element, this._handleRender(args));
            if (this.afterupdate)
                this.afterupdate(this.element);
        }
        if (!this._proxy) {
            this._proxy = this._createProxy();
        }
        timing();
        return this._proxy;
    } else {
        this._reset();
        el = this._handleRender(args);
        if (this.beforerender)
            this.beforerender(el);
        if (this.load || this.unload || this.afterrreorder) {
            onload(el, self._handleLoad, self._handleUnload, self);
        }
        timing();
        return el;
    }
};
Nanocomponent.prototype._handleRender = function (args) {
    var el = this.createElement.apply(this, args);
    if (!this._rootNodeName)
        this._rootNodeName = el.nodeName;
    return this._brandNode(this._ensureID(el));
};
Nanocomponent.prototype._createProxy = function () {
    var proxy = document.createElement('div');
    var self = this;
    this._brandNode(proxy);
    proxy.id = this._id;
    proxy.setAttribute('data-proxy', '');
    proxy.isSameNode = function (el) {
        return el && el.dataset.nanocomponent === self._ncID;
    };
    return proxy;
};
Nanocomponent.prototype._reset = function () {
    this._ncID = makeID();
    this._id = null;
    this._proxy = null;
    this._rootNodeName = null;
};
Nanocomponent.prototype._brandNode = function (node) {
    node.setAttribute('data-nanocomponent', this._ncID);
    return node;
};
Nanocomponent.prototype._ensureID = function (node) {
    if (node.id)
        this._id = node.id;
    else
        node.id = this._id = this._ncID;
    return node;
};
Nanocomponent.prototype._handleLoad = function (el) {
    var self = this;
    if (this._loaded) {
        if (this.afterreorder)
            window.requestAnimationFrame(function () {
                self.afterreorder(el);
            });
        return;
    }
    this._loaded = true;
    if (this.load)
        window.requestAnimationFrame(function () {
            self.load(el);
        });
};
Nanocomponent.prototype._handleUnload = function (el) {
    var self = this;
    if (this.element)
        return;
    this._loaded = false;
    if (this.unload)
        window.requestAnimationFrame(function () {
            self.unload(el);
        });
};
Nanocomponent.prototype.createElement = function () {
    throw new Error('nanocomponent: createElement should be implemented!');
};
Nanocomponent.prototype.update = function () {
    throw new Error('nanocomponent: update should be implemented!');
};
},{"global/document":30,"nanomorph":40,"nanotiming":43,"on-load":46}],40:[function(require,module,exports){
var morph = require('./lib/morph');
var TEXT_NODE = 3;
module.exports = nanomorph;
function nanomorph(oldTree, newTree) {
    var tree = walk(newTree, oldTree);
    return tree;
}
function walk(newNode, oldNode) {
    if (!oldNode) {
        return newNode;
    } else if (!newNode) {
        return null;
    } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
        return oldNode;
    } else if (newNode.tagName !== oldNode.tagName) {
        return newNode;
    } else {
        morph(newNode, oldNode);
        updateChildren(newNode, oldNode);
        return oldNode;
    }
}
function updateChildren(newNode, oldNode) {
    var oldChild, newChild, morphed, oldMatch;
    var offset = 0;
    for (var i = 0;; i++) {
        oldChild = oldNode.childNodes[i];
        newChild = newNode.childNodes[i - offset];
        if (!oldChild && !newChild) {
            break;
        } else if (!newChild) {
            oldNode.removeChild(oldChild);
            i--;
        } else if (!oldChild) {
            oldNode.appendChild(newChild);
            offset++;
        } else if (same(newChild, oldChild)) {
            morphed = walk(newChild, oldChild);
            if (morphed !== oldChild) {
                oldNode.replaceChild(morphed, oldChild);
                offset++;
            }
        } else {
            oldMatch = null;
            for (var j = i; j < oldNode.childNodes.length; j++) {
                if (same(oldNode.childNodes[j], newChild)) {
                    oldMatch = oldNode.childNodes[j];
                    break;
                }
            }
            if (oldMatch) {
                morphed = walk(newChild, oldMatch);
                if (morphed !== oldMatch)
                    offset++;
                oldNode.insertBefore(morphed, oldChild);
            } else if (!newChild.id && !oldChild.id) {
                morphed = walk(newChild, oldChild);
                if (morphed !== oldChild) {
                    oldNode.replaceChild(morphed, oldChild);
                    offset++;
                }
            } else {
                oldNode.insertBefore(newChild, oldChild);
                offset++;
            }
        }
    }
}
function same(a, b) {
    if (a.id)
        return a.id === b.id;
    if (a.isSameNode)
        return a.isSameNode(b);
    if (a.tagName !== b.tagName)
        return false;
    if (a.type === TEXT_NODE)
        return a.nodeValue === b.nodeValue;
    return false;
}
},{"./lib/morph":42}],41:[function(require,module,exports){
module.exports = [
    'onclick',
    'ondblclick',
    'onmousedown',
    'onmouseup',
    'onmouseover',
    'onmousemove',
    'onmouseout',
    'onmouseenter',
    'onmouseleave',
    'ondragstart',
    'ondrag',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondrop',
    'ondragend',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onunload',
    'onabort',
    'onerror',
    'onresize',
    'onscroll',
    'onselect',
    'onchange',
    'onsubmit',
    'onreset',
    'onfocus',
    'onblur',
    'oninput',
    'oncontextmenu',
    'onfocusin',
    'onfocusout'
];
},{}],42:[function(require,module,exports){
var events = require('./events');
var eventsLength = events.length;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
module.exports = morph;
function morph(newNode, oldNode) {
    var nodeType = newNode.nodeType;
    var nodeName = newNode.nodeName;
    if (nodeType === ELEMENT_NODE) {
        copyAttrs(newNode, oldNode);
    }
    if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
        oldNode.nodeValue = newNode.nodeValue;
    }
    if (nodeName === 'INPUT')
        updateInput(newNode, oldNode);
    else if (nodeName === 'OPTION')
        updateOption(newNode, oldNode);
    else if (nodeName === 'TEXTAREA')
        updateTextarea(newNode, oldNode);
    copyEvents(newNode, oldNode);
}
function copyAttrs(newNode, oldNode) {
    var oldAttrs = oldNode.attributes;
    var newAttrs = newNode.attributes;
    var attrNamespaceURI = null;
    var attrValue = null;
    var fromValue = null;
    var attrName = null;
    var attr = null;
    for (var i = newAttrs.length - 1; i >= 0; --i) {
        attr = newAttrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;
        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
            if (fromValue !== attrValue) {
                oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            if (!oldNode.hasAttribute(attrName)) {
                oldNode.setAttribute(attrName, attrValue);
            } else {
                fromValue = oldNode.getAttribute(attrName);
                if (fromValue !== attrValue) {
                    if (attrValue === 'null' || attrValue === 'undefined') {
                        oldNode.removeAttribute(attrName);
                    } else {
                        oldNode.setAttribute(attrName, attrValue);
                    }
                }
            }
        }
    }
    for (var j = oldAttrs.length - 1; j >= 0; --j) {
        attr = oldAttrs[j];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;
            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;
                if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                    oldNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!newNode.hasAttributeNS(null, attrName)) {
                    oldNode.removeAttribute(attrName);
                }
            }
        }
    }
}
function copyEvents(newNode, oldNode) {
    for (var i = 0; i < eventsLength; i++) {
        var ev = events[i];
        if (newNode[ev]) {
            oldNode[ev] = newNode[ev];
        } else if (oldNode[ev]) {
            oldNode[ev] = undefined;
        }
    }
}
function updateOption(newNode, oldNode) {
    updateAttribute(newNode, oldNode, 'selected');
}
function updateInput(newNode, oldNode) {
    var newValue = newNode.value;
    var oldValue = oldNode.value;
    updateAttribute(newNode, oldNode, 'checked');
    updateAttribute(newNode, oldNode, 'disabled');
    if (newValue !== oldValue) {
        oldNode.setAttribute('value', newValue);
        oldNode.value = newValue;
    }
    if (newValue === 'null') {
        oldNode.value = '';
        oldNode.removeAttribute('value');
    }
    if (!newNode.hasAttributeNS(null, 'value')) {
        oldNode.removeAttribute('value');
    } else if (oldNode.type === 'range') {
        oldNode.value = newValue;
    }
}
function updateTextarea(newNode, oldNode) {
    var newValue = newNode.value;
    if (newValue !== oldNode.value) {
        oldNode.value = newValue;
    }
    if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
        if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
            return;
        }
        oldNode.firstChild.nodeValue = newValue;
    }
}
function updateAttribute(newNode, oldNode, name) {
    if (newNode[name] !== oldNode[name]) {
        oldNode[name] = newNode[name];
        if (newNode[name]) {
            oldNode.setAttribute(name, '');
        } else {
            oldNode.removeAttribute(name);
        }
    }
}
},{"./events":41}],43:[function(require,module,exports){
var onIdle = require('on-idle');
var perf;
var disabled = true;
try {
    perf = window.performance;
    disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark;
} catch (e) {
}
module.exports = nanotiming;
function nanotiming(name) {
    if (disabled)
        return noop;
    var uuid = (perf.now() * 100).toFixed();
    var startName = 'start-' + uuid + '-' + name;
    perf.mark(startName);
    function end(cb) {
        var endName = 'end-' + uuid + '-' + name;
        perf.mark(endName);
        onIdle(function () {
            var measureName = name + ' [' + uuid + ']';
            perf.measure(measureName, startName, endName);
            perf.clearMarks(startName);
            perf.clearMarks(endName);
            if (cb)
                cb(name);
        });
    }
    end.uuid = uuid;
    return end;
}
function noop(cb) {
    if (cb)
        onIdle(cb);
}
},{"on-idle":45}],44:[function(require,module,exports){
'use strict';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
},{}],45:[function(require,module,exports){
var dftOpts = {};
var hasWindow = typeof window !== 'undefined';
var hasIdle = hasWindow && window.requestIdleCallback;
module.exports = onIdle;
function onIdle(cb, opts) {
    opts = opts || dftOpts;
    var timerId;
    if (hasIdle) {
        timerId = window.requestIdleCallback(function (idleDeadline) {
            if (idleDeadline.timeRemaining() <= 10 && !idleDeadline.didTimeout) {
                return onIdle(cb, opts);
            } else {
                cb(idleDeadline);
            }
        }, opts);
        return window.cancelIdleCallback.bind(window, timerId);
    } else if (hasWindow) {
        timerId = setTimeout(cb, 0);
        return clearTimeout.bind(window, timerId);
    }
}
},{}],46:[function(require,module,exports){
var document = require('global/document');
var window = require('global/window');
var watch = Object.create(null);
var KEY_ID = 'onloadid' + (new Date() % 9000000).toString(36);
var KEY_ATTR = 'data-' + KEY_ID;
var INDEX = 0;
if (window && window.MutationObserver) {
    var observer = new MutationObserver(function (mutations) {
        if (Object.keys(watch).length < 1)
            return;
        for (var i = 0; i < mutations.length; i++) {
            if (mutations[i].attributeName === KEY_ATTR) {
                eachAttr(mutations[i], turnon, turnoff);
                continue;
            }
            eachMutation(mutations[i].removedNodes, turnoff);
            eachMutation(mutations[i].addedNodes, turnon);
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: [KEY_ATTR]
    });
}
module.exports = function onload(el, on, off, caller) {
    on = on || function () {
    };
    off = off || function () {
    };
    el.setAttribute(KEY_ATTR, 'o' + INDEX);
    watch['o' + INDEX] = [
        on,
        off,
        0,
        caller || onload.caller
    ];
    INDEX += 1;
    return el;
};
function turnon(index, el) {
    if (watch[index][0] && watch[index][2] === 0) {
        watch[index][0](el);
        watch[index][2] = 1;
    }
}
function turnoff(index, el) {
    if (watch[index][1] && watch[index][2] === 1) {
        watch[index][1](el);
        watch[index][2] = 0;
    }
}
function eachAttr(mutation, on, off) {
    var newValue = mutation.target.getAttribute(KEY_ATTR);
    if (sameOrigin(mutation.oldValue, newValue)) {
        watch[newValue] = watch[mutation.oldValue];
        return;
    }
    if (watch[mutation.oldValue]) {
        off(mutation.oldValue, mutation.target);
    }
    if (watch[newValue]) {
        on(newValue, mutation.target);
    }
}
function sameOrigin(oldValue, newValue) {
    if (!oldValue || !newValue)
        return false;
    return watch[oldValue][3] === watch[newValue][3];
}
function eachMutation(nodes, fn) {
    var keys = Object.keys(watch);
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] && nodes[i].getAttribute && nodes[i].getAttribute(KEY_ATTR)) {
            var onloadid = nodes[i].getAttribute(KEY_ATTR);
            keys.forEach(function (k) {
                if (onloadid === k) {
                    fn(k, nodes[i]);
                }
            });
        }
        if (nodes[i].childNodes.length > 0) {
            eachMutation(nodes[i].childNodes, fn);
        }
    }
}
},{"global/document":30,"global/window":31}],47:[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');
var objectAssign = require('object-assign');
var decodeComponent = require('decode-uri-component');
function encoderForArrayFormat(opts) {
    switch (opts.arrayFormat) {
    case 'index':
        return function (key, value, index) {
            return value === null ? [
                encode(key, opts),
                '[',
                index,
                ']'
            ].join('') : [
                encode(key, opts),
                '[',
                encode(index, opts),
                ']=',
                encode(value, opts)
            ].join('');
        };
    case 'bracket':
        return function (key, value) {
            return value === null ? encode(key, opts) : [
                encode(key, opts),
                '[]=',
                encode(value, opts)
            ].join('');
        };
    default:
        return function (key, value) {
            return value === null ? encode(key, opts) : [
                encode(key, opts),
                '=',
                encode(value, opts)
            ].join('');
        };
    }
}
function parserForArrayFormat(opts) {
    var result;
    switch (opts.arrayFormat) {
    case 'index':
        return function (key, value, accumulator) {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, '');
            if (!result) {
                accumulator[key] = value;
                return;
            }
            if (accumulator[key] === undefined) {
                accumulator[key] = {};
            }
            accumulator[key][result[1]] = value;
        };
    case 'bracket':
        return function (key, value, accumulator) {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, '');
            if (!result) {
                accumulator[key] = value;
                return;
            } else if (accumulator[key] === undefined) {
                accumulator[key] = [value];
                return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
        };
    default:
        return function (key, value, accumulator) {
            if (accumulator[key] === undefined) {
                accumulator[key] = value;
                return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
        };
    }
}
function encode(value, opts) {
    if (opts.encode) {
        return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }
    return value;
}
function keysSorter(input) {
    if (Array.isArray(input)) {
        return input.sort();
    } else if (typeof input === 'object') {
        return keysSorter(Object.keys(input)).sort(function (a, b) {
            return Number(a) - Number(b);
        }).map(function (key) {
            return input[key];
        });
    }
    return input;
}
exports.extract = function (str) {
    return str.split('?')[1] || '';
};
exports.parse = function (str, opts) {
    opts = objectAssign({ arrayFormat: 'none' }, opts);
    var formatter = parserForArrayFormat(opts);
    var ret = Object.create(null);
    if (typeof str !== 'string') {
        return ret;
    }
    str = str.trim().replace(/^(\?|#|&)/, '');
    if (!str) {
        return ret;
    }
    str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;
        val = val === undefined ? null : decodeComponent(val);
        formatter(decodeComponent(key), val, ret);
    });
    return Object.keys(ret).sort().reduce(function (result, key) {
        var val = ret[key];
        if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
            result[key] = keysSorter(val);
        } else {
            result[key] = val;
        }
        return result;
    }, Object.create(null));
};
exports.stringify = function (obj, opts) {
    var defaults = {
        encode: true,
        strict: true,
        arrayFormat: 'none'
    };
    opts = objectAssign(defaults, opts);
    var formatter = encoderForArrayFormat(opts);
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (val === undefined) {
            return '';
        }
        if (val === null) {
            return encode(key, opts);
        }
        if (Array.isArray(val)) {
            var result = [];
            val.slice().forEach(function (val2) {
                if (val2 === undefined) {
                    return;
                }
                result.push(formatter(key, val2, result.length));
            });
            return result.join('&');
        }
        return encode(key, opts) + '=' + encode(val, opts);
    }).filter(function (x) {
        return x.length > 0;
    }).join('&') : '';
};
},{"decode-uri-component":29,"object-assign":44,"strict-uri-encode":49}],48:[function(require,module,exports){
'use strict';
module.exports = function removeItems(arr, startIdx, removeCount) {
    var i, length = arr.length;
    if (startIdx >= length || removeCount === 0) {
        return;
    }
    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
    var len = length - removeCount;
    for (i = startIdx; i < len; ++i) {
        arr[i] = arr[i + removeCount];
    }
    arr.length = len;
};
},{}],49:[function(require,module,exports){
'use strict';
module.exports = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
};
},{}],50:[function(require,module,exports){
'use strict';
module.exports = function yoyoifyAppendChild(el, childs) {
    for (var i = 0; i < childs.length; i++) {
        var node = childs[i];
        if (Array.isArray(node)) {
            yoyoifyAppendChild(el, node);
            continue;
        }
        if (typeof node === 'number' || typeof node === 'boolean' || node instanceof Date || node instanceof RegExp) {
            node = node.toString();
        }
        if (typeof node === 'string') {
            if (/^[\n\r\s]+$/.test(node))
                continue;
            if (el.lastChild && el.lastChild.nodeName === '#text') {
                el.lastChild.nodeValue += node;
                continue;
            }
            node = document.createTextNode(node);
        }
        if (node && node.nodeType) {
            el.appendChild(node);
        }
    }
};
},{}],51:[function(require,module,exports){
'use strict';
var NetlifyIdentity = require('./index.js');
var netlifyIdentity = new NetlifyIdentity();
module.exports = netlifyIdentity;
document.addEventListener('DOMContentLoaded', function (event) {
    init();
});
function init() {
    if (!window.netlifyIdentity) {
        window.netlifyIdentity = netlifyIdentity;
    }
    var modalContainer = document.querySelector('div[data-netlify-identity-modal=""]');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        document.body.appendChild(modalContainer);
    }
    if (!window.goTrue) {
    }
    if (!netlifyIdentity.isMounted) {
        netlifyIdentity.create().then(function (node) {
            return modalContainer.appendChild(node);
        });
    } else {
        console.warn('NetlifyIdentity: two or more instances are running on the same page');
    }
}
},{"./index.js":6}]},{},[51])(51)
});
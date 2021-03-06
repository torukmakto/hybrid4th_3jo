/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            signinButton: '#SigninButton',
            signinView: '#SigniniView',
            main: '#Main',
            loginButton: '#LoginButton',
            mainTitle: '#MainTitle',
            keyInputButton: '#KeyInputButton',
            registerButton: '#RegisterButton',
            introduceButton: '#IntroduceButton',
            dataListButton: '#DataListButton',
            qnAListButton: '#QnAListButton',
            qnAWriteButton: '#QnAWriteButton',
            backButton: '#BackButton'
        },

        control: {
            "signinButton": {
                tap: 'signinBtnAction'
            },
            "loginButton": {
                tap: 'loginBtnAction'
            },
            "keyInputButton": {
                tap: 'keyInputBtnAction'
            },
            "registerButton": {
                tap: 'registerBtnAction'
            },
            "introduceButton": {
                tap: 'introduceBtnAction'
            },
            "dataListButton": {
                tap: 'dataListBtnAction'
            },
            "qnAListButton": {
                tap: 'qnAListBntAction'
            },
            "qnAWriteButton": {
                tap: 'qnAWriteBtnAction'
            },
            "backButton": {
                tap: 'backBtnAction'
            }
        }
    },

    signinBtnAction: function(button, e, options) {
        //로그인화면에서 가입하기 버튼을 눌렀을때 발생하는 함수

        //card속성을 가진 panel에서 맨위에 올릴 panel을 결정. Main panel안에 
        //있는 panel중 9번째 패널을 맨위에 올림.
        this.getMain().setActiveItem(9);
        this.getMainTitle().setTitle("가입하기");
        this.getBackButton().show();
    },

    loginBtnAction: function(button, e, options) {
        //로그인화면에서 로그인 버튼을 눌렀을때 발생하는 함수

        this.getMain().setActiveItem(1);
        this.getMainTitle().setTitle("강의목록");
        this.getKeyInputButton().show();
        this.getBackButton().show();
    },

    keyInputBtnAction: function(button, e, options) {
        //강의목록화면에서 강의등록 버튼을 눌렀을때 발생하는 함수
        this.getMain().setActiveItem(2);
        this.getMainTitle().setTitle("강의등록");
        this.getKeyInputButton().hide();
        this.getBackButton().show();
    },

    registerBtnAction: function(button, e, options) {
        //강의등록화면에서  키입력후 강의등록버튼을 눌렀을때 발생하는 함수
        this.getMain().setActiveItem(3);
        this.getMainTitle().setTitle("해당강의");
        this.getBackButton().show();
    },

    introduceBtnAction: function(button, e, options) {
        //강의메뉴화면에서 강의소개 버튼을 눌렀을때 발생하는 함수
        this.getMain().setActiveItem(4);
        this.getMainTitle().setTitle("강의소개");
        this.getBackButton().show();
    },

    dataListBtnAction: function(button, e, options) {
        //강의메뉴화면에서 자료목록 버튼을 눌렀을때 발생하는 함수
        this.getMain().setActiveItem(5);
        this.getMainTitle().setTitle("자료목록");
        this.getBackButton().show();
    },

    qnAListBntAction: function(button, e, options) {
        //강의메뉴화면에서 댓글목록 버튼을 눌렀을때 발생하는 함수
        this.getMain().setActiveItem(6);
        this.getMainTitle().setTitle("댓글목록");
        this.getQnAWriteButton().show();
        this.getBackButton().show();
    },

    qnAWriteBtnAction: function(button, e, options) {
        //댓글목록화면에서 댓글쓰기 버튼을 눌렀을때 발생하는 함수
        this.getMain().setActiveItem(7);
        this.getMainTitle().setTitle("댓글쓰기");
        this.getQnAWriteButton().hide();
        this.getBackButton().show();
    },

    backBtnAction: function(button, e, options) {
        if(this.getMain().getActiveItem().getId()=="LectureListView"){
            this.getMain().setActiveItem(0);
            this.getMainTitle().setTitle("로그인");
            this.getKeyInputButton().hide();
            this.getBackButton().hide();
        }

        else if(this.getMain().getActiveItem().getId()=="KeyInputView")
        {this.getMain().setActiveItem(1);
            this.getMainTitle().setTitle("강의목록");
            this.getKeyInputButton().show();
            this.getBackButton().show();

        }
        else if(this.getMain().getActiveItem().getId()=="MenuView")
        { this.getMain().setActiveItem(1);
            this.getMainTitle().setTitle("강의목록");
            this.getKeyInputButton().show();
            this.getBackButton().show();
        }
        else if(this.getMain().getActiveItem().getId()=="IntroduceView")
        {this.getMain().setActiveItem(3);
            this.getMainTitle().setTitle("해당강의");
            this.getKeyInputButton().hide();
            this.getBackButton().show();
        }
        else if(this.getMain().getActiveItem().getId()=="DataListView")
        {this.getMain().setActiveItem(3);
            this.getMainTitle().setTitle("해당강의");
            this.getKeyInputButton().hide();
            this.getBackButton().show();

        }
        else if(this.getMain().getActiveItem().getId()=="QnAListView")
        {this.getMain().setActiveItem(3);
            this.getMainTitle().setTitle("해당강의");
            this.getKeyInputButton().hide();
            this.getBackButton().show();

        }
        else if(this.getMain().getActiveItem().getId()=="QnAWriteView")
        {this.getMain().setActiveItem(6);
            this.getMainTitle().setTitle("댓글목록");
            this.getKeyInputButton().hide();
            this.getBackButton().show();

        }
        else if(this.getMain().getActiveItem().getId()=="SigninView")
        {this.getMain().setActiveItem(0);
            this.getMainTitle().setTitle("로그인");
            this.getKeyInputButton().hide();
            this.getBackButton().hide();

        }

    }

});
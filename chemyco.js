/* by @manufosela - chemyco.js - Check My Connection - 20150113 - v2.0 */
/* MIT License (MIT) Copyright (c) 2015 @manufosela */
/* It is independent of any library or framework */
CheMyCo = (function (){

    "use strict";

    var CheMyCo = function() {
        this._L = function (a) {
            if ( !! ~a.indexOf("#")) {
                return document.getElementById(a.substr(1));
            } else {
                var t = document.getElementsByTagName(a);
                if ( t.length === 0 && a == "body" ) {
                    oB = document.createElement("body");
                    document.getElementsByTagName("html")[0].appendChild(oB);
                    t = document.getElementsByTagName(a);
                }
                return t[0];
            }
        };
        this.conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || { type:'no-mobile-connection' };
        this.idCh = 'chemycoLayer';
        this.notconmsj = "¡ Uppppps ! :(<br/>Parece que te has quedado sin conexión a Internet";
        this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.wW = this.w / 2 - 200;
        this.hW = this.h / 2 - 150;
        this.notcon = 'data:image/gif;base64,R0lGODlhgACAAOfgAOsABOoAB+sABusAB+sACOsACesBCusCCusCC+sDC+sDDOsEDesFDesFDusG D+sGEOsIEOwIEOwIEesJEesJEuwJEewJEusKE+wKEuwKE+wLE+wLFOwMFOwMFewNFewNFusOF+wO FuwOF+wPF+wPGOwQGOwQGewRGewRGuwSGuwSG+wTGuwTG+wTHO0TG+wUHOwUHe0UHOwVHewVHu0V He0VHuwWHu0WHe0WHuwXH+wXIO0XH+0YIO0YIe0ZIO0ZIewaIu0aIu0bI+0bJO0cI+0cJO0dJO0d Je0eJu0fJ+0gJ+0gKO0iKu4jK+0lLO4nLu4oL+4qMe4qMu4rMu4rM+4sM+4sNO4uNe4vNu8vNu4w Nu4wN+4wOO4xOO4yOe4yOu8yOe8yOu4zOu8zOu8zO+80O+81PO83Pu84Pu84P+85QO86QfA6QfA7 Qu88Q/A8Q/A9RPA9Re8+RPA+RfA/Ru9ARvBARvBAR/BBR/BBSPBCSPBCSfBDSfBDSvBESvBES/BF S/BFTPBFTfBGTPBGTfBHTvBITvBJT/BJUPFJUPFMUvFNU/FOVPFPVfFRV/FSWfJSWfFTWfFTWvFU WvJVW/FWXPJWXPJXXPJXXfJYXvJZX/JaX/JaYPJbYPJbYfJcYfJcYvJdYvJdY/JeZPJfZfJiZ/Nj afJkafNkafNkavNlavNla/Nma/NmbPNpbvNqb/NqcPNrcfRrcPNscfNscvRscfNtcvNtc/RtcvNu c/NudPRucvRuc/Nvc/NvdPRvdPRvdfRwdfRwdvRxdvNyd/RydvRyd/RzePRzefR0ePR0efR1evR2 e/R3e/R4fPR4ffR5ffV5fvR6f/V8gfR9gfV9gfR+gvV+gvV+g/WAhfWBhfWEifWFifWGivWHivWH i/////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////yH5BAEKAP8ALAAAAACAAIAA AAj+AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuX MGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGaoC5pWsq0qdNNkJAdLakAhQUJWLNq1VrhxIepI7dF 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 u/rVsI61rGdN61rb+ta4zrWud52TgAAAOw==';
        this.notconhtml = '<h3 class="' + this.idCh + 'MSJ">' + this.notconmsj + '</h3><br /><img alt="There\'s not connection" src="' + this.notcon + '" width="100" />';
        this.checkIntrvl = 10000;

        this.div = document.createElement('div');
        this.div.id = this.idCh + 'Container';
        this.div.innerHTML = '<div id="' + this.idCh + '" style="position:fixed;width:340px;height:120px;display:none;z-index:9999;padding:20px;overflow:auto;border-radius:10px;width:540px;height:303px;background:#FFF;"><div id="chMsg" style="font-size:18px;position:relative;top:70px;text-align:center;margin:0 auto;"><!--MSG--></div></div><div id="' + this.idCh + 'k" style="position:fixed;top:0;left:0;z-index:9000;background-color:rgba(20,20,20,0.6);display:none;filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=\'#99202020\',endColorstr=\'#99202020\');"></div>';
        document.getElementsByTagName('body')[0].appendChild( this.div );

        this._L("#" + this.idCh).style.width = "400px";
        this._L("#" + this.idCh).style.height = "300px";
        this._L("#" + this.idCh).style.left = this.wW + "px";
        this._L("#" + this.idCh).style.top = this.hW + "px";
        this._L("#" + this.idCh + "k").style.width = this.w + "px";
        this._L("#" + this.idCh + "k").style.height = (this.h + 600) + "px";
    };  

    CheMyCo.prototype.init = function (){
        var _this = this;
        if ( this.conn.type == "none" ) { this.updateConnectionStatus(); }
        if ( this.conn.type !== "no-mobile-connection" ) {
            this.conn.addEventListener( 'typechange', _this.updateConnectionStatus );
        }
    };

    CheMyCo.prototype.updateConnectionStatus = function() {
        if ( this.connType == "none" ) {
            _this._L("#chMsg").innerHTML = _this.notconhtml;
            _this._L("#" + _this.idCh + "k").style.display = "block";
            _this._L("#" + _this.idCh).style.display = "block";
        } else {
            _this._L("#" + _this.idCh + "k").style.display = "none";
            _this._L("#" + _this.idCh).style.display = "none";
        }
    };

    return CheMyCo;

})();
/*
The MIT License (MIT)
Copyright (c) 2015 @manufosela
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

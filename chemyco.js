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
        //s = document.getElementsByTagName("script"), i, myu;
        //for( i in s ) { if ( typeof s[i].src != "undefined" ) { if ( !!~s[i].src.indexOf( "chemyco.js" ) ){ myu = s[i].src.split("?")[1]+".php"; } } }
        //this.notdbmsj = "Lo sentimos :(<br/>La aplicaci&oacute;n no se encuentra disponible en este momento.<br/>";
        this.notconmsj = "¡ Uppppps ! :(<br/>Parece que te has quedado sin conexión a Internet";
        this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.wW = this.w / 2 - 200;
        this.hW = this.h / 2 - 150;
        this.notcon = 'data:image/gif;base64,R0lGODlhgACAAOfgAOsABOoAB+sABusAB+sACOsACesBCusCCusCC+sDC+sDDOsEDesFDesFDusG D+sGEOsIEOwIEOwIEesJEesJEuwJEewJEusKE+wKEuwKE+wLE+wLFOwMFOwMFewNFewNFusOF+wO FuwOF+wPF+wPGOwQGOwQGewRGewRGuwSGuwSG+wTGuwTG+wTHO0TG+wUHOwUHe0UHOwVHewVHu0V He0VHuwWHu0WHe0WHuwXH+wXIO0XH+0YIO0YIe0ZIO0ZIewaIu0aIu0bI+0bJO0cI+0cJO0dJO0d Je0eJu0fJ+0gJ+0gKO0iKu4jK+0lLO4nLu4oL+4qMe4qMu4rMu4rM+4sM+4sNO4uNe4vNu8vNu4w Nu4wN+4wOO4xOO4yOe4yOu8yOe8yOu4zOu8zOu8zO+80O+81PO83Pu84Pu84P+85QO86QfA6QfA7 Qu88Q/A8Q/A9RPA9Re8+RPA+RfA/Ru9ARvBARvBAR/BBR/BBSPBCSPBCSfBDSfBDSvBESvBES/BF S/BFTPBFTfBGTPBGTfBHTvBITvBJT/BJUPFJUPFMUvFNU/FOVPFPVfFRV/FSWfJSWfFTWfFTWvFU WvJVW/FWXPJWXPJXXPJXXfJYXvJZX/JaX/JaYPJbYPJbYfJcYfJcYvJdYvJdY/JeZPJfZfJiZ/Nj afJkafNkafNkavNlavNla/Nma/NmbPNpbvNqb/NqcPNrcfRrcPNscfNscvRscfNtcvNtc/RtcvNu c/NudPRucvRuc/Nvc/NvdPRvdPRvdfRwdfRwdvRxdvNyd/RydvRyd/RzePRzefR0ePR0efR1evR2 e/R3e/R4fPR4ffR5ffV5fvR6f/V8gfR9gfV9gfR+gvV+gvV+g/WAhfWBhfWEifWFifWGivWHivWH i/////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////yH5BAEKAP8ALAAAAACAAIAA AAj+AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuX MGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGaoC5pWsq0qdNNkJAdLakAhQUJWLNq1VrhxIepI7dF 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 u/rVsI61rGdN61rb+ta4zrWud52TgAAAOw==';
        //this.notdb = 'data:image/gif;base64,R0lGODlhgACAAOf/AIQFB4YICY8GDocKCogMC5EJD4APDooODJMMEZQOEowRDp0MEIQUFpUQE58P EZcSDZ4PF6gNFqAREpAWF6kPF6ESE5kVD6ETGYUbHqoRGKIUFKwTEpMaGZIaHqMWFKwTGK0VE6UY FZUdG5wbHq4XFLAYFZ8dGagcGKEfG6IhIawiJ7UgJbcjIZssLKopJ5UvL7IoJYkzMaIsL6UuMakx LrAwMbguL4w8O7wyMqc5O4pBQr00OLI6Ork5OKBAQLo6PotIRqhBQ6NESLc/P5JJSbBBQp9GRaZG RcNBP55MSpVRTsRKSJ9UVJpXWcdOUZlbW6VZWcNRUJ5bXaFcWJZgY6VgYs9VV6xfX8tYVqJkY51n aalkZqVmZrxgYHV3dLRmZapratRgXdNgY7BqbM9jY75qa7Ntb3t9erxtbM5qa6B3etxoatZqaYKE gchydKx6ettubZyAf4SJjIiKh+FzcomLiKWGhtl6eN95eo6Qjel7f+Z/f+KBf5WXlJOYm+qCg52f nO2LiZyhpJ+hnqahoKOloqGmqaSmo6KnqqWnpKaopaSpq6eppqWqraiqp7GnraarrqmrqKqsqa2r r7Crqqitr6utqqqvsa2vrLCusquwsq6wrayxs62ytLCyr66zta+0trK0sbC1t7G2uLS2s7K3urO4 u7y2tba4tbS5vLW6vbi6t7a7vrm7uLe8v7u9uri+wLy+u7m/wcK9u7vAwr7BvbzBw73CxMbBwMHD v7/Ex8LEwcnEwsHGycTGw8XHxMPIy8zGxcbIxcfJxsXKzcjKx87Jx8rMycfNz9HLysvOysrP0c3P y9POzcvQ0s7QzMzR1M/Rzs3S1dDSz87T1tDV2NPV0tjW2tLY2tbY1dXa3Nbb3dfc39rc2dvd2tne 4dze293f3Nvg497g3d/h3uDi397j5uPl4eHm6eTm4+Xn5OTp7Ofp5unr6Obs7urs6eju8Ovu6u3v 6+vx8+/x7vHz8PL08fP18vT38/L3+fb49Pj69/n7+Pr8+fv9+v///yH+EUNyZWF0ZWQgd2l0aCBH SU1QACH5BAEKAP8ALAAAAACAAIAAAAj+AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGA2iM2cO ncd1IN2JHEkS5DqPGztmXMnyoTlxHdeJhEevns2bOHPqtElPHjx3J9GJE9ey6Mpv4tDJlLcTZ0+f 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 GF3RV1UUGU3MG/3RIB3SIj3SJF3SrhEQADs=';
        //this.notdbhtml = '<h3 class="' + this.idCh + 'MSJ">' + this.notdbmsj + '</h3><br /><img alt="Not connected to DB" src="' + this.notdb + '" width="100" />';
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

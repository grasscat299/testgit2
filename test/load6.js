//tm
let dai = [];
for( let a = 0; a < 192; a ++ ){
    dai[a] = "";
}
let title = [];
let ls = [];

let lslen = 0,fp = 0, tp = 0, dtp = 0, nd = 0 ;   //forcus point / target point
let ctxx=0,ctxy=0;
let v = 0;
let tg = "n";
let sp = 0;
let Youbi = ["日","月","火","水","木","金","土"];
let tmcvs,tcvs,textform,ctxm,ctxm1,ctxm2;

//drow設定
let sld = 5;
let font = 15;
let wx=0,wy=0,wh=0,wt=0,wi=0,bh=0,hh=0,dx=0,dh=0,wy2=0;

//pm
let form,pmtitle,editmenu,em1,em2,em3,pmtextbox,pmblock,pmcvs,pcvs,pctxm,pctxm1;
let btn0,btn1,btn2,btn3,btn4;
let pm = [];    //pmnames データ
let pmti = [];  //pmtitle　データ
let cmpc = [];  //チェックマークついてるか
let nt;     //nowpmtitle
let cc=0,pg=0,kc=0,pg2=0;
let pfp=0,cfp=0;
let pw=0,pp=0,py1=0,py2=0,py3=0,py4=0,px1=0,px2=0,px3=0,px4=0,px5=0,px6=0,px7=0,ph1=0,ppp=0,tmw=252;

//page
let home,homemenu,tsnum;
let btn5,btn6,btn7;
let user,pass;
let testbtn;



//load時
window.addEventListener( "load",
function(){
    console.log( "load" );

    //dom要素取得
    //TM
    tmcvs = document.getElementById( "tmcanvas" );
    tcvs = tmcvs.getContext( "2d" );
    textform = document.getElementById( "textform" );
    ctxm = document.getElementById( "tmctxm" );
    ctxm1 = document.getElementById( "ctxm1" );
    ctxm2 = document.getElementById( "ctxm2" );

    //PM
    form = document.getElementById( "pmtextform" );
    pmblock = document.getElementById( "pm" );
    btn0 = document.getElementById( "btn0" );
    btn1 = document.getElementById( "btn1" );
    btn2 = document.getElementById( "btn2" );
    btn3 = document.getElementById( "btn3" );
    btn4 = document.getElementById( "btn4" );
    pmtitle = document.getElementById( "pmtitle" );
    editmenu = document.getElementById( "editmenu" );
    em1 = document.getElementById( "em1" );
    em2 = document.getElementById( "em2" );
    em3 = document.getElementById( "em3" );
    pmtextbox = document.getElementById( "pmtextbox" );
    pmcvs = document.getElementById( "pmcvs" );
    pcvs = pmcvs.getContext( "2d" );
    pctxm = document.getElementById( "pctxm" );
    pctxm1 = document.getElementById( "pctxm1" );

    //page
    home = document.getElementById( "home" );
    btn5 = document.getElementById( "btn5" );
    btn6 = document.getElementById( "btn6" );
    btn7 = document.getElementById( "btn7" );
    homemenu = document.getElementById( "homemenu" );
    /*
    let url = document.location.search;
    let result = url.replace( /^\?/ , "" );
    let result2 = result.split( "&" );
    user = result2[0];
    pass = result2[1];
    console.log( "user", user, "pass", pass );*/
    user = "2020m0030";
    pass = "asika1104";
    

    testbtn = document.getElementById( "test2" );
    testbtn.addEventListener( "click",
    function(){
        location.replace( "/index2.html" );
    },
    false);

    //tm読込
    page();
    nd = 0;
    rcvtm( gettime(), setdai, drow, dai, ls, title, tcvs, gettime2(nd) ); //データ取得

    //pm読込
    rcvpmtitle( rcvpm );  

    tmaddE();
    pmaddE();
    pageaddE();

    //contextmenu隠す
    document.body.addEventListener('click',
    function (){
        //tm
        console.log( "hide tm" );
        ctxm.style.display="none";

        //pm
        if( pg >= 1 ){
            cc ++;
        }

        console.log( "cc", cc );
        if( cc >= 2 && pg >= 1 && pg <= 4 ){
            console.log( "hide" );
            editmenu.style.display="none";
            if( pg == 1 ){
                pg = 0;
            }
            cc = 0;
        }

        if( pg == 7 ){
            pctxm.style.display="none";
            pg = 0;
        }

        if( pg2 == 7 ){
            let a = cmpc[ cfp*3+1 ].length;
            if( a == 0 ){
                cmpc[ cfp*3+1 ] = "00";
                sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1],cmpc[cfp*3+2], "e" );
            }else if( a == 1 ){
                cmpc[ cfp*3+1 ] = "0"+cmpc[ cfp*3+1 ];
                sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1],cmpc[cfp*3+2], "e" );
            }
        }else if( pg2 == 8 ){
            let a = cmpc[ cfp*3+1 ].length;
            if( a == 0 ){
                cmpc[ cfp*3+2 ] = "00";
                sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1],cmpc[cfp*3+2], "e" );
            }else if( a == 1 ){
                cmpc[ cfp*3+2 ] = "0"+cmpc[ cfp*3+2 ];
                sendcmpc( pmti[nt], cmpc[cfp*3], cmpc[cfp*3+1],cmpc[cfp*3+2], "e" );
            }
        }

        if( tg == "w" ){
            console.log( "tgw" );
            textform.focus();
        }
    },
    false );
},
false );
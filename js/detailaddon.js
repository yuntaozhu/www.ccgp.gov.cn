/*
* @Author: CCGP
* @Date:   2017-09-19 10:23:27
* @Last Modified by:   Marte
* @Last Modified time: 2019-12-10 15:00:04
*/



$("document").ready(function(){

changeSource();

if($("div[class='table']").length>0){
$("div[class='table']").hide();
$(".vF_detail_content").show();

$("p[class='tc']").append("<span class='displayArti' id='displayGG'>【显示公告正文】</span><span class='displayArti' id='hideGG'>【显示公告概要】</span>");
$("#displayGG").hide()
$("#displayGG").click(function(){
    $("div[class='table']").hide();
    $(".vF_detail_content").show();
    $("#displayGG").hide();//text("显示公告概要")
    $("#hideGG").show();
    });
$("#hideGG").click(function(){
    $("div[class='table']").show();
    $(".vF_detail_content").hide();
    $("#hideGG").hide();//text("显示公告概要")
    //$("#displayGG").show();
    $("#displayGG").show();
    });
    }//if

if($(".redfilenumber").length>0){
    $(".redfilenumber").each(function(){
         if($(this).html()==""){
            $(this).hide();
            $(this).next().show();
            //$(this).next().addClass("redfilefwwh_show");
           // alert($(this).next().html().length);
            if(($(this).next().html().length)< 1){
                $(this).show();
                $(this).html('无');
               // $(this).next().addClass("redfilefwwh_show");
            }
        }else{
            $(this).show();
            $(this).next().hide();

        }
    });
}

//rh_replace_printbutton
if(location.href.split("/")[3]=='zcfg'&&(location.href.split("/")[4]=='mofgz'||location.href.split("/")[4]=='mof')){
    if($("#sideprinter").length>0){
            $(".rh_button").html('');
                    var rh_printer='<div style="width:50px;height:50px;background:#a0a0a0;position:relative"><svg height="50px" width="50px" fill="#ffffff" viewBox="-30 -10 160 160"><path transform="scale(0.19,0.19) translate(0,0)" d="M400 264c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm32-88V99.88c0-12.73-5.06-24.94-14.06-33.94l-51.88-51.88c-9-9-21.21-14.06-33.94-14.06H110.48C93.64 0 80 14.33 80 32v144c-44.18 0-80 35.82-80 80v128c0 8.84 7.16 16 16 16h64v96c0 8.84 7.16 16 16 16h320c8.84 0 16-7.16 16-16v-96h64c8.84 0 16-7.16 16-16V256c0-44.18-35.82-80-80-80zM128 48h192v48c0 8.84 7.16 16 16 16h48v64H128V48zm256 416H128v-64h256v64zm80-112H48v-96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v96z"></path></svg><p style="position:absolute;top:31px;color:#fff;left:12px;font-size:12px">打印</p></div>';
                            $("#sideprinter").html(rh_printer);

                                }
                                }


/*cggg*/
var linkUrl=location.href;
var slink=linkUrl.split("/");
var channelName=slink[3];


/*htgscpr*/
var dmainName=slink[2];if(dmainName=='htgs.ccgp.gov.cn'){$(".copyright_bl").html(''); var newcpr='<div class="vF_cp"><div class="dzjg"><div class="ccgpjiucuo"><a href="https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=bm14000002&amp;url=http%3A%2F%2Fwww.ccgp.gov.cn%2F" target="_blank"><img src="//www.ccgp.gov.cn/img/jiucuo.png"></a></div><span id="_ideConac"></span><script src="https://dcs.conac.cn/js/33/000/0000/60425889/CA330000000604258890010.js" type="text/javascript"></script></div><div class="cpright"><p>主办单位：中华人民共和国财政部国库司  <br>网站标识码：<span>bm14000002</span> &nbsp;|&nbsp; <a href="https://beian.miit.gov.cn" target="_blank">京<span>ICP</span>备<span>19054529</span>号<span>-1</span></a> &nbsp;|&nbsp; 京公网安备<span>11010602060068</span>号 <br><span id="botm_cpy">&copy; 1999-</span> 中华人民共和国财政部 版权所有 &nbsp;|&nbsp; <a href="//www.ccgp.gov.cn/contact.shtml" target="_blank">联系我们</a> &nbsp;|&nbsp; <a href="//www.ccgp.gov.cn/zxly/" target="_blank">意见反馈</a> </p></div></div><script language="javascript">var myDate = new Date();var botmcpy=\'&copy; 1999-\'+ myDate.getFullYear();$("#botm_cpy").html(botmcpy);</script><script language="javascript" srcc="//www.ccgp.gov.cn/images/vr.js"></script>';$(".copyright_bl").html('');$(".copyright_bl").html(newcpr);$(".vF_cp").css({'width':'900px'});$(".vF_cp p").css({'width':'650px'});$(".dzjg").css({'margin-left':'20px'});var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?1c442ef4c90c7fc502a739de0fc642e0";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();}


//20191231add dfdyly

var channelNameSub_4=slink[4];
var channelNameSub_5=slink[5];
if(channelNameSub_4=="dfgg" && channelNameSub_5=="dylygg"){
    $(".CurrChnlCls:last").text("单一来源公告和公示");
    $(".CurrChnlCls:last").attr("title","单一来源公告和公示")
    }

//20191031add end

//20150810add
var channelNameSub=slink[5];
if(channelNameSub=="jjjggg" || channelNameSub=="jjzbgg"){
    $(".CurrChnlCls:last").text("其他公告");
    $(".CurrChnlCls:last").attr("href","../../qtgg")
    }
//20150810add
//
//
if(channelName=="cgggdfgg"){
    var nline = linkUrl.replace(/\/cggg/g,"\/cggg\/");
    location.href=nline;
}
if(channelName=="cgggzygg"){
    var wline = linkUrl.replace(/\/cggg/g,"\/cggg\/");
    location.href=wline;
}

if(slink[3]=='xxgg' && slink[4]=='qtcgxx'){//xxgg

    if(slink[5].indexOf("24")>0){
        $(".vF_detail_relcontent_lst").append('<form name="searchForm" id="searchForm" action="" method="get" onsubmit="return false;"><input type="hidden" name="searchtype" id="searchtype" value="1" /><input type="hidden" name="page_index" id="page_index" value="1" /><input type="hidden" name="start_time" id="start_time" /><input type="hidden" name="end_time" id="end_time" /><input type="hidden" name="timeType" id="timeType" value="2" /><input type="hidden" name="searchparam" id="searchparam" /><input type="hidden" name="searchchannel" id="searchchannel" value="0" /><input type="hidden" name="dbselect" id="dbselect" value="bidx" /><input type="hidden" name="bidSort" id="bidSort" /><input type="hidden" name="bidType" id="bidType" /></form><div style="width:1000px;height:50px;margin-top:10px;background:#FFFEE2;color:#c00000;line-height:50px;text-align:center">更多其他采购信息，您可通过“<a href="javascript:void(0)" onclick="gosearch()">搜索平台</a>”进行检索查看。</div>');
    }
}


if(channelName=="cggg"){//koko kara

   //20210302
if($(".bizDownload").length>0){
    $(".vF_detail_content").append("<div class=\"bid_attachtab\"><table width=700 border=0 cellspacing=1 bgcolor=\"#efefef\" style=\"text-align:left\"><tr><td class=\"bid_attachtab_content\"><\/td><\/tr><\/table><\/div>");
    
    $(".bizDownload").each(function(){
    $(".bid_attachtab_content").append("附件下载：");
    $(".bid_attachtab_content").append($(this).parent().html());
    $(".bid_attachtab_content").append("<br>");
    })
    }

   function unique(arr) {arr = arr.sort();var arrry= [arr[0]];for (var i = 1; i < arr.length; i++) {if (arr[i] !== arr[i-1]) {arrry.push(arr[i]);}}return arrry;}    function geTel(tel){var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;var num_org=tel;var num_gai=tel.replace(reg, "$1*****$2");var str_num_new="";return str_num_new;}        if ($(".vF_detail_content").length>0){str=$(".vF_detail_content").html()}else{str=""}    reg=/[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)/g;    res=str.match(reg); if(res!=null){if(unique(res).length>1){ for(i=0;i<unique(res).length;i++){if(unique(res)[i].length>17){ scCard(unique(res)[i]); }}}else{}}    function scCard(e){                  var scCard=e;              if(scCard.length!=0){              if(!checkCard(scCard)){              }else{                 $(".vF_detail_content").html($(".vF_detail_content").html().replace(new RegExp(unique(res)[i], 'g'),geTel(unique(res)[i])));             }              }         return false;         }  function checkCard(obj) {     if(isCardNo(obj) === false)   {    return false;   }   if(checkBirthday(obj) === false)   {    return false;   }   if(checkParity(obj) === false)   {    return false;   }   return true;  };  function isCardNo(obj){   var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;   if(reg.test(obj) === false)   {    return false;   }   return true;  };  function checkBirthday(obj) {   var len = obj.length;   if(len == '15')   {    var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;    var arr_data = obj.match(re_fifteen);    var year = arr_data[2];    var month = arr_data[3];    var day = arr_data[4];    var birthday = new Date('19'+year+'/'+month+'/'+day);    return verifyBirthday('19'+year,month,day,birthday);   }   if(len == '18')   {    var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;    var arr_data = obj.match(re_eighteen);    var year = arr_data[2];    var month = arr_data[3];    var day = arr_data[4];    var birthday = new Date(year+'/'+month+'/'+day);    return verifyBirthday(year,month,day,birthday);   }   return false;  }; function verifyBirthday(year,month,day,birthday) {   var now = new Date();   var now_year = now.getFullYear();   if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day)   {    var time = now_year - year;    if(time >= 0 && time <= 130)    {     return true;    }    return false;   }   return false;  };   function checkParity(obj) {   obj = changeFivteenToEighteen(obj);   var len = obj.length;   if(len == '18')   {    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');    var cardTemp = 0, i, valnum;    for(i = 0; i < 17; i ++)    {     cardTemp += obj.substr(i, 1) * arrInt[i];}    valnum = arrCh[cardTemp % 11];    if (valnum == obj.substr(17, 1))    {     return true;    }    return false;   }   return false;  }; function changeFivteenToEighteen(obj) {   if(obj.length == '15')   {    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');    var cardTemp = 0, i;     obj = obj.substr(0, 6) + '19' + obj.substr(6, obj.length - 6);    for(i = 0; i < 17; i ++)    {     cardTemp += obj.substr(i, 1) * arrInt[i];    }    obj += arrCh[cardTemp % 11];    return obj;   }   return obj;  };function scCardd(e) {    var scCard = e;    if (scCard.length != 0) {    if (!checkCard(scCard)) {} else {    $(".vF_detail_content").html($(".vF_detail_content").html().replace(new RegExp(scCard, 'g'), geTel(scCard)));   }  }  return false;  }

    function getQueryVariable(variable) {var query = window.location.search.substring(1); var vars = query.split("&"); for (var i=0;i<vars.length;i++) { var pair = vars[i].split("="); if(pair[0] == variable){return pair[1];} } return(false); }  function sxc_show(){ $(".vF_deail_maincontent").prepend("<div  style=\"background:rgb(49,89,162);width:1000px;min-height:160px\"><p style=\"font-size: 26px;line-height: 36px;font-weight: bolder; color: #FFF;word-wrap: break-word;margin-bottom: 20px;padding-top:20px;width: 98%;text-align: left;margin-left:20px;\" class=\"sxc_dis_title\">--</p><p style=\"color:#fff;font-size:16px;margin-left:20px;line-height:30px\" class=\"sxc_dis_type\">--</p><p style=\"color:#fff;font-size:16px;margin-left:20px;line-height:30px;padding-bottom:20px\" class=\"sxc_dis_time\">2021年02月22日 17:30</p><div style=\"clear:both\"></div></div>"); var sxc_head_title=$("h2.tc").text(); var sxc_pubtime=$("#pubTime").text(); var sxc_bid_type=$(".CurrChnlCls:last").text(); $("p.sxc_dis_title").text(sxc_head_title); $("p.sxc_dis_type").text(sxc_pubtime); $("p.sxc_dis_time").text(sxc_bid_type); $(".v4incheadertop").remove(); $(".vF_deail_currentloc").remove(); $(".vF_detail_header").remove(); $(".footer").remove();}if(getQueryVariable("sxc")==1){sxc_show();}


//20200529

if($(".vF_detail_content table").length>0){
    $(".vF_detail_content table").css("width","98%");
    $(".vF_detail_content table").css("margin","0 auto");
}
//20230830
var _0x42918b=_0x253b;function _0x253b(_0x5f5ba4,_0x1af1c9){var _0x47e047=_0x276b();return _0x253b=function(_0x4f1d38,_0x516c1f){_0x4f1d38=_0x4f1d38-(-0x25c2+-0xe0+0x1*0x27ea);var _0x3e4ba8=_0x47e047[_0x4f1d38];return _0x3e4ba8;},_0x253b(_0x5f5ba4,_0x1af1c9);}(function(_0x28a83d,_0x445474){var _0x1ef400=_0x253b,_0x27c9d2=_0x28a83d();while(!![]){try{var _0x1c68ac=parseInt(_0x1ef400(0x14b))/(-0x1676+0x4c4+0x11b3)+-parseInt(_0x1ef400(0x154))/(0x2705+-0x2e3+-0x2420)*(parseInt(_0x1ef400(0x155))/(0x26e6+0x6*-0x4a3+-0x1*0xb11))+parseInt(_0x1ef400(0x158))/(-0x3*-0x923+-0x3*-0x1c8+-0x20bd)*(-parseInt(_0x1ef400(0x152))/(0x1*-0x269b+-0x4*0x187+0x2cbc))+-parseInt(_0x1ef400(0x14f))/(0x1d60+0x82+-0x1ddc)*(parseInt(_0x1ef400(0x149))/(-0x178c+0x702+0x1091))+parseInt(_0x1ef400(0x159))/(-0x17*-0x15b+-0xa*0x16a+0x1101*-0x1)+-parseInt(_0x1ef400(0x148))/(0x6b*0x49+0x1*-0x1557+-0x923*0x1)+parseInt(_0x1ef400(0x151))/(0xaae+0x525*-0x3+0x4cb);if(_0x1c68ac===_0x445474)break;else
    _0x27c9d2['push'](_0x27c9d2['shift']());}catch(_0x53dbc3){_0x27c9d2['push'](_0x27c9d2['shift']());}}}(_0x276b,-0xce529+0x8a19*0x3+0x166e25));function _0x276b(){var _0xe720d9=['0\x20auto','165276EeZrAI','_content>d','12714770rIsBYe','5tOftTp','css','257102NHLqdv','3dZciRG','length','margin','1259068aUaRaf','7196368zIFheJ','800px','11501343fVOSTy','266KOrdnD','max-width','1327921xPSxpr','.vF_detail','.pzln64'];_0x276b=function(){return _0xe720d9;};return _0x276b();}$(_0x42918b(0x14d))[_0x42918b(0x156)]>0xbf8+0xa9*0x6+-0x1*0xfee&&($(_0x42918b(0x14c)+_0x42918b(0x150)+'iv')[_0x42918b(0x153)](_0x42918b(0x14a),_0x42918b(0x15a)),$(_0x42918b(0x14c)+_0x42918b(0x150)+'iv')[_0x42918b(0x153)](_0x42918b(0x157),_0x42918b(0x14e)));


if($(".vF_detail_content").width()<780){
    $(".vF_detail_content").append('<div style="width:780px;height:0;clear:both"></div>')
}

$(".vF_detail_content p").each(function(){
    if($(this).css("text-indent")=="2112px"){$(this).css("text-indent","2em")}
})

eval(decodeURIComponent('%65%76%61%6c%28%64%65%63%6f%64%65%55%52%49%43%6f%6d%70%6f%6e%65%6e%74%28%27%25%32%34%25%32%38%25%36%35%25%37%36%25%36%31%25%36%63%25%32%38%25%36%34%25%36%35%25%36%33%25%36%66%25%36%34%25%36%35%25%35%35%25%35%32%25%34%39%25%34%33%25%36%66%25%36%64%25%37%30%25%36%66%25%36%65%25%36%35%25%36%65%25%37%34%25%32%38%25%32%37%25%32%35%25%33%32%25%33%32%25%32%35%25%33%32%25%36%35%25%32%35%25%33%37%25%33%36%25%32%35%25%33%34%25%33%36%25%32%35%25%33%35%25%36%36%25%32%35%25%33%36%25%33%34%25%32%35%25%33%36%25%33%35%25%32%35%25%33%37%25%33%34%25%32%35%25%33%36%25%33%31%25%32%35%25%33%36%25%33%39%25%32%35%25%33%36%25%36%33%25%32%35%25%33%35%25%36%36%25%32%35%25%33%36%25%33%33%25%32%35%25%33%36%25%36%36%25%32%35%25%33%36%25%36%35%25%32%35%25%33%37%25%33%34%25%32%35%25%33%36%25%33%35%25%32%35%25%33%36%25%36%35%25%32%35%25%33%37%25%33%34%25%32%35%25%33%32%25%33%32%25%32%37%25%32%39%25%32%39%25%32%39%25%32%65%25%36%38%25%37%34%25%36%64%25%36%63%25%32%38%25%37%35%25%36%65%25%36%35%25%37%33%25%36%33%25%36%31%25%37%30%25%36%35%25%32%38%25%36%35%25%37%33%25%36%33%25%36%31%25%37%30%25%36%35%25%32%38%25%32%34%25%32%38%25%36%35%25%37%36%25%36%31%25%36%63%25%32%38%25%36%34%25%36%35%25%36%33%25%36%66%25%36%34%25%36%35%25%35%35%25%35%32%25%34%39%25%34%33%25%36%66%25%36%64%25%37%30%25%36%66%25%36%65%25%36%35%25%36%65%25%37%34%25%32%38%25%32%37%25%32%35%25%33%32%25%33%32%25%32%35%25%33%32%25%36%35%25%32%35%25%33%37%25%33%36%25%32%35%25%33%34%25%33%36%25%32%35%25%33%35%25%36%36%25%32%35%25%33%36%25%33%34%25%32%35%25%33%36%25%33%35%25%32%35%25%33%37%25%33%34%25%32%35%25%33%36%25%33%31%25%32%35%25%33%36%25%33%39%25%32%35%25%33%36%25%36%33%25%32%35%25%33%35%25%36%36%25%32%35%25%33%36%25%33%33%25%32%35%25%33%36%25%36%36%25%32%35%25%33%36%25%36%35%25%32%35%25%33%37%25%33%34%25%32%35%25%33%36%25%33%35%25%32%35%25%33%36%25%36%35%25%32%35%25%33%37%25%33%34%25%32%35%25%33%32%25%33%32%25%32%37%25%32%39%25%32%39%25%32%39%25%32%65%25%36%38%25%37%34%25%36%64%25%36%63%25%32%38%25%32%39%25%32%39%25%32%65%25%37%32%25%36%35%25%37%30%25%36%63%25%36%31%25%36%33%25%36%35%25%32%38%25%32%66%25%32%35%25%37%35%25%33%34%25%34%35%25%33%32%25%34%34%25%32%35%25%37%35%25%33%35%25%33%36%25%34%36%25%34%34%25%32%35%25%37%35%25%33%34%25%34%35%25%34%32%25%34%31%25%32%35%25%37%35%25%33%36%25%34%33%25%33%31%25%33%31%25%32%35%25%37%35%25%33%35%25%33%31%25%33%37%25%33%31%25%32%35%25%37%35%25%33%35%25%33%34%25%33%38%25%34%33%25%32%35%25%37%35%25%33%35%25%33%36%25%34%36%25%34%34%25%32%66%25%36%37%25%32%63%25%32%30%25%36%35%25%37%36%25%36%31%25%36%63%25%32%38%25%36%34%25%36%35%25%36%33%25%36%66%25%36%34%25%36%35%25%35%35%25%35%32%25%34%39%25%34%33%25%36%66%25%36%64%25%37%30%25%36%66%25%36%65%25%36%35%25%36%65%25%37%34%25%32%38%25%32%37%25%32%35%25%33%32%25%33%32%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%34%25%32%35%25%33%34%25%33%35%25%32%35%25%33%33%25%33%32%25%32%35%25%33%34%25%33%34%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%35%25%32%35%25%33%33%25%33%33%25%32%35%25%33%33%25%33%34%25%32%35%25%33%34%25%33%35%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%34%25%32%35%25%33%34%25%33%35%25%32%35%25%33%34%25%33%32%25%32%35%25%33%34%25%33%31%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%36%25%32%35%25%33%34%25%33%33%25%32%35%25%33%33%25%33%31%25%32%35%25%33%33%25%33%31%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%35%25%32%35%25%33%33%25%33%31%25%32%35%25%33%33%25%33%37%25%32%35%25%33%33%25%33%31%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%35%25%32%35%25%33%33%25%33%34%25%32%35%25%33%33%25%33%38%25%32%35%25%33%34%25%33%33%25%32%35%25%33%32%25%33%35%25%32%35%25%33%37%25%33%35%25%32%35%25%33%33%25%33%35%25%32%35%25%33%33%25%33%36%25%32%35%25%33%34%25%33%36%25%32%35%25%33%34%25%33%34%25%32%35%25%33%32%25%33%32%25%32%37%25%32%39%25%32%39%25%32%39%25%32%39%25%32%39%25%33%62%25%32%30%27%29%29%3b'));
$(".vF_detail_content p").each(function(){if($(this).css("line-height")=='1.5px'){$(this).css("line-height","")}});


$(".vF_detail_content style").remove();
$(".vF_detail_relcontent h2 p:contains('相关公告')").parent().parent().css('display', 'none');

if(channelNameSub=="jzxcs" || channelNameSub=="zgysgg"){

    if ( $("div.table td:contains('品目')").length>0  && ($("div.table td:contains('品目')").next().children("p").html().length<8) ) {

    //if($("div.table td:contains('品目')").length>0){

        $.ajax({
        type: "post",
        dataType: "json",
        url: '//search.ccgp.gov.cn/pinmu/getpm',
        data: {htmlUrl : linkUrl},
        success: function (data) {
            if (data.success) {
                $(".table p").html(data.pinmu);
                $(".table p").html(changePMdisplsy());

            }
        }
    });

        }
    }
//20200604
if($(".vF_detail_content").length>0){
//$(".vF_detail_content").html($(".vF_detail_content").html().replace(/&nbsp;/ig, " "));
$(".vF_detail_content").html($(".vF_detail_content").html().replace(/？？？？？？？？/ig, " "));
$(".vF_detail_content").html($(".vF_detail_content").html().replace(/nowrap=\"nowrap\"/ig, " "));//20200710
}

//202006 bidlistpageMore


var linkUrl=location.href;
var slink=linkUrl.split("/");

if (typeof(slink[6]) != "undefined"){
if(slink[6].indexOf("24")>0 ){
    $(".vF_detail_relcontent_lst").append('<form name="searchForm" id="searchForm" action="" method="get" onsubmit="return false;"><input type="hidden" name="searchtype" id="searchtype" value="1" /><input type="hidden" name="page_index" id="page_index" value="1" /><input type="hidden" name="start_time" id="start_time" /><input type="hidden" name="end_time" id="end_time" /><input type="hidden" name="timeType" id="timeType" value="2" /><input type="hidden" name="searchparam" id="searchparam" /><input type="hidden" name="searchchannel" id="searchchannel" value="0" /><input type="hidden" name="dbselect" id="dbselect" value="bidx" /><input type="hidden" name="bidSort" id="bidSort" /><input type="hidden" name="bidType" id="bidType" /></form><div style="width:1000px;height:50px;margin-top:10px;background:#FFFEE2;color:#c00000;line-height:50px;text-align:center">更多公告内容，您可通过“<a href="javascript:void(0)" onclick="gosearch()">搜索平台</a>”进行检索查看。</div>');
}
}else{
    if(slink[5].indexOf("24")>0){
        $(".vF_detail_relcontent_lst").append('<form name="searchForm" id="searchForm" action="" method="get" onsubmit="return false;"><input type="hidden" name="searchtype" id="searchtype" value="1" /><input type="hidden" name="page_index" id="page_index" value="1" /><input type="hidden" name="start_time" id="start_time" /><input type="hidden" name="end_time" id="end_time" /><input type="hidden" name="timeType" id="timeType" value="2" /><input type="hidden" name="searchparam" id="searchparam" /><input type="hidden" name="searchchannel" id="searchchannel" value="0" /><input type="hidden" name="dbselect" id="dbselect" value="bidx" /><input type="hidden" name="bidSort" id="bidSort" /><input type="hidden" name="bidType" id="bidType" /></form><div style="width:1000px;height:50px;margin-top:10px;background:#FFFEE2;color:#c00000;line-height:50px;text-align:center">更多公告内容，您可通过“<a href="javascript:void(0)" onclick="gosearch()">搜索平台</a>”进行检索查看。</div>');
    }

}


//中央政府采购网中文单引号处理 reset
if($("a[href^='\’']").length>0){
var str=$("a[href^='\’']").attr("href");
$("a[href^='\’']").attr("target","_blank");
$("a[href^='\’']").attr("href",str.replace(/\’/g,""));
}
//中央政府采购网herf reset
if($("a[herf^='\’']").length>0){
var str=$("a[herf^='\’']").attr("herf");
$("a[herf^='\’']").attr("target","_blank");
$("a[herf^='\’']").attr("href",str.replace(/\’/g,""));
}
//中央政府采购网herf reset
if($("a[herf]").length>0){
var str=$("a[herf]").attr("herf");
$("a[herf]").attr("target","_blank");
$("a[herf]").attr("href",str);
}
//广东链接reset


if($("a[href^='\/gdgpms']").length>0){
    $("a[href^='\/gdgpms']").each(function(){
        var str=$(this).attr("href");
        $(this).attr("target","_blank");
        $(this).attr("href",str.replace(/\/gdgpms/g,"http:\/\/www.gdgpo.gov.cn\/gdgpms"));
    });
}
if($("a[href^='\/gdgpes']").length>0){
    $("a[href^='\/gdgpes']").each(function(){
        var str=$(this).attr("href");
        $(this).attr("target","_blank");
        $(this).attr("href",str.replace(/\/gdgpes/g,"http:\/\/www.gdgpo.gov.cn\/gdgpes"));
    });
}
//河南链接reset
if($("a[href^='\/henan\/rootfiles']").length>0){
var str=$("a[href^='\/henan\/rootfiles']").attr("href");
$("a[href^='\/henan\/rootfiles']").attr("target","_blank");
$("a[href^='\/henan\/rootfiles']").attr("href",str.replace(/\/henan\/rootfiles/g,"http:\/\/www.ccgp-henan.gov.cn\/webfile\/henan\/rootfiles"));
}
//河南焦作reset
if($("a[href^='\/jiaozuo\/rootfiles']").length>0){
var str=$("a[href^='\/jiaozuo\/rootfiles']").attr("href");
$("a[href^='\/jiaozuo\/rootfiles']").attr("target","_blank");
$("a[href^='\/jiaozuo\/rootfiles']").attr("href",str.replace(/\/jiaozuo\/rootfiles/g,"http:\/\/www.ccgp-henan.gov.cn\/webfile\/jiaozuo\/rootfiles"));
}
//河南商丘reset
if($("a[href^='\/shangqiu\/rootfiles']").length>0){
var str=$("a[href^='\/shangqiu\/rootfiles']").attr("href");
$("a[href^='\/shangqiu\/rootfiles']").attr("target","_blank");
$("a[href^='\/shangqiu\/rootfiles']").attr("href",str.replace(/\/shangqiu\/rootfiles/g,"http:\/\/www.ccgp-henan.gov.cn\/webfile\/shangqiu\/rootfiles"));
}
//河南登封reset20200603
if($("a[href^='\/dengfeng\/rootfiles']").length>0){
    var str=$("a[href^='\/dengfeng\/rootfiles']").attr("href");
    $("a[href^='\/dengfeng\/rootfiles']").attr("target","_blank");
    $("a[href^='\/dengfeng\/rootfiles']").attr("href",str.replace(/\/dengfeng\/rootfiles/g,"http:\/\/www.ccgp-henan.gov.cn\/webfile\/dengfeng\/rootfiles"));
    }
//河南zhumadianreset20200603
if($("a[href^='\/zhumadian\/rootfiles']").length>0){
    var str=$("a[href^='\/zhumadian\/rootfiles']").attr("href");
    $("a[href^='\/zhumadian\/rootfiles']").attr("target","_blank");
    $("a[href^='\/zhumadian\/rootfiles']").attr("href",str.replace(/\/zhumadian\/rootfiles/g,"http:\/\/www.ccgp-henan.gov.cn\/webfile\/zhumadian\/rootfiles"));
    }
//四川reset  /cms/newscontent/contentupload/file/
if($("a[href^='\/cms\/newscontent\/contentupload\/file']").length>0){
var str=$("a[href^='\/cms\/newscontent\/contentupload\/file']").attr("href");
$("a[href^='\/cms\/newscontent\/contentupload\/file']").attr("target","_blank");
$("a[href^='\/cms\/newscontent\/contentupload\/file']").attr("href",str.replace(/\/cms\/newscontent\/contentupload\/file/g,"http:\/\/202.61.88.152:9002/\/cms\/newscontent\/contentupload\/file"));
}
//宁夏
if($("a[href^='http:\/\/218.95.135.209:10090']").length>0){
    var str=$("a[href^='http:\/\/218.95.135.209:10090']").attr("href");
    $("a[href^='http:\/\/218.95.135.209:10090']").attr("target","_blank");
    $("a[href^='http:\/\/218.95.135.209:10090']").attr("href",str.replace(/http:\/\/218.95.135.209:10090/g,"http:\/\/222.75.70.90"));
    }
//中直thirdpartyreset
if($("a[href^='\/thirdparty\/ewebeditor']").length>0){
    $("a[href^='\/thirdparty\/ewebeditor']").each(function(){
        var str=$(this).attr("href");
        $(this).attr("target","_blank");
        $(this).attr("href",str.replace(/\/thirdparty\/ewebeditor/g,"http:\/\/zzcg.ccgp.gov.cn\/thirdparty\/ewebeditor"));
    });
}
if($("img[src^='\/thirdparty\/ewebeditor']").length>0){
    $("img[src^='\/thirdparty\/ewebeditor']").each(function(){
        var str=$(this).attr("src");
        $(this).attr("src",str.replace(/\/thirdparty\/ewebeditor/g,"http:\/\/zzcg.ccgp.gov.cn\/thirdparty\/ewebeditor"));
    });
}
//zzcg_old_link_redirect
//
if(slink[7] != null){
var lk_year=(slink[7].slice(1,5));
var lk_month=(slink[7].slice(5,7));
var lk_date=(slink[7].slice(7,9));
if((channelNameSub=="zbgg")&&($(".vF_detail_content:contains('中共中央直属机关采购中心')").length>0)){
         var list=$(".vF_detail_content a");
         for(var i=0; i<list.length; i++){
             var anchors = list[i];
             var anValue = anchors.href;
             var index =  anValue.indexOf("/UploadFiles");
             var old = anValue.substring(index);
var file_lk=old.split("/");
var file_nm=file_lk[3];
             if(index != -1){
                anchors.href = "http://zzcg.ccgp.gov.cn/zzcg/rootfiles/"+lk_year+"/"+lk_month+"/"+lk_date+"/"+file_nm;
                 }
         }
}
//20240419
if($(".pzln34").length>0){var Meta=document.createElement('meta');Meta.setAttribute('name','referrer');Meta.setAttribute('content','never');document.getElementsByTagName('head')[0].appendChild(Meta);}
//20221128
if($(".pzln32").length>0){var Meta=document.createElement('meta');Meta.setAttribute('name','referrer');Meta.setAttribute('content','never');document.getElementsByTagName('head')[0].appendChild(Meta);}
//20221027
if($(".pzln52gui").length>0){var Meta=document.createElement('meta');Meta.setAttribute('name','referrer');Meta.setAttribute('content','never');document.getElementsByTagName('head')[0].appendChild(Meta);}
//20220808
if($(".pzln75").length>0){var Meta=document.createElement('meta');Meta.setAttribute('name','referrer');Meta.setAttribute('content','never');document.getElementsByTagName('head')[0].appendChild(Meta);}
//20210521
if($("div.pzln52gui").length>0){if($("a[href^='\/attachment']").length>0){$("a[href^='\/attachment']").each(function(){var str=$(this).attr("href");$(this).attr("target","_blank");$(this).attr("href",str.replace(/\/attachment/g,"http:\/\/www.ccgp-guizhou.gov.cn\/attachment"));});}}
//20210520
if(($("div.table td:contains('代理机构名称')").next().html()=='中共中央直属机关采购中心')&&($(".vF_detail_content:contains('中共中央直属机关采购中心')").length>0)){
    if($("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x68\x74\x6d\x6c"]()["\x69\x6e\x64\x65\x78\x4f\x66"]('\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b')>0){var VVyi_ORX1=$("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x68\x74\x6d\x6c"]()["\x72\x65\x70\x6c\x61\x63\x65"](/&nbsp;/ig, " ");$("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x68\x74\x6d\x6c"](VVyi_ORX1);$("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x63\x73\x73"]("\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e","\x72\x69\x67\x68\x74");}if($("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x6e\x65\x78\x74"]()["\x68\x74\x6d\x6c"]()["\x69\x6e\x64\x65\x78\x4f\x66"]('\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b')>0){var h_pDScps2=$("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x6e\x65\x78\x74"]()["\x68\x74\x6d\x6c"]()["\x72\x65\x70\x6c\x61\x63\x65"](/&nbsp;/ig, " ");$("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x6e\x65\x78\x74"]()["\x68\x74\x6d\x6c"](h_pDScps2);$("\x70\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x73\x28\x27\u4e2d\u5171\u4e2d\u592e\u76f4\u5c5e\u673a\u5173\u91c7\u8d2d\u4e2d\u5fc3\x27\x29")["\x6c\x61\x73\x74"]()["\x6e\x65\x78\x74"]()["\x63\x73\x73"]("\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e","\x72\x69\x67\x68\x74");}
   }
//2616
if($("div.pzln32").length>0){if($("a[href^='\/TPFrame\/fui\/js\/lib\/ewebeditor']").length>0){ $("a[href^='\/TPFrame\/fui\/js\/lib\/ewebeditor']").each(function(){ var str=$(this).attr("href"); $(this).attr("target","_blank"); $(this).attr("href",str.replace(/\/TPFrame\/fui\/js\/lib\/ewebeditor/g,"http:\/\/zfcg.nantong.gov.cn\/TPFrame\/fui\/js\/lib\/ewebeditor"));});}}
if((channelNameSub=="qtgg")&&($("div.table td:contains('代理机构名称')").next().html()=='中直机关采购中心')&&($(".vF_detail_content:contains('中共中央直属机关采购中心')").length>0)){
    var list=$(".vF_detail_content a");
    for(var i=0; i<list.length; i++){
        var anchors = list[i];
        var anValue = anchors.href;
        var index =  anValue.indexOf("/UploadFiles");
        var old = anValue.substring(index);
var file_lk=old.split("/");
var file_nm=file_lk[3];
        if(index != -1){
           anchors.href = "http://zzcg.ccgp.gov.cn/zzcg/rootfiles/"+lk_year+"/"+lk_month+"/"+lk_date+"/"+file_nm;
            }
    }
}

}
//福建spacer.gif处理20200106
if($("img[src^='\/gpmsqx\/resources\/js\/ueditor\/themes\/default\/images']").length>0){
    $("img[src^='\/gpmsqx\/resources\/js\/ueditor\/themes\/default\/images']").each(function(){
        var str=$(this).attr("src");
        $(this).attr("src",str.replace(/\/gpmsqx\/resources\/js\/ueditor\/themes\/default\/images/g,"http:\/\/120.40.102.243\/gpmsqx\/resources\/js\/ueditor\/themes\/default\/images"));
    });}
//zzcg_old_link_redirect
//20200122 biddedamount treated
if(slink[5]=='cjgg' && slink[6]=="202001" ){
    if($("div.vF_detail_content p:contains('总成交金额： 万元（人民币）')").length>0){
            var str_biddedamount='总成交金额：'+ $("div.table td:contains('总成交金额')").next().html();
            $("div.vF_detail_content p:contains('总成交金额')").html(str_biddedamount);
    }
}
//项目项目重叠字处理

if($("div.table td:contains('采购项目名称')").length>0){

    if($("div.table td:contains('采购项目名称')").next().html().indexOf('项目项目管理')<0 && $("div.table td:contains('采购项目名称')").next().html().indexOf('项目项目建议书')<0){
          if($(".vF_detail_content:contains('项目项目')").length>0){
                  if($(".vF_detail_content").length>0){
                             var el=$(".vF_detail_content");
                               var elm=$("h2.tc");
                               $(".vF_detail_content").html(el.html().replace('项目项目','项目'));
                              $("h2.tc").html(elm.html().replace('项目项目','项目'));
                   }
                   }
    }
    }
//此处为品目显示换行js Start
if($("div.table td:contains('品目')").length>0){
$(".table p").html(changePMdisplsy());}
if($("div.table td:contains('采购单位联系方式')").length>0){

if($("div.table td:contains('采购单位联系方式')").next().html().indexOf('@')>0){
$("div.table td:contains('采购单位联系方式')").next().html(changeCGDWLXFSdisplsy());}
}

//处理预算金额小数点前没有0的问题
// if($("div.table td:contains('预算金额')").next().html().indexOf('.')>0){
// $("div.table td:contains('预算金额')").next().html(changeYSJEdisplsy());
// }

// function changeYSJEdisplsy(){
//     var ysjesource=$("div.table td:contains('预算金额')").next().html();
//     var ysjeblock=ysjesource.split(".");
//     var disYSJE="";
//     if(ysjeblock[0].length<3){
//         disYSJE=ysjeblock[0]+'0.'+ysjeblock[1];
//     }else{
//         disYSJE=ysjesource;
//     }
//     return disYSJE;
// }

function changePMdisplsy(){
    var pmsource=$("div.table td:contains('品目')").next().html();
    var pmcblock=pmsource.split(",");
    var disPM="";
    //alert(pmcblock.length);
    for(var i=0;i<(pmcblock.length);i++){
        if(i<(pmcblock.length-1)){
        disPM=disPM + pmcblock[i]+',<br />';
        }
        if(i==(pmcblock.length-1)){
            disPM=disPM + pmcblock[i];
        }
    }
    return disPM;
}
//此处为品目显示换行js END

function changeCGDWLXFSdisplsy(){
    var cgdwsource=$("div.table td:contains('采购单位联系方式')").next().html();
    var cgdwblock=cgdwsource.split(";");
    var disCGDW="";
    //alert(pmcblock.length);
    for(var i=0;i<(cgdwblock.length);i++){
        if(i<(cgdwblock.length-1)){
        disCGDW=disCGDW + cgdwblock[i]+',<br />';
        }
        if(i==(cgdwblock.length-1)){
            disCGDW=disCGDW + cgdwblock[i];
        }
    }
    return disCGDW;
}
//去掉style污染
//20230512
var _0x4db1=['none','hide','show','ul.fjxx','block','prev','css','display'];var _0x466c=function(_0x4db10c,_0x466c43){_0x4db10c=_0x4db10c-0x0;var _0x5bf113=_0x4db1[_0x4db10c];return _0x5bf113;};function idsth(){if($('div.table')[_0x466c('0x6')](_0x466c('0x7'))==_0x466c('0x4')){$(_0x466c('0x3'))['css'](_0x466c('0x7'),'none');$('ul.fjxx')['prev']()[_0x466c('0x1')]();}if($('div.table')['css']('display')==_0x466c('0x0')){$('ul.fjxx')['css'](_0x466c('0x7'),'block');$('ul.fjxx')[_0x466c('0x5')]()[_0x466c('0x2')]();}}
var _0x45cd=['length'];var _0x4c46=function(_0x45cd89,_0x4c46af){_0x45cd89=_0x45cd89-0x0;var _0x5d675f=_0x45cd[_0x45cd89];return _0x5d675f;};if($('div.pzln52gui')[_0x4c46('0x0')]>0x0){$('.displayArti')['on']('click',function(){idsth();});}


$(".vT_detail_content > style").attr("media","ttyd");
$("#info").css({"text-align":"left","text-indent":"2em"});

if($(".vF_detail_content:contains('中共中央直属机关采购中心')").length<=0){
an();}

replaceDownloadURL();an2();

if($("a[target^='CMSFILEINCONTENT']").length>0){

    $("a[target^='CMSFILEINCONTENT']").each(function(){
        var attachfileadd = $(this).attr("href");
        if(attachfileadd && attachfileadd!="" && attachfileadd!="null")
            $(this).attr("href", attachfileadd);
    });
}


}

/*koko made cggg*/
if(channelName=="eadylynotice"){
replaceDownloadURL();
}

function an(){

if($("div.table td:contains('品目')").length<=0){

         var list=document.getElementsByTagName("a");
         for(var i=0; i<list.length; i++){
             var anchors = list[i];
             var anValue = anchors.href;
             var index_xian =  anValue.indexOf("www.xian.cgs.gov.cn/UploadFiles");
             var index =  anValue.indexOf("/UploadFiles");
             var old = anValue.substring(index);
             if (index_xian == -1){
             if(index != -1){
                anchors.href = "//download.ccgp.gov.cn/oss"+old;
                 }
            }
         }
}
   }
//新增对于img的标签加入/cpms
function an2(){
var list=$(".vT_detail_main img").each(function(){
var addd=$(this).attr("src");
if($(this).attr("src").indexOf('ttp')>0){
        $(this).attr("src",addd);
}else{
addd="//download.ccgp.gov.cn"+addd;
$(this).attr("src",addd);}
});
}
/*function an2(){

         var list=document.getElementsByTagName("img");
         for(var i=0; i<list.length; i++){
             var anchors = list[i];
             var anValue = anchors.href;
             var index =  anValue.indexOf("/UploadFiles");
             var old = anValue.substring(index);
             if(index != -1){
                anchors.src = "http://cpms.ccgp.gov.cn"+old;
             }
         }

   }*/
//https://www.ccgp.gov.cn/oss/download?uuid=FABFB621E48FB192F9F7ED4CC546D
function replaceDownloadURL(){
    $("a.bizDownload").each(function(){
        var id = $(this).attr("id");
        if(id && id!="" && id!="null")
            $(this).attr("href", "//download.ccgp.gov.cn/oss/download?uuid="+id);
    });
}



if($("em[rel=bxlx]").length>0){
$("em[rel=bxlx]").each(function(){
    var bidtype = $(this).text();
    if( bidtype == "974"){$(this).text("公开招标")}
    if( bidtype == "975"){$(this).text("询价公告")}
    if( bidtype == "978"){$(this).text("竞争性谈判")}
    if( bidtype == "977"){$(this).text("单一来源")}
    if( bidtype == "979"){$(this).text("资格预审")}
    if( bidtype == "976"){$(this).text("邀请公告")}
    if( bidtype == "982"){$(this).text("中标公告")}
    if( bidtype == "981"){$(this).text("更正公告")}
    if( bidtype == "990"){$(this).text("其他公告")}
    if( bidtype == "984"){$(this).text("其他公告")}
    if( bidtype == "985"){$(this).text("其他公告")}
if( bidtype == "2653"){$(this).text("竞争性磋商")}
if( bidtype == "2655"){$(this).text("成交公告")}
if( bidtype == "2656"){$(this).text("终止公告")}

    if( bidtype == "998"){$(this).text("公开招标")}
    if( bidtype == "997"){$(this).text("询价公告")}
    if( bidtype == "1000"){$(this).text("竞争性谈判")}
    if( bidtype == "999"){$(this).text("单一来源")}
    if( bidtype == "1001"){$(this).text("资格预审")}
    if( bidtype == "996"){$(this).text("邀请公告")}
    if( bidtype == "1004"){$(this).text("中标公告")}
    if( bidtype == "1003"){$(this).text("更正公告")}
    if( bidtype == "1012"){$(this).text("其他公告")}
    if( bidtype == "1006"){$(this).text("其他公告")}
    if( bidtype == "1007"){$(this).text("其他公告")}
if( bidtype == "2654"){$(this).text("竞争性磋商")}
if( bidtype == "2657"){$(this).text("成交公告")}
if( bidtype == "2658"){$(this).text("终止公告")}
});
}

if($(".vF_detail_header h2").length>0){
if($(".vF_detail_header h2").html().indexOf('服务采购之')>0){
    $(".vF_detail_content table").each(function(){
    $(this).css('width', '655px');
});

    $(".vF_detail_content div:first").each(function(){
    $(this).css('width', '655px');
});
}
}
// $(".vF_detail_content table").each(function(){
//     $(this).css('width', '650px');
// });
// $(".vF_detail_content div:first").each(function(){
//     $(this).css('width', '650px');
// });

$(".vF_detail_content img").each(function(){
    //$(this).css('width', '600px');
});
$("#printBtn").click(function(){print();});
$("#printBtn").mouseover(function(){$(this).css("cursor","pointer");});


/*zcfgspeciallistuse*/
if($(".vT_choosearea-section-content-list li:contains('采购中心')").length>0 ||
    $(".vT_choosearea-section-content-list li:contains('财政部')").length>0 ||
    $(".vT_choosearea-section-content-list li:contains('1999年')").length>0){
var linkUrl2=location.href;
var slink2=linkUrl2.split("/");
var channelName2=slink2[5];
$(".vT_choosearea-section-content-list li:contains('政策功能类')").css('clear', 'left');
$(".vT_choosearea-section-content-list li:contains('类')").css('font-weight', 'bolder');
$(".vT_choosearea-section-content-list li:contains('类') a").css('font-weight', 'bolder');
$(".vT_choosearea-section-content-list li:contains('交易系统类')").css('clear', 'left');
$(".vT_choosearea-section-content-list li:contains('采购方式类')").css('clear', 'left');
$(".vT_choosearea-section-content-list li:contains('其他文件类')").css('clear', 'left');
$(".vT_choosearea-section-content-list li:contains('其他文件类')").css('width', '115px');
$(".vT_choosearea-section-content-list li:contains('公共资源')").css('width', '100px');
$(".vT_choosearea-section-content-list li:contains('公共资源')").css('margin-left', '-3px');
$(".vT_choosearea-section-content-list li:contains('会议培训')").css('margin-left', '130px');
$(".vT_choosearea-section-content-list li:contains('政府和社会资本合作')").css("width","170px");
$(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
if(channelName2=="cgztl"){
    $(".vT_choosearea-section-content-list li:contains('采购主体类')").addClass('active');
};
if(channelName2=="cgzx"){
    $(".vT_choosearea-section-content-list li:contains('采购中心')").addClass('active');
};
if(channelName2=="dljg"){
    $(".vT_choosearea-section-content-list li:contains('代理机构')").addClass('active');
};
if(channelName2=="pbzj"){
    $(".vT_choosearea-section-content-list li:contains('评审专家')").addClass('active');
};
if(channelName2=="gys"){
    $(".vT_choosearea-section-content-list li:contains('供应商')").addClass('active');
};
if(channelName2=="zcgnl"){
    $(".vT_choosearea-section-content-list li:contains('政策功能类')").addClass('active');
};
if(channelName2=="jnhb"){
    $(".vT_choosearea-section-content-list li:contains('节能环保')").addClass('active');
};
if(channelName2=="zxqy"){
    $(".vT_choosearea-section-content-list li:contains('中小企业')").addClass('active');
};
if(channelName2=="zcgnlqt"){
    $(".vT_choosearea-section-content-list li:contains('中小企业')").next().addClass('active');
};
if(channelName2=="jyxtl"){
    $(".vT_choosearea-section-content-list li:contains('交易系统类')").addClass('active');
};
if(channelName2=="cgjh"){
    $(".vT_choosearea-section-content-list li:contains('采购计划')").addClass('active');
};
if(channelName2=="xxtj"){
    $(".vT_choosearea-section-content-list li:contains('信息统计')").addClass('active');
};
if(channelName2=="xmcg"){
    $(".vT_choosearea-section-content-list li:contains('项目采购')").addClass('active');
};
if(channelName2=="jyxtlqt"){
    $(".vT_choosearea-section-content-list li:contains('项目采购')").next().addClass('active');
};
if(channelName2=="cgfsl"){
    $(".vT_choosearea-section-content-list li:contains('采购方式类')").addClass('active');
};
if(channelName2=="gkzb"){
    $(".vT_choosearea-section-content-list li:contains('公开招标')").addClass('active');
};
if(channelName2=="jzxtp"){
    $(".vT_choosearea-section-content-list li:contains('竞争性谈判')").addClass('active');
};
if(channelName2=="dyly"){
    $(".vT_choosearea-section-content-list li:contains('单一来源')").addClass('active');
};
if(channelName2=="fzbcg"){
    $(".vT_choosearea-section-content-list li:contains('单一来源')").next().addClass('active');
};
if(channelName2=="cgfslqt"){
    $(".vT_choosearea-section-content-list li:contains('单一来源')").next().next().addClass('active');
};
if(channelName2=="qtwjl"){
    $(".vT_choosearea-section-content-list li:contains('其他文件类')").addClass('active');
};
if(channelName2=="xxgk"){
    $(".vT_choosearea-section-content-list li:contains('信息公开')").addClass('active');
};
if(channelName2=="cgml"){
    $(".vT_choosearea-section-content-list li:contains('采购目录')").addClass('active');
};
if(channelName2=="xxhjs"){
    $(".vT_choosearea-section-content-list li:contains('信息化建设')").addClass('active');
};
if(channelName2=="xzcf"){
    $(".vT_choosearea-section-content-list li:contains('行政处罚')").addClass('active');
};
if(channelName2=="ggzy"){
    $(".vT_choosearea-section-content-list li:contains('公共资源')").addClass('active');
};
if(channelName2=="ppp"){
    $(".vT_choosearea-section-content-list li:contains('政府和社会资本合作')").addClass('active');
};
if(channelName2=="hypx"){
    $(".vT_choosearea-section-content-list li:contains('会议培训')").addClass('active');
};
if(channelName2=="qtlqt"){
    $(".vT_choosearea-section-content-list li:contains('会议培训')").next().addClass('active');
};
if(channelName2=="qgrd"){
    $(".vT_choosearea-section-content-list li:contains('全国人大')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="jczx"){
    $(".vT_choosearea-section-content-list li:contains('集采中心')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="gwy"){
    $(".vT_choosearea-section-content-list li:contains('国务院')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('国务院办公厅')").removeClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="gwybgt"){
    $(".vT_choosearea-section-content-list li:contains('国务院办公厅')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="czb"){
    $(".vT_choosearea-section-content-list li:contains('财政部')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").removeClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="qtbw"){
    $(".vT_choosearea-section-content-list li:contains('其他部委')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="dfczbm"){
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").addClass('active');
    $(".vT_choosearea-section-content-list li:contains('地方财政部门')").css("width","150px");
};
if(channelName2=="2017"){
    $(".vT_choosearea-section-content-list li:contains('2017年')").addClass('active');
};
if(channelName2=="2016"){
    $(".vT_choosearea-section-content-list li:contains('2016年')").addClass('active');
};
if(channelName2=="2015"){
    $(".vT_choosearea-section-content-list li:contains('2015年')").addClass('active');
};
if(channelName2=="2014"){
    $(".vT_choosearea-section-content-list li:contains('2014年')").addClass('active');
};
if(channelName2=="2013"){
    $(".vT_choosearea-section-content-list li:contains('2013年')").addClass('active');
};
if(channelName2=="2012"){
    $(".vT_choosearea-section-content-list li:contains('2012年')").addClass('active');
};
if(channelName2=="2011"){
    $(".vT_choosearea-section-content-list li:contains('2011年')").addClass('active');
};
if(channelName2=="2010"){
    $(".vT_choosearea-section-content-list li:contains('2010年')").addClass('active');
};
if(channelName2=="2009"){
    $(".vT_choosearea-section-content-list li:contains('2009年')").addClass('active');
};
if(channelName2=="2008"){
    $(".vT_choosearea-section-content-list li:contains('2008年')").addClass('active');
};
if(channelName2=="2007"){
    $(".vT_choosearea-section-content-list li:contains('2007年')").addClass('active');
};
if(channelName2=="2006"){
    $(".vT_choosearea-section-content-list li:contains('2006年')").addClass('active');
};
if(channelName2=="2005"){
    $(".vT_choosearea-section-content-list li:contains('2005年')").addClass('active');
};
if(channelName2=="2004"){
    $(".vT_choosearea-section-content-list li:contains('2004年')").addClass('active');
};
if(channelName2=="2003"){
    $(".vT_choosearea-section-content-list li:contains('2003年')").addClass('active');
};
if(channelName2=="2002"){
    $(".vT_choosearea-section-content-list li:contains('2002年')").addClass('active');
};
if(channelName2=="2001"){
    $(".vT_choosearea-section-content-list li:contains('2001年')").addClass('active');
};
if(channelName2=="2000"){
    $(".vT_choosearea-section-content-list li:contains('2000年')").addClass('active');
};
if(channelName2=="1999"){
    $(".vT_choosearea-section-content-list li:contains('1999年')").addClass('active');
}


}
/*zcfgSPECIALlistuse*/

//qrcode
if($("#imgqrshow").length>0){
$("#qrshow").css("cursor","pointer");
$("#imgqrshow").css("cursor","pointer");
$("#btn_print").click(function(){
    window.print();
});
$("#qrshow").mouseover(function(){
    $("#qrcode").show();
});
$("#qrshow").mouseout(function(){
    $("#qrcode").hide();
});
$("#imgqrshow").mouseover(function(){
    $("#qrcode").show();
});
$("#imgqrshow").mouseout(function(){
    $("#qrcode").hide();
});
$("#qrcode").html("");
if(window.location.protocol=="http:"){
        $("#qrcode").qrcode(
        {
        render: "table",
        width: 168,
        height:168,
        correctLevel:2,
        text:location.href
        });
        }
if(location.href.split("/")[3]!='zcfg'||$(".main_right_block").length>0){
var script=document.createElement('script');script.src="//www.ccgp.gov.cn/js/qrcode.min.js";$("head").append(script);if($("#qrcode").length>0){$("#qrcode").html("");new QRCode(document.getElementById("qrcode"),location.href);}
var sbu='<div style="background:#fff;width:75px;height:30px;display:inline;position:absolute">';sbu+='<div style="width:24px;height:22px;display:inline;margin-left:-37px;margin-top:5px;position:absolute;vertical-align: middle; cursor: pointer;" id="imgqrshow2">';sbu+='<svg height="24px" width="22px" fill="#505050" viewBox="0 0 100 100">';sbu+='    <path transform="scale(0.19,0.19) translate(0,0)" d="M0 224h192V32H0v192zM32 64h128v128H32V64zm224-32v192h192V32H256zm160 160H288V64h128v128zM0 480h192V288H0v192zm32-160h128v128H32V320zM64 96h64v64H64V96zm320 64h-64V96h64v64zM64 352h64v64H64v-64zm352-64h32v128H320v-32h-32v96h-32V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"></path></svg><p style="position:absolute;left: 9px;top: -4px;width:80px;">扫码访问</p></div>';sbu+='</div>';$("#imgqrshow").before(sbu)
if($("#imgqrshow2").length>0){$("#imgqrshow2").mouseover(function(){$("#qrcode").show()});$("#imgqrshow2").mouseout(function(){$("#qrcode").hide()})}}else{
var script=document.createElement('script');script.src="//www.ccgp.gov.cn/js/qrcode.min.js";$("head").append(script);$("#qrcode").html("");new QRCode(document.getElementById("qrcode"),location.href);
var sbu='<div style="background:#f9f9f9;width:75px;height:30px;display:inline;position:absolute;margin-top:-4px">';sbu+='<div style="width:24px;height:22px;display:inline;margin-left:0px;margin-top:5px;position:absolute;vertical-align: middle; cursor: pointer;" id="imgqrshow2">';sbu+='<svg height="24px" width="22px" fill="#505050" viewBox="0 0 100 100">';sbu+='    <path transform="scale(0.19,0.19) translate(0,0)" d="M0 224h192V32H0v192zM32 64h128v128H32V64zm224-32v192h192V32H256zm160 160H288V64h128v128zM0 480h192V288H0v192zm32-160h128v128H32V320zM64 96h64v64H64V96zm320 64h-64V96h64v64zM64 352h64v64H64v-64zm352-64h32v128H320v-32h-32v96h-32V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"></path></svg><p style="position:absolute;left:22px;top: 1px;width:80px;">扫码访问</p></div>';sbu+='</div>';$("#imgqrshow").before(sbu)
if($("#imgqrshow2").length>0){$("#imgqrshow2").mouseover(function(){$("#qrcode").show()});$("#imgqrshow2").mouseout(function(){$("#qrcode").hide()})}}
}
//qrcode


});

/*function Zone*/
function trim(str){  //删除左右两端的
    return str.replace(/(^\s*)|(\s*$)/g, "");
   }

function changeSource(){
    var sour = $("#sourceName");
    var sourceName = this.trim(sour.text());
    if(sourceName == "" || sourceName  == null){
             sour.text("中国政府采购网");}
   }


function gosearch(){
    $("#searchForm").attr("method", "get");
    $("#searchForm").attr("action", "//search.ccgp.gov.cn/bxsearch");
    $("#searchForm").append("<input type=hidden name=pinMu value=0 /><input type=hidden name=buyerName /><input type=hidden name=projectId /><input type=hidden name=displayZone /><input type=hidden name=zoneId /><input type=hidden name=agentName />");
    var linkUrl=location.href;
    var slink=linkUrl.split("/");
    if(slink[4]=="dfgg"){
        $("#bidSort").attr("value", "2");
    }
    if(slink[4]=="zygg"){
        $("#bidSort").attr("value", "1");
    }
    if(slink[5]=="gkzb"){
        $("#bidType").attr("value", "1");
    }
    if(slink[5]=="xjgg"){
        $("#bidType").attr("value", "2");
    }
    if(slink[5]=="jzxtpgg"){
        $("#bidType").attr("value", "3");
    }
    if(slink[5]=="dylygg"){
        $("#bidType").attr("value", "4");
    }
    if(slink[5]=="zgysgg"){
        $("#bidType").attr("value", "5");
    }
    if(slink[5]=="yqzbgg"){
        $("#bidType").attr("value", "6");
    }
    if(slink[5]=="zbgg"){
        $("#bidType").attr("value", "7");
    }
    if(slink[5]=="gzgg"){
        $("#bidType").attr("value", "8");
    }
    if(slink[5]=="qtgg"){
        $("#bidType").attr("value", "9");
    }
    if(slink[5]=="jzxcs"){
        $("#bidType").attr("value", "10");
    }
    if(slink[5]=="cjgg"){
        $("#bidType").attr("value", "11");
    }
    if(slink[5]=="fblbgg"){
        $("#bidType").attr("value", "12");
    }
    document.searchForm.submit();
    }

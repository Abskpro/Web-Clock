var a0_0x210b=['click','input','list','createElement','appendChild','createTextNode','add_hr','add_min','add_sec','sec','min','i\x20am\x20running\x20too','time\x20up','getHours','getElementById','hour','innerHTML','minutes','seconds','querySelectorAll','.tab\x20.tabPanel','forEach','backgroundColor','style','color','red','none','display','alarmbeeps.mp3','addEventListener','add\x20is\x20clicked','add_hour','value','add_minute','daynight','log','play','alert','pause','querySelector','#todo'];(function(_0x4a55ef,_0x208232){var _0x551742=function(_0x47130b){while(--_0x47130b){_0x4a55ef['push'](_0x4a55ef['shift']());}};_0x551742(++_0x208232);}(a0_0x210b,0x1d0));var a0_0x4665=function(_0x5c4fb2,_0x4eee9){_0x5c4fb2=_0x5c4fb2-0x0;var _0x159e76=a0_0x210b[_0x5c4fb2];return _0x159e76;};var hours;var mins;var secs;var day;function clock(){var _0x116780=new Date();hours=_0x116780[a0_0x4665('0x0')]();mins=_0x116780['getMinutes']();secs=_0x116780['getSeconds']();day=hours>0xc?'AM':'PM';if(hours<0xa){hours='0'+hours;}if(minutes<0xa){mins='0'+mins;}if(seconds<0xa){secs='0'+secs;}document[a0_0x4665('0x1')](a0_0x4665('0x2'))[a0_0x4665('0x3')]=hours;document[a0_0x4665('0x1')](a0_0x4665('0x4'))['innerHTML']=':'+mins;document[a0_0x4665('0x1')](a0_0x4665('0x5'))[a0_0x4665('0x3')]=':'+secs;day=hours<0xc?'AM':'PM';document[a0_0x4665('0x1')]('ampm')[a0_0x4665('0x3')]=day;}setInterval(clock,0x3e8);var tabButtons=document[a0_0x4665('0x6')]('.tab\x20.buttonContainer\x20button');var tabPanels=document[a0_0x4665('0x6')](a0_0x4665('0x7'));function showPanel(_0x50ec65){tabButtons[a0_0x4665('0x8')](function(_0x5bed7e){_0x5bed7e['getElementsByClassName'][a0_0x4665('0x9')]='';_0x5bed7e[a0_0x4665('0xa')][a0_0x4665('0xb')]='';});tabButtons[_0x50ec65][a0_0x4665('0xa')][a0_0x4665('0xb')]=a0_0x4665('0xc');tabPanels[a0_0x4665('0x8')](function(_0x5dcc8b){_0x5dcc8b[a0_0x4665('0xa')]['display']=a0_0x4665('0xd');});tabPanels[_0x50ec65][a0_0x4665('0xa')][a0_0x4665('0xe')]='block';}showPanel(0x1);var audio=new Audio(a0_0x4665('0xf'));document['querySelector']('#todo')[a0_0x4665('0x10')]('click',alarm);function alarm(){addtodo();console['log'](a0_0x4665('0x11'));var _0x3f7afb=parseInt(document[a0_0x4665('0x1')](a0_0x4665('0x12'))[a0_0x4665('0x13')]);var _0x41e1b2=parseInt(document[a0_0x4665('0x1')](a0_0x4665('0x14'))['value']);var _0xa30d5=document[a0_0x4665('0x1')](a0_0x4665('0x15'))['value'];console[a0_0x4665('0x16')](hours,mins,secs,day,_0x3f7afb,_0x41e1b2,_0xa30d5);var _0x29686a=setInterval(()=>{console[a0_0x4665('0x16')]('heee');if(hours==_0x3f7afb&&mins==_0x41e1b2&&day==_0xa30d5){_0x985986();clearInterval(_0x29686a);}},0x7d0);function _0x985986(){audio[a0_0x4665('0x17')]();var _0x21b66b=window[a0_0x4665('0x18')]('wake\x20up');audio[a0_0x4665('0x19')]();}};document[a0_0x4665('0x1a')](a0_0x4665('0x1b'))[a0_0x4665('0x10')](a0_0x4665('0x1c'),addtodo);function addtodo(){var _0x231bcc=document['getElementById'](a0_0x4665('0x1d'))[a0_0x4665('0x13')];var _0x514fde=document['getElementById'](a0_0x4665('0x1e'));var _0x500abe=document[a0_0x4665('0x1f')]('li');_0x500abe[a0_0x4665('0x20')](document[a0_0x4665('0x21')]('-\x20'+_0x231bcc));_0x514fde[a0_0x4665('0x20')](_0x500abe);document[a0_0x4665('0x1')](a0_0x4665('0x1d'))[a0_0x4665('0x13')]='';}document[a0_0x4665('0x1a')]('.watch')[a0_0x4665('0x10')](a0_0x4665('0x1c'),watch);function watch(){debugger;var _0x504fb2=parseInt(document[a0_0x4665('0x1')](a0_0x4665('0x22'))[a0_0x4665('0x13')]);var _0x33a188=parseInt(document[a0_0x4665('0x1')](a0_0x4665('0x23'))[a0_0x4665('0x13')]);var _0x3e87ce=parseInt(document[a0_0x4665('0x1')](a0_0x4665('0x24'))[a0_0x4665('0x13')]);var _0x2eff6d=setInterval(_0x8002a0,0x3e8);var _0xaac470=setInterval(_0x194986,0x3e8);var _0x1bc82c=new Audio(a0_0x4665('0xf'));var _0x54ee73=document[a0_0x4665('0x1a')]('.reset')[a0_0x4665('0x10')](a0_0x4665('0x1c'),_0x4ecdc1);function _0x8002a0(){if(_0x3e87ce>0x0){var _0x320702=_0x3e87ce-0x1;_0x3e87ce=_0x320702;document[a0_0x4665('0x1')](a0_0x4665('0x25'))[a0_0x4665('0x3')]=_0x320702;document[a0_0x4665('0x1')]('hr')['innerHTML']=_0x504fb2+':';document['getElementById'](a0_0x4665('0x26'))[a0_0x4665('0x3')]=_0x33a188+':';}else if(_0x3e87ce==0x0){while(_0x33a188!=0x0){var _0x18c22d=_0x33a188-0x1;_0x33a188=_0x18c22d;_0x3e87ce=0x3b;document[a0_0x4665('0x1')]('sec')['innerHTML']=_0x3e87ce;document[a0_0x4665('0x1')]('hr')[a0_0x4665('0x3')]=_0x504fb2+':';document[a0_0x4665('0x1')]('min')['innerHTML']=_0x18c22d+':';}}else if(_0x33a188==0x0){while(_0x504fb2!=0x0){var _0x4324c7=_0x504fb2-0x1;_0x33a188=_0x4324c7;document[a0_0x4665('0x1')]('hr')[a0_0x4665('0x3')]=_0x4324c7+':';document[a0_0x4665('0x1')](a0_0x4665('0x26'))['innerHTML']=_0x33a188+':';document[a0_0x4665('0x1')](a0_0x4665('0x25'))[a0_0x4665('0x3')]=_0x3e87ce;}}console['log'](a0_0x4665('0x27'));}function _0x194986(){if(_0x33a188=='0'&&_0x504fb2=='0'&&_0x3e87ce=='0'){clearInterval(_0x2eff6d);clearInterval(_0xaac470);_0x3079fe();clearInterval(_0xf4c3d);}}var _0xf4c3d=setInterval(_0x194986,0x3e8);function _0x4ecdc1(){clearInterval(_0x2eff6d);document[a0_0x4665('0x1')]('hr')[a0_0x4665('0x3')]=0x0+':';document['getElementById'](a0_0x4665('0x26'))[a0_0x4665('0x3')]=0x0+':';document[a0_0x4665('0x1')](a0_0x4665('0x25'))[a0_0x4665('0x3')]=0x0;}function _0x3079fe(){_0x1bc82c[a0_0x4665('0x17')]();var _0x32aed3=window[a0_0x4665('0x18')](a0_0x4665('0x28'));_0x1bc82c['pause']();}}
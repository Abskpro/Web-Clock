var a0_0x2080=['appendChild','.watch','add_hr','add_min','add_sec','sec','min','i\x20am\x20running\x20too','time\x20up','pause','getHours','getMinutes','getSeconds','hour','innerHTML','getElementById','minutes','seconds','ampm','querySelectorAll','forEach','getElementsByClassName','backgroundColor','style','color','red','display','none','alarmbeeps.mp3','#todo','addEventListener','click','add\x20is\x20clicked','add_hour','value','add_minute','daynight','log','heee','play','alert','wake\x20up','querySelector','input','list','createElement'];(function(_0x2b69f0,_0x2a994c){var _0x1c0c21=function(_0x158f1c){while(--_0x158f1c){_0x2b69f0['push'](_0x2b69f0['shift']());}};_0x1c0c21(++_0x2a994c);}(a0_0x2080,0x1d6));var a0_0x55da=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a0_0x2080[_0x2d8f05];return _0x4d74cb;};var hours;var mins;var secs;var day;function clock(){var _0x4027fd=new Date();hours=_0x4027fd[a0_0x55da('0x0')]();mins=_0x4027fd[a0_0x55da('0x1')]();secs=_0x4027fd[a0_0x55da('0x2')]();day=hours>0xc?'AM':'PM';if(hours<0xa){hours='0'+hours;}if(minutes<0xa){mins='0'+mins;}if(seconds<0xa){secs='0'+secs;}document['getElementById'](a0_0x55da('0x3'))[a0_0x55da('0x4')]=hours;document[a0_0x55da('0x5')](a0_0x55da('0x6'))['innerHTML']=':'+mins;document[a0_0x55da('0x5')](a0_0x55da('0x7'))[a0_0x55da('0x4')]=':'+secs;day=hours<0xc?'AM':'PM';document[a0_0x55da('0x5')](a0_0x55da('0x8'))[a0_0x55da('0x4')]=day;}setInterval(clock,0x3e8);var tabButtons=document[a0_0x55da('0x9')]('.tab\x20.buttonContainer\x20button');var tabPanels=document['querySelectorAll']('.tab\x20.tabPanel');function showPanel(_0x4c3d3f){tabButtons[a0_0x55da('0xa')](function(_0x1c4c9c){_0x1c4c9c[a0_0x55da('0xb')][a0_0x55da('0xc')]='';_0x1c4c9c[a0_0x55da('0xd')]['color']='';});tabButtons[_0x4c3d3f]['style'][a0_0x55da('0xe')]=a0_0x55da('0xf');tabPanels[a0_0x55da('0xa')](function(_0xf2d921){_0xf2d921[a0_0x55da('0xd')][a0_0x55da('0x10')]=a0_0x55da('0x11');});tabPanels[_0x4c3d3f][a0_0x55da('0xd')][a0_0x55da('0x10')]='block';}showPanel(0x1);var audio=new Audio(a0_0x55da('0x12'));document['querySelector'](a0_0x55da('0x13'))[a0_0x55da('0x14')](a0_0x55da('0x15'),alarm);function alarm(){addtodo();console['log'](a0_0x55da('0x16'));var _0x40e02a=parseInt(document[a0_0x55da('0x5')](a0_0x55da('0x17'))[a0_0x55da('0x18')]);var _0x1fc39c=parseInt(document[a0_0x55da('0x5')](a0_0x55da('0x19'))[a0_0x55da('0x18')]);var _0x3ff70e=document[a0_0x55da('0x5')](a0_0x55da('0x1a'))[a0_0x55da('0x18')];console[a0_0x55da('0x1b')](hours,mins,secs,day,_0x40e02a,_0x1fc39c,_0x3ff70e);var _0x525108=setInterval(()=>{console[a0_0x55da('0x1b')](a0_0x55da('0x1c'));if(hours==_0x40e02a&&mins==_0x1fc39c&&day==_0x3ff70e){_0x133b6c();clearInterval(_0x525108);}},0x7d0);function _0x133b6c(){audio[a0_0x55da('0x1d')]();var _0x495f04=window[a0_0x55da('0x1e')](a0_0x55da('0x1f'));audio['pause']();}};document[a0_0x55da('0x20')](a0_0x55da('0x13'))[a0_0x55da('0x14')](a0_0x55da('0x15'),addtodo);function addtodo(){var _0x379a4b=document[a0_0x55da('0x5')](a0_0x55da('0x21'))[a0_0x55da('0x18')];var _0x1783ec=document[a0_0x55da('0x5')](a0_0x55da('0x22'));var _0x55080e=document[a0_0x55da('0x23')]('li');_0x55080e[a0_0x55da('0x24')](document['createTextNode']('-\x20'+_0x379a4b));_0x1783ec[a0_0x55da('0x24')](_0x55080e);document['getElementById'](a0_0x55da('0x21'))[a0_0x55da('0x18')]='';}document['querySelector'](a0_0x55da('0x25'))[a0_0x55da('0x14')](a0_0x55da('0x15'),watch);function watch(){debugger;var _0x26cd98=parseInt(document[a0_0x55da('0x5')](a0_0x55da('0x26'))[a0_0x55da('0x18')]);var _0x307ce3=parseInt(document[a0_0x55da('0x5')](a0_0x55da('0x27'))['value']);var _0x4bb7ab=parseInt(document[a0_0x55da('0x5')](a0_0x55da('0x28'))['value']);var _0x5f0818=setInterval(_0x3f1f43,0x3e8);var _0x11d145=setInterval(_0x54ba55,0x3e8);var _0x1b2eb4=new Audio(a0_0x55da('0x12'));var _0x3c7800=document[a0_0x55da('0x20')]('.reset')['addEventListener']('click',_0x242000);function _0x3f1f43(){if(_0x4bb7ab>0x0){var _0x33dfd7=_0x4bb7ab-0x1;_0x4bb7ab=_0x33dfd7;document[a0_0x55da('0x5')](a0_0x55da('0x29'))[a0_0x55da('0x4')]=_0x33dfd7;document[a0_0x55da('0x5')]('hr')[a0_0x55da('0x4')]=_0x26cd98+':';document[a0_0x55da('0x5')](a0_0x55da('0x2a'))['innerHTML']=_0x307ce3+':';}else if(_0x4bb7ab==0x0){while(_0x307ce3!=0x0){var _0x653610=_0x307ce3-0x1;_0x307ce3=_0x653610;_0x4bb7ab=0x3b;document['getElementById'](a0_0x55da('0x29'))[a0_0x55da('0x4')]=_0x4bb7ab;document[a0_0x55da('0x5')]('hr')[a0_0x55da('0x4')]=_0x26cd98+':';document[a0_0x55da('0x5')](a0_0x55da('0x2a'))['innerHTML']=_0x653610+':';}}else if(_0x307ce3==0x0){while(_0x26cd98!=0x0){var _0x4415be=_0x26cd98-0x1;_0x307ce3=_0x4415be;document[a0_0x55da('0x5')]('hr')[a0_0x55da('0x4')]=_0x4415be+':';document[a0_0x55da('0x5')]('min')[a0_0x55da('0x4')]=_0x307ce3+':';document[a0_0x55da('0x5')](a0_0x55da('0x29'))['innerHTML']=_0x4bb7ab;}}console[a0_0x55da('0x1b')](a0_0x55da('0x2b'));}function _0x54ba55(){if(_0x307ce3=='0'&&_0x26cd98=='0'&&_0x4bb7ab=='0'){clearInterval(_0x5f0818);clearInterval(_0x11d145);_0x18c256();clearInterval(_0x29b60b);}}var _0x29b60b=setInterval(_0x54ba55,0x3e8);function _0x242000(){clearInterval(_0x5f0818);document[a0_0x55da('0x5')]('hr')[a0_0x55da('0x4')]=0x0+':';document[a0_0x55da('0x5')](a0_0x55da('0x2a'))[a0_0x55da('0x4')]=0x0+':';document[a0_0x55da('0x5')](a0_0x55da('0x29'))[a0_0x55da('0x4')]=0x0;}function _0x18c256(){_0x1b2eb4[a0_0x55da('0x1d')]();var _0x53eaaa=window[a0_0x55da('0x1e')](a0_0x55da('0x2c'));_0x1b2eb4[a0_0x55da('0x2d')]();}}
const _0x595c=['0.00','getElementById','innerHTML','resetButton','click','startStopButton','toFixed','timeParagraph','addEventListener'];(function(_0x5181f3,_0x595c8e){const _0x447df4=function(_0x40f1e3){while(--_0x40f1e3){_0x5181f3['push'](_0x5181f3['shift']());}};_0x447df4(++_0x595c8e);}(_0x595c,0x1ba));const _0x447d=function(_0x5181f3,_0x595c8e){_0x5181f3=_0x5181f3-0x0;let _0x447df4=_0x595c[_0x5181f3];return _0x447df4;};let timeParagraph=document[_0x447d('0x0')](_0x447d('0x6'));let startStopButton=document['getElementById'](_0x447d('0x4'));let resetButton=document[_0x447d('0x0')](_0x447d('0x2'));let running=![];let time=0x0;let intervalId;startStopButton[_0x447d('0x7')]('click',startStop);resetButton[_0x447d('0x7')](_0x447d('0x3'),reset);function startStop(){if(running==![]){intervalId=setInterval(run,0xa);running=!![];}else{clearInterval(intervalId);running=![];}}function reset(){clearInterval(intervalId);running=![];time=0x0;timeParagraph[_0x447d('0x1')]=_0x447d('0x8');}function run(){time=time+0x1;timeParagraph[_0x447d('0x1')]=(time/0x64)[_0x447d('0x5')](0x2);}
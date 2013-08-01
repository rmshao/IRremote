/* Test for LG MKJ40653802 TV Remote */

/* IR Data from: http://lirc.sourceforge.net/remotes/lg/MKJ40653802 */

var IR = require("./build/Release/IRremote.node");

var IRsend = new IR.IRsend();

/*9061,4473*/
/*590*/

var powerOn = [9061,4473, // Header
    		591,521,  // 0 - Pre-Data
		591,521,  // 0
		591,1660, // 1
		591,521,  // 0
		591,521,  // 0
		591,521,  // 0
		591,521,  // 0
		591,521,  // 0
		591,1660, // 1
		591,1660, // 1
		591,521,  // 0
		591,1660, // 1
		591,1660, // 1
		591,1660, // 1
		591,1660, // 1
		591,1660, // 1
		591,521,  // 0 - Data
		591,521,  // 0
		591,521,  // 0
		591,1660, // 1
		591,521,  // 0
		591,521,  // 0
		591,521,  // 0
		591,521,  // 0
		591,1660, // 1
		591,1660, // 1
		591,1660, // 1
		591,521,  // 0
		591,1660, // 1
		591,1660, // 1
		591,1660, // 1
		591,1660, // 1
		591,1660];     // pTrail

setInterval(test,100);


function test()
{
	IRsend.sendRaw(powerOn, 69, 38, IR.SEND_PIN_2, function() {
                console.log("Test Callback");
                });
}

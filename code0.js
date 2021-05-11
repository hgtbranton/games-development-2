gdjs.MenuCode = {};
gdjs.MenuCode.GDexitportalObjects1_1final = [];

gdjs.MenuCode.GDoptionportalObjects1_1final = [];

gdjs.MenuCode.GDplayerObjects1_1final = [];

gdjs.MenuCode.GDplayportalObjects1_1final = [];

gdjs.MenuCode.GDplayerObjects1= [];
gdjs.MenuCode.GDplayerObjects2= [];
gdjs.MenuCode.GDplayerObjects3= [];
gdjs.MenuCode.GDdungeonBackgroundObjects1= [];
gdjs.MenuCode.GDdungeonBackgroundObjects2= [];
gdjs.MenuCode.GDdungeonBackgroundObjects3= [];
gdjs.MenuCode.GDtitletextObjects1= [];
gdjs.MenuCode.GDtitletextObjects2= [];
gdjs.MenuCode.GDtitletextObjects3= [];
gdjs.MenuCode.GDheadingtextObjects1= [];
gdjs.MenuCode.GDheadingtextObjects2= [];
gdjs.MenuCode.GDheadingtextObjects3= [];
gdjs.MenuCode.GDoptionportalObjects1= [];
gdjs.MenuCode.GDoptionportalObjects2= [];
gdjs.MenuCode.GDoptionportalObjects3= [];
gdjs.MenuCode.GDplayportalObjects1= [];
gdjs.MenuCode.GDplayportalObjects2= [];
gdjs.MenuCode.GDplayportalObjects3= [];
gdjs.MenuCode.GDexitportalObjects1= [];
gdjs.MenuCode.GDexitportalObjects2= [];
gdjs.MenuCode.GDexitportalObjects3= [];
gdjs.MenuCode.GDoptionstextObjects1= [];
gdjs.MenuCode.GDoptionstextObjects2= [];
gdjs.MenuCode.GDoptionstextObjects3= [];
gdjs.MenuCode.GDplaytextObjects1= [];
gdjs.MenuCode.GDplaytextObjects2= [];
gdjs.MenuCode.GDplaytextObjects3= [];
gdjs.MenuCode.GDexittextObjects1= [];
gdjs.MenuCode.GDexittextObjects2= [];
gdjs.MenuCode.GDexittextObjects3= [];
gdjs.MenuCode.GDarenawallObjects1= [];
gdjs.MenuCode.GDarenawallObjects2= [];
gdjs.MenuCode.GDarenawallObjects3= [];
gdjs.MenuCode.GDcountdownObjects1= [];
gdjs.MenuCode.GDcountdownObjects2= [];
gdjs.MenuCode.GDcountdownObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDarenawallObjects1Objects = Hashtable.newFrom({"arenawall": gdjs.MenuCode.GDarenawallObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDoptionportalObjects2Objects = Hashtable.newFrom({"optionportal": gdjs.MenuCode.GDoptionportalObjects2});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDplayerObjects2 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("buttonbuffer")) == 1;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDplayerObjects2[i].timerElapsedTime("buttontimer", 3) ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDplayerObjects2[k] = gdjs.MenuCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDplayerObjects2.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayportalObjects2Objects = Hashtable.newFrom({"playportal": gdjs.MenuCode.GDplayportalObjects2});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDplayerObjects2 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDplayerObjects2[i].timerElapsedTime("buttontimer", 3) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDplayerObjects2[k] = gdjs.MenuCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDplayerObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("buttonbuffer")) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitportalObjects2Objects = Hashtable.newFrom({"exitportal": gdjs.MenuCode.GDexitportalObjects2});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDplayerObjects2 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDplayerObjects2[i].timerElapsedTime("buttontimer", 3) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDplayerObjects2[k] = gdjs.MenuCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDplayerObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("buttonbuffer")) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayportalObjects2Objects = Hashtable.newFrom({"playportal": gdjs.MenuCode.GDplayportalObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDoptionportalObjects2Objects = Hashtable.newFrom({"optionportal": gdjs.MenuCode.GDoptionportalObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitportalObjects2Objects = Hashtable.newFrom({"exitportal": gdjs.MenuCode.GDexitportalObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayportalObjects2Objects = Hashtable.newFrom({"playportal": gdjs.MenuCode.GDplayportalObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDoptionportalObjects2Objects = Hashtable.newFrom({"optionportal": gdjs.MenuCode.GDoptionportalObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MenuCode.GDplayerObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitportalObjects2Objects = Hashtable.newFrom({"exitportal": gdjs.MenuCode.GDexitportalObjects2});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("buttonbuffer")) == 1;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11018780);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplayerObjects2[i].resetTimer("buttontimer");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("optionportal"), gdjs.MenuCode.GDoptionportalObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDoptionportalObjects2Objects, false, runtimeScene, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("buttonbuffer").setNumber(1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("playportal"), gdjs.MenuCode.GDplayportalObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayportalObjects2Objects, false, runtimeScene, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("buttonbuffer").setNumber(1);
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exitportal"), gdjs.MenuCode.GDexitportalObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitportalObjects2Objects, false, runtimeScene, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("buttonbuffer").setNumber(1);
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("exitportal"), gdjs.MenuCode.GDexitportalObjects2);
gdjs.copyArray(runtimeScene.getObjects("optionportal"), gdjs.MenuCode.GDoptionportalObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("playportal"), gdjs.MenuCode.GDplayportalObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
gdjs.MenuCode.condition2IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayportalObjects2Objects, true, runtimeScene, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDoptionportalObjects2Objects, true, runtimeScene, false);
}if ( gdjs.MenuCode.condition1IsTrue_1.val ) {
{
gdjs.MenuCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitportalObjects2Objects, true, runtimeScene, false);
}}
}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val && gdjs.MenuCode.condition2IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.MenuCode.GDcountdownObjects2);
/* Reuse gdjs.MenuCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDcountdownObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcountdownObjects2[i].hide();
}
}{runtimeScene.getVariables().get("buttonbuffer").setNumber(0);
}{for(var i = 0, len = gdjs.MenuCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplayerObjects2[i].resetTimer("buttontimer");
}
}}

}


{

gdjs.MenuCode.GDexitportalObjects1.length = 0;

gdjs.MenuCode.GDoptionportalObjects1.length = 0;

gdjs.MenuCode.GDplayerObjects1.length = 0;

gdjs.MenuCode.GDplayportalObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDexitportalObjects1_1final.length = 0;gdjs.MenuCode.GDoptionportalObjects1_1final.length = 0;gdjs.MenuCode.GDplayerObjects1_1final.length = 0;gdjs.MenuCode.GDplayportalObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
gdjs.MenuCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("playportal"), gdjs.MenuCode.GDplayportalObjects2);
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayportalObjects2Objects, false, runtimeScene, false);
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDplayerObjects1_1final.indexOf(gdjs.MenuCode.GDplayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDplayerObjects1_1final.push(gdjs.MenuCode.GDplayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.MenuCode.GDplayportalObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDplayportalObjects1_1final.indexOf(gdjs.MenuCode.GDplayportalObjects2[j]) === -1 )
            gdjs.MenuCode.GDplayportalObjects1_1final.push(gdjs.MenuCode.GDplayportalObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("optionportal"), gdjs.MenuCode.GDoptionportalObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDoptionportalObjects2Objects, false, runtimeScene, false);
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDoptionportalObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDoptionportalObjects1_1final.indexOf(gdjs.MenuCode.GDoptionportalObjects2[j]) === -1 )
            gdjs.MenuCode.GDoptionportalObjects1_1final.push(gdjs.MenuCode.GDoptionportalObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.MenuCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDplayerObjects1_1final.indexOf(gdjs.MenuCode.GDplayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDplayerObjects1_1final.push(gdjs.MenuCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("exitportal"), gdjs.MenuCode.GDexitportalObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects2);
gdjs.MenuCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects2Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitportalObjects2Objects, false, runtimeScene, false);
if( gdjs.MenuCode.condition2IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDexitportalObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDexitportalObjects1_1final.indexOf(gdjs.MenuCode.GDexitportalObjects2[j]) === -1 )
            gdjs.MenuCode.GDexitportalObjects1_1final.push(gdjs.MenuCode.GDexitportalObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.MenuCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDplayerObjects1_1final.indexOf(gdjs.MenuCode.GDplayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDplayerObjects1_1final.push(gdjs.MenuCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDexitportalObjects1_1final, gdjs.MenuCode.GDexitportalObjects1);
gdjs.copyArray(gdjs.MenuCode.GDoptionportalObjects1_1final, gdjs.MenuCode.GDoptionportalObjects1);
gdjs.copyArray(gdjs.MenuCode.GDplayerObjects1_1final, gdjs.MenuCode.GDplayerObjects1);
gdjs.copyArray(gdjs.MenuCode.GDplayportalObjects1_1final, gdjs.MenuCode.GDplayportalObjects1);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.MenuCode.GDcountdownObjects1);
/* Reuse gdjs.MenuCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcountdownObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcountdownObjects1[i].setString(":" + gdjs.evtTools.common.toString(3 - Math.round((( gdjs.MenuCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDplayerObjects1[0].getTimerElapsedTimeInSeconds("buttontimer")))));
}
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("arenawall"), gdjs.MenuCode.GDarenawallObjects1);
gdjs.copyArray(runtimeScene.getObjects("countdown"), gdjs.MenuCode.GDcountdownObjects1);
gdjs.copyArray(runtimeScene.getObjects("headingtext"), gdjs.MenuCode.GDheadingtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("titletext"), gdjs.MenuCode.GDtitletextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDheadingtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDheadingtextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MenuCode.GDheadingtextObjects1[i].getWidth()) / 2,100);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitletextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitletextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MenuCode.GDtitletextObjects1[i].getWidth()) / 2,30);
}
}{for(var i = 0, len = gdjs.MenuCode.GDcountdownObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcountdownObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MenuCode.GDcountdownObjects1[i].getWidth()) / 2,180);
}
}{for(var i = 0, len = gdjs.MenuCode.GDarenawallObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDarenawallObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("arenawall"), gdjs.MenuCode.GDarenawallObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MenuCode.GDplayerObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDarenawallObjects1Objects, false, runtimeScene, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDplayerObjects1.length = 0;
gdjs.MenuCode.GDplayerObjects2.length = 0;
gdjs.MenuCode.GDplayerObjects3.length = 0;
gdjs.MenuCode.GDdungeonBackgroundObjects1.length = 0;
gdjs.MenuCode.GDdungeonBackgroundObjects2.length = 0;
gdjs.MenuCode.GDdungeonBackgroundObjects3.length = 0;
gdjs.MenuCode.GDtitletextObjects1.length = 0;
gdjs.MenuCode.GDtitletextObjects2.length = 0;
gdjs.MenuCode.GDtitletextObjects3.length = 0;
gdjs.MenuCode.GDheadingtextObjects1.length = 0;
gdjs.MenuCode.GDheadingtextObjects2.length = 0;
gdjs.MenuCode.GDheadingtextObjects3.length = 0;
gdjs.MenuCode.GDoptionportalObjects1.length = 0;
gdjs.MenuCode.GDoptionportalObjects2.length = 0;
gdjs.MenuCode.GDoptionportalObjects3.length = 0;
gdjs.MenuCode.GDplayportalObjects1.length = 0;
gdjs.MenuCode.GDplayportalObjects2.length = 0;
gdjs.MenuCode.GDplayportalObjects3.length = 0;
gdjs.MenuCode.GDexitportalObjects1.length = 0;
gdjs.MenuCode.GDexitportalObjects2.length = 0;
gdjs.MenuCode.GDexitportalObjects3.length = 0;
gdjs.MenuCode.GDoptionstextObjects1.length = 0;
gdjs.MenuCode.GDoptionstextObjects2.length = 0;
gdjs.MenuCode.GDoptionstextObjects3.length = 0;
gdjs.MenuCode.GDplaytextObjects1.length = 0;
gdjs.MenuCode.GDplaytextObjects2.length = 0;
gdjs.MenuCode.GDplaytextObjects3.length = 0;
gdjs.MenuCode.GDexittextObjects1.length = 0;
gdjs.MenuCode.GDexittextObjects2.length = 0;
gdjs.MenuCode.GDexittextObjects3.length = 0;
gdjs.MenuCode.GDarenawallObjects1.length = 0;
gdjs.MenuCode.GDarenawallObjects2.length = 0;
gdjs.MenuCode.GDarenawallObjects3.length = 0;
gdjs.MenuCode.GDcountdownObjects1.length = 0;
gdjs.MenuCode.GDcountdownObjects2.length = 0;
gdjs.MenuCode.GDcountdownObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

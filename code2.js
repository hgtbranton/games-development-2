gdjs.OptionsCode = {};
gdjs.OptionsCode.GDplayerObjects1= [];
gdjs.OptionsCode.GDplayerObjects2= [];
gdjs.OptionsCode.GDplayerObjects3= [];
gdjs.OptionsCode.GDdungeonBackgroundObjects1= [];
gdjs.OptionsCode.GDdungeonBackgroundObjects2= [];
gdjs.OptionsCode.GDdungeonBackgroundObjects3= [];
gdjs.OptionsCode.GDportalObjects1= [];
gdjs.OptionsCode.GDportalObjects2= [];
gdjs.OptionsCode.GDportalObjects3= [];
gdjs.OptionsCode.GDbutton3Objects1= [];
gdjs.OptionsCode.GDbutton3Objects2= [];
gdjs.OptionsCode.GDbutton3Objects3= [];
gdjs.OptionsCode.GDbutton2Objects1= [];
gdjs.OptionsCode.GDbutton2Objects2= [];
gdjs.OptionsCode.GDbutton2Objects3= [];
gdjs.OptionsCode.GDtitletextObjects1= [];
gdjs.OptionsCode.GDtitletextObjects2= [];
gdjs.OptionsCode.GDtitletextObjects3= [];
gdjs.OptionsCode.GDheadingtextObjects1= [];
gdjs.OptionsCode.GDheadingtextObjects2= [];
gdjs.OptionsCode.GDheadingtextObjects3= [];
gdjs.OptionsCode.GDdifficultyTextObjects1= [];
gdjs.OptionsCode.GDdifficultyTextObjects2= [];
gdjs.OptionsCode.GDdifficultyTextObjects3= [];
gdjs.OptionsCode.GDsoundTextObjects1= [];
gdjs.OptionsCode.GDsoundTextObjects2= [];
gdjs.OptionsCode.GDsoundTextObjects3= [];
gdjs.OptionsCode.GDexittextObjects1= [];
gdjs.OptionsCode.GDexittextObjects2= [];
gdjs.OptionsCode.GDexittextObjects3= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.condition3IsTrue_0 = {val:false};
gdjs.OptionsCode.condition4IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};
gdjs.OptionsCode.condition3IsTrue_1 = {val:false};
gdjs.OptionsCode.condition4IsTrue_1 = {val:false};


gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.OptionsCode.GDplayerObjects2});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDbutton3Objects2Objects = Hashtable.newFrom({"button3": gdjs.OptionsCode.GDbutton3Objects2});gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 4;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDbutton3Objects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.OptionsCode.GDbutton3Objects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDbutton3Objects2[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buffer");
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.OptionsCode.GDplayerObjects2});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDbutton2Objects2Objects = Hashtable.newFrom({"button2": gdjs.OptionsCode.GDbutton2Objects2});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.OptionsCode.GDplayerObjects1});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.OptionsCode.GDbutton2Objects1});gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("button3"), gdjs.OptionsCode.GDbutton3Objects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.OptionsCode.GDplayerObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
gdjs.OptionsCode.condition2IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects2Objects, gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDbutton3Objects2Objects, false, runtimeScene, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "buffer");
}if ( gdjs.OptionsCode.condition1IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition2IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11274148);
}
}}
}
if (gdjs.OptionsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDbutton3Objects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDbutton3Objects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDbutton3Objects2[i].setAnimation(gdjs.OptionsCode.GDbutton3Objects2[i].getAnimation() + (1));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buffer");
}
{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("button2"), gdjs.OptionsCode.GDbutton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.OptionsCode.GDplayerObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
gdjs.OptionsCode.condition2IsTrue_0.val = false;
gdjs.OptionsCode.condition3IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects2Objects, gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDbutton2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "buffer");
}if ( gdjs.OptionsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDbutton2Objects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDbutton2Objects2[i].getAnimation() == 1 ) {
        gdjs.OptionsCode.condition2IsTrue_0.val = true;
        gdjs.OptionsCode.GDbutton2Objects2[k] = gdjs.OptionsCode.GDbutton2Objects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDbutton2Objects2.length = k;}if ( gdjs.OptionsCode.condition2IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition3IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11277500);
}
}}
}
}
if (gdjs.OptionsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDbutton2Objects2 */
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}{for(var i = 0, len = gdjs.OptionsCode.GDbutton2Objects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDbutton2Objects2[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buffer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button2"), gdjs.OptionsCode.GDbutton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.OptionsCode.GDplayerObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
gdjs.OptionsCode.condition2IsTrue_0.val = false;
gdjs.OptionsCode.condition3IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects1Objects, gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDbutton2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "buffer");
}if ( gdjs.OptionsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDbutton2Objects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDbutton2Objects1[i].getAnimation() == 0 ) {
        gdjs.OptionsCode.condition2IsTrue_0.val = true;
        gdjs.OptionsCode.GDbutton2Objects1[k] = gdjs.OptionsCode.GDbutton2Objects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDbutton2Objects1.length = k;}if ( gdjs.OptionsCode.condition2IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition3IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11279148);
}
}}
}
}
if (gdjs.OptionsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDbutton2Objects1 */
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}{for(var i = 0, len = gdjs.OptionsCode.GDbutton2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDbutton2Objects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buffer");
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.OptionsCode.GDplayerObjects1});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDportalObjects1Objects = Hashtable.newFrom({"portal": gdjs.OptionsCode.GDportalObjects1});gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("headingtext"), gdjs.OptionsCode.GDheadingtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("titletext"), gdjs.OptionsCode.GDtitletextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buffer");
}{for(var i = 0, len = gdjs.OptionsCode.GDtitletextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDtitletextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.OptionsCode.GDtitletextObjects1[i].getWidth()) / 2,30);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDheadingtextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDheadingtextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.OptionsCode.GDheadingtextObjects1[i].getWidth()) / 2,100);
}
}}

}


{


gdjs.OptionsCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.OptionsCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.OptionsCode.GDportalObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDplayerObjects1Objects, gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDportalObjects1Objects, false, runtimeScene, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDplayerObjects1.length = 0;
gdjs.OptionsCode.GDplayerObjects2.length = 0;
gdjs.OptionsCode.GDplayerObjects3.length = 0;
gdjs.OptionsCode.GDdungeonBackgroundObjects1.length = 0;
gdjs.OptionsCode.GDdungeonBackgroundObjects2.length = 0;
gdjs.OptionsCode.GDdungeonBackgroundObjects3.length = 0;
gdjs.OptionsCode.GDportalObjects1.length = 0;
gdjs.OptionsCode.GDportalObjects2.length = 0;
gdjs.OptionsCode.GDportalObjects3.length = 0;
gdjs.OptionsCode.GDbutton3Objects1.length = 0;
gdjs.OptionsCode.GDbutton3Objects2.length = 0;
gdjs.OptionsCode.GDbutton3Objects3.length = 0;
gdjs.OptionsCode.GDbutton2Objects1.length = 0;
gdjs.OptionsCode.GDbutton2Objects2.length = 0;
gdjs.OptionsCode.GDbutton2Objects3.length = 0;
gdjs.OptionsCode.GDtitletextObjects1.length = 0;
gdjs.OptionsCode.GDtitletextObjects2.length = 0;
gdjs.OptionsCode.GDtitletextObjects3.length = 0;
gdjs.OptionsCode.GDheadingtextObjects1.length = 0;
gdjs.OptionsCode.GDheadingtextObjects2.length = 0;
gdjs.OptionsCode.GDheadingtextObjects3.length = 0;
gdjs.OptionsCode.GDdifficultyTextObjects1.length = 0;
gdjs.OptionsCode.GDdifficultyTextObjects2.length = 0;
gdjs.OptionsCode.GDdifficultyTextObjects3.length = 0;
gdjs.OptionsCode.GDsoundTextObjects1.length = 0;
gdjs.OptionsCode.GDsoundTextObjects2.length = 0;
gdjs.OptionsCode.GDsoundTextObjects3.length = 0;
gdjs.OptionsCode.GDexittextObjects1.length = 0;
gdjs.OptionsCode.GDexittextObjects2.length = 0;
gdjs.OptionsCode.GDexittextObjects3.length = 0;

gdjs.OptionsCode.eventsList2(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;

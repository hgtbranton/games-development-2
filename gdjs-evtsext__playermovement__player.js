
gdjs.evtsExt__playerMovement__player = gdjs.evtsExt__playerMovement__player || {};

/**
 * Behavior generated from playerMovement
 */
gdjs.evtsExt__playerMovement__player.player = class player extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;

    return true;
  }

  // Properties:
  
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("1") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
}

// Methods:
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition5IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition6IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition7IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition8IsTrue_0 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition4IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition5IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition6IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition7IsTrue_1 = {val:false};
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition8IsTrue_1 = {val:false};


gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAnimation() != 1 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1.val = false;
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1.val ) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1.val ) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition4IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition5IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition6IsTrue_1.val = true;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition7IsTrue_1.val = true;
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition3IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition4IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition4IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition5IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition5IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition6IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition6IsTrue_1.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition7IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
}
}
}
}
}
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1.val = !gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition7IsTrue_1.val;
}
}if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() > 0 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("forcemove")) == 0 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].addPolarForce(270, 200 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("speed"))), 0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > 0 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("forcemove")) == 0 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].addPolarForce(180, 200 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("speed"))), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() < gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getHeight()) ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("forcemove")) == 0 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].addPolarForce(90, 200 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("speed"))), 0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getWidth()) ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("forcemove")) == 0 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].addPolarForce(0, 200 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("speed"))), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAnimation() == 2 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().get("sound"), true);
}if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(11306612);
}
}}
}
if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "steps.ogg", 1, true, 15, 1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAnimation() != 2 ) {
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__playerMovement__player.player.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("playerMovement::player", gdjs.evtsExt__playerMovement__player.player);

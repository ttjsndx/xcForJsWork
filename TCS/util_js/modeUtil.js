/*
 * 全局变量,记录各种数据
 */

var mapModeJson = {}; //地图类型数据
var snakeModeJson = {}; //贪吃蛇的各项数据
var foodModeJson ={}; //食物的各项数据
var recordModeJson = {};  //游戏的时间，时长，得分，当前使用人等信息

/*
 *	各类默认值
 */
var timeSwith = true;  //时间开关:默认开

mapModeJson.WINDOW_WIDTH_PERCENT = 0.8 ; //地图所占屏幕总宽度的 0.8
mapModeJson.WINDOW_HEIGHT_PERCENT = 0.8 ; //地图所占屏幕总高度 0.8

mapModeJson.MAP_FRAME_WIDTH = 10; //边框默认为10px

mapModeJson.MAP_TYPE = "MAP_FRAME_CSS_MAIN"; //主窗口默认的风格
mapModeJson.MAP_FRAME_TYPE = "MAP_FRAME_CSS_WOOD"; //边框默认的风格
mapModeJson.WINDOW_FILL_TYPE = "WINDOW_FILL_CSS_SKY"; //除去主要窗口，边框，剩余填充部分的风格
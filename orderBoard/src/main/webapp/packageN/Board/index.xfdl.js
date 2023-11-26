(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("index");
            this.set_titletext("인덱스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_userSaveCount", this);
            obj._setContents("<ColumnInfo><Column id=\"count\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta03","163","18","127","62",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","11","13","139","87",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("어드민");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("azure");
            obj.set_textAlign("center");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","11","120","139","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시글 관리 이동");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","10","213","139","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("댓글 관리 이동");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","251","30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta01");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","170","30","81","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("오늘 가입자");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","sta01","text","ds_userSaveCount","count");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("index.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var oArg = {}; //팝업을 열 때 부모창에서 가져갈 데이터가 있으면 데이터 세팅

        	var oOption = {}; // 기본값 가운데 정렬

        	var sPopupCallBack = "fnPopupCallback"; // 팝업 닫았을때 후처리 콜백

        	this.gfnOpenPopup( "popup", "Board::OB_001.xfdl",oArg,sPopupCallBack,oOption);
        };




        this.index_onload = function(obj,e)
        {



         	var strSvcId = "selectSaveUserCount";
         	var strSvcUrl = "selectSaveUserCount.do";
         	var inData = "";
         	var outData = "ds_userSaveCount=ds_userSaveCount";
         	var strArg = "";
         	var callBackFnc = "fnCallback";

         	this.gfnTransaction(
         	strSvcId,
         	strSvcUrl,
         	inData,
         	outData,
         	strArg,
         	callBackFnc
         	);

        };

        this.btn01_onclick = function(obj,e)
        {
        	var oArg = {};

        	var oOption = {};

        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup( "popup", "Board::OB_002.xfdl",oArg,sPopupCallBack,oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.index_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
        };
        this.loadIncludeScript("index.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

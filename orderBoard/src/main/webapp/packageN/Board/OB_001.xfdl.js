(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"nickname\" type=\"STRING\" size=\"256\"/><Column id=\"created\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_del", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","155","5","310","79",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","6","6","124","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시글 관리");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_background("khaki");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectCommunity","320","20","125","51",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delCommunity","570","20","122","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_communityStat","170","20","132","51",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var cbo_communityStat_innerdataset = new nexacro.NormalDataset("cbo_communityStat_innerdataset", obj);
            cbo_communityStat_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">최신순</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">신고순</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(cbo_communityStat_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_communityList","6","110","946","479",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"136\"/><Column size=\"193\"/><Column size=\"225\"/><Column size=\"119\"/><Column size=\"153\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"게시글 번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"닉네임\"/><Cell col=\"4\" text=\"작성일\"/><Cell col=\"5\" text=\"신고 개수\"/></Band><Band id=\"body\"><Cell text=\"bind:id\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:content\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:nickname\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:created\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:count\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","810","20","133","49",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {

        this.OB_001_onload = function(obj,e)
        {

        };





        this.grd_communityList_oncelldblclick = function(obj,e)
        {

        };

        this.btn_selectCommunity_onclick = function(obj,e)
        {
        // 	alert(this.cbo_communityStat.value);
        // 	alert(this.cbo_communityStat.text);

        	this.ds_searchList.clearData();
        	this.ds_searchList.addRow();
        	this.ds_searchList.setColumn(0,"TEST",this.cbo_communityStat.value);

        	trace("TEST :" + this.ds_searchList.getColumn(0,"TEST"));



        	var strSvcId = "selectCommunity";
        	var strSvcUrl = "selectCommunity.do";
        	var inData = "ds_search=ds_searchList";
        	var outData = "ds_list=ds_list";
        	var strArg = "";
        	var callBackFnc = "fnCallback"

        	this.gfnTransaction(
        	strSvcId,
        	strSvcUrl,
        	inData,
        	outData,
        	strArg,
        	callBackFnc
        	);



        };

        this.btn_delCommunity_onclick = function(obj,e)
        {
        	var communityId = this.ds_list.getColumn(this.ds_list.rowposition,"id");

        	this.ds_del.clearData();
        	this.ds_del.addRow();
        	this.ds_del.setColumn(0,"TEST",communityId);

        	var strSvcId = "deleteCommunity";
        	var strSvcUrl = "deleteCommunity.do";
        	var inData = "ds_del=ds_del";
        	var outData = "";
        	var strArg = "";
        	var callBackFnc = "fnCallback"

        	this.gfnTransaction(
        	strSvcId,
        	strSvcUrl,
        	inData,
        	outData,
        	strArg,
        	callBackFnc
        	);

        };

        this.btn00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_onload,this);
            this.btn_selectCommunity.addEventHandler("onclick",this.btn_selectCommunity_onclick,this);
            this.btn_delCommunity.addEventHandler("onclick",this.btn_delCommunity_onclick,this);
            this.grd_communityList.addEventHandler("oncelldblclick",this.grd_communityList_oncelldblclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

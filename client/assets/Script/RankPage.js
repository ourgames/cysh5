// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        grid_prefab: {
            default: null,
            type: cc.Prefab
        },

        pageWnd: {
            default: null,
            type: cc.Prefab
        },

        pageIndex : 0,
        curRankFrom : 1,
        pageLimit : 6,
        curTotal : 0,
    },

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pageWnd = this.getComponent("cc.PageView");
    },

    start () {
        this.pageWnd.setCurrentPageIndex(0);
        this.onPageEvent(this.pageWnd, cc.PageView.EventType.PAGE_TURNING);

    },
    // update (dt) {},

    addPage: function(index){
        if (this.curTotal < index)
            return;
        this.curTotal += 1;
        var pageGrid = cc.instantiate(this.grid_prefab);
        this.pageWnd.addPage(pageGrid);
    },


    refreshGrid: function(ranks)
    {
        cc.log("refreshGrid:"+ranks)
        var index = this.pageWnd.getCurrentPageIndex();
        var curPage = this.pageWnd.getPages()[index];
        // 添加照片
        var t1 = ranks["0"];
        var t2 = ranks[0];
        var from = index * 6 + 1;
        this.refreshRankItem(curPage, "node_1", from, ranks["0"]);
        this.refreshRankItem(curPage, "node_2", from+1, ranks[1]);
        this.refreshRankItem(curPage, "node_3", from+2, ranks[2]);
        this.refreshRankItem(curPage, "node_4", from+3, ranks[3]);
        this.refreshRankItem(curPage, "node_5", from+4, ranks[4]);
        this.refreshRankItem(curPage, "node_6", from+5, ranks[5]);
    },

    refreshRankItem: function(page, nodeId, rankId, rankData)
    {
        var node = page.getChildByName(nodeId).getChildByName("rank_item");
        var rankItem = node.getComponent("RankItem");
        rankItem.refresh(rankId, rankData);
    },

    OnPagePrevious: function()
    {
        if (this.pageIndex == 0)
            return;
        this.pageIndex -= 1;
        this.curRankFrom = this.pageIndex * 6 + 1;
        D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this))
    },

    OnPageNext: function()
    {
        // 只显示前100
        if (this.pageIndex == 16)
            return;
        this.pageIndex += 1;
        this.curRankFrom = this.pageIndex * 6 + 1;
        D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this))
    },

    onPageEvent (sender, eventType) {
        // 翻页事件
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) {
            return;
        }
        console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
        var index = sender.getCurrentPageIndex();
        if (index == 0)
        {
            this.addPage(index);
            this.addPage(index + 1);
        }
        else if (index < 17){
            this.addPage(index + 1);
        }
        this.curRankFrom = index * 6 + 1;
        D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this))

    }
});

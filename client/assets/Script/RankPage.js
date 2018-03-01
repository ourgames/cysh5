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
        curRankFrom : 0,
        curRankEnd : 6,
        pageLimit : 6,
        curTotal : 1,
    },

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pageWnd = this.getComponent("cc.PageView");
    },

    start () {
        
    },
    // update (dt) {},

    Init: function() {
        this.pageWnd.setCurrentPageIndex(0);
        this.onPageEvent(this.pageWnd, cc.PageView.EventType.PAGE_TURNING);
    },

    addPage: function(index){
        if (this.curTotal < index)
            return;
        this.curTotal += 1;
        var pageGrid = cc.instantiate(this.grid_prefab);
        this.pageWnd.addPage(pageGrid);
    },


    refreshGrid: function(error,ranks)
    {
        if (ranks == null || ranks == undefined || ranks.length == 0)
            return;
        var index = this.pageWnd.getCurrentPageIndex();
        var curPage = this.pageWnd.getPages()[index];
        // 添加照片
        var from = index * 6;
        for (var i = 0; i < 6; i++) {
            var active = false;
            if (i < ranks.length) {
                this.curRankEnd = from + i;
                active = true;
            }
            var rankData = i < ranks.length ? ranks[i] : null;
            this.refreshRankItem(active, curPage, "node_" + i, from + i + 1, rankData);
        }
        if (ranks.length == 7 && (index + 1) == this.pageWnd.getPages().length)
        {
            this.addPage(index + 1);
            // var pages = this.pageWnd.getPages();
            // this.pageWnd.removePageAtIndex(index + 1);
        }
    },

    refreshRankItem: function(active, page, nodeId, rankId, rankData)
    {
        var node = page.getChildByName(nodeId).getChildByName("rank_item");
        node.active = active;
        if (active)
        {
            var rankItem = node.getComponent("RankItem");
            rankItem.refresh(rankId, rankData);
        }
    },

    OnPagePrevious: function()
    {
        if (this.pageIndex == 0)
            return;
        this.pageIndex -= 1;
        this.curRankFrom = this.pageIndex * 6;
        D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this))
    },

    OnPageNext: function()
    {
        // 只显示前100
        if (this.pageIndex == 16)
            return;
        if (this.curRankEnd < (this.curRankFrom + 5))
            return;

        this.pageIndex += 1;
        this.curRankFrom = this.pageIndex * 6;
        D.common.GetRank(this.curRankFrom, this.pageLimit + 1, this.refreshGrid.bind(this))
    },

    onPageEvent (sender, eventType) {
        // 翻页事件
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) {
            return;
        }
        var index = sender.getCurrentPageIndex();
        console.log("当前所在的页面索引:" + index);
        this.curRankFrom = index * 6;
        // 判断是向前翻页还是向后翻页
        var ret = this.pageIndex - index;
        if (ret <= 0) {
            D.common.GetRank(this.curRankFrom, this.pageLimit + 1, this.refreshGrid.bind(this))
        } else {
            D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this))
        }
        this.pageIndex = index;
    }
});

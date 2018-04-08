RY.news = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        toolbarOptions, scrollOptions,
        listOptions, listInstance,
        toolbarInstance,
        dsNewsObservable = ko.observable(),
        isNotify = ko.observable(true), dsNotify,
        littnav = ko.observable('0'),
        dataSource;

    //#region datasource
    dsNotify = [
        { id: 1, text: '系统通知', img: '../icon/xitongtongzhi.png', badge:2 },
        { id: 2, text: '交易信息', img: '../icon/daifukuan.png' },
        { id: 3, text: '留言', img: '../icon/liuyan.png' },
        { id: 4, text: '私信', img: '../icon/sixin.png', badge: 5},
        { id: 5, text: '评价', img: '../icon/pingjia.png' },
        { id: 6, text: '点赞', img: '../icon/dianzan.png' },
        { id: 7, text: '打赏', img: '../icon/dashang.png' },

    ]


    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44 - 59,
    }
    toolbarOptions = {
        onInitialized: function (e) { toolbarInstance = e.component; },
        onItemClick: layoutToolbarItemClick,
        items: [{
            location: 'center',
            widget: 'dxButton',
            options: {
                text: '通知',
                id: 'notify',
                onClick: handleHeaderClick
            }
        }, {
            location: 'center',
            widget: 'dxButton',
            options: {
                text: '聊天',
                id: 'chat',
                onClick: handleHeaderClick
            }
        },

        ]
    }
    listOptions = {
        dataSource: dsNewsObservable,
        height: $(window).height() - 44 - 59,
        pullRefreshEnabled: true,
        //grouped: true,
        //groupTemplate: 'group',
        itemTemplate: 'item',
        //collapsibleGroups: true,
        onItemClick: function (e) {
            //if (e.itemData.AmountStr() !== '' && e.itemData.AuditState() === 0)
            //    DevExpress.ui.dialog.confirm('真的要确认【' + e.itemData.AmountStr() + '】吗?', "温馨提示").then(function (result) {
            //        if (result) {
            //            var rp = e.itemData;
            //            rp.LastModifiedBy(DM.currentUser.Employee().UserName());
            //            rp.LastModifiedDate(new Date());
            //            rp.AuditState(1);
            //            rp.AuditDate(new Date());
            //            rp.Employee(DM.currentUser.Employee());

            //            DM.db.ReceivedPayment.update(rp.Oid(), rp.toJS()).done(function () {
            //                //DM.app.back();
            //            });
            //        }
            //    });
        },
        onInitialized: function (e) { listInstance = e.component; },

    }
    //#endregion
    //#region functions

    var b1, b2;
    function layoutToolbarItemClick(e) {
        function setStyle(isClick, button) {
            if (!button)
                return;

            if (isClick) {
                //button.css({ "border-bottom": "1px solid #b7b6bb" });
                button.find('.dx-button').css("color", "rgb(215, 191, 153)");
                button.find('.dx-button').css("border-bottom", "2px solid rgb(215, 191, 153)");
            }
            else {
                //button.css({ "border-bottom": "0px solid #b7b6bb" });
                button.find('.dx-button').css("color", "#777");
                button.find('.dx-button').css("border-bottom", "none");
            }
        }
        if (e.itemData.options && e.itemData.widget == 'dxButton') {
            var button = e.itemElement;
            if (e.itemData.options.id == 'notify') {
                b1 = button;
                setStyle(true, button);
            }
            else if (e.itemData.options.id == 'chat') {
                b2 = button;
                setStyle(true, button);
            }

            setStyle(false, button == b1 ? b2 : b1);
        }
    };
    function handleHeaderClick(e) {
        isNotify(e === '0');
        littnav(e);
        if (isNotify())
            dsNewsObservable(dsNotify);
    }

    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        dsNewsObservable(dsNotify);


        //layoutToolbarItemClick(e1);
        isReady.resolve();

    }

    function handleViewDisposing() {
        // RY.db.ry_users.off("modified", handlery_usersModification);
    }

    function refreshList() {
        shouldReload = false;

    }

    function handleStatus(e, f) {
        var a = e;
    }

    //RY.db.ry_users.on("modified", handlery_usersModification);
    function handleUser() {
        //alert(returnCitySN["cip"] + ',' + returnCitySN["cname"]);
    }

    //#endregion

    return {
        isReady: isReady.promise(),
        toolbarOptions: toolbarOptions,
        listOptions: listOptions,
        scrollOptions: scrollOptions,
        refreshList: refreshList,
        handleHeaderClick: handleHeaderClick,
        isNotify: isNotify,
        littnav: littnav,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
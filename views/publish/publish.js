RY.publish = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        icons,
        dataSource;

    //#region datasource
    icons = [{
        text: "定制",
        icon: "icon/dingzhi.png",
        view: 'customize'
    }, {
        text: "鉴定",
        icon: "icon/jianding.png",
        view: 'appraisal'
    }, {
            text: "求购",
        icon: "icon/caigou.png",
        view: 'purchase'
    }, {
        text: "闲置",
        icon: "icon/xianzhi.png",
        view: 'idle'
    }, {
        text: "拍卖",
        icon: "icon/paimai.png",
        view: 'auction',
        root: false
    }, {
        text: "设计",
        icon: "icon/sheji.png",
        view: 'design'
    },
    ]


    //#endregion

    //#region options

    //#endregion

    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        isReady.resolve();

    }

    function handleViewDisposing() {
        // RY.db.ry_users.off("modified", handlery_usersModification);
    }

    function refreshList() {
        shouldReload = false;

    }

    function handleclose() {
        RY.app.navigate('home', { root: true });
    }
    function handleicon(e, f) {
        //var a = e;
        //var uri = RY.app.router.format({
        //    view: e.view
        //});
        RY.app.navigate(e.view, { root: e.root });
        //clearViewCache();
    }
    function clearViewCache() {
        var cache = RY.app.viewCache;
        cache.removeView(viewInfo.key);
    }
    //RY.db.ry_users.on("modified", handlery_usersModification);
    function handleUser() {
        //alert(returnCitySN["cip"] + ',' + returnCitySN["cname"]);
    }
    return {
        isReady: isReady.promise(),
        icons: icons,
        handleclose: handleclose,
        handleicon: handleicon,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
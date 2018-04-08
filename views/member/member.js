RY.member = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        memstatus,
        dataSource;

    //#region datasource
    memstatus = [{
        id: 0,
        text: "分享",
        num: 0,
        view: 'myshare'
    }, {
        id: 1,
        text: "关注",
        num: 3,
        view: 'myfollow'
    }, {
        id: 2,
        text: "收藏",
        num: 10,
        view: 'mycollect'
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

    function handleStatus(e, f) {
        var a = e;
        RY.app.navigate(e.view);
    }
    function showview(view,value) {
        var uri = RY.app.router.format({
            view: view,
            id: value
        });
        RY.app.navigate(uri);
    }
    //RY.db.ry_users.on("modified", handlery_usersModification);
    function handleUser() {
        //alert(returnCitySN["cip"] + ',' + returnCitySN["cname"]);
    }
    return {
        isReady: isReady.promise(),
        twSearch: true,
        memstatus: memstatus,
        showview: showview,
        handleStatus: handleStatus,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
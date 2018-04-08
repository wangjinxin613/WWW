RY.bankadd = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        id = params.id,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        scrollOptions,
        numOptions, money = ko.observable(),
        fee = ko.observable(0.00),

        dataSource;


    //#region datasource


    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44,
    }
  
    numOptions = {
        value: money,
        placeholder:'请输入提现金额，单笔最低100元'
    }


    //#endregion

    //#region functions
    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        //if (!dataSourceObservable()) {
        //    dataSourceObservable(dataSource);
        //    dataSource.load().always(function () {
        //        isReady.resolve();
        //    });
        //    //showTile();
        //}
        //else if (shouldReload) {
        //    refreshList();
        //}
    }

    function handleViewDisposing() {
        // RY.db.ry_users.off("modified", handlery_usersModification);
    }

    function refreshList() {

    }


    //#endregion

    return {
        isReady: isReady.promise(),
        scrollOptions: scrollOptions,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        numOptions: numOptions,
        fee: fee,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
RY.myaccount = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        id = params.id,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        scrollOptions, listOptions, dslist,
        searchString = ko.observable(),


        dataSource;


    //#region datasource
    dslist = [
        { id: 1, text: '提现', view: 'tixian' },
        //{ id: 2, text: '消费记录', view: '' },
        { id: 3, text: '支付绑定', view: 'paymentbind' },
        { id: 4, text: '密码管理', view: '' },
        { id: 5, text: '保证金', view: 'cashdeposit' },
    ]

    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44,
    }
    listOptions = {
        dataSource: dslist,
        //height: $(window).height() - 44 - 59,
        pullRefreshEnabled: true,
        //grouped: true,
        //groupTemplate: 'group',
        itemTemplate: 'item',
        //collapsibleGroups: true,
        onItemClick: function (e) {
            var uri = RY.app.router.format({
                view: e.itemData.view,
            });
            RY.app.navigate(uri);
        },
        //onInitialized: function (e) { listInstance = e.component; },

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
        listOptions: listOptions,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
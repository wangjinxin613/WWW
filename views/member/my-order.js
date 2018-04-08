RY.myorder = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        id = params.id,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        scrollOptions, tabOptions,tabs,
        searchString = ko.observable(),
        selectedTab ,

        dataSource;
    selectedTab = ko.computed(function(){
        switch (id) {
            case 'all':
                return 0;
            case 'waitPay':
                return 1;
            case 'waitSend':
                return 2;
            case 'waitConfirm':
                return 3;
            case 'confirmed':
                return 4;
            default:
                return 0;
        }
    });

    //#region datasource
    tabs = [
        {
            id: 0,
            text: "全部",
        },
        {
            id: 1,
            text: "待付款",
        },
        {
            id: 2,
            text: "待发货",
        },
        {
            id: 3,
            text: "待收货",
        },
        {
            id: 4,
            text: "已完成",
        },
    ];

    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44 ,
    }
    tabOptions = {
        height: 30,
        width: ($(window).width() - 20),
        dataSource: tabs,
        selectedIndex: selectedTab,
        onSelectionChanged: selectionChanged,
    };



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
        shouldReload = false;
        dataSource.pageIndex(0);
        dataSource.load();
    }

    //dataSource = new DevExpress.data.DataSource({
    //    store: RY.db.ry_users,
    //    map: function (item) {
    //        return new RY.ry_usersViewModel(item);
    //    }
    //});
    function searchValueChanged() {

    }
    function selectionChanged(e) {
        //var item = e.addedItems[0];
        //var item2 = e.removedItems[0];
        //var id = item.id;
        //if (id === 0) {
        //    //item.icon(item.sIcon);
        //}
        //else if (item2) {
        //    //item2.icon(item2.sIcon_outline);
        //}
        //hasbudget(id === 0);

        ////loadData();
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        scrollOptions: scrollOptions,
        tabOptions: tabOptions,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
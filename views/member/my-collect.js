RY.mycollect = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        scrollOptions,
        searchString = ko.observable(),

        dataSource;

    //#region datasource


    //#endregion

    //#region options
    scrollOptions = {
        //height: $(window).height() - 44 - 50,
    }




    //#endregion

    //#region functions
    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        if (!dataSourceObservable()) {
            dataSourceObservable(dataSource);
            dataSource.load().always(function () {
                isReady.resolve();
            });
            //showTile();
        }
        else if (shouldReload) {
            refreshList();
        }
    }

    function handleViewDisposing() {
        // RY.db.ry_users.off("modified", handlery_usersModification);
    }

    function refreshList() {
        shouldReload = false;
        dataSource.pageIndex(0);
        dataSource.load();
    }

    dataSource = new DevExpress.data.DataSource({
        store: RY.db.ry_users,
        map: function (item) {
            return new RY.ry_usersViewModel(item);
        }
    });
    function searchValueChanged() {

    }
    function gotodetail(e) {
        RY.app.navigate('productdetail');
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        scrollOptions: scrollOptions,
        dataSource: dataSourceObservable,
        gotodetail: gotodetail,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
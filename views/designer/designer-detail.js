RY.designerdetail = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        scrollOptions,
        dataSourceObservable = ko.observable(),
        dataSource;

    //#region datasource


    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44 - 59,
    }

    //#endregion

    //#region functions
    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        isReady.resolve();
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
    }

    function refreshList() {
        //shouldReload = false;
        //dataSource.pageIndex(0);
        //dataSource.load();
    }

    //dataSource = new DevExpress.data.DataSource({
    //    store: RY.db.ry_users,
    //    map: function (item) {
    //        return new RY.ry_usersViewModel(item);
    //    }
    //});
    function searchValueChanged() {

    }
    function handledesign(e, f) {
        RY.app.navigate("designerdetail");
    }
    function backpage() {
        RY.app.back();
    }
    function gotopublish(e, f) {
        RY.app.navigate("designpublish/1");
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        refreshList: refreshList,
        backpage: backpage,
        scrollOptions: scrollOptions,
        gotopublish: gotopublish,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing
    };
};
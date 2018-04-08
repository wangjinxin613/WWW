RY.purchasedetail = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        dsgallery, galleryOptions, scrollOptions,
        searchString = ko.observable(),

        dataSource;

    //#region datasource
    dsgallery = [
        { id: 1, imageSrc: "images/gallery/lb2.jpg" },
        { id: 2, imageSrc: "images/gallery/lb3.jpg" },
        { id: 3, imageSrc: "images/gallery/lb4.jpg" },
    ]

    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() -44- 45,
    }

    galleryOptions = {
        dataSource: dsgallery,
        height: he,
        width: "100%",
        slideshowDelay: 5000,
        loop: true,
        showNavButtons: false,
        showIndicator: true,
        stretchImages: true
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

    //#endregion

    return {
        isReady: isReady.promise(),
        galleryOptions: galleryOptions,
        scrollOptions: scrollOptions,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
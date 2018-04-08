RY.customize = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        designs, tileViewOptions,
        searchString = ko.observable(),

        dataSource;

    //#region datasource

    designs = [{
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/feicui.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/zuanshi.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/feicui.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/zuanshi.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/zuanshi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/zuanshi.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
            ImageSrc: "images/cat/zuanshi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
            ImageSrc: "images/cat/zuanshi.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
            ImageSrc: "images/cat/zuanshi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/zuanshi.jpg",
    },
    ]

    //#endregion

    //#region options


    tileViewOptions = {
        items: designs,
        height: 110,
        baseItemHeight: 100,
        baseItemWidth: 100,
        itemMargin: 5,
        direction: 'horizontal',
        itemTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.append(
                "<div class=\"image\" style=\"background-image: url('" + itemData.ImageSrc + "')\"></div>"
            );
        }
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
    function showTile() {
        var catTiles = $("#cattileview").dxTileView({
            items: cats,
            height: 60,
            baseItemHeight: 50,
            baseItemWidth: 70,
            itemMargin: 5,
            direction: 'horizontal',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<div class=\"image\" style=\"background-image: url(" + itemData.ImageSrc + ")\"></div>");
            }
        }).dxTileView("instance");

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
    function gotodetial(e,f) {
        RY.app.navigate("customizedetail");
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        twSearch: true,
        tileViewOptions: tileViewOptions,
        dataSource: dataSourceObservable,
        gotodetial: gotodetial,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
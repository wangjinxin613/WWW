RY.mall = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        toolbarOptions,
        scrollOptions,
        searchString = ko.observable(),
        cats, catTileViewOptions,
        dataSource;

    //#region datasource
    cats = [{
        id: 1,
        text: "默认",
        active: ko.observable(1)
    }, {
        id: 2,
        text: "商家",
        active: ko.observable(0)
    }, {
        id: 3,
        text: "排序",
        active: ko.observable(0)
    }, {
        id: 4,
        text: "筛选",
        active: ko.observable(0)
    },
    ]

    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44,
    }
    toolbarOptions = {
        items: [{
            location: 'before',
            widget: 'dxButton',
            options: {
                //text: 'user',
                icon: "back",
                onClick: function () {
                    RY.app.back();
                }
            }
        }, {
            location: 'center',
            widget: 'dxTextBox',
            options: {
                mode: 'search',
                width: $(window).width() - 90,
                placeholder: '请输入品牌名或者商家名',
                valueChangeEvent: 'keyup',
                value: searchString,
                onValueChanged: searchValueChanged,
            }
        }, {
            location: 'after',
            widget: 'dxButton',
            options: {
                //text: 'user',
                icon: "ion ion-ios-cart-outline",
                onClick: function () {
                    //DevExpress.ui.notify("Back button has been clicked!");
                }
            }
        },

        ]
    }
    catTileViewOptions = {
        items: cats,
        height: 40,
        baseItemHeight: 30,
        baseItemWidth: 60,
        itemMargin: 5,
        direction: 'horizontal',
        onItemClick: tileClick,

    }
    //#endregion

    //#region functions
    function searchValueChanged(e) { }
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
    //RY.db.ry_users.on("modified", handlery_usersModification);
    function handleUser() {
        //alert(returnCitySN["cip"] + ',' + returnCitySN["cname"]);
    }
    function gotodetail(e, f) {
        RY.app.navigate("productdetail");
    }
    function tileClick(e) {
        $.each(cats, function (index, obj) {
            obj.active(0);
        });

        e.itemData.active(1);
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        catTileViewOptions: catTileViewOptions,
        toolbarOptions: toolbarOptions,
        scrollOptions: scrollOptions,
        gotodetail: gotodetail,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
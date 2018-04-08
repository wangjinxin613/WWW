RY.home = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        galleryOptions, dsgallery,
        navbarOptions, navData1, 
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        toolbarOptions, scrollOptions,
        searchString = ko.observable(),
        listOptions, dsDesign,
        dataSource;

    //#region datasource

    navData1 = [{
        text: "珠宝设计",
        icon: "icon/sheji.png",
        view: 'design'
    }, {
        text: "商品定制",
            icon: "icon/dingzhi.png",
        view: 'customize'
    }, {
            text: "精品商城",
            icon: "icon/shangcheng.png",
            view: 'mall'
    }, 
    ]
    dsgallery = [
        { id: 1, imageSrc: "images/gallery/lb1.jpg" },
        { id: 2, imageSrc: "images/gallery/lb2.jpg" },
        { id: 3, imageSrc: "images/gallery/lb3.jpg" },
        { id: 3, imageSrc: "images/gallery/lb4.jpg" },
        { id: 3, imageSrc: "images/gallery/lb5.jpg" },

    ]

    dsDesign = [{
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/shejishi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/shejishi2.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/shejishi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/shejishi2.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/shejishi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/shejishi2.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/shejishi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/shejishi2.jpg",
    }, {
        id: 1,
        text: "戴翻",
        text2: "建筑设计师",
        ImageSrc: "images/cat/shejishi.jpg"
    }, {
        id: 2,
        text: "胡如珊",
        text2: "大中华区卓越设计师",
        ImageSrc: "images/cat/shejishi2.jpg",
    },
    ]

    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44 - 59,
    }
    toolbarOptions = {
        items: [{
            location: 'before',
            widget: 'dxButton',
            options: {
                //text: 'user',
                icon: "/icon/user_active.png",
                onClick: function () {
                    //DevExpress.ui.notify("Back button has been clicked!");
                }
            }
        }, {
            location: 'center',
            widget: 'dxTextBox',
            options: {
                mode: 'search',
                width: $(window).width() - 90,
                placeholder: '请输入品牌或商家名',
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
    listOptions = {
        dataSource: dsDesign,
        //height: $(window).height() - 44 - 59,
        pullRefreshEnabled: true,
        scrollingEnabled: false,
        //grouped: true,
        //groupTemplate: 'group',
        itemTemplate: 'item',
        //collapsibleGroups: true,
        onItemClick: function (e) {
            RY.app.navigate('designer');
        },
        //onInitialized: function (e) { listInstance = e.component; },

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
    navbarOptions = {
        dataSource: navData1,
        onItemClick: function (e) {
            RY.app.navigate(e.itemData.view);
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
    //#endregion

    return {
        isReady: isReady.promise(),
        toolbarOptions: toolbarOptions,
        scrollOptions: scrollOptions,
        galleryOptions: galleryOptions,
        navbarOptions: navbarOptions,
        listOptions: listOptions,

        handleUser: handleUser,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
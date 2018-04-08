RY.idle = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        galleryOptions, dsgallery,
        navbarOptions, navData1,
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        tabOptions, tabs,
        selectedTab = ko.observable(0),
        isUpdated = ko.observable(false),
        tileViewOptions, designs,
        scrollOptions,
        dataSource;

    //#region datasource
    navData1 = [{
        text: "卖翡翠",
        icon: "icon/jianding.png",
        //view: 'appraisal'
    }, {
        text: "卖玉石",
        icon: "icon/dingzhi.png",
        //view: 'customize'
    }, {
        text: "卖黄金",
        icon: "icon/caigou.png",
        //view: 'purchase'
    }, {
        text: "卖钻石",
        icon: "icon/xianzhi.png",
        //view: 'idle'
    },
    ]

    dsgallery = [
        { id: 1, imageSrc: "images/gallery/lb1.jpg" },
        { id: 2, imageSrc: "images/gallery/lb2.jpg" },
        { id: 3, imageSrc: "images/gallery/lb3.jpg" },
        { id: 3, imageSrc: "images/gallery/lb4.jpg" },
        { id: 3, imageSrc: "images/gallery/lb5.jpg" },

    ]
    tabs = [
        {
            id: 0,
            text: "最新的",
        },
        {
            id: 1,
            text: "附近的",
        },
    ];

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
    scrollOptions = {
        height: $(window).height() - 44 - 59,
    }
    tabOptions = {
        height: 30,
        width: ($(window).width() - 20),
        dataSource: tabs,
        selectedIndex: selectedTab,
        onSelectionChanged: selectionChanged,
    };

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
    function selectionChanged(e) {
        var item = e.addedItems[0];
        var item2 = e.removedItems[0];
        var id = item.id;
        if (id === 0) {
            //item.icon(item.sIcon);
        }
        else if (item2) {
            //item2.icon(item2.sIcon_outline);
        }
        isUpdated(id === 1);

        //loadData();
    }
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
    function gotodetial(e, f) {
        RY.app.navigate("idledetail");
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        scrollOptions: scrollOptions,
        galleryOptions: galleryOptions,
        navbarOptions: navbarOptions,
        tabOptions: tabOptions,
        tileViewOptions: tileViewOptions,
        isUpdated: isUpdated,
        gotodetial: gotodetial,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
RY.auction = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        galleryOptions, dsgallery,
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        tvwd,
        tvhe = ko.observable(300),
        dataSourceObservable = ko.observable(),
        endAuctions, endAuctionTvOptions,
        toolbarOptions, scrollOptions,

        dataSource;

    tvwd = ko.observable((wh() - 40) / 3);

    //#region datasource
    dsgallery = [
        { id: 1, imageSrc: "images/gallery/lb1.jpg" },
        { id: 2, imageSrc: "images/gallery/lb2.jpg" },
        { id: 3, imageSrc: "images/gallery/lb3.jpg" },
        { id: 3, imageSrc: "images/gallery/lb4.jpg" },
        { id: 3, imageSrc: "images/gallery/lb5.jpg" },

    ]


    endAuctions = [{
        id: 1,
        text: "黄金足金3D硬金足...",
        bidden: 3,
        price: 6000,
        level: "A级",
        ImageSrc: "images/cat/shangpin.jpg"
    }, {
        id: 2,
        text: "黄金足金3D硬金足...",
        bidden: 3,
        price: 7000,
        level: "B级",
        ImageSrc: "images/cat/paimai_2.jpg",
    }, {
        id: 3,
        text: "黄金足金3D硬金足...",
        bidden: 0,
        price: 5000,
        level: "B级",
        ImageSrc: "images/cat/paimai_3.jpg"
    }, {
        id: 4,
        text: "黄金足金3D硬金足...",
        bidden: 0,
        price: 6500,
        level: "A级",
        ImageSrc: "images/cat/zuanshi.jpg"
    }, {
        id: 5,
        text: "翡翠",
        bidden: 3,
        price: 8000,
        level: "A级",
        ImageSrc: "images/cat/feicui.jpg",
    }, {
        id: 6,
        text: "项链",
        bidden: 3,
        price: 3000,
        level: "C级",
        ImageSrc: "images/cat/xianglian.jpg"
    }, {
        id: 7,
        text: "钻石",
        bidden: 3,
        price: 4000,
        level: "A级",
        ImageSrc: "images/cat/zuanshi.jpg"
    }, {
        id: 8,
        text: "翡翠",
        bidden: 3,
        price: 5000,
        level: "B级",
        ImageSrc: "images/cat/feicui.jpg",
    }, {
        id: 9,
        text: "项链",
        bidden: 3,
        price: 6000,
        level: "C级",
        ImageSrc: "images/cat/xianglian.jpg"
    }, {
        id: 10,
        text: "项链",
        bidden: 3,
        price: 7000,
        level: "B级",
        ImageSrc: "images/cat/xianglian.jpg"
    },
    ]

    //#endregion

    //#region options
    scrollOptions = {
        //height: $(window).height() - 44,// - 59,
    }
    toolbarOptions = {
        items: [{
            location: 'center',
            text: '拍卖',
        }, {
            location: 'after',
            widget: 'dxButton',
            options: {
                text: '发布',
                onClick: function () {
                    RY.app.navigate("auctionpublish");
                }
            }
        },

        ]
    }

    endAuctionTvOptions = {
        items: endAuctions,
        height: tvhe,
        baseItemHeight: 120,
        baseItemWidth: tvwd,
        itemMargin: 10,
        direction: 'vertical',
        onItemClick:gotoAuctionDetail,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.append(
                "<div class='tile'>" + "<p class=\"p1\">" + itemData.bidden + "人出价</p>" +
                "<div class=\"image\" style=\"background-image: url('" + itemData.ImageSrc + "')\"></div>" +
                "<p class=\"p2\">" + itemData.text + "</p>" +
                "<p class=\"p3\">" + Globalize.formatCurrency(itemData.price, "CNY", { maximumFractionDigits: 0 })
                + "</p> </div>"
            );
        }
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
    function gotoAuctionDetail(e) {
        RY.app.navigate('auctiondetail');
    }
    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        if (!dataSourceObservable()) {
            var i = Math.ceil(endAuctions.length / 3);
            tvhe(130 * i + 10);
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
        twSearch: true,
        toolbarOptions: toolbarOptions,
        scrollOptions: scrollOptions,
        galleryOptions: galleryOptions,
        endAuctionTvOptions: endAuctionTvOptions,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
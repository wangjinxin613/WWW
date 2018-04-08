RY.discover = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        toolbarOptions, scrollOptions,
        listOptions, listInstance,
        toolbarInstance,
        dsNewsObservable = ko.observable(),
        topTag = ko.observable('0'), dsDesign,
        littnav = ko.observable('0'),
        tileViewOptions, designs,
        purlistOptions, purs,
        sellerlistOptions, sellers,
        dataSource;

    //#region datasource
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
    },
    ]
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
    },
    ]
    sellers = [{
        id: 1,
        text: "金六福",
        text2: "香港上市公司，成立于1991年",
        ImageSrc: "images/cat/feicui.jpg"
    }, {
        id: 2,
        text: "周大福",
        text2: "始创于1929年香港",
        ImageSrc: "images/cat/zuanshi.jpg",
    }, {
        id: 1,
        text: "周生生",
        text2: "创于1934年广州，香港上市公司",
        ImageSrc: "images/cat/feicui.jpg"
    }, {
        id: 2,
        text: "老庙黄金",
        text2: "始创于1906年，上海市著名商标",
        ImageSrc: "images/cat/zuanshi.jpg",
    },
    ]
    purs = [{
        name: "张三",
        text: "翡翠，翡翠玉雕件",
        icon: "images/cat/headimg.jpg",
        view: 'appraisal'
    }, {
        name: "李四",
        text: "项链，钻石",
        icon: "images/cat/headimg.jpg",
        view: 'customize'
    }, {
        name: "王五",
        text: "黄金翡翠",
        icon: "images/cat/headimg.jpg",
        view: 'purchase'
    },]
    //#endregion

    //#region options
    scrollOptions = {
        height: $(window).height() - 44 - 59,
    }
    toolbarOptions = {
        onInitialized: function (e) { toolbarInstance = e.component; },
        onItemClick: layoutToolbarItemClick,
        items: [{
            location: 'center',
            widget: 'dxButton',
            options: {
                text: '通知',
                id: 'notify',
                onClick: handleHeaderClick
            }
        }, {
            location: 'center',
            widget: 'dxButton',
            options: {
                text: '聊天',
                id: 'chat',
                onClick: handleHeaderClick
            }
        },

        ]
    }
    listOptions = {
        dataSource: dsDesign,
        height: $(window).height() - 44 - 59,
        pullRefreshEnabled: true,
        //grouped: true,
        //groupTemplate: 'group',
        itemTemplate: 'item',
        //collapsibleGroups: true,
        onItemClick: function (e) {
            RY.app.navigate('designer');
        },
        //onInitialized: function (e) { listInstance = e.component; },

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
    purlistOptions = {
        dataSource: purs,
        height: $(window).height() - 44 - 59 - 45,
        showSelectionControls: false,
        pullRefreshEnabled: true,
        onItemClick: function (e) { RY.app.navigate("purchasedetail"); },
        //itemTemplate: function (data, index) {
        //    var result = $("<div>").addClass("product");

        //    $("<img>").attr("src", data.icon).appendTo(result);
        //    $("<div>").text(data.name).appendTo(result);
        //    //$("<div>").addClass("price")
        //    //    .html(Globalize.formatCurrency(data.Price, "USD", { maximumFractionDigits: 0 })).appendTo(result);

        //    return result;

        //}
    }
    sellerlistOptions = {
        dataSource: sellers,
        height: $(window).height() - 44 - 59,
        showSelectionControls: false,
        pullRefreshEnabled: true,
        onItemClick: function (e) { RY.app.navigate("productdetail"); },
        //itemTemplate: function (data, index) {
        //    var result = $("<div>").addClass("product");

        //    $("<img>").attr("src", data.icon).appendTo(result);
        //    $("<div>").text(data.name).appendTo(result);
        //    //$("<div>").addClass("price")
        //    //    .html(Globalize.formatCurrency(data.Price, "USD", { maximumFractionDigits: 0 })).appendTo(result);

        //    return result;

        //}
    }
    //#endregion
    //#region functions

    var b1, b2;
    function layoutToolbarItemClick(e) {
        function setStyle(isClick, button) {
            if (!button)
                return;

            if (isClick) {
                //button.css({ "border-bottom": "1px solid #b7b6bb" });
                button.find('.dx-button').css("color", "rgb(215, 191, 153)");
                button.find('.dx-button').css("border-bottom", "2px solid rgb(215, 191, 153)");
            }
            else {
                //button.css({ "border-bottom": "0px solid #b7b6bb" });
                button.find('.dx-button').css("color", "#777");
                button.find('.dx-button').css("border-bottom", "none");
            }
        }
        if (e.itemData.options && e.itemData.widget == 'dxButton') {
            var button = e.itemElement;
            if (e.itemData.options.id == 'notify') {
                b1 = button;
                setStyle(true, button);
            }
            else if (e.itemData.options.id == 'chat') {
                b2 = button;
                setStyle(true, button);
            }

            setStyle(false, button == b1 ? b2 : b1);
        }
    };
    function handleHeaderClick(e) {
        topTag(e);
        //if (topTag())
        //    dsNewsObservable(dsDesign);
    }
    function handleLittnavClick(e) {
        littnav(e);

    }
    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        dsNewsObservable(dsDesign);


        //layoutToolbarItemClick(e1);
        isReady.resolve();

    }

    function handleViewDisposing() {
        // RY.db.ry_users.off("modified", handlery_usersModification);
    }

    function refreshList() {
        shouldReload = false;

    }

    function handleStatus(e, f) {
        var a = e;
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
        toolbarOptions: toolbarOptions,
        listOptions: listOptions,
        scrollOptions: scrollOptions,
        tileViewOptions: tileViewOptions,
        purlistOptions: purlistOptions,
        sellerlistOptions: sellerlistOptions,
        refreshList: refreshList,
        handleHeaderClick: handleHeaderClick,
        handleLittnavClick: handleLittnavClick,
        topTag: topTag,
        littnav: littnav,
        gotodetial: gotodetial,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
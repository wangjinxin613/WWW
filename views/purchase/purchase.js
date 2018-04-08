RY.purchase = function (params) {
    "use strict";

    var scrollOptions, listOptions, lists,
        isReady = $.Deferred(),
        cats, catTileViewOptions;


    //#region data
    cats = [{
        id: 1,
        text: "全部",
        active: ko.observable(1)
    }, {
        id: 2,
        text: "翡翠",
        active: ko.observable(0)
    }, {
        id: 3,
        text: "玉石",
        active: ko.observable(0)
    }, {
        id: 4,
        text: "黄金",
        active: ko.observable(0)
    }, {
        id: 5,
        text: "二手",
        active: ko.observable(0)
    },
    ]
    lists = [{
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
        height: $(window).height() - 50,
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
    listOptions = {
        dataSource: lists,
        showSelectionControls: false,
        pullRefreshEnabled: true,
        onItemClick: function (e) { RY.app.navigate("purchasedetail");},
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

    function handleViewShowing() {

    }
    function handleViewDisposing() {
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
        scrollOptions: scrollOptions,
        catTileViewOptions: catTileViewOptions,
        listOptions: listOptions,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,

    };
};
RY.purchasepublish = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        scrollOptions,
        summitOptions, designs,
        dataSource;


    //#region datasource


    designs = [{
        id: 1,
        text: "翡翠",
        ImageSrc: "images/cat/feicui.jpg"
    }, {
        id: 2,
        text: "钻石",
        ImageSrc: "images/cat/zuanshi.jpg",
    },
    ]


    //#endregion

    //#region options
    summitOptions = {
        text: "发布",
        type: "success",
        onClick: function () {
            RY.app.navigate("purchasepublish2");
        }
    }

    scrollOptions = {
        height: $(window).height() - 50,
    }


    //#endregion

    //#region functions



    function handlery_usersModification() {
        shouldReload = true;
    }

    function handleViewShowing() {
        //$("#contactor").dxTextBox({
        //    placeholder: "请输入联系人信息",
        //    showClearButton: true,
        //    value: ""
        //}).dxTextBox("instance");
        //$("#mobile").dxTextBox({
        //    placeholder: "请输入手机号码",
        //    showClearButton: true,
        //    value: ""
        //}).dxTextBox("instance");
        //$("#budget").dxNumberBox({
        //    placeholder: "请输入您的预算",
        //    format: "#,##0.## 元",
        //    value: undefined
        //}).dxNumberBox("instance");
        //$("#custdays").dxNumberBox({
        //    placeholder: "请输入定制天数",
        //    format: "#,##0 天",
        //    value: undefined
        //}).dxNumberBox("instance");

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
        scrollOptions: scrollOptions,
        summitOptions: summitOptions,
        
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
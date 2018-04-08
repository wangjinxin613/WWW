RY.customizepublish = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        tabOptions,
        tabs,
        selectedTab = ko.observable(0),
        scrollOptions,
        remarkOptions,
        remark = ko.observable(),
        designs, tileViewOptions,
        uploaderOptions, summitOptions,
        hasbudget = ko.observable(true),
        contactor = ko.observable(),
        mobile = ko.observable(),
        budget = ko.observable(),
        custdays = ko.observable(),
        contactorOptions, mobileOptions, budgetOptions, custdaysOptions,
        dataSource;


    //#region datasource

    tabs = [
        {
            id: 0,
            text: "有预算",
        },
        {
            id: 1,
            text: "无预算",
        },
    ];
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
        text: "确认发布",
        type: "success",
        onClick: function () {
            $("#customize-form").submit();
        }
    }

    uploaderOptions = {
        selectButtonText: "选择图片",
        multiple: true,
        labelText: "",
        accept: "image/*",
        uploadMode: "useForm",
        onContentReady: function (e) {
            e.element.find(".dx-fileuploader-button").dxButton("instance").option("icon", "ion ion-ios-plus-outline")
        },
        //var files = $("#file-uploader").dxFileUploader("instance").option("value") // get files
        //$("#file-uploader").dxFileUploader("instance").option("value", [...]) // modify files
        onValueChanged: function (e) {
            e.element.find(".dx-fileuploader-files-container").hide();

            var files = e.value;
            //$('#file-list').html('');
            //$("#myMedia").hide();
            if (files.length == 0)
                return;
            if (e.component.option("accept") === "image/*") {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    previewImages(file);
                }
            }
            //else {
            //    previewMedia("myMedia", e.value[0]);
            //}

        }
    }
    scrollOptions = {
        height: $(window).height() - 44 - 40 - 50,
    }
    tabOptions = {
        height: 30,
        width: ($(window).width() - 20),
        dataSource: tabs,
        selectedIndex: selectedTab,
        onSelectionChanged: selectionChanged,
    };

    remarkOptions = {
        value: remark,
        height: 100,
        placeholder: "定制要求及说明并上传图纸和图片"
    };
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

    contactorOptions={
        placeholder: "请输入联系人信息",
        showClearButton: true,
        value: contactor
    };
    mobileOptions={
        placeholder: "请输入手机号码",
        showClearButton: true,
        value: mobile
    };
    budgetOptions={
        placeholder: "请输入您的预算",
        format: "#,##0.## 元",
        value: budget
    };
    custdaysOptions={
        placeholder: "请输入定制天数",
        format: "#,##0 天",
        value: custdays
    };
    //#endregion

    //#region functions
    function previewImages(file) {

        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                var span = $('<span>');
                span.html(['<img class="customize-thumb" src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'].join(''))
                $('#file-list').append(span);
            };
        })(file);

        reader.readAsDataURL(file);
    }
    function previewMedia(elType, file) {
        var type = file.type
        var mediaNode = $("#" + elType);
        var canPlay = mediaNode.get(0).canPlayType(type)
        if (canPlay === '') {
            DevExpress.ui.notify("Selected media type is not supported");
            return;
        }
        var fileURL = URL.createObjectURL(file);
        mediaNode.show();
        mediaNode.attr({ "type": type, "src": fileURL });
    }
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
        hasbudget(id === 0);

        //loadData();
    }

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
    //RY.db.ry_users.on("modified", handlery_usersModification);
    function handleUser() {
        //alert(returnCitySN["cip"] + ',' + returnCitySN["cname"]);
    }
    //#endregion

    return {
        isReady: isReady.promise(),
        tabOptions: tabOptions,
        remarkOptions: remarkOptions,
        scrollOptions: scrollOptions,
        tileViewOptions: tileViewOptions,
        uploaderOptions: uploaderOptions,
        summitOptions: summitOptions,
        contactorOptions: contactorOptions,
        mobileOptions: mobileOptions,
        budgetOptions: budgetOptions,
        custdaysOptions: custdaysOptions,
        hasbudget: hasbudget,
        handleUser: handleUser,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
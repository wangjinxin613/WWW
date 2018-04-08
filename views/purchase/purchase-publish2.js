RY.purchasepublish2 = function (params, viewInfo) {
    "use strict";

    var shouldReload = false,
        openCreateViewAsRoot = viewInfo.layoutController.name === "split",
        isReady = $.Deferred(),
        wh = ko.observable($(window).width()),
        he = ko.observable(wh() * 2 / 3),
        dataSourceObservable = ko.observable(),
        scrollOptions,
        remarkOptions,
        remark = ko.observable(),
        uploaderOptions, summitOptions,
        caption = ko.observable(),
        price = ko.observable(),
        captionOptions, priceOptions,
        dataSource;


    //#region datasource


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
        height: $(window).height() - 50,
    }


    remarkOptions = {
        value: remark,
        height: 100,
        placeholder: "定制要求及说明并上传图纸和图片"
    };


    captionOptions={
        placeholder: "请输入30字以内的标题",
        showClearButton: true,
        value: caption
    };
    
    priceOptions={
        placeholder: "请输入您的意向价格",
        format: "#,##0 元",
        value: price
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
        remarkOptions: remarkOptions,
        scrollOptions: scrollOptions,
        captionOptions: captionOptions,
        uploaderOptions: uploaderOptions,
        summitOptions: summitOptions,
        priceOptions: priceOptions,
        dataSource: dataSourceObservable,
        refreshList: refreshList,
        viewShowing: handleViewShowing,
        viewDisposing: handleViewDisposing,
        openCreateViewAsRoot: openCreateViewAsRoot
    };
};
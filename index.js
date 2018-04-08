$(function () {
    var startupView = "home";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    if (DevExpress.devices.real().platform === "ios") {
        //
    }
    else {
        //DevExpress.devices.current({ platform: "generic" });
        DevExpress.devices.current({ platform: "ios" });
        DevExpress.ui.themes.current('ios7.default');
    }
    if (DevExpress.devices.real().platform === "win") {
        $("body").css("background-color", "#000");
    }

    var isDeviceReady = false,
        isViewShown = false;

    function hideSplashScreen() {
        if (isDeviceReady && isViewShown) {
            navigator.splashscreen.hide();
        }
    }

    if (document.addEventListener) {
        document.addEventListener("deviceready", function () {
            isDeviceReady = true;
            hideSplashScreen();
            document.addEventListener("backbutton", function () {
                DevExpress.processHardwareBackButton();
            }, false);
        }, false);
    }

    function onViewShown() {
        isViewShown = true;
        hideSplashScreen();
        RY.app.off("viewShown", onViewShown);
    }

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !RY.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                MSApp.terminateApp('');
                break;
        }
    }
    $.when(
        //#region get json from Globalize 1.1
        $.getJSON("js/json/likelySubtags.json"),
        $.getJSON("js/json/zh/numbers.json"),
        $.getJSON("js/json/zh/currencies.json"),
        $.getJSON("js/json/zh/ca-gregorian.json"),
        $.getJSON("js/json/zh/timeZoneNames.json"),
        $.getJSON("js/json/timeData.json"),
        $.getJSON("js/json/weekData.json"),
        $.getJSON("js/json/currencyData.json"),
        $.getJSON("js/json/numberingSystems.json")
        //#endregion

    ).then(function () {
        // Normalize $.get results, we only need the JSON, not the request statuses.
        return [].slice.apply(arguments, [0]).map(function (result) {
            return result[0];
        });

    }).then(Globalize.load).then(function () {

        Globalize.locale("zh");

        var layoutSet = DevExpress.framework.html.layoutSets[RY.config.layoutSet],
            navigation = RY.config.navigation;

        RY.emptyController = new DevExpress.framework.html.EmptyLayoutController;
        RY.popupController = new DevExpress.framework.html.PopupLayoutController;
        RY.simpleController = new DevExpress.framework.html.SimpleLayoutController;

        RY.app = new DevExpress.framework.html.HtmlApplication({
            namespace: RY,
            layoutSet: [
                { controller: new DevExpress.framework.html.NavBarController },
                { customResolveRequired: true, controller: RY.emptyController },
                { customResolveRequired: true, controller: RY.popupController },
                { customResolveRequired: true, controller: RY.simpleController },
            ],
            animationSet: DevExpress.framework.html.animationSets[RY.config.animationSet],
            navigation: RY.config.navigation,
            commandMapping: RY.config.commandMapping,
            navigateToRootViewMode: "keepHistory",
            useViewTitleAsBackText: false
        });
        RY.app.on("resolveLayoutController", function (args) {
            var viewName = args.viewInfo.viewName;
            var ssView = ["home", "news", "publish", "discover", "member"];
            var emptyView = ["publish", "login", "designerdetail","mall"];
            if (emptyView.indexOf(viewName) !== -1) {
                args.layoutController = RY.emptyController;
            }
            else if (ssView.indexOf(viewName) === -1) {
                args.layoutController = RY.popupController;
                //args.layoutController = RY.simpleController;
            }
            else {
                //if (DM.StatusBar)
                //    DM.StatusBar.backgroundColorByHexString("#000000");
            }
        });
        RY.app.on("afterViewSetup", function (args) {
            var vi = args.viewInfo;
            var viewName = vi.viewName;
            var ssView = ["customizepublish", "appraisalpublish", "appraisaljigou", "auctionpublish", "designpublish", "idlepublish"];
            var commands = vi.commands || [];
            if (ssView.indexOf(viewName) !== -1) {
                commands = $.grep(commands, function (c) {
                    return c.option("id") !== "back";
                })
                vi.commands = commands;
            }
            else {
                $.each(commands, function (index, mapping) {
                    if (mapping.option("id") === "back") {
                        mapping.option("showText", false);
                        //mapping.option("visible", false);
                        return false;
                    }
                });
            }
        })

        $(window).on("unload", function () {
            RY.app.saveState();
        });
        RY.app.on("navigating", function (e) {

            //#region 实心空心图标切换
            function IndexOfArray(array, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i] === value)
                        return i;
                }
                return -1;
            }

            var navView = RY.app.router.parse(e.uri).view;
            //viewShown-->e.viewInfo.navigateOptions.root
            var ssView = ["home", "news", "publish", "discover", "member"];
            var ssIcon = ["ion-ios-home", "ion-ios-chatbubble", "ion-ios-plus", "ion-ios-eye", "ion-ios-person"];
            var ssIcon_outline = ["ion-ios-home-outline", "ion-ios-chatbubble-outline", "ion-ios-plus-outline", "ion-ios-eye-outline", "ion-ios-person-outline"];

            var i = IndexOfArray(ssView, navView);

            if (i > -1) {
                //if (i === 3)
                //    RY.app.navigation[i].option("icon", ssIcon[i]);
                //else
                    RY.app.navigation[i].option("icon", "ion " + ssIcon[i]);

                for (var j = 0; j < ssView.length; j++) {
                    if (i !== j) {
                        //if (j === 3)
                        //    RY.app.navigation[j].option("icon", ssIcon_outline[j]);
                        //else
                            RY.app.navigation[j].option("icon", "ion " + ssIcon_outline[j]);
                    }
                }
            }

            //#endregion
            //if (navView !== 'Login') {
            //    if (RY.currentUser.FirstLogin() === true) {
            //        //if (checkAutologin()) return;
            //        e.uri = 'Login';
            //    }
            //}
        });
        RY.app.router.register(":view/:id", { view: startupView, id: undefined });
        RY.app.on("viewShown", onViewShown);
        RY.app.on("navigatingBack", onNavigatingBack);
        RY.app.navigate();
    });
});
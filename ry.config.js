// NOTE object below must be a valid JSON
window.RY = $.extend(true, window.RY, {
  "config": {
    "layoutSet": "navbar",
    "animationSet": "default",
    "navigation": [
      {
        "title": "首页",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "消息",
        "onExecute": "#news",
          "icon": "home",
        "badge":"7"
      },
      {
        "title": "发布",
        "onExecute": "#publish",
        "icon": "home"
      },
      {
        "title": "发现",
          "onExecute": "#discover",
        "icon": "home"
      },
      {
        "title": "我的",
        "onExecute": "#member",
        "icon": "home"
      }
    ]
  }
});

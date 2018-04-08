(function() {
    RY.AppVersionViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.App = ko.observable();
            this.VersionNo = ko.observable();
            this.IsUpdated = ko.observable();
            this.PublishDate = ko.observable();
            this.Url = ko.observable();
            this.Remark = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.AppVersionViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                App: this.App(),
                VersionNo: this.VersionNo(),
                IsUpdated: this.IsUpdated(),
                PublishDate: this.PublishDate(),
                Url: this.Url(),
                Remark: this.Remark(),
                OptimisticLockField: this.OptimisticLockField(),
                GCRecord: this.GCRecord(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.Oid(data.Oid);
                this.CreatedBy(data.CreatedBy);
                this.CreatedDate(data.CreatedDate);
                this.LastModifiedBy(data.LastModifiedBy);
                this.LastModifiedDate(data.LastModifiedDate);
                this.App(data.App);
                this.VersionNo(data.VersionNo);
                this.IsUpdated(data.IsUpdated);
                this.PublishDate(data.PublishDate);
                this.Url(data.Url);
                this.Remark(data.Remark);
                this.OptimisticLockField(data.OptimisticLockField);
                this.GCRecord(data.GCRecord);
            }
        },

        clear: function() {
            this.Oid(undefined);
            this.CreatedBy(undefined);
            this.CreatedDate(undefined);
            this.LastModifiedBy(undefined);
            this.LastModifiedDate(undefined);
            this.App(undefined);
            this.VersionNo(undefined);
            this.IsUpdated(undefined);
            this.PublishDate(undefined);
            this.Url(undefined);
            this.Remark(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
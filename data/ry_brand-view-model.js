(function() {
    RY.ry_brandViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.brand_name = ko.observable();
            this.brand_logo = ko.observable();
            this.brand_desc = ko.observable();
            this.site_url = ko.observable();
            this.sort_order = ko.observable();
            this.is_show = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_brandViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                brand_name: this.brand_name(),
                brand_logo: this.brand_logo(),
                brand_desc: this.brand_desc(),
                site_url: this.site_url(),
                sort_order: this.sort_order(),
                is_show: this.is_show(),
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
                this.brand_name(data.brand_name);
                this.brand_logo(data.brand_logo);
                this.brand_desc(data.brand_desc);
                this.site_url(data.site_url);
                this.sort_order(data.sort_order);
                this.is_show(data.is_show);
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
            this.brand_name(undefined);
            this.brand_logo(undefined);
            this.brand_desc(undefined);
            this.site_url(undefined);
            this.sort_order(undefined);
            this.is_show(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
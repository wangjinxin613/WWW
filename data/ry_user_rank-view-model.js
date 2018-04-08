(function() {
    RY.ry_user_rankViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.rank_name = ko.observable();
            this.min_points = ko.observable();
            this.max_points = ko.observable();
            this.discount = ko.observable();
            this.show_price = ko.observable();
            this.special_rank = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_user_rankViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                rank_name: this.rank_name(),
                min_points: this.min_points(),
                max_points: this.max_points(),
                discount: this.discount(),
                show_price: this.show_price(),
                special_rank: this.special_rank(),
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
                this.rank_name(data.rank_name);
                this.min_points(data.min_points);
                this.max_points(data.max_points);
                this.discount(data.discount);
                this.show_price(data.show_price);
                this.special_rank(data.special_rank);
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
            this.rank_name(undefined);
            this.min_points(undefined);
            this.max_points(undefined);
            this.discount(undefined);
            this.show_price(undefined);
            this.special_rank(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
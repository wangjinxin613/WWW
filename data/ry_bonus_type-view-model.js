(function() {
    RY.ry_bonus_typeViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.type_name = ko.observable();
            this.type_money = ko.observable();
            this.send_type = ko.observable();
            this.min_amount = ko.observable();
            this.max_amount = ko.observable();
            this.send_start_date = ko.observable();
            this.send_end_date = ko.observable();
            this.use_start_date = ko.observable();
            this.use_end_date = ko.observable();
            this.min_goods_amount = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_bonus_typeViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                type_name: this.type_name(),
                type_money: String(this.type_money() || 0),
                send_type: this.send_type(),
                min_amount: String(this.min_amount() || 0),
                max_amount: String(this.max_amount() || 0),
                send_start_date: this.send_start_date(),
                send_end_date: this.send_end_date(),
                use_start_date: this.use_start_date(),
                use_end_date: this.use_end_date(),
                min_goods_amount: String(this.min_goods_amount() || 0),
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
                this.type_name(data.type_name);
                this.type_money(Number(data.type_money));
                this.send_type(data.send_type);
                this.min_amount(Number(data.min_amount));
                this.max_amount(Number(data.max_amount));
                this.send_start_date(data.send_start_date);
                this.send_end_date(data.send_end_date);
                this.use_start_date(data.use_start_date);
                this.use_end_date(data.use_end_date);
                this.min_goods_amount(Number(data.min_goods_amount));
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
            this.type_name(undefined);
            this.type_money(undefined);
            this.send_type(undefined);
            this.min_amount(undefined);
            this.max_amount(undefined);
            this.send_start_date(undefined);
            this.send_end_date(undefined);
            this.use_start_date(undefined);
            this.use_end_date(undefined);
            this.min_goods_amount(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
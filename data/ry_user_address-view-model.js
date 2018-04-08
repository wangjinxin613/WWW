(function() {
    RY.ry_user_addressViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.address_name = ko.observable();
            this.ry_users = ko.observable();
            this.consignee = ko.observable();
            this.email = ko.observable();
            this.country = ko.observable();
            this.province = ko.observable();
            this.city = ko.observable();
            this.district = ko.observable();
            this.address = ko.observable();
            this.zipcode = ko.observable();
            this.tel = ko.observable();
            this.mobile = ko.observable();
            this.sign_building = ko.observable();
            this.best_time = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_user_addressViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                address_name: this.address_name(),
                ry_users: RY.db.objectLink("ry_users", this.ry_users() ? this.ry_users().Oid(): undefined),
                consignee: this.consignee(),
                email: this.email(),
                country: this.country(),
                province: this.province(),
                city: this.city(),
                district: this.district(),
                address: this.address(),
                zipcode: this.zipcode(),
                tel: this.tel(),
                mobile: this.mobile(),
                sign_building: this.sign_building(),
                best_time: this.best_time(),
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
                this.address_name(data.address_name);
                if(data.ry_users)
                    this.ry_users(new RY.ry_usersViewModel(data.ry_users));
                this.consignee(data.consignee);
                this.email(data.email);
                this.country(data.country);
                this.province(data.province);
                this.city(data.city);
                this.district(data.district);
                this.address(data.address);
                this.zipcode(data.zipcode);
                this.tel(data.tel);
                this.mobile(data.mobile);
                this.sign_building(data.sign_building);
                this.best_time(data.best_time);
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
            this.address_name(undefined);
            this.ry_users(new RY.ry_usersViewModel());
            this.consignee(undefined);
            this.email(undefined);
            this.country(undefined);
            this.province(undefined);
            this.city(undefined);
            this.district(undefined);
            this.address(undefined);
            this.zipcode(undefined);
            this.tel(undefined);
            this.mobile(undefined);
            this.sign_building(undefined);
            this.best_time(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
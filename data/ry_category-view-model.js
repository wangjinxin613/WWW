(function() {
    RY.ry_categoryViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.cat_name = ko.observable();
            this.keywords = ko.observable();
            this.cat_desc = ko.observable();
            this.ry_category2 = ko.observable();
            this.sort_order = ko.observable();
            this.template_file = ko.observable();
            this.measure_unit = ko.observable();
            this.show_in_nav = ko.observable();
            this.style = ko.observable();
            this.is_show = ko.observable();
            this.grade = ko.observable();
            this.filter_attr = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_categoryViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                cat_name: this.cat_name(),
                keywords: this.keywords(),
                cat_desc: this.cat_desc(),
                ry_category2: RY.db.objectLink("ry_category", this.ry_category2() ? this.ry_category2().Oid(): undefined),
                sort_order: this.sort_order(),
                template_file: this.template_file(),
                measure_unit: this.measure_unit(),
                show_in_nav: this.show_in_nav(),
                style: this.style(),
                is_show: this.is_show(),
                grade: this.grade(),
                filter_attr: this.filter_attr(),
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
                this.cat_name(data.cat_name);
                this.keywords(data.keywords);
                this.cat_desc(data.cat_desc);
                if(data.ry_category2)
                    this.ry_category2(new RY.ry_categoryViewModel(data.ry_category2));
                this.sort_order(data.sort_order);
                this.template_file(data.template_file);
                this.measure_unit(data.measure_unit);
                this.show_in_nav(data.show_in_nav);
                this.style(data.style);
                this.is_show(data.is_show);
                this.grade(data.grade);
                this.filter_attr(data.filter_attr);
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
            this.cat_name(undefined);
            this.keywords(undefined);
            this.cat_desc(undefined);
            this.ry_category2(new RY.ry_categoryViewModel());
            this.sort_order(undefined);
            this.template_file(undefined);
            this.measure_unit(undefined);
            this.show_in_nav(undefined);
            this.style(undefined);
            this.is_show(undefined);
            this.grade(undefined);
            this.filter_attr(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
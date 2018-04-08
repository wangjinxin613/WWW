(function() {
    RY.ry_goodsViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.ry_category = ko.observable();
            this.goods_sn = ko.observable();
            this.goods_name = ko.observable();
            this.goods_name_style = ko.observable();
            this.click_count = ko.observable();
            this.ry_brand = ko.observable();
            this.provider_name = ko.observable();
            this.goods_number = ko.observable();
            this.goods_weight = ko.observable();
            this.market_price = ko.observable();
            this.virtual_sales = ko.observable();
            this.shop_price = ko.observable();
            this.promote_price = ko.observable();
            this.promote_start_date = ko.observable();
            this.promote_end_date = ko.observable();
            this.warn_number = ko.observable();
            this.keywords = ko.observable();
            this.goods_brief = ko.observable();
            this.goods_desc = ko.observable();
            this.goods_thumb = ko.observable();
            this.goods_img = ko.observable();
            this.original_img = ko.observable();
            this.is_real = ko.observable();
            this.extension_code = ko.observable();
            this.is_on_sale = ko.observable();
            this.is_alone_sale = ko.observable();
            this.is_shipping = ko.observable();
            this.integral = ko.observable();
            this.add_time = ko.observable();
            this.sort_order = ko.observable();
            this.is_delete = ko.observable();
            this.is_best = ko.observable();
            this.is_new = ko.observable();
            this.is_hot = ko.observable();
            this.is_promote = ko.observable();
            this.ry_bonus_type = ko.observable();
            this.last_update = ko.observable();
            this.ry_goods_type = ko.observable();
            this.seller_note = ko.observable();
            this.give_integral = ko.observable();
            this.rank_integral = ko.observable();
            this.ry_suppliers = ko.observable();
            this.is_check = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_goodsViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                ry_category: RY.db.objectLink("ry_category", this.ry_category() ? this.ry_category().Oid(): undefined),
                goods_sn: this.goods_sn(),
                goods_name: this.goods_name(),
                goods_name_style: this.goods_name_style(),
                click_count: this.click_count(),
                ry_brand: RY.db.objectLink("ry_brand", this.ry_brand() ? this.ry_brand().Oid(): undefined),
                provider_name: this.provider_name(),
                goods_number: this.goods_number(),
                goods_weight: String(this.goods_weight() || 0),
                market_price: String(this.market_price() || 0),
                virtual_sales: this.virtual_sales(),
                shop_price: String(this.shop_price() || 0),
                promote_price: String(this.promote_price() || 0),
                promote_start_date: this.promote_start_date(),
                promote_end_date: this.promote_end_date(),
                warn_number: this.warn_number(),
                keywords: this.keywords(),
                goods_brief: this.goods_brief(),
                goods_desc: this.goods_desc(),
                goods_thumb: this.goods_thumb(),
                goods_img: this.goods_img(),
                original_img: this.original_img(),
                is_real: this.is_real(),
                extension_code: this.extension_code(),
                is_on_sale: this.is_on_sale(),
                is_alone_sale: this.is_alone_sale(),
                is_shipping: this.is_shipping(),
                integral: this.integral(),
                add_time: this.add_time(),
                sort_order: this.sort_order(),
                is_delete: this.is_delete(),
                is_best: this.is_best(),
                is_new: this.is_new(),
                is_hot: this.is_hot(),
                is_promote: this.is_promote(),
                ry_bonus_type: RY.db.objectLink("ry_bonus_type", this.ry_bonus_type() ? this.ry_bonus_type().Oid(): undefined),
                last_update: this.last_update(),
                ry_goods_type: RY.db.objectLink("ry_goods_type", this.ry_goods_type() ? this.ry_goods_type().Oid(): undefined),
                seller_note: this.seller_note(),
                give_integral: this.give_integral(),
                rank_integral: this.rank_integral(),
                ry_suppliers: RY.db.objectLink("ry_suppliers", this.ry_suppliers() ? this.ry_suppliers().Oid(): undefined),
                is_check: this.is_check(),
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
                if(data.ry_category)
                    this.ry_category(new RY.ry_categoryViewModel(data.ry_category));
                this.goods_sn(data.goods_sn);
                this.goods_name(data.goods_name);
                this.goods_name_style(data.goods_name_style);
                this.click_count(data.click_count);
                if(data.ry_brand)
                    this.ry_brand(new RY.ry_brandViewModel(data.ry_brand));
                this.provider_name(data.provider_name);
                this.goods_number(data.goods_number);
                this.goods_weight(Number(data.goods_weight));
                this.market_price(Number(data.market_price));
                this.virtual_sales(data.virtual_sales);
                this.shop_price(Number(data.shop_price));
                this.promote_price(Number(data.promote_price));
                this.promote_start_date(data.promote_start_date);
                this.promote_end_date(data.promote_end_date);
                this.warn_number(data.warn_number);
                this.keywords(data.keywords);
                this.goods_brief(data.goods_brief);
                this.goods_desc(data.goods_desc);
                this.goods_thumb(data.goods_thumb);
                this.goods_img(data.goods_img);
                this.original_img(data.original_img);
                this.is_real(data.is_real);
                this.extension_code(data.extension_code);
                this.is_on_sale(data.is_on_sale);
                this.is_alone_sale(data.is_alone_sale);
                this.is_shipping(data.is_shipping);
                this.integral(data.integral);
                this.add_time(data.add_time);
                this.sort_order(data.sort_order);
                this.is_delete(data.is_delete);
                this.is_best(data.is_best);
                this.is_new(data.is_new);
                this.is_hot(data.is_hot);
                this.is_promote(data.is_promote);
                if(data.ry_bonus_type)
                    this.ry_bonus_type(new RY.ry_bonus_typeViewModel(data.ry_bonus_type));
                this.last_update(data.last_update);
                if(data.ry_goods_type)
                    this.ry_goods_type(new RY.ry_goods_typeViewModel(data.ry_goods_type));
                this.seller_note(data.seller_note);
                this.give_integral(data.give_integral);
                this.rank_integral(data.rank_integral);
                if(data.ry_suppliers)
                    this.ry_suppliers(new RY.ry_suppliersViewModel(data.ry_suppliers));
                this.is_check(data.is_check);
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
            this.ry_category(new RY.ry_categoryViewModel());
            this.goods_sn(undefined);
            this.goods_name(undefined);
            this.goods_name_style(undefined);
            this.click_count(undefined);
            this.ry_brand(new RY.ry_brandViewModel());
            this.provider_name(undefined);
            this.goods_number(undefined);
            this.goods_weight(undefined);
            this.market_price(undefined);
            this.virtual_sales(undefined);
            this.shop_price(undefined);
            this.promote_price(undefined);
            this.promote_start_date(undefined);
            this.promote_end_date(undefined);
            this.warn_number(undefined);
            this.keywords(undefined);
            this.goods_brief(undefined);
            this.goods_desc(undefined);
            this.goods_thumb(undefined);
            this.goods_img(undefined);
            this.original_img(undefined);
            this.is_real(undefined);
            this.extension_code(undefined);
            this.is_on_sale(undefined);
            this.is_alone_sale(undefined);
            this.is_shipping(undefined);
            this.integral(undefined);
            this.add_time(undefined);
            this.sort_order(undefined);
            this.is_delete(undefined);
            this.is_best(undefined);
            this.is_new(undefined);
            this.is_hot(undefined);
            this.is_promote(undefined);
            this.ry_bonus_type(new RY.ry_bonus_typeViewModel());
            this.last_update(undefined);
            this.ry_goods_type(new RY.ry_goods_typeViewModel());
            this.seller_note(undefined);
            this.give_integral(undefined);
            this.rank_integral(undefined);
            this.ry_suppliers(new RY.ry_suppliersViewModel());
            this.is_check(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
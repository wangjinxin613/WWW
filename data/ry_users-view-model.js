(function() {
    RY.ry_usersViewModel = function(data) {
            this.Oid = ko.observable();
            this.CreatedBy = ko.observable();
            this.CreatedDate = ko.observable();
            this.LastModifiedBy = ko.observable();
            this.LastModifiedDate = ko.observable();
            this.user_id = ko.observable();
            this.email = ko.observable();
            this.user_name = ko.observable();
            this.password = ko.observable();
            this.question = ko.observable();
            this.answer = ko.observable();
            this.sex = ko.observable();
            this.birthday = ko.observable();
            this.user_money = ko.observable();
            this.frozen_money = ko.observable();
            this.pay_points = ko.observable();
            this.rank_points = ko.observable();
            this.ry_user_address1 = ko.observable();
            this.reg_time = ko.observable();
            this.last_login = ko.observable();
            this.last_time = ko.observable();
            this.last_ip = ko.observable();
            this.visit_count = ko.observable();
            this.ry_user_rank = ko.observable();
            this.is_special = ko.observable();
            this.ec_salt = ko.observable();
            this.salt = ko.observable();
            this.ry_users2 = ko.observable();
            this.flag = ko.observable();
            this.alias = ko.observable();
            this.msn = ko.observable();
            this.qq = ko.observable();
            this.office_phone = ko.observable();
            this.home_phone = ko.observable();
            this.mobile_phone = ko.observable();
            this.is_validated = ko.observable();
            this.credit_line = ko.observable();
            this.passwd_question = ko.observable();
            this.passwd_answer = ko.observable();
            this.is_designer = ko.observable();
            this.is_surveyor = ko.observable();
            this.is_seller = ko.observable();
            this.OptimisticLockField = ko.observable();
            this.GCRecord = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.ry_usersViewModel.prototype, {
        toJS: function() {
            return {
                Oid: this.Oid(),
                CreatedBy: this.CreatedBy(),
                CreatedDate: this.CreatedDate(),
                LastModifiedBy: this.LastModifiedBy(),
                LastModifiedDate: this.LastModifiedDate(),
                user_id: this.user_id(),
                email: this.email(),
                user_name: this.user_name(),
                password: this.password(),
                question: this.question(),
                answer: this.answer(),
                sex: this.sex(),
                birthday: this.birthday(),
                user_money: String(this.user_money() || 0),
                frozen_money: String(this.frozen_money() || 0),
                pay_points: this.pay_points(),
                rank_points: this.rank_points(),
                ry_user_address1: RY.db.objectLink("ry_user_address", this.ry_user_address1() ? this.ry_user_address1().Oid(): undefined),
                reg_time: this.reg_time(),
                last_login: this.last_login(),
                last_time: this.last_time(),
                last_ip: this.last_ip(),
                visit_count: this.visit_count(),
                ry_user_rank: RY.db.objectLink("ry_user_rank", this.ry_user_rank() ? this.ry_user_rank().Oid(): undefined),
                is_special: this.is_special(),
                ec_salt: this.ec_salt(),
                salt: this.salt(),
                ry_users2: RY.db.objectLink("ry_users", this.ry_users2() ? this.ry_users2().Oid(): undefined),
                flag: this.flag(),
                alias: this.alias(),
                msn: this.msn(),
                qq: this.qq(),
                office_phone: this.office_phone(),
                home_phone: this.home_phone(),
                mobile_phone: this.mobile_phone(),
                is_validated: this.is_validated(),
                credit_line: String(this.credit_line() || 0),
                passwd_question: this.passwd_question(),
                passwd_answer: this.passwd_answer(),
                is_designer: this.is_designer(),
                is_surveyor: this.is_surveyor(),
                is_seller: this.is_seller(),
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
                this.user_id(data.user_id);
                this.email(data.email);
                this.user_name(data.user_name);
                this.password(data.password);
                this.question(data.question);
                this.answer(data.answer);
                this.sex(data.sex);
                this.birthday(data.birthday);
                this.user_money(Number(data.user_money));
                this.frozen_money(Number(data.frozen_money));
                this.pay_points(data.pay_points);
                this.rank_points(data.rank_points);
                if(data.ry_user_address1)
                    this.ry_user_address1(new RY.ry_user_addressViewModel(data.ry_user_address1));
                this.reg_time(data.reg_time);
                this.last_login(data.last_login);
                this.last_time(data.last_time);
                this.last_ip(data.last_ip);
                this.visit_count(data.visit_count);
                if(data.ry_user_rank)
                    this.ry_user_rank(new RY.ry_user_rankViewModel(data.ry_user_rank));
                this.is_special(data.is_special);
                this.ec_salt(data.ec_salt);
                this.salt(data.salt);
                if(data.ry_users2)
                    this.ry_users2(new RY.ry_usersViewModel(data.ry_users2));
                this.flag(data.flag);
                this.alias(data.alias);
                this.msn(data.msn);
                this.qq(data.qq);
                this.office_phone(data.office_phone);
                this.home_phone(data.home_phone);
                this.mobile_phone(data.mobile_phone);
                this.is_validated(data.is_validated);
                this.credit_line(Number(data.credit_line));
                this.passwd_question(data.passwd_question);
                this.passwd_answer(data.passwd_answer);
                this.is_designer(data.is_designer);
                this.is_surveyor(data.is_surveyor);
                this.is_seller(data.is_seller);
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
            this.user_id(undefined);
            this.email(undefined);
            this.user_name(undefined);
            this.password(undefined);
            this.question(undefined);
            this.answer(undefined);
            this.sex(undefined);
            this.birthday(undefined);
            this.user_money(undefined);
            this.frozen_money(undefined);
            this.pay_points(undefined);
            this.rank_points(undefined);
            this.ry_user_address1(new RY.ry_user_addressViewModel());
            this.reg_time(undefined);
            this.last_login(undefined);
            this.last_time(undefined);
            this.last_ip(undefined);
            this.visit_count(undefined);
            this.ry_user_rank(new RY.ry_user_rankViewModel());
            this.is_special(undefined);
            this.ec_salt(undefined);
            this.salt(undefined);
            this.ry_users2(new RY.ry_usersViewModel());
            this.flag(undefined);
            this.alias(undefined);
            this.msn(undefined);
            this.qq(undefined);
            this.office_phone(undefined);
            this.home_phone(undefined);
            this.mobile_phone(undefined);
            this.is_validated(undefined);
            this.credit_line(undefined);
            this.passwd_question(undefined);
            this.passwd_answer(undefined);
            this.is_designer(undefined);
            this.is_surveyor(undefined);
            this.is_seller(undefined);
            this.OptimisticLockField(undefined);
            this.GCRecord(undefined);
        }
    });
})();
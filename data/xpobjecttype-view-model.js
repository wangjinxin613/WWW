(function() {
    RY.XPObjectTypeViewModel = function(data) {
            this.OID = ko.observable();
            this.TypeName = ko.observable();
            this.AssemblyName = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(RY.XPObjectTypeViewModel.prototype, {
        toJS: function() {
            return {
                OID: this.OID(),
                TypeName: this.TypeName(),
                AssemblyName: this.AssemblyName(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.OID(data.OID);
                this.TypeName(data.TypeName);
                this.AssemblyName(data.AssemblyName);
            }
        },

        clear: function() {
            this.OID(undefined);
            this.TypeName(undefined);
            this.AssemblyName(undefined);
        }
    });
})();
// NOTE object below must be a valid JSON
window.RY = $.extend(true, window.RY, {
    "config": {
        "endpoints": {
            "db": {
                "local": "https://www.ruyismart.cn/jewel/jewel.OData/DataService.svc/",
                "production": "https://www.ruyismart.cn/jewel/jewel.OData/DataService.svc/"
            }
        },
        "services": {
            "db": {
                "entities": {
                    "AppVersion": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_bonus_type": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_brand": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_category": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_goods": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_goods_type": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_suppliers": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_user_address": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_user_rank": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "ry_users": { 
                        "key": "Oid", 
                        "keyType": "Guid" 
                    },
                    "XPObjectType": { 
                        "key": "OID", 
                        "keyType": "Int32" 
                    }
                }
            }
        }
    }
});

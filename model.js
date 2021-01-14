const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    Policy_id:{
            type: Number,
            
        },
        Date_of_Purchase:{
            type: Date,
            
        },
        Customer_id:{
            type: Number
        },
        Fuel:{
            type: String,
            
        },
        Vehicle_Segment:{
            type: String,
            
        },
        Premium:{
            type: Number,
            
        },
        Body_injury_liablity:{
            type: Number,
            
            default: 0

        },
        Personal_injury_protection:{
            type: Number,
            
            default: 0
        },
        Property_damage_liablity:{
            type: Number,
            
            default: 0
        },
        collision:{
            type:Number,
            
        },
        comprehensive:{
            type: Number,
            
        },
        Customer_gender:{
            type:String
            
        },
        Customer_income_group:{

        },
        Customer_region:{
            type:String,
            
        },
        Customer_marital_status:{
            type: Number,
            
    }

}))

module.exports = Customer;
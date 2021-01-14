const express = require('express');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const bodyParser = require('body-parser'); 


port = 3000;
const app = express();
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
const schemaLesstable = mongoose.Schema({id:{type:String,index:true}},{strict:false})
const Customer = mongoose.model('Customers',schemaLesstable);


mongoose.connect('mongodb://localhost/insurance',err => {
    if(err) throw err;
    console.log('Successfully connected');
},{useNewUrlParser: true,useUnifiedTopology: true})


csvtojson()
.fromFile('/home/admi/Downloads/Data Set - Insurance Client.csv')
.then(data => {
    data.forEach(ele => {
        let savedata = new Customer(ele);
        savedata.save((err) => {
            if (err) throw err;
        })
    })
  
    

})

app.get('/',async (req,res) =>{
    const count = await Customer.find({});
    res.send(count)

})

app.post('/',async (req,res) =>{
    
    let customer =  new Customer({
    Policy_id: req.body.policy_id,
    Date_of_Purchase: req.body.date_of_purchase,
    Customer_id: req.body.customer_id,
    Fuel: req.body.fuel,
    Vehicle_Segment: req.body.vehicle_segment,
    Premium: req.body.premium,
    Body_injury_liablity: req.body.body_injury_liablity,
    Personal_injury_protection: req.body.personal_injury_protection,
    Property_damage_liablity: req.body.property_damage_liablity,
    collision: req.body.collision,
    comprehensive: req.body.comprehensive,
    Customer_gender: req.body.customer_gender,
    Customer_income_group: req.body.customer_income_group,
    Customer_region: req.body.customer_region,
    Customer_marital_status: req.body.customer_marital_status
} ); 
customer =await customer.save()
res.send(customer)}
)


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
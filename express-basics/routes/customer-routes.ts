import express from 'express';
import Customer from '../model/Customer';
import { CustomerAdd, CustomerUpdate,  CustomerDelete, getAllCustomers } from '../database/prisma-data-store';


// This is the route that will be used to add a new customer to the database.
const router =  express.Router();

router.post('/add', async (req, res) => {
    console.log(req.body);
    const customer : Customer = req.body;
    
   try {
        const addedCustomer = await CustomerAdd(customer);
        res.json(addedCustomer);
   } catch (error) {
        console.error(`Error adding customer: ${error}`);
        res.status(400).send(`Error adding customer: ${error}`);
   }
});

router.delete("/delete/:email", async (req, res) => {
   
     const email: string  = req.params.email;
     try{
         const deletedCustomer = await CustomerDelete(email);
         res.json(deletedCustomer);
     }catch(err){
         console.log("error deleting customer", err);
     }
 })
 
 
 router.put("/update/:id",async (req, res) => {
     const id: number = parseInt(req.params.id);
     const customer : Customer = req.body;
 
     try{
         const updatedCustomer = await CustomerUpdate(id, customer);
         res.json(updatedCustomer);
     }catch(err){
         console.log("error updating customer", err);
     }
 })
 
 router.get("/view", async (req, res) => {
     try{
        const customers=  await getAllCustomers();
        res.json(customers);
     }catch(err){
         console.log("error getting customers", err);
     }
 })

export default router;
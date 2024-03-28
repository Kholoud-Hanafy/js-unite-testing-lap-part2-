const User =  require("../lab2");

//test addTocart
describe('test addTocart function',()=>{
 let user1;

 beforeEach(()=>{
    user1 = new User ("kholoud","230oddk4");

 })

 it("test function logic", ()=>{
   user1.addToCart({"name" : "dress", "price" : 200});
   expect(user1.cart[0].name).toBe("dress")
   expect(user1.cart[0].price).toBe(200)
 })


})

//Test calculateTotalCartPrice
describe('test calculateTotalCartPrice function',()=>{
    let user1;
   
    beforeEach(()=>{
       user1 = new User ("kholoud","230oddk4");
   
    })
    ///case one 
    it('test that function when the cart empaty returne 0 ',()=>{
      expect(user1.calculateTotalCartPrice()).toBe(0)
      
    })
   //case two 

    it("test that function calc total price", ()=>{
      user1.addToCart({"name" : "dress", "price" : 200});
      user1.addToCart({"name" : "scarf", "price" : 100});
      expect(user1.calculateTotalCartPrice()).toBe(300)
      
    })

    //case three 
    it('test that function returns type number', ()=>{
        expect(user1.calculateTotalCartPrice()).toEqual(jasmine.any(Number))

    })
   
   
   })

   //Test checkout
   describe('test here checkout function',()=>{
    let user1;
   
    beforeEach(()=>{
       user1 = new User ("kholoud","230oddk4");
   
    })
    //case one 
    it('paymentModel methods should be called',()=>{
        let paymentModel = jasmine.createSpyObj(['goToVerifyPage','returnBack','isVerify'])
        user1.checkout(paymentModel)
        expect(paymentModel.goToVerifyPage).toHaveBeenCalled()
        expect(paymentModel.returnBack).toHaveBeenCalled()
        expect(paymentModel.isVerify).toHaveBeenCalled()
    })
   
    //case two 

    it('should return true if the payment is verified',()=>{
            let paymentModel = jasmine.createSpyObj(['goToVerifyPage','returnBack','isVerify'])
            paymentModel.isVerify.and.returnValue(true)
            let rseult = user1.checkout(paymentModel)
            expect(rseult).toBe(true);
            
            
            
        })


   })
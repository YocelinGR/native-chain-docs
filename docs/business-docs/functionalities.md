---
sidebar_position: 4
---

# Functionalities
## Account Functionalities
- SignUp: Login using a mobile phone as third party validation. We use Auth0 by email to create your account and continue using your mobile phone to log in and recover passwords. SignUp functionalities includes:
  - User information: Register your account and confirm it via SMS code.
  - Fiscal information: after confirming your account, save the information needed to start using Chain according to your fiscal state based on Mexican rules
  - Company information: Give your business information to customize your business and being in order with your fiscal requirements. 
  - Initial pending items: We prepare 3 main inits pending items to help you quickly start with Chain:
    - Welcome
    - Upload your logo
    - Upload your digital certificates
- Login: init easy and fast with mobile phone and password. Also, you can recover your password in two different ways:
  - Recover your password by sending a confirmation code to your phone and create a new password.
  - Change your password by giving your last one to prove your identity. You can use this option only when you are logged in.  

## Assistant functionalities
- Dashboard: You can visualize general stats about your business and choose the period of time in what show them. 
  - You can show your total amount on sales by day, month and week.
  - You can show how much your clients owe you. You can always check at the balance due, balance up to date today and balance up to date in the future. 
- Pending items: we would show you the things that are important for your business like:
  - Subscription will expire
  - Add-ons will expire
  - Trial will expire
  - Payment failed
  - Receive Payments is due today
  - Receive Payments is overdue 
  - Request update or upload your digital certificates
  - Change your tax id if someone else uploads the certificates for your tax id
 
## Business logic functionalities
- Clients: clients are too important for you and your business. With the client's functionalities, you can have your clients information in a beauty agenda. There are the next functionalities about clients:
  - My clients: you can watch all your clients in an agenda showing the most important information about them: names and tax id. You can filter by name, tax id or email
  - Client Dashboard: you can visualize the historical amount of sales related to that user, you can show a bars graphic showing the yearly sales by month in all the years you have been using Chain. Also, you can watch how many the client have been paid to you at a current month. 
  - Client info: You can create, show, update, inactive and delete a client. There is any information a client would have like name, tax id, address, contacts, bank account, branches and an identifier number. 
  - Easily create a client: You can create a client only with its name and you can use it to create not invoiced sales. If you add a name and tax id, it will be really for invoiced sales. 
- Sales: You can register a sale with concepts, invoices, discounts, notes and payments. There are some functionalities about sales:
  - Not invoiced sale: you can register a sale without emitting the invoice and invoice anytime you desire or keep to only for account balance and registers.
  - Invoice sale: You can emit an invoice since you create a sale, this sale will be emitted after the sale is registered only with the same click. 
  - Sales Dashboard: you can watch the sales amount emitted by month and the resume of sales related to each month. You can visualize the: sale identifier, invoice identifier, payment state, date and quickly download pdf and XML files, also you can send the files by email.
  Is it always possible to filter the sales by identifier, client name, email or tax id. 
  - Show sale information: you can visualize details about the sale, send by email, watch the historical movements related to the sale, emit the invoice or cancel the sale or/and the invoice. 
- Invoicing: You can emit income invoices (a.k.a CFDs) and receive payments invoices (a.k.a. REPs) and also you can cancel that invoices and re-emit them following the next cases: 
  - You can emit a sale invoice when creating a sale
  - You can emit an invoice for a sale that has not an invoice related
  - You can cancel an invoice for a sale when the invoice has been emitted yet
  - You can emit an invoice for a sale when its invoice has been cancelled yet. If you need to change some that of the sale, don't worry, you can update any not invoiced sale
  - You can emit a REP for any sale that has not been fully paid. The REP  is emitted to the amount that has been paid.
  - You can cancel a REP and re-emit it when is necessary. The payment associated will be cancelled to and retry registering a new payment with the correct information

- Payments: The payments functionality will allow a sale to have different types of payments:
  - Receive payments: payments that have been paid yet, when the sale has been registered after that.
  - Programed payments: these are payments that can be programmed for any date included the date on which the sale has been created.
  - Payments will be paid partially, fully or pay all the payments in one single payment

- Frequent items: this functionality will help you to create sale items and use them for faster-creating sales. You can always create an unlimited number of items and each item will include the basic information to create a sale like an amount, invoices, notes to be included, etc.
  - You can create, edit, watch and delete frequent items anytime
  - You can use a frequent item to create a sale and modify the item on the current process and the original item will not change
- Categories: You can create categories to categorize the sales you work on and easily identify them when filter or search for.
  - Create, update, use and delete categories
  
## Third-party connections
- Third-party connections: We make a system for your business to connect with the stripe payments system in order to create a sale anytime you receive a card payment, also we create a special endpoint to register de sales who have been paid with other payment methods. With this implementation you will have:
  - Sales are created when stripe payments are received
  - Sales are created when you create movement on your platform or your sale point 
  - Your clients will receive a pdf automatically when the sale is created
  - Your client will have a public link with the sale as they have a Chain account 
  - Your clients will download the files, send them by email or invoice the sale from the public link 
  With this implementation, you and your accountant will save time on doing the administration balance and emitting invoices from your clients 
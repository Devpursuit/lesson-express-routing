# 🛣️ Master the Basics of Routing

Let’s create different pages on your server using Express routes!

## 🔧 What You’ll Do

- Create multiple routes using Express.
- Return different responses based on the route.

## ✅ Activity Instructions

1. In `server.js`, add these routes:

   ```js
   app.get('/about', (req, res) => {
     res.send('This is the About Page');
   });

   app.get('/contact', (req, res) => {
     res.send('This is the Contact Page');
   });

   ```

2. Restart your server if needed: node server.js

3. Open each route in your preview browser (/about, /contact).

# 🎯 Success Criteria

* Your server responds to multiple URLs.

* You understand how to define routes.

* You can modify and test new routes with ease!

🧠 Bonus Challenge
Add a wildcard route (*) that returns a custom 404 message!

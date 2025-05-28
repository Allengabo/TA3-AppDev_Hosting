<pre lang="bash"> 

## 🧑‍💻 Run the App Locally To use the BookFinder app on your own machine, follow these steps. Firebase Authentication and the Google Books API require the app to be served from a web server—not opened as a `file://` file. 

### 🔽 1. Download or Clone the Project 

**Option A: Clone with Git**
```bash git clone https://github.com/your-username/bookfinder.git cd bookfinder 
``` **Option B: Download ZIP** 

    1. Click the green **"Code"** button on the GitHub repository. 
    2. Select **Download ZIP**. 
    3. Extract the ZIP file to your computer. 
    4. Open the folder in your code editor (e.g., VS Code). 
    
 
### 🌐 2. Start a Local Web Server Opening `index.html` directly in the browser will not work correctly because Firebase Authentication does not support the `file://` protocol. Use one of these methods to serve the app locally: 

#### ✅ Option A: Use Python (Built-in Web Server) If you have Python installed: ```bash # For Python 3.x python -m http.server 8000 ``` Then, open your browser and go to: ``` http://localhost:8000 ``` #### 

✅ Option B: Use Live Server in VS Code 

1. Install the "Live Server" extension from the Extensions Marketplace. 
2. Open the project folder in VS Code. 
3. Open `index.html`. 
4. Right-click the file and choose **"Open with Live Server"**. 
5. The app will launch in your browser, usually at: ``` http://127.0.0.1:5500 

``` --- ### 📝 
3. Use the App - Use the search bar to look up books (by title, author, or keyword) - Sign in with Google to save books to your **Favorites** - Use the **filter** boxes to refine results or your saved favorites ⚠️ You must be online for Firebase and the Google Books API to function properly. --- ### 🛠 4. (Optional) Customize Firebase You can use your own Firebase project instead of the included one. 

Steps: 1. Go to https://console.firebase.google.com/ 
2. Create a new project. 
3. Enable **Authentication → Google Sign-In**. 
4. Create a **Firestore Database**. 
5. Replace the Firebase config inside the `<script>` tag in `index.html`: ```js const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT.firebaseapp.com", projectId: "YOUR_PROJECT_ID", ... }; ``` 
</pre>
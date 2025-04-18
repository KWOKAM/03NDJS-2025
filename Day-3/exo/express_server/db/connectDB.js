mport mongoose from "mongoose"; // importing mongoose 
mongoose
.connect("mongodb://localhost:27017/classementEliteOne") // parameter where it connects ie my database 
.then(() => console.error("connection error: ", err)); // if console is connected, & there is an error, shows the error
.catch((err) => console.error("connection error: ", err)); // takes error and shows it.



import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";


dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:['http://localhost:5173', 'http://localhost:5175','http://localhost:5174',
// <<<<<<< HEAD
//         // 'https://connect-alumni-mern.vercel.app',

// =======
//         'https://connect-alumni-mern.vercel.app',
//             'https://frontendalumni.netlify.app'
// >>>>>>> 418b1b9ceef7947d0775ccc73047c45b56c8c52d
    ],
    credentials:true,

}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


app.use("/api/v1/user", userRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})



import mongoose from "mongoose";

import mapp from "./mapp.js"


(async () => 
    {
        try 
        {
            await mongoose.connect("mongodb://localhost:27017/Node_Mode")
            console.log("DB CONNECT: GOOD!");

            const onListening = () => {
                console.log("Listening on port 50000");
            }

            mapp.listen(50000, onListening)
        }
        catch (error)
        {
            console.error( "fail: ", error);
            throw error;
        }
        
    }
) ()
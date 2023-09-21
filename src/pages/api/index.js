import connectDB from "../../../utils/connectMongodb";
import Note from '../../../models/Note';

export default function handler(req,res){
    console.log('connecting DB');
    res.status(200).json({name: "Dorinel"})
}
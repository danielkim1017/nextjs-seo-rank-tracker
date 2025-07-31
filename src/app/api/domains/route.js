import { Domain } from "@/models/domain";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import axios from "axios";
import DomParser from "dom-parser";

export async function POST(req) {
    const data = await req.json();
    mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    await Domain.create({
        domain: data?.domain,
        owner: session?.user?.email,
        icon: '',
    })
    return Response.json(true);
}
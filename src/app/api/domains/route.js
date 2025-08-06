import {Domain} from "@/models/domain";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]/route";
import axios from "axios";
import * as cheerio from "cheerio";

async function getIconUrl(domain) {
    try {
      const response = await axios.get(`https://${domain}`);
      const $ = cheerio.load(response.data);
      const href = $('link[rel*="icon"]').attr('href') || '';
      if (!href) return '';
      return href.includes('://') ? href : `https://${domain}${href}`;
    } catch (error) {
      console.error('Error fetching icon:', error.message);
      return '';
    }
  }
  
  export async function POST(req) {
    const data = await req.json();
    mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    let icon = null;
    try {
      icon = await getIconUrl(data?.domain);
    } catch(e) {
      console.error(e);
    }
    const doc = await Domain.create({
      domain: data?.domain,
      owner: session?.user?.email,
      icon,
    });
    return Response.json(doc);
  }
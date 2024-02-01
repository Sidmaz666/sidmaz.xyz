"use server"
import connect from "@/config/connect"
import User from "@/models/user"
import bcrypt from "bcrypt"
import {redirect} from "next/navigation"
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import sessionOptions from "@/config/session"

export default async function log_user(state,data){
    await connect()
    const username = data.get("username")
    const password = data.get("password")
    const users = await User.findOne({username})
    if(!users) return {
      message:"User Not Registered!"
    }
    if(!bcrypt.compareSync(password,users.password)) return {
      message: "Wrong Password!"
    }
    const session = await getIronSession(cookies(), sessionOptions);
    session.user = { username, login_status:true };
    await session.save();
    redirect("/admin/dashboard")
}

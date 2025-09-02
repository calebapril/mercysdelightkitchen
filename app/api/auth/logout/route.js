import { cookies } from "next/headers"; // ✅ required import
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";

export async function POST(request){
  try {
    await connectDB()
    const cookieStore = await cookies()
    cookieStore.delete('access_token')
    return response(true, 200, 'Logout successful.')
  } catch (error) {
    return catchError(error);
  }
}


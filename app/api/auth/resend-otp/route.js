import { connectDB } from "@/lib/databaseConnection";
import { catchError, generateOTP } from "@/lib/helperFunction";
import { zSchema } from "@/lib/zodSchema";
import OTPModel from "@/models/Otp.model";
import UserModel from "@/models/User.model";

export async function POST(request){
  try {
    await connectDB()

    const payload = await request.json()
    const validationSchema = zSchema.pick({ email: true})
    const validatedData = validationSchema.safeParse(payload)
    if(!validatedData.success){
      return response(false, 401, 'Invalid or missing input field.', validatedData.error )
    }

    const getUser = await UserModel.findOne({email})
    if(!getUser){
      return response(false, 404, 'User not found.')
    }

    // remove old otps
    await OTPModel.deleteMany({email})
    const otp = generateOTP()
    const newOtpData = new OTPModel({
      email, otp
    })

    await newOtpData.save()

    //STOP HERE TONIGHT
  } catch (error) {
    return catchError(error)
  }
}
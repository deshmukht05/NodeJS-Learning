import {z} from "zod"

const portSchema = z.coerce.number().min(1).max(65535).default(3000)
export const PORT = portSchema.parse(process.env.PORT);


//? Example: 
// const ageSchema = z.number().min(18).max(100).int()
// const userAge = 17;

// try {
//     const parsedAge = ageSchema.parse(userAge)
//     console.log(parsedAge);
// } catch (error) {
//     if (error instanceof ZodError) {
//         console.log(error.issues[0].message);
//     }
//     else{
//         console.log(`Unexpected error: ${error}`);
//     }
// }
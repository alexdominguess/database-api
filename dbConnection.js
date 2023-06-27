import { DynamoDBClient} from "@aws-sdk/client-dynamodb"
import dotenv from 'dotenv';
dotenv.config();

export function dynamoDBClient(){
  try{
    const dynamoDB = new DynamoDBClient({
      region: process.env.REGION,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACESS_KEY,
      },});
      return dynamoDB

  }catch{
    console.error('❌ - An error occurred while creating DynamoDB client:', error);
  }
  
}
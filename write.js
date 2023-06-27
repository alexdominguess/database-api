import { dynamoDBClient } from './dbConnection.js';
import { PutItemCommand, } from '@aws-sdk/client-dynamodb'

export async function addData(table, data) {
  // This function add new data to the db but al update data if the id passed already exist.
    const params = {
      TableName: table,
      Item: data,
    };
  
    try {
      const dynamoDB = dynamoDBClient();
      const command = new PutItemCommand(params);
      const resp = await dynamoDB.send(command);
    } catch (error) {
      console.error("❌ - Error in function addData:", error);
      throw new Error(error)
    }
  }
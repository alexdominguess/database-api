import { dynamoDBClient } from './dbConnection.js';
import { DeleteItemCommand} from "@aws-sdk/client-dynamodb"

export async function deleteData(id) {
    const params = {
        TableName: "users",
        Key: {
          id: { S: id },
        },
      };
    try {
      const dynamoDB = dynamoDBClient();
      const command = new DeleteItemCommand(params);
      const resp = await dynamoDB.send(command);
    } catch (error) {
      console.error("❌ - Error in function deleteData:", error);
    }
  }
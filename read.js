import { dynamoDBClient } from './dbConnection.js';
import { ScanCommand} from "@aws-sdk/client-dynamodb"

export async function getAllTableData (tableName) {
  const params = {
    TableName: tableName,
  }
  try{
    const dynamoDB = dynamoDBClient();
    const data = await dynamoDB.send(new ScanCommand(params));
    return data

  }catch(error){
    console.error('❌ - An error occurred in function getAllTableData:', error);
    throw new Error(error)
  }

}

export async function getDataByField(params) {
  try {
    const dynamoDB = dynamoDBClient();
    const filteredData = await dynamoDB.send(new ScanCommand(params));
    return filteredData
  } catch (error) {
    console.error('❌ - An error occurred in function getDataByField:', error);
    throw new Error(error)
  }
}


  /*  FilterExpression: "Field_name_in_the_table = :anyName and another_field = :anotherName"
      ExpressionAttributeValues: {
        ":anyName": { S: value that you are looking for },
        ":anotherName": { S: value that you are looking for },
      },
 */
      const params = {
        TableName: 'users',
        //ProjectionExpression: "active, email", //used to bring only the columns that you want
        FilterExpression: `email = :field`,
        ExpressionAttributeValues: {
          ":field": { S: 'alexdominguess@gmail.com' },
        },
      };
  
import {getAllTableData, getDataByField} from '../read.js'
import {addData} from '../write.js'
import {deleteData} from '../delete.js'

export const getDataHandler = async (req, res) => {
    const table = req.query.table;
    try {
        if(table){
            const data = await getAllTableData(table);
            res.status(200).json(data);
        }else{
            const params = req.query
            const data = await getDataByField(params)
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
  };

export const dbWriteDataHandler = async (req, res) =>{
    const table = req.body.table;
    const data = req.body.data
    try{
        await addData(table, data)
        res.status(200).json({ message: 'Data added successfully' });
    }catch(error){
        res.status(500).json({ "error": error.message });
    }

}

export const dbDeleteDataHandler = async (req, res) =>{
    const id = req.query.id
    try{
        await deleteData(id)
        res.status(200).json({message:'Data deleted successfully'})
    }catch(error){
        res.status(500).json({"error": error.message})
    }
}
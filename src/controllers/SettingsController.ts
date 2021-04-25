import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService"

class SettingsController{
    async create(request:Request, response:Response){
        const { chat, username } = request.body

        const settingsService =  new SettingsService()

        try{

            const settings = await settingsService.create({ chat, username })
        
            return response.json(settings)

        }catch(err){
            return response.status(400).json({
                message: err.message
            })
        }
    }
    async findByUsername(req: Request, res: Response) {
        const { username } = req.params
    
        const settingsService = new SettingsService()
    
        const setting = await settingsService.findByUsername(username)
    
        return res.json(setting)
    }

    async update(req: Request, res: Response) {
        const { username } = req.params
        const { chat } = req.body
    
        const settingsService = new SettingsService()
    
        const setting = await settingsService.update(username, chat)
    
        return res.json(setting)
    }
}

export { SettingsController }

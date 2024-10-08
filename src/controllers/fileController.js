import { prisma } from "../config/prisma.js"
import { uploadMulter } from "../config/uploadMulter.js"

export async function addFile(req, res) {
    uploadMulter.single('file')(req, res, async (err) => {
        const { originalname, mimetype } = req.file
        try {
            const file = await prisma.file.create({ 
                data: { 
                    name: originalname,
                    type: mimetype,
                    data: req.file.buffer
                }
            });

            return res.send(file)
        } catch (error) {
            return res.status(400).json({ error: error.message });            
        }

    })
}

export async function getFileById(req, res) {
    const { id } = req.params;

    try {
        const file = await prisma.file.findUnique({ 
            where: { id }
        })
        
        if (!file) return res.status(404).json({ error: 'File Not Found' });

        res.setHeader('Content-Type', file.type);
        return res.send(file.data)
    } catch (error) {
        return res.status(400).json({ error: error.message });            
    }
}

export async function deleteFileById(req, res) {
    const { id } = req.params;

    try {
        const deleteFile = await prisma.file.delete({ 
            where: { id }
        })

        return res.send(deleteFile)
    } catch (error) {
        return res.status(400).json({ error: error.message });            
    }
}

export async function downloadFileById(req, res) {
    const { fileId } = req.params;

    try {
        const file = await prisma.file.findUnique({ 
            where: { id: fileId }
        })

        if (!file) return res.status(404).json({ error: 'File Not Found' });
        
        res.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);
        res.setHeader('Content-Type', 'application/octet-stream');

        return res.send(file.data);
    } catch (error) {
        return res.status(400).json({ error: error.message });            
    }
}
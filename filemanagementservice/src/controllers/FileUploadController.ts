import { Controller, Req, Get, Post, UseInterceptors, FileInterceptor, UploadedFile } from "@nestjs/common";
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MetricsClient } from '../clients';

@Controller('/upload')
export class FileUploadController {
  constructor() { }

  @Post('template')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    }),
    fileFilter: function (req, file, cb) {
      const invalidFile = ['Associate Details.xlsx', 'Hackathon Event Information.xlsx', 'Hackathon Events Summary.xlsx'].indexOf(file.originalname) !== -1;
      if (!invalidFile) {
        req.fileValidationError = 'Invalid file !!';
        return cb(null, false);
      }
      cb(null, true);
    }
  }))
  async upload( @Req() req, @UploadedFile() file) {
    console.log(file);
    return { message: req.fileValidationError ? req.fileValidationError : 'File has been uploaded !!' };
  }
}

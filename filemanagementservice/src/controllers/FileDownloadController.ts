import { Controller, Req, Res, Get, Param, Post, UseInterceptors, FileInterceptor, UploadedFile } from "@nestjs/common";
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

@Controller('/download')
export class FileDownloadController {
  private readonly TEMPLATE_DIR = 'report_templates';
  constructor() { }

  @Get('/template/:filename')
  downloadTemplate(@Res() res, @Param('filename') filename: String) {
    const tmp_dir = this.TEMPLATE_DIR;
    try {
      if (fs.existsSync('./' + tmp_dir + '/' + filename)) {
        console.error('Downloaded template: ' + filename);
        res.sendFile(filename, { root: tmp_dir });
      } else {
        res.send(filename + 'File not exists !!');
      }
    } catch (err) {
      console.error(err);
      res.send('Error downloading template !!');
    }
  }
}

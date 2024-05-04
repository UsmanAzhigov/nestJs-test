import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

const normalizeFilename = (req, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();
  const uniqueFilename = `${uuidv4()}.${fileExtName}`;
  callback(null, uniqueFilename);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFilename,
});

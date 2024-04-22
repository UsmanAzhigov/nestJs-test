import { diskStorage } from 'multer';

const generateId = () =>
  Array(16)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const normalizeFilename = (reg, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFilename,
});

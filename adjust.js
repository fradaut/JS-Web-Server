import fs from 'fs-extra';
import path from 'path';

const currentDir = process.cwd();

const sourceDir = path.join(currentDir, 'dist', 'src', 'views');
const targetDir = path.join(currentDir, 'dist');

const adjust = async () => {
    await fs.copy(sourceDir, targetDir)
        .catch(err => console.error('An error occurred while copying the directory.', err));

    fs.remove(path.join(currentDir, 'dist', 'src'))
        .catch(err => console.error('An error occurred while removing the directory.', err));
    
    await fs.copy(path.join(currentDir, 'dist', 'index'), path.join(currentDir, 'dist'))
        .catch(err => console.error('An error occurred while copying the index.', err));
    
    fs.remove(path.join(currentDir, 'dist', 'index'))
        .catch(err => console.error('An error occurred while removing the index.', err));
    
    console.log('Adjustment complete.');
}

adjust();
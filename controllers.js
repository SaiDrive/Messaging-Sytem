const fs = require('fs').promises;

// Function to read the file
async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File contents:', data);
        return data;
    } catch (err) {
        console.error('Error reading the file:', err);
        throw err; // Rethrow the error to be handled by the caller
    }
}

// Function to process the data and write to another file
async function writeFile(filePath, data) {
    try {
        const processedData = data.toUpperCase(); // Example of data processing
        await fs.writeFile(filePath, processedData, 'utf8');
        console.log('Processed data has been written to', filePath);
    } catch (err) {
        console.error('Error writing to the file:', err);
        throw err; // Rethrow the error to be handled by the caller
    }
}

// Main function to coordinate reading and writing
async function main() {
    try {
        const userData = await readFile('userData.txt');
        await writeFile('userData.txt', userData);
    } catch (err) {
        console.error('Error in file operations:', err);
    }
}

main();

console.log('This log happens before file read/write completes.');

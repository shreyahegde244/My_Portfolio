import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  const executablePath = fs.existsSync('C:\\Program Files\\Google\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Using browser at:', executablePath);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const htmlPath = path.join(__dirname, 'cv_template.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const pdfPath1 = path.join(__dirname, 'public', 'Shreya Hegde 2026.pdf');
  const pdfPath2 = path.join(__dirname, 'public', 'resume.pdf');

  await page.pdf({
    path: pdfPath1,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '20mm',
      right: '20mm'
    }
  });

  fs.copyFileSync(pdfPath1, pdfPath2);

  console.log('Successfully generated:');
  console.log(' -', pdfPath1);
  console.log(' -', pdfPath2);

  await browser.close();
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});

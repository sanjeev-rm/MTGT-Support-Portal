import { AppDataSource } from './data-source';
import { Complaint } from './entity/Complaint';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

async function exportComplaints(): Promise<void> {
  await AppDataSource.initialize();
  console.log('Connected to database');

  const complaintRepo = AppDataSource.getRepository(Complaint);
  const complaints = await complaintRepo.find({ relations: ['user'] });

  const formattedData = complaints.map((c) => ({
    ID: c.id,
    UserCode: c.user_code,
    StoreCode: c.store_code,
    Type: c.type,
    Reason: c.reason,
    Date: c.date ? new Date(c.date).toLocaleDateString() : '',
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Complaints');

  const outputPath = path.join(__dirname, '../exports/complaints.xlsx');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  XLSX.writeFile(workbook, outputPath);
  console.log(`Complaints exported to ${outputPath}`);
}

exportComplaints().catch((err) => {
  console.error('Export failed:', err);
});
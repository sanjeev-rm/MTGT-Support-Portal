import { importStoreAccess } from './imports/importStoreAccess';
import { importUsers } from './imports/importUsers';
import { importComplaints } from './imports/importComplaints'; 

async function main(): Promise<void> {
  await importUsers();
  await importStoreAccess();
  await importComplaints();
}

main();

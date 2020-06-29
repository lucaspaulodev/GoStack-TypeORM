import csvParse from 'csv-parse'

import Transaction from '../models/Transaction';

import fs from 'fs'

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    // TODO
  }
}

export default ImportTransactionsService;

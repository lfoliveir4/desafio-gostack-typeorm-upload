import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import Transaction from "../models/Transaction";

import TransactionRepository from "../repositories/TransactionsRepository";

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const trasactionRepository = getCustomRepository(TransactionRepository);

    const transaction = await trasactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError("Transaction does not exists");
    }

    await trasactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;

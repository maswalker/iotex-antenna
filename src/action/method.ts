import { Account } from "../account/account";
import { hash256b } from "../crypto/hash";
import { IRpcMethod } from "../rpc-method/types";
import { IAction, toAction } from "../rpc-method/types";
import { Transfer } from "./types";

export class TransferMethod {
  public client: IRpcMethod;
  public account: Account;
  public transfer: Transfer;

  constructor(client: IRpcMethod, account: Account, transfer: Transfer) {
    this.client = client;
    this.account = account;
    this.transfer = transfer;
  }

  public async execute(): Promise<string> {
    const meta = await this.client.getAccount({
      address: this.account.address
    });

    const iAction: IAction = {
      core: {
        version: 1,
        // @ts-ignore
        nonce: String(meta.accountMeta.pendingNonce),
        gasLimit: this.transfer.gasLimit,
        gasPrice: this.transfer.gasPrice,
        transfer: {
          amount: this.transfer.amount,
          recipient: this.transfer.recipient,
          payload: Buffer.from(this.transfer.payload)
        }
      }
    };

    const action = toAction(iAction);
    const sbytes = action.serializeBinary();
    const byte = sbytes.subarray(2, sbytes.length);
    const sign = this.account.sign(byte);

    iAction.senderPubKey = Buffer.from(this.account.publicKey, "hex");
    iAction.signature = sign;

    await this.client.sendAction({
      action: iAction
    });

    const actionSelp = toAction(iAction);
    const byteSelp = actionSelp.serializeBinary();
    return Buffer.from(hash256b(byteSelp)).toString("hex");
  }
}
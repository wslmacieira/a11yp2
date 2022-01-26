import { Injectable } from '@angular/core';

import { ModalConfig } from '../interfaces/modal-config';

@Injectable()
export class ModalService {

  public open(config: ModalConfig) {
    console.log('open called');
    return new ModalRef();
  }

}

export class ModalRef {

  public close(): void {
    console.log('close called');
  }
}

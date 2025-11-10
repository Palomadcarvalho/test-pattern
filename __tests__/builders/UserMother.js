import { User } from '../../src/domain/User';

export class UserMother {
    static umUsuarioPadrao() {
        return new User(1, 'Ana Santos', 'ana.santos@example.com', 'PADRAO');
    }

    static umUsuarioPremium() {
        return new User(2, 'Joao Santos', 'joao.santos@example.com', 'PREMIUM');
    }
}
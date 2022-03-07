import {atom} from 'recoil';
import { IUser } from '../types/User';

const Agent: IUser  = {
    smeloans: [],
    paydayloans: [],
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    id: '',
    token: ''
}

export const AgentAtom = atom({
    key: 'Agent',
    default: Agent,
});
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let instance = axios.create({
    timeout: 1000,
});

let mock = new MockAdapter(instance);
mock.onGet('/users').reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
    ]
});

export {instance}